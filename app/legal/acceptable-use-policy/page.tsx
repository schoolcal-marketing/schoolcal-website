import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Acceptable Use Policy - SchoolCal',
  description: 'Guidelines and restrictions for the proper use of SchoolCal\'s services and platform.',
  openGraph: {
    title: 'Acceptable Use Policy - SchoolCal',
    description: 'Guidelines and restrictions for the proper use of SchoolCal\'s services and platform.',
    type: 'website',
    url: 'https://schoolcal.com/legal/acceptable-use-policy',
  },
  alternates: {
    canonical: 'https://schoolcal.com/legal/acceptable-use-policy',
  },
}

export default function AcceptableUsePolicyPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Acceptable Use Policy
            </h1>
            <p className="body-large text-text-dark-blue">
              Guidelines and restrictions for the proper use of SchoolCal's services and platform
            </p>
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
                  Our goal at SchoolCal is to help schools streamline operations. We do this by providing integration tools. This Acceptable Use Policy ("Policy") outlines examples of prohibited conduct in connection with SchoolCal's Products.
                </p>
                <p className="body-medium text-text-dark-blue">
                  Capitalized terms used in this Policy but not otherwise defined shall have the meaning ascribed in the SchoolCal Service Agreement.
                </p>
              </div>

              {/* Prohibited Conduct Overview */}
              <div>
                <p className="body-medium text-text-dark-blue">
                  Here are the things Customer should not do, whether on its own or on someone else's behalf, when using SchoolCal's Products:
                </p>
              </div>

              {/* Section 1 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">1. Illegal Activities</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not use Products in any unlawful, deceptive, exploitative, or fraudulent manner, or for any such purpose. This means no phishing, spoofing, stealing, impersonating others, or engaging in misleading or unethical marketing or advertising.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">2. Misrepresentation</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not make claims (whether medical, scientific or otherwise) that are factually incorrect or unsupported by documented evidence.
                </p>
              </div>

              {/* Section 3 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">3. Harassment, defamation, threats</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not promote, condone, or distribute any material that is offensive, defamatory, harassing, threatening, hateful, discriminatory, obscene, or is otherwise objectionable.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">4. Discrimination, violence</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must never incite violence. Not ever. Customer must not promote, nor condone, abuse against any person based on race, ethnicity, nationality, religion, gender, gender identity, sexual preference, age or disability.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">5. Personal information</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not disclose or distribute any material that contains personal, medical/health, sensitive, or other confidential information without the express consent of the data subject.
                </p>
              </div>

              {/* Section 6 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">6. Intellectual property</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not infringe or misappropriate anyone's copyright, trademark, privacy or publicity rights.
                </p>
              </div>

              {/* Section 7 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">7. Data collection</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not collect or harvest data from Products or systems or attempt to decipher any transmissions to or from the servers running Products.
                </p>
              </div>

              {/* Section 8 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">8. Interference</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not use Products in a way that could damage, disable, overburden, impair, descramble or compromise or circumvent our systems or security (including those of SchoolCal's third-party providers), or interfere with other users. This includes the use of bots to access and use Products as well as other unapproved automation.
                </p>
              </div>

              {/* Section 9 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">9. Spam</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not use Products to transmit unsolicited commercial electronic messages, bulk or otherwise.
                </p>
              </div>

              {/* Section 10 */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">10. Firearms</h2>
                <p className="body-medium text-text-dark-blue">
                  Customer must not be a firearms store, or offer for sale illegal firearms or any parts or components that, when used with a legal firearm, would be illegal.
                </p>
              </div>

              {/* Enforcement Section */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Enforcement</h2>
                <p className="body-medium text-text-dark-blue">
                  SchoolCal may take action against Customer's account if SchoolCal concludes, in its sole discretion, that Customer's conduct or business is inconsistent with the letter or spirit of this Policy. This means SchoolCal can, at any time and for any reason (except where prohibited by applicable law), remove any content or suspend or terminate Customer's account without refunding any prepaid Products, without liability and without notice to Customer. Any determination made by SchoolCal under this Policy will be final and binding.
                </p>
              </div>

              {/* Policy Updates Section */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Policy Updates</h2>
                <p className="body-medium text-text-dark-blue">
                  SchoolCal may revise this Policy from time to time by notifying Customer in accordance with the methods set out in the SchoolCal Service Agreement. If Customer does not accept the revisions to the Policy Customer, Customer must stop using the Products. Customer's continued use of Products after notice of revisions will mean that Customer accepts such revisions.
                </p>
              </div>

              {/* Reporting Violations Section */}
              <div>
                <h2 className="heading-2 text-text-black mb-4">Reporting Violations</h2>
                <p className="body-medium text-text-dark-blue">
                  Violations of this Policy can be reported to SchoolCal by emailing{' '}
                  <a 
                    href="mailto:legal@schoolcal.co" 
                    className="text-primary hover:text-primary-dark underline"
                  >
                    legal@schoolcal.co
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
