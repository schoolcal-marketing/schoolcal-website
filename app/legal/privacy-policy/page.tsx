import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - SchoolCal',
  description: 'Details about what information we collect, how we use it, and your rights regarding your personal data.',
  openGraph: {
    title: 'Privacy Policy - SchoolCal',
    description: 'Details about what information we collect, how we use it, and your rights regarding your personal data.',
    type: 'website',
    url: 'https://schoolcal.com/legal/privacy-policy',
  },
  alternates: {
    canonical: 'https://schoolcal.com/legal/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Privacy Policy
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="body-medium text-text-dark-blue mb-4">
                  Our Privacy Policy was posted on May 17, 2022 and last updated on May 17, 2022.
                </p>
                <p className="body-medium text-text-dark-blue mb-4">
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
                </p>
                <p className="body-medium text-text-dark-blue">
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>
              </div>

              {/* Interpretation and Definitions */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Interpretation and Definitions</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Interpretation</h3>
                    <p className="body-medium text-text-dark-blue">
                      The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Definitions</h3>
                    <p className="body-medium text-text-dark-blue mb-4">
                      For the purposes of this Privacy Policy:
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Account</strong> means a unique account created for You to access our Service or parts of our Service.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Business</strong>, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to www.schoolcal.co website. For the purpose of the GDPR, the Company is the Data Controller.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Consumer</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Data Controller</strong>, for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Do Not Track (DNT)</strong> is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Personal Data</strong> is any information that relates to an identified or identifiable individual. For the purposes for GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity. For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Sale</strong>, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's personal information to another business or a third party for monetary or other valuable consideration.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Service</strong> refers to the Website.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>Website</strong> refers to schoolcal.co, accessible from http://www.schoolcal.co
                        </p>
                      </div>
                      
                      <div>
                        <p className="body-medium text-text-dark-blue">
                          <strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable. Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collecting and Using Your Personal Data */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Collecting and Using Your Personal Data</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Types of Data Collected</h3>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="heading-3 text-text-black mb-3">Personal Data</h4>
                        <p className="body-medium text-text-dark-blue mb-3">
                          While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:
                        </p>
                        <ul className="list-disc list-inside ml-6 space-y-2">
                          <li className="body-medium text-text-dark-blue">Email address</li>
                          <li className="body-medium text-text-dark-blue">First name and last name</li>
                          <li className="body-medium text-text-dark-blue">Phone number</li>
                          <li className="body-medium text-text-dark-blue">Address, State, Province, ZIP/Postal code, City</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="heading-3 text-text-black mb-3">Usage Data</h4>
                        <p className="body-medium text-text-dark-blue mb-3">
                          Usage Data is collected automatically when using the Service.
                        </p>
                        <p className="body-medium text-text-dark-blue mb-3">
                          Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                        </p>
                        <p className="body-medium text-text-dark-blue mb-3">
                          When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                        </p>
                        <p className="body-medium text-text-dark-blue">
                          We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking Technologies and Cookies */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Tracking Technologies and Cookies</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies used are beacons, tags, and scripts to collect and track information and to improve and analyze Our Service. The technologies We use may include:
                </p>
                
                <div className="space-y-4">
                  <div>
                    <p className="body-medium text-text-dark-blue mb-3">
                      <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent. However, if You do not accept Cookies, You may not be able to use some parts of our Service. Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use Cookies.
                    </p>
                  </div>
                  
                  <div>
                    <p className="body-medium text-text-dark-blue mb-4">
                      <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small electronic files known as web beacons (also referred to as clear gifs, pixel tags, and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an email and for other related website statistics (for example, recording the popularity of a certain section and verifying system and server integrity).
                    </p>
                  </div>
                  
                  <div>
                    <p className="body-medium text-text-dark-blue mb-4">
                      Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                    </p>
                  </div>
                  
                  <div>
                    <p className="body-medium text-text-dark-blue mb-4">
                      We use both Session and Persistent Cookies for the purposes set out below:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Necessary / Essential Cookies</strong><br/>
                          Type: Session Cookies<br/>
                          Administered by: Us<br/>
                          Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Cookies Policy / Notice Acceptance Cookies</strong><br/>
                          Type: Persistent Cookies<br/>
                          Administered by: Us<br/>
                          Purpose: These Cookies identify if users have accepted the use of cookies on the Website.
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Functionality Cookies</strong><br/>
                          Type: Persistent Cookies<br/>
                          Administered by: Us<br/>
                          Purpose: These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Tracking and Performance Cookies</strong><br/>
                          Type: Persistent Cookies<br/>
                          Administered by: Third-Parties<br/>
                          Purpose: These Cookies are used to track information about traffic to the Website and how users use the Website. The information gathered via these Cookies may directly or indirectly identify you as an individual visitor. This is because the information collected is typically linked to a pseudonymous identifier associated with the device you use to access the Website. We may also use these Cookies to test new pages, features or new functionality of the Website to see how our users react to them.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="body-medium text-text-dark-blue">
                    For more information about the cookies we use and your choices regarding cookies, please visit our Cookies Policy or the Cookies section of our Privacy Policy.
                  </p>
                </div>
              </div>

              {/* Use of Your Personal Data */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Use of Your Personal Data</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  The Company may use Personal Data for the following purposes:
                </p>
                
                <ul className="list-disc list-inside ml-6 space-y-2 mb-6">
                  <li className="body-medium text-text-dark-blue">To provide and maintain our Service, including to monitor the usage of our Service.</li>
                  <li className="body-medium text-text-dark-blue">To manage Your Account: to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.</li>
                  <li className="body-medium text-text-dark-blue">For the performance of a contract: the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.</li>
                  <li className="body-medium text-text-dark-blue">To contact You: To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.</li>
                  <li className="body-medium text-text-dark-blue">To provide You with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.</li>
                  <li className="body-medium text-text-dark-blue">To manage Your requests: To attend and manage Your requests to Us.</li>
                  <li className="body-medium text-text-dark-blue">For business transfers: We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.</li>
                  <li className="body-medium text-text-dark-blue">For other purposes: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.</li>
                </ul>
                
                <p className="body-medium text-text-dark-blue mb-4">
                  We may share Your personal information in the following situations:
                </p>
                
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li className="body-medium text-text-dark-blue"><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service, for payment processing, to contact You.</li>
                  <li className="body-medium text-text-dark-blue"><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
                  <li className="body-medium text-text-dark-blue"><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
                  <li className="body-medium text-text-dark-blue"><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions to provide or improve Our application's functionality.</li>
                  <li className="body-medium text-text-dark-blue"><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
                  <li className="body-medium text-text-dark-blue"><strong>With Your consent:</strong> We may disclose Your personal information for any other purpose with Your consent.</li>
                </ul>
              </div>

              {/* Retention of Your Personal Data */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Retention of Your Personal Data</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
                </p>
                <p className="body-medium text-text-dark-blue">
                  The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.
                </p>
              </div>

              {/* Transfer of Your Personal Data */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Transfer of Your Personal Data</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.
                </p>
                <p className="body-medium text-text-dark-blue mb-4">
                  Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.
                </p>
                <p className="body-medium text-text-dark-blue">
                  The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.
                </p>
              </div>

              {/* Disclosure of Your Personal Data */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Disclosure of Your Personal Data</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Business Transactions</h3>
                    <p className="body-medium text-text-dark-blue">
                      If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Law enforcement</h3>
                    <p className="body-medium text-text-dark-blue">
                      Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Other legal requirements</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue">Comply with a legal obligation</li>
                      <li className="body-medium text-text-dark-blue">Protect and defend the rights or property of the Company</li>
                      <li className="body-medium text-text-dark-blue">Prevent or investigate possible wrongdoing in connection with the Service</li>
                      <li className="body-medium text-text-dark-blue">Protect the personal safety of Users of the Service or the public</li>
                      <li className="body-medium text-text-dark-blue">Protect against legal liability</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Security of Your Personal Data */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Security of Your Personal Data</h2>
                <p className="body-medium text-text-dark-blue">
                  The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>
              </div>

              {/* Detailed Information on the Processing of Your Personal Data */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Detailed Information on the Processing of Your Personal Data</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  The Service Providers We use may have access to Your Personal Data. These third-party vendors collect, store, use, process and transfer information about Your activity on Our Service in accordance with their Privacy Policies in order to provide or improve Our application's functionality.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Analytics</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      We may use third-party Service providers to monitor and analyze the use of our Service.
                    </p>
                    
                    <div className="bg-background-cream p-4 rounded-lg">
                      <h4 className="heading-3 text-text-black mb-3">Google Analytics</h4>
                      <p className="body-medium text-text-dark-blue">
                        Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network. You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js and dc.js) from sharing information with Google Analytics about visits activity. For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page: <a href="https://policies.google.com/privacy" className="text-primary hover:text-primary-dark underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Email Marketing</h3>
                    <p className="body-medium text-text-dark-blue">
                      We may use Your Personal Data to contact You with newsletters, marketing or promotional materials and other information that may be of interest to You. You may opt-out of receiving any, or all, of these communications from Us by following the unsubscribe link or instructions provided in any email We send or by contacting Us.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Payments</h3>
                    <p className="body-medium text-text-dark-blue">
                      We may provide paid products and/or services within the Service. In that case, we may use third-party services for payment processing (e.g. payment processors).
                    </p>
                    <p className="body-medium text-text-dark-blue">
                      We will not store or collect Your payment card details. That information is provided directly to Our third-party payment processors whose use of Your personal information is governed by their Privacy Policy. These payment processors adhere to the standards set by PCI-DSS as managed by the PCI Security Standards Council, which is a joint effort of brands like Visa, Mastercard, American Express and Discover. PCI-DSS requirements help ensure the secure handling of payment information.
                    </p>
                  </div>
                </div>
              </div>

              {/* GDPR Privacy */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">GDPR Privacy</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Legal Basis for Processing Personal Data under GDPR</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      We may process Personal Data under the following conditions:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue"><strong>Consent:</strong> You have given Your consent for processing Personal Data for one or more specific purposes.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Performance of a contract:</strong> Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Legal obligations:</strong> Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Vital interests:</strong> Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Public interests:</strong> Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Legitimate interests:</strong> Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.</li>
                    </ul>
                    <p className="body-medium text-text-dark-blue mt-3">
                      In any case, the Company will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Your Rights under the GDPR</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise Your rights.
                    </p>
                    <p className="body-medium text-text-dark-blue mb-3">
                      You have the right under this Privacy Policy, and by law if You are within the EU, to:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2">
                      <li className="body-medium text-text-dark-blue"><strong>Request access to Your Personal Data.</strong> The right to access, update or delete the information We have on You. Whenever made possible, you can access, update or request deletion of Your Personal Data directly within Your account settings section. If you are unable to perform these actions yourself, please contact Us to assist You. This also enables You to receive a copy of the Personal Data We hold about You.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Request correction of the Personal Data that We hold about You.</strong> You have the right to have any incomplete or inaccurate information We hold about You corrected.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Object to processing of Your Personal Data.</strong> This right exists where We are relying on a legitimate interest as the legal basis for Our processing and there is something about Your particular situation, which makes You want to object to our processing of Your Personal Data on this ground. You also have the right to object where We are processing Your Personal Data for direct marketing purposes.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Request erasure of Your Personal Data.</strong> You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Request the transfer of Your Personal Data.</strong> We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which You initially provided consent for Us to use or where We used the information to perform a contract with You.</li>
                      <li className="body-medium text-text-dark-blue"><strong>Withdraw Your consent.</strong> You have the right to withdraw Your consent on using your Personal Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific functionalities of the Service.</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Exercising of Your GDPR Data Protection Rights</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us. Please note that we may ask You to verify Your identity before responding to such requests. If You make a request, We will try our best to respond to You as soon as possible.
                    </p>
                    <p className="body-medium text-text-dark-blue">
                      You have the right to complain to a Data Protection Authority about Our collection and use of Your Personal Data. For more information, if You are in the European Economic Area (EEA), please contact Your local data protection authority in the EEA.
                    </p>
                  </div>
                </div>
              </div>

              {/* CCPA Privacy */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">CCPA Privacy</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  This privacy notice section for California residents supplements the information contained in Our Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of California.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="heading-3 text-text-black mb-3">Categories of Personal Information Collected</h3>
                    <p className="body-medium text-text-dark-blue mb-3">
                      We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer or Device. The following is a list of categories of personal information which we may collect or may have been collected from California residents within the last twelve (12) months.
                    </p>
                    
                    <div className="space-y-3">
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category A: Identifiers.</strong> Examples: A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, driver's license number, passport number, or other similar identifiers. <strong>Collected: Yes.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).</strong> Examples: A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories. <strong>Collected: Yes.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category C: Protected classification characteristics under California or federal law.</strong> Examples: Age (40 years or older), marital status, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions) <strong>Collected: Yes.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category D: Commercial information.</strong> Examples: Records and history of products or services purchased or considered. <strong>Collected: Yes.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category E: Biometric information.</strong> Examples: Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data. <strong>Collected: No.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category F: Internet or other similar network activity.</strong> Examples: Interaction with our Service or advertisement. <strong>Collected: Yes.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category G: Geolocation data.</strong> Examples: Approximate physical location. <strong>Collected: No.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category H: Sensory data.</strong> Examples: Audio, electronic, visual, thermal, olfactory, or similar information. <strong>Collected: No.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category I: Professional or employment-related information.</strong> Examples: Current or past job history or performance evaluations. <strong>Collected: No.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category J: Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).</strong> Examples: Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records. <strong>Collected: yes.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-background-cream p-4 rounded-lg">
                        <p className="body-medium text-text-dark-blue">
                          <strong>Category K: Inferences drawn from other personal information.</strong> Examples: Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes. <strong>Collected: No.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Sections */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Links to Other Websites</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.
                </p>
                <p className="body-medium text-text-dark-blue">
                  We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
                </p>
              </div>

              <div>
                <h2 className="heading-2 text-text-black mb-4">Children's Privacy</h2>
                
                <p className="body-medium text-text-dark-blue mb-4">
                  SchoolCal provides calendar synchronization services to educational institutions. We do not market to or knowingly collect personal information directly from children under the age of 13.
                </p>

                <div className="mb-4">
                  <h3 className="heading-3 text-text-black mb-3">Information Collected on Behalf of Schools:</h3>
                  <p className="body-medium text-text-dark-blue mb-3">
                    When schools use our Service to synchronize schedules for students under 13, we may process the following information as a service provider on behalf of the school:
                  </p>
                  <ul className="list-disc list-inside ml-6 space-y-2">
                    <li className="body-medium text-text-dark-blue">Name</li>
                    <li className="body-medium text-text-dark-blue">Email address</li>
                    <li className="body-medium text-text-dark-blue">Date of birth (in some cases)</li>
                    <li className="body-medium text-text-dark-blue">Class schedule information</li>
                  </ul>
                  <p className="body-medium text-text-dark-blue mt-3">
                    This information is collected and processed solely to provide the calendar synchronization services requested by the educational institution.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="heading-3 text-text-black mb-3">No Marketing to Students or Parents:</h3>
                  <p className="body-medium text-text-dark-blue">
                    SchoolCal does not use student or parent information for marketing of any kind. We do not contact students or parents directly, and we do not share their information with third parties for marketing purposes. Any data we receive from schools is used exclusively to operate and support the calendar synchronization services.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="heading-3 text-text-black mb-3">FERPA and School Authority:</h3>
                  <p className="body-medium text-text-dark-blue">
                    We rely on schools to obtain any necessary parental consents and to comply with applicable laws, including the Family Educational Rights and Privacy Act (FERPA) and the Children's Online Privacy Protection Act (COPPA). Schools are responsible for ensuring they have the legal authority to share student information with us for the purpose of providing our services.
                  </p>
                </div>

                <div className="mb-4">
                  <h3 className="heading-3 text-text-black mb-3">Parental Rights:</h3>
                  <p className="body-medium text-text-dark-blue">
                    Parents or guardians who wish to review, update, or delete their child's information should contact their child's school directly, as the school controls this data. We will cooperate with schools to fulfill such requests in accordance with our service agreement.
                  </p>
                </div>

                <div>
                  <h3 className="heading-3 text-text-black mb-3">Our Role:</h3>
                  <p className="body-medium text-text-dark-blue">
                    We act as a service provider to schools and process student information only as directed by the educational institution and as necessary to provide our calendar synchronization services.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="heading-2 text-text-black mb-4">Changes to this Privacy Policy</h2>
                <p className="body-medium text-text-dark-blue mb-4">
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.
                </p>
                <p className="body-medium text-text-dark-blue mb-4">
                  We will let You know of this update by updating the "Last updated" date at the top of this Privacy Policy.
                </p>
                <p className="body-medium text-text-dark-blue">
                  You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
