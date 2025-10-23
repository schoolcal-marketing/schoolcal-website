import { NextRequest, NextResponse } from 'next/server';

const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

interface PilotFormData {
  firstName: string;
  lastName: string;
  email: string;
  schoolName: string;
  schoolWebsite: string;
  allowedDomains: string;
  sis: string;
  calendars: string[];
  howDidYouHear: string;
  termsAccepted: boolean;
  pilotAgreementAccepted: boolean;
}

// Extract root domain from URL
function extractDomain(url: string): string {
  try {
    const domain = new URL(url).hostname;
    return domain.replace(/^www\./, ''); // Remove www prefix
  } catch {
    return url; // Fallback to original if URL parsing fails
  }
}

export async function POST(request: NextRequest) {
  console.log('=== PILOT SUBMIT API CALLED ===', new Date().toISOString());
  try {
    if (!HUBSPOT_ACCESS_TOKEN) {
      return NextResponse.json(
        { error: 'HubSpot access token not configured' },
        { status: 500 }
      );
    }

    const formData: PilotFormData = await request.json();
    console.log('Form data received:', { email: formData.email, schoolName: formData.schoolName, schoolWebsite: formData.schoolWebsite });

    // Validate required fields
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.schoolName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // 1. FIRST: Handle company (create or update)
    const schoolDomain = extractDomain(formData.schoolWebsite);
    console.log('Searching for company with domain:', schoolDomain);
    
    const searchCompanyResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/companies/search`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'domain',
                  operator: 'EQ',
                  value: schoolDomain
                }
              ]
            }
          ],
          properties: ['name', 'domain', 'school_short_name', 'allowed_domains', 'sis_provider', 'calendar_provider']
        }),
      }
    );

    let companyId;
    let company;

    if (!searchCompanyResponse.ok) {
      const errorData = await searchCompanyResponse.text();
      console.error('Company search failed:', errorData);
      return NextResponse.json(
        { error: 'Failed to search for existing company' },
        { status: searchCompanyResponse.status }
      );
    }

    const searchResults = await searchCompanyResponse.json();
    console.log('Company search results:', searchResults.results?.length || 0, 'companies found');
    
    // Map SIS provider to HubSpot values
    const sisMapping: { [key: string]: string } = {
      'PowerSchool': 'PowerSchool',
      'Veracross': 'Veracross',
      'Blackbaud': 'Blackbaud'
    };

    // Map calendar providers to HubSpot values
    let calendarProvider = '';
    if (formData.calendars.length === 2) {
      calendarProvider = 'Both';
    } else if (formData.calendars.includes('Google')) {
      calendarProvider = 'Google Calendar';
    } else if (formData.calendars.includes('Outlook')) {
      calendarProvider = 'Microsoft 365 Calendar';
    }

    if (searchResults.results && searchResults.results.length > 0) {
      // Company exists, update it
      company = searchResults.results[0];
      companyId = company.id;
      console.log('Updating existing company:', companyId);
      
      const updateCompanyData = {
        properties: {
          school_short_name: formData.schoolName,
          allowed_domains: formData.allowedDomains,
          sis_provider: sisMapping[formData.sis] || formData.sis,
          calendar_provider: calendarProvider
        }
      };

      console.log('About to update company with data:', JSON.stringify(updateCompanyData, null, 2));
      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/companies/${companyId}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateCompanyData),
        }
      );
      console.log('Company update response status:', updateResponse.status);

      if (!updateResponse.ok) {
        console.error('Company update error');
      }
    } else {
      // Company doesn't exist, create new one
      console.log('No existing company found, creating new one');
      
      const companyData = {
        properties: {
          name: formData.schoolName,
          domain: schoolDomain,
          school_short_name: formData.schoolName,
          allowed_domains: formData.allowedDomains,
          sis_provider: sisMapping[formData.sis] || formData.sis,
          calendar_provider: calendarProvider
        }
      };

      console.log('About to create company with data:', JSON.stringify(companyData, null, 2));
      const companyResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/companies`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(companyData),
        }
      );
      console.log('Company creation response status:', companyResponse.status);

      if (!companyResponse.ok) {
        const errorData = await companyResponse.text();
        console.error('Company creation error:', errorData);
        return NextResponse.json(
          { error: 'Failed to create company' },
          { status: companyResponse.status }
        );
      }

      company = await companyResponse.json();
      companyId = company.id;
      console.log('Created new company:', companyId);
      console.log('Full company response:', JSON.stringify(company, null, 2));
    }

    // 2. SECOND: Handle contact (create or update)
    const existingContactResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${formData.email}?idProperty=email`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
        },
      }
    );

    let contactId;
    let contact;

    if (existingContactResponse.ok) {
      // Contact exists, update it
      contact = await existingContactResponse.json();
      contactId = contact.id;
      
      const updateContactData = {
        properties: {
          firstname: formData.firstName,
          lastname: formData.lastName,
          pilot_agreement_acknowledged: formData.pilotAgreementAccepted,
          hs_marketable_status: true,
          how_did_you_hear_about_us_: formData.howDidYouHear
        }
      };

      const updateResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
        {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updateContactData),
        }
      );

      if (!updateResponse.ok) {
        console.error('Contact update error');
      }
    } else {
      // Contact doesn't exist, create new one
      const contactData = {
        properties: {
          firstname: formData.firstName,
          lastname: formData.lastName,
          email: formData.email,
          pilot_agreement_acknowledged: formData.pilotAgreementAccepted,
          hs_marketable_status: true,
          how_did_you_hear_about_us_: formData.howDidYouHear
        }
      };

      const contactResponse = await fetch(
        `https://api.hubapi.com/crm/v3/objects/contacts`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactData),
        }
      );

      if (!contactResponse.ok) {
        const errorData = await contactResponse.text();
        console.error('Contact creation error:', errorData);
        return NextResponse.json(
          { error: 'Failed to create contact' },
          { status: contactResponse.status }
        );
      }

      contact = await contactResponse.json();
      contactId = contact.id;
    }

    // 3. Create Association between Contact and Company
    const associationData = {
      inputs: [
        {
          from: { id: contactId },
          to: { id: companyId },
          type: 'contact_to_company'
        }
      ]
    };

    console.log('About to create contact-company association:', JSON.stringify(associationData, null, 2));
    const associationResponse = await fetch(
      `https://api.hubapi.com/crm/v3/associations/Contacts/Companies/batch/create`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: [
            {
              from: { id: contactId },
              to: { id: companyId },
              type: 'contact_to_company'
            }
          ]
        }),
      }
    );

    console.log('Contact-company association response status:', associationResponse.status);
    
    // Association creation is optional - don't fail if it doesn't work
    if (!associationResponse.ok) {
      const errorData = await associationResponse.text();
      console.warn('Contact-company association creation failed:', errorData);
    } else {
      console.log('Contact-company association created successfully');
    }

    // 4. Create Deal
    const dealData = {
      properties: {
        dealname: `Pilot - ${formData.schoolName}`,
        dealstage: '1199622658',
        pipeline: 'default'
      }
    };

    const dealResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/deals`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dealData),
      }
    );

    let dealId = null;
    if (dealResponse.ok) {
      const deal = await dealResponse.json();
      dealId = deal.id;
      console.log('Deal created successfully:', dealId);
    } else {
      const errorData = await dealResponse.text();
      console.error('Deal creation error:', errorData);
    }

    // Associate deal with contact if deal was created
    if (dealId) {
      const dealAssociationData = {
        inputs: [
          {
            from: { id: contactId },
            to: { id: dealId },
            type: 'contact_to_deal'
          }
        ]
      };

      console.log('About to create deal association:', JSON.stringify(dealAssociationData, null, 2));
      const dealAssociationResponse = await fetch(
        `https://api.hubapi.com/crm/v3/associations/Contacts/Deals/batch/create`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            inputs: [
              {
                from: { id: contactId },
                to: { id: dealId },
                type: 'contact_to_deal'
              }
            ]
          }),
        }
      );

      console.log('Deal association response status:', dealAssociationResponse.status);
      
      if (dealAssociationResponse.ok) {
        console.log('Deal association created successfully');
      } else {
        const errorData = await dealAssociationResponse.text();
        console.error('Deal association failed:', errorData);
      }
    }

    return NextResponse.json({ 
      success: true, 
      contactId, 
      companyId,
      message: 'Pilot form submitted successfully' 
    });

  } catch (error) {
    console.error('Pilot form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}