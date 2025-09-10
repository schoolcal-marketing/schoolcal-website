import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { portalId, formId, email, ...otherFields } = await request.json();

    if (!portalId || !formId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: portalId, formId, email' },
        { status: 400 }
      );
    }

    // Prepare the data for HubSpot
    const hubspotData = {
      fields: [
        {
          name: 'email',
          value: email
        },
        // Automatically mark as marketing contact
        {
          name: 'hs_marketing_consent',
          value: 'true'
        },
        {
          name: 'hs_marketing_consent_date',
          value: new Date().toISOString()
        },
        // Add other fields if they exist
        ...Object.entries(otherFields).map(([key, value]) => ({
          name: key,
          value: value
        }))
      ],
      context: {
        pageUri: request.headers.get('referer') || '',
        pageName: 'SchoolCal Form Submission'
      }
    };

    // Submit to HubSpot Forms API
    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotData),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('HubSpot API error:', errorData);
      return NextResponse.json(
        { error: 'Failed to submit form to HubSpot' },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, data: result });

  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
