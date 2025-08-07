import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Service Agreement - SchoolCal',
  description: 'The terms and conditions governing your use of SchoolCal\'s services and platform.',
  openGraph: {
    title: 'Service Agreement - SchoolCal',
    description: 'The terms and conditions governing your use of SchoolCal\'s services and platform.',
    type: 'website',
    url: 'https://schoolcal.com/legal/service-agreement',
  },
  alternates: {
    canonical: 'https://schoolcal.com/legal/service-agreement',
  },
}

export default function ServiceAgreementPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Service Agreement
            </h1>
            <p className="body-large text-text-dark-blue">
              Terms and Conditions for SchoolCal Services
            </p>
            <p className="body-medium text-text-dark-blue mt-4">
              Last updated: May 17, 2022
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Section 1 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">1. Subscription to SchoolCal Product</h2>
                <p className="body-medium text-text-dark-blue">
                  During the Term and in accordance with this Agreement, Customer may access and use the products which Customer subscribed to, whether by paid subscription, free trial or promotion (each a "Product"), as referenced in the invoice or quote executed by Customer (the "Order Form"). Each Product may include updates, cloud-based and support services, applications or documentation. Each of these are subject to the terms of this Agreement as applicable. Customer is responsible for obtaining at its own expense all equipment and services needed for access to and use of the Products, including but not limited to telecommunications services, web browsers, hardware, and software.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">2. Grant of License</h2>
                <p className="body-medium text-text-dark-blue">
                  During the Term, SchoolCal grants Customer a limited, nonexclusive, non-transferable, non-sublicensable, revocable license to access and use, and to permit its employees and all other users who access and use the Products on Customer's behalf (collectively, the "Users") to access and use, the Products on the terms set forth in this Agreement. Customer agrees that all rights, title and interest in and to all the intellectual property rights in the Products, and all modifications, enhancements, derivative works and upgrades thereto, are and shall remain the exclusive property of SchoolCal and its licensors. Customer agrees not to contest or otherwise challenge SchoolCal's rights, title or interest in such intellectual property rights.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">3. License Restrictions</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  Customer and any Users shall not (and shall not allow any User or third party to):
                </p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li className="body-medium text-text-dark-blue">decompile, disassemble, reverse engineer or attempt to reconstruct or discover any source code, underlying ideas, algorithms, file formats or programming or interoperability interfaces of the Products, by any means whatsoever;</li>
                  <li className="body-medium text-text-dark-blue">distribute viruses or other harmful or malicious computer code via or into the Products;</li>
                  <li className="body-medium text-text-dark-blue">engage in any conduct that disrupts or impedes a third party's use and enjoyment of the Products;</li>
                  <li className="body-medium text-text-dark-blue">use the Products in connection with any illegal activity, or in a way that is abusive, profane or offensive;</li>
                  <li className="body-medium text-text-dark-blue">rent, lease, loan, resell, sublicense, distribute or otherwise transfer the Products to any third party;</li>
                  <li className="body-medium text-text-dark-blue">access, store, distribute or transmit any content during the course of its use of the Products that: (i) is unlawful, harmful, threatening, defamatory, obscene, infringing, harassing or racially or ethnically offensive; (ii) facilitates illegal activity; (iii) depicts sexually explicit images; (iv) promotes unlawful violence; (v) is discriminatory based on race, gender, colour, religious belief, sexual orientation, disability; or (vi) is otherwise illegal or causes damage or injury to any person or property;</li>
                  <li className="body-medium text-text-dark-blue">remove, alter or obscure any proprietary notices (including copyright and trademark notices) of SchoolCal or its licensors on the Products.</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">4. Term of Agreement</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">4.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      Unless otherwise agreed to in writing, the "Initial Term" of this Agreement is for one (1) year, beginning on the date identified in the Order Form (the "Subscription Start Date"). If the Subscription Start Date is not explicitly nor implicitly identified in the Order Form, the Subscription Start Date shall be the date Customer executes the initial Order Form, unless otherwise agreed to in writing. Some software Products may be made available to Customer on a date prior to the Subscription Start Date. These Products are licensed to Customer under the terms of this Agreement from the date they are made available.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">4.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      Upon expiration of the Initial Term and unless otherwise stated in the Order Form, this Agreement will automatically renew for a duration of one (1) year beginning each year on July 1 (each a "Renewal Term", the "Current Term" being the Initial Term or the then-current Renewal Term (as the case may be); and the Initial Term and all Renewal Terms collectively, the "Term") until terminated by Customer or SchoolCal by delivery of written notice to the other party at least thirty (30) days prior to expiration of the Current Term.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">5. Fees and Payment</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">5.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer shall pay SchoolCal the annual and/or monthly fees ("Fees") specified in the Order Form, in accordance with the timing and currency specified in the Order Form. Unless required by applicable law, all payments by Customer to SchoolCal under this Agreement are non-refundable and made via the payment method specified by Customer in the Order Form, or as otherwise agreed in writing by the parties. Customer shall undertake any additional actions reasonably requested by SchoolCal to facilitate payment by Customer to SchoolCal. Fees are exclusive of taxes and Customer is responsible for payment of all taxes relating to this Agreement and Customer's use of the Products.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">5.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer acknowledges and agrees that by executing an Order Form, Customer is obligated to pay all of the Fees identified in (i) the Order Form or website (as applicable), and (ii) this Agreement, for the duration of the Current Term, and that any software subscription discounts offered to Customer and/or identified on the Order Form are contingent upon the foregoing. Similarly, Customer acknowledges and agrees that, by renewing their subscription, whether implicitly or explicitly, Customer is obligated to pay all of the Fees identified in (i) the Order Form or website (as applicable), and (ii) this Agreement, for the duration of the Renewal Term.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">6. Confidential Information</h2>
                <p className="body-medium text-text-dark-blue">
                  SchoolCal and Customer (each a "Receiving Party") shall each retain in confidence all information received from the other party (the "Disclosing Party") pursuant to or in connection with this Agreement, the Products or the Beta Technology, that the Disclosing Party identifies as being proprietary and/or confidential or that, by the nature of the circumstances surrounding the disclosure, ought in good faith to be treated as proprietary and/or confidential ("Confidential Information"), except to the extent such information (i) is or becomes generally known to the public through no breach of this Agreement by the Receiving Party; (ii) is rightfully known by the Receiving Party prior to disclosure; (iii) is rightfully received by the Receiving Party from a third party; or (iv) is required to be disclosed by law.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">7. Customer's Representations</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer represents and warrants that currently and throughout the Term (i) Customer is fully authorized to enter into this Agreement and that Customer and any Users are fully authorized to utilize the Products, and (ii) Customer and any Users are and will remain in compliance with all SchoolCal policies, applicable laws and regulations with respect to its and their use of the Products and activities related to this Agreement, including but not limited to fiscal and privacy laws.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">8. Customer Data and Privacy</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">8.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      "Customer Data" means any data that Customer or its Users input into the Products for processing in connection with this Agreement, including any personally-identifiable information ("Personal Data") forming part of such data.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">8.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer may select the Personal Data it inputs into the Products at its sole discretion; SchoolCal has no control over the nature, scope, origin, and/or the means by which Customer acquires Personal Data processed by the Products. SchoolCal will comply, and will ensure that its personnel comply, with the requirements of applicable privacy laws and regulations governing Customer Personal Data in SchoolCal's possession or under its control. Customer is solely responsible for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all Personal Data, and SchoolCal shall not be responsible or liable for the deletion, correction, destruction, damage, loss or failure to store any Personal Data.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">8.3</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal uses and protects Customer Data, including information transmitted via the Products, in accordance with SchoolCal's Privacy Policy, located at <a href="https://www.schoolcal.co/legal/privacy-policy/" className="text-primary hover:text-primary-dark underline" target="_blank" rel="noopener noreferrer">https://www.schoolcal.co/legal/privacy-policy/</a> (the "Privacy Policy") and the Data Processing Agreement located at <a href="https://www.schoolcal.co/legal/data-processing-agreement/" className="text-primary hover:text-primary-dark underline" target="_blank" rel="noopener noreferrer">https://www.schoolcal.co/legal/data-processing-agreement/</a> (the "DPA"). Both the Privacy Policy and DPA are incorporated into this Agreement by reference. In addition to the permissions granted in the Privacy Policy, SchoolCal is authorized to use Customer Data to provide the Products and other related services to Customer.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">9. Feedback</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer agrees that any materials that it provides to SchoolCal, including but not limited to questions, comments, suggestions, ideas, plans, notes, drawings, modifications, improvements, original or creative materials or other information regarding SchoolCal or the Products or the Beta Technology, whether such materials are provided in email, feedback forms, or any other format (the "Feedback"), shall belong exclusively to SchoolCal, without any requirement to acknowledge or compensate Customer therefore. Customer hereby assigns to SchoolCal all rights, title and interest worldwide in the Feedback and agrees to provide such assistance as SchoolCal may require to document, perfect, and maintain SchoolCal's rights in the Feedback.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">10. Beta Testing Project</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">10.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      For evaluation and testing purposes only ("Beta Testing Project"), SchoolCal may grant Customer a personal, non-exclusive, non-transferable, limited license to use certain technology, support services, accessories, and hardware (collectively, the "Beta Technology"). Customer's participation in a Beta Testing Project is voluntary.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">10.2</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      If Customer agrees to the Beta Testing Project, Customer shall:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue">test and evaluate the Beta Technology as requested by SchoolCal,</li>
                      <li className="body-medium text-text-dark-blue">familiarize itself with the Beta Technology information provided by SchoolCal and to only use or test the Beta Technology as directed,</li>
                      <li className="body-medium text-text-dark-blue">notify SchoolCal of any and all functional flaws, errors, anomalies, and problems directly or indirectly associated with the Beta Technology known to, or discovered by Customer,</li>
                      <li className="body-medium text-text-dark-blue">respond to any and all inquiries from SchoolCal regarding the Beta Technology, Customer's testing and evaluation of the Beta Technology, and related matters, and</li>
                      <li className="body-medium text-text-dark-blue">not disclose any information relating to the Beta Technology to third parties.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">10.3</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal has no obligation to develop or provide any updates or revisions to the Beta Technology, and SchoolCal reserves the right to alter or adjust service specifications for the Beta Technology as it deems necessary or desirable. Customer understands and acknowledges that Customer will not, unless otherwise agreed to in writing, receive any payment, compensation or discount for participating in, or for providing any Feedback, comments, evaluations, reports or any other service relating to, the Beta Testing Project. THE BETA TECHNOLOGY PROVIDED UNDER THIS AGREEMENT HAS NOT BEEN COMMERCIALLY RELEASED BY SCHOOLCAL AND MAY CONTAIN BUGS, ERRORS, DEFECTS OR HARMFUL COMPONENTS. ACCORDINGLY, THE BETA TECHNOLOGY IS PROVIDED TO CUSTOMER "AS IS" WITHOUT WARRANTY OF ANY KIND.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">10.4</h3>
                    <p className="body-medium text-text-dark-blue">
                      The Beta Technology provided by SchoolCal is proprietary to SchoolCal and/or its licensors. Customer agrees and acknowledges that nothing contained in this Agreement shall be construed as granting any ownership or intellectual property rights to any Beta Technology, Feedback or Confidential Information. All applicable rights in all copyrights, trademarks, trade secrets, trade names, patents and other intellectual property rights in or associated with the Beta Technology are and shall remain the exclusive property of SchoolCal and/or its licensors.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 11 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">11. Third-Party Services</h2>
                <p className="body-medium text-text-dark-blue">
                  "Third-Party Services" are products, applications, services, software, networks, systems, directories, websites, databases and information from third parties, that one or more Products link to, or which Customer may connect to or enable in conjunction with one or more Products. Customer may decide to enable, access or use any Third-Party Services (as defined above). Customer agrees that access and use of such Third-Party Services shall be governed solely by the terms and conditions of such Third-Party Services, and SchoolCal does not endorse, is not responsible or liable for, and makes no representations as to any aspect of such Third-Party Services, including, without limitation, their content or the manner in which they handle data (including personal data) or any interaction between Customer and the provider of such Third-Party Services. Customer hereby releases and agrees to hold SchoolCal harmless from any and all liability arising from Customer's use of such Third-Party Services.
                </p>
              </div>

              {/* Section 12 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">12. Maintenance Activities and Product Changes</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">12.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      It may be necessary for SchoolCal to perform scheduled and/or unscheduled repairs or maintenance, or remotely patch or upgrade the Product. This may temporarily degrade the quality of the services or result in a partial or complete outage of the Product. SchoolCal will endeavor to carry out such work during times that will cause the least disruption to Customer's business. Customer shall cooperate, if necessary, to perform such work.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">12.2</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      SchoolCal may add to, at any time and its full discretion, remove, change or discontinue the Products or any component or version of the Products at any time (the "Product Changes"), which may require Customer to take certain actions. Such Changes may be made for reasons including, but not limited to:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue">to comply with applicable law or regulation,</li>
                      <li className="body-medium text-text-dark-blue">for security reasons,</li>
                      <li className="body-medium text-text-dark-blue">due to changes imposed by a third party supplier, and/or</li>
                      <li className="body-medium text-text-dark-blue">due to the termination of or changes to Third-Party Services.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 13 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">13. Termination and Suspension</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">13.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      In the event of a material breach of this Agreement by either party, the non-breaching party may terminate this Agreement by giving the breaching party written notice specifying the nature of the breach in reasonable detail and the non-breaching party's intention to terminate (a "Termination Notice"). If the breach has not been cured within the period ending thirty (30) days following delivery of the Termination Notice, then this Agreement shall automatically terminate.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">13.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      Notwithstanding the foregoing, SchoolCal reserves the right, at any time and without notice, to terminate this Agreement if Customer violates the license restrictions under Section 3 of the Agreement.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">13.3</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      Notwithstanding the foregoing, SchoolCal may suspend Customer's access to the Products immediately without notice if SchoolCal, in its sole discretion, believes:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue">such suspension is required by law;</li>
                      <li className="body-medium text-text-dark-blue">there is a security or privacy risk to Customer;</li>
                      <li className="body-medium text-text-dark-blue">Customer is infringing or violating the rights of third parties, or acting in a manner that is abusive, profane or offensive;</li>
                      <li className="body-medium text-text-dark-blue">Customer does not pay its Fees or any invoices in a timely manner; or</li>
                      <li className="body-medium text-text-dark-blue">Customer is violating this Agreement.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">13.4</h3>
                    <p className="body-medium text-text-dark-blue">
                      Upon termination of this Agreement, Customer shall discontinue its use of the Product(s). Notwithstanding the foregoing, termination of this Agreement by SchoolCal shall not limit Customer's obligation to pay all of the applicable Fees, nor restrict SchoolCal from pursuing any available remedies, including injunctive relief. Customer agrees that following termination of Customer's account and/or use of the Product, SchoolCal may immediately deactivate Customer's account and delete Customer Data. Customer further agrees that SchoolCal shall not be liable to Customer nor to any third party for any termination of Customer's access to the Product or deletion of Customer Data in accordance with this Agreement. Sections discussing license restrictions, Fees and payment, confidentiality, Customer representation, indemnification, and limitation of liability shall survive termination of this Agreement, along with any other provisions that are intended by their terms to survive.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">13.5</h3>
                    <p className="body-medium text-text-dark-blue">
                      Notwithstanding anything to the contrary in the Agreement, should the SchoolCal Service Agreement be terminated (a) by Customer prior to completion of the Current Term for any reason other than breach by SchoolCal under Section 13.1, or (b) by SchoolCal for material breach by Customer under Section 13.1 or 13.2, Customer will be charged an early termination fee calculated as the sum of: (i) any non-recurring Fees relating to the terminated Agreement(s) which have not been paid to SchoolCal as of the effective date of termination; and (ii) any recurring Fees under the SchoolCal Service Agreement that would have otherwise become due during the remainder of the Current Term. The Customer (i) authorizes SchoolCal to collect the Early Termination Fee, and any applicable taxes due on such fee, according to the same payment methods and/or accounts for collecting amounts under the Agreement, and (ii) acknowledges that the Early Termination Fee shall be immediately due and payable in full. The Parties acknowledge and agree that the Early Termination Fee is a genuine and reasonable pre-estimate of the loss and damage suffered by SchoolCal in the event that the Customer terminates prior to completion of the Current Term and not a penalty.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 14 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">14. Indemnification</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">14.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer shall indemnify, defend and hold harmless SchoolCal and its officers, employees, and agents from and against all losses, expenses, liabilities, damages and costs including, without limitation, reasonable attorneys' fees (collectively "Costs"), to the extent that such Costs are attributable to any breach by Customer or any User, independent contractor, or affiliate thereof, of any representations, warranties or other obligations set forth in this Agreement.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">14.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal shall indemnify, defend and hold harmless Customer and its officers, employees, agents and affiliates from and against all Costs, to the extent such Costs are attributable to the Products infringing or misappropriating any registered third-party intellectual property right, including trademarks, patents and copyrights if SchoolCal is notified promptly in writing and given authority, information, and assistance for the defense or settlement of any related proceeding.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 15 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">15. Limitation of Liability</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">15.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, SCHOOLCAL'S AGGREGATE LIABILITY UNDER THIS AGREEMENT SHALL BE LIMITED TO THE FEES PAID BY CUSTOMER DURING THE THREE-MONTH PERIOD IMMEDIATELY PRECEDING THE DATE THE CLAIM GIVING RISE TO SUCH LIABILITY WAS FIRST ASSERTED. IF AND TO THE EXTENT THAT CUSTOMER PARTICIPATES IN A BETA TESTING PROJECT, IN NO EVENT WILL SCHOOLCAL'S TOTAL AGGREGATE LIABILITY FOR ANY CLAIMS ARISING OUT OF OR RELATED TO THE BETA TESTING PROJECT EXCEED $100.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">15.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, NEITHER PARTY SHALL BE LIABLE FOR ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, RELIANCE OR PUNITIVE DAMAGES OR LOST OR IMPUTED PROFITS OR ROYALTIES, LOST DATA OR COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, WHETHER FOR BREACH OF CONTRACT, WARRANTY, TORT, STATUTORY REMEDY OR ANY OBLIGATION ARISING THEREFROM OR OTHERWISE AND IRRESPECTIVE OF WHETHER EITHER PARTY HAS ADVISED OR BEEN ADVISED OF THE POSSIBILITY OF ANY SUCH LOSS OR DAMAGE. NOTWITHSTANDING THE FOREGOING, TO THE EXTENT THAT CUSTOMER PARTICIPATES IN A BETA TESTING PROJECT, IN NO EVENT SHALL SCHOOLCAL BE LIABLE TO CUSTOMER FOR ANY DIRECT DAMAGES ARISING OUT OF OR RELATING TO THE BETA TECHNOLOGY OR THE TRANSACTIONS PROCESSED THEREIN.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">15.3</h3>
                    <p className="body-medium text-text-dark-blue">
                      TO THE FULLEST EXTENT PERMISSIBLE BY APPLICABLE LAW, CUSTOMER HEREBY WAIVES ANY CLAIM THAT THESE EXCLUSIONS DEPRIVE IT OF AN ADEQUATE REMEDY. THE PARTIES ACKNOWLEDGE THAT THE PROVISIONS OF THIS SECTION FAIRLY ALLOCATE THE RISKS UNDER THIS AGREEMENT AS BETWEEN THEM. THE PARTIES ACKNOWLEDGE THAT THE LIMITATIONS SET FORTH IN THIS SECTION ARE INTEGRAL TO THE AMOUNT OF FEES CHARGED IN CONNECTION WITH MAKING THE PRODUCTS AVAILABLE TO CUSTOMER AND THAT, WERE SCHOOLCAL TO ASSUME FURTHER LIABILITY OTHER THAN AS SET FOR HEREIN, SUCH FEES WOULD OF NECESSITY BE SET SIGNIFICANTLY HIGHER.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 16 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">16. Disclaimer of Warranties</h2>
                <p className="body-medium text-text-dark-blue">
                  CUSTOMER ACKNOWLEDGES THAT (i) SCHOOLCAL CANNOT GUARANTEE THE RESULTS GENERATED THROUGH THE PRODUCTS OR THE BETA TECHNOLOGY, OR THAT THE PRODUCTS OR THE BETA TECHNOLOGY WILL BE CONTINUOUSLY AVAILABLE FOR USE WITHOUT INTERRUPTION, (ii) THE PRODUCTS AND THE BETA TECHNOLOGY ARE PROVIDED "AS IS", ON AN "AS AVAILABLE" BASIS WITHOUT ANY REPRESENTATION, WARRANTY OR CONDITION OF ANY KIND, AND SCHOOLCAL HEREBY DISCLAIMS ALL CONDITIONS, REPRESENTATIONS AND ALL WARRANTIES, WHETHER EXPRESS OR IMPLIED, ARISING BY LAW OR OTHERWISE WITH RESPECT TO THE PRODUCTS, INCLUDING, BUT NOT LIMITED TO, ANY (a) IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, (b) IMPLIED WARRANTY ARISING FROM COURSE OF PERFORMANCE, COURSE OF DEALING, OR USAGE OF TRADE, (c) WARRANTY OF TITLE OR NON-INFRINGEMENT; OR (d) STATUTORY REMEDY, AND (iii) SCHOOLCAL IS NOT RESPONSIBLE FOR ANY PRODUCT CONFIGURATION SETTINGS OR PRODUCT CHANGES OR BETA TECHNOLOGY CHANGES APPLIED BY OR ON BEHALF OF CUSTOMER. SCHOOLCAL EXPRESSLY DISCLAIMS ANY SPECIFIC SERVICE LEVEL WARRANTIES OR COMMITMENTS. REGARDLESS OF ANY OTHER TERM OF THIS AGREEMENT, NOTHING IN THIS AGREEMENT EXCLUDES OR PURPORTS TO EXCLUDE ANY STATUTORY RIGHT OR WARRANTY THAT MAY NOT BE EXCLUDED BY LAW.
                </p>
              </div>

              {/* Section 17 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">17. Assignment and Subcontractors</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer may not assign any of its rights or obligations under this Agreement without SchoolCal's prior written consent. SchoolCal may, without Customer's prior consent, assign its rights and obligations under this Agreement. Subject to the foregoing, the provisions of this Agreement shall be binding on and inure to the benefit not only of the parties hereto but also to their successors and permitted assigns. SchoolCal shall be free to perform all or any part of this Agreement through one or more subcontractors.
                </p>
              </div>

              {/* Section 18 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">18. Governing Law, Venue, Arbitration and Attorneys' Fees</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">18.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      This Agreement shall be governed by and interpreted in accordance with the laws of the state of Pennsylvania. Each party hereby waives all defenses of lack of personal jurisdiction and forum nonconveniens in connection with any action brought in the foregoing courts. The prevailing party in any action or proceeding brought under this Agreement shall be entitled to recover from the other party, in addition to all other relief, its reasonable attorneys' and other experts' fees and expenses incurred with respect to such action or proceeding.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">18.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      Any claim, dispute or controversy (whether in contract or tort, pursuant to statute or regulation, or otherwise, and whether pre-existing, present or future) arising out of or relating to: (i) this Agreement; (ii) the Products, services or equipment provided by SchoolCal; (iii) oral or written statements, or advertisements or promotions relating to this Agreement or to the Products, services or equipment; or (iv) the relationships that result from this Agreement (collectively the "Claim") will be determined by arbitration to the exclusion of the courts. Arbitration will be conducted by one arbitrator pursuant to the laws and rules relating to commercial arbitration.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">18.3</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer agrees to waive any right Customer may have to commence or participate in any class action or representative proceeding against SchoolCal related to any Claim and, where applicable, Customer also agrees to opt out of any class or representative proceedings against SchoolCal.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">18.4</h3>
                    <p className="body-medium text-text-dark-blue">
                      Notwithstanding the foregoing provisions, (i) each party retains the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents, or other intellectual property rights; and (ii) SchoolCal reserves the right to collect any outstanding amounts that Customer owes to SchoolCal in a court of competent jurisdiction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 19 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">19. Export Compliance and Other Restrictions</h2>
                <p className="body-medium text-text-dark-blue">
                  Products which SchoolCal may provide or make available to Customer may be subject to U.S. export control and economic sanctions laws. Customer agrees to comply with all such laws or regulations as they relate to the access and use of Products. Customer agrees not to access the Product from any jurisdiction in which the provision of the Product is prohibited under U.S. or other applicable laws or regulations (a "Proscribed Country") or provide access to the Product to any government, entity or individual located in any Proscribed Country. Customer represents, warrants, and covenants that (i) it is not a national of, or company registered in, any Proscribed Country; and (ii) it shall not permit third parties to access or use the Product in violation of any U.S. or other applicable export embargoes, prohibitions or restrictions.
                </p>
              </div>

              {/* Section 20 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">20. General</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">20.1</h3>
                    <p className="body-medium text-text-dark-blue">
                      If one or more of the provisions of this Agreement is held to be invalid, illegal or unenforceable in any respect by a court of competent jurisdiction, then the validity, legality and enforceability of the remaining provisions of this Agreement shall be unaffected.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">20.2</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal may provide any and all notices, statements and other communications to Customer through either email, posting on its website, an in-product message, or by mail or express delivery service. During the term of this Agreement, Customer grants SchoolCal a free license to use, reference and display the Customer's name and trademarks in any communications, including publications, press releases, stories, websites, social media posts, and public filings in connection with the promotion, marketing, distribution and public disclosure of the SchoolCal brand, activity and Products (collectively, the "Materials"). Following the termination of this Agreement, SchoolCal shall have 120 days to remove all Customer's name and trademarks from the Materials.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">20.3</h3>
                    <p className="body-medium text-text-dark-blue">
                      Neither party shall be deemed in default or otherwise liable for any delay in or failure of its performance under this Agreement (other than Customer's payment obligations) by reason of any act of God, fire, natural disaster, accident, act of government, shortage of materials, failure of transportation or communication or of suppliers of goods or services, or any other cause to the extent it is beyond the reasonable control of such party.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">20.4</h3>
                    <p className="body-medium text-text-dark-blue">
                      This Agreement, including any applicable Order Form, along with the applicable Order Form, the Acceptable Use Policy, the Privacy Policy and Data Processing Agreement (as referenced in Section 8.3), constitutes the entire agreement and understanding between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous written, electronic or oral communications, representations, agreements or understandings between the parties with respect thereto.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">20.5</h3>
                    <p className="body-medium text-text-dark-blue">
                      In the event of any inconsistency or conflict between the terms of the Agreement and the terms of the Order Form, the terms of the Order Form shall govern.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">20.6</h3>
                    <p className="body-medium text-text-dark-blue">
                      SchoolCal reserves the right, at any time and upon thirty (30) days' written notice, to amend this Agreement, including making changes to the Fees and scope of the Products.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">20.7</h3>
                    <p className="body-medium text-text-dark-blue">
                      Customer has reviewed, understood and accepted the terms and conditions set forth in this Agreement and has either consulted with legal counsel prior to executing this Agreement or has knowingly forgone its right to consult with legal counsel prior to such execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
