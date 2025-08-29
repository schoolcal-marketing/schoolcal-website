import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Referral Program | SchoolCal',
  description: 'EdTech consultants: help schools end calendar chaos. Refer them and earn rewards.',
  openGraph: {
    title: 'Referral Program | SchoolCal',
    description: 'EdTech consultants: help schools end calendar chaos. Refer them and earn rewards.',
    type: 'website',
    url: 'https://schoolcal.com/referral-program',
  },
  alternates: {
    canonical: 'https://schoolcal.com/referral-program',
  },
}

export default function ReferralProgramPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              SchoolCal Referral Program
            </h1>
            <p className="body-large text-text-dark-blue max-w-3xl mx-auto">
              EdTech consultants: help schools end calendar chaos. Refer them and earn rewards.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-background-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              How It Works
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="heading-3 text-text-black mb-4">
                Refer a school
              </h3>
              <p className="body-medium text-text-dark-blue">
                Refer SchoolCal to any educational institution, with a focus on K-12 schools.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="heading-3 text-text-black mb-4">
                Earn a reward
              </h3>
              <p className="body-medium text-text-dark-blue">
                If the institution signs a contract, you'll earn 10% of the Year 1 (first year) contract value, with a minimum of $250 and a maximum of $2,500 per referral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              Terms & Conditions
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Eligibility</h3>
              <p className="body-medium text-text-dark-blue">
                Open to EdTech consultants who are client-facing. In-house tech leaders at schools are excluded due to potential conflicts of interest.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Qualified Referral</h3>
              <p className="body-medium text-text-dark-blue">
                A referred institution must be a new client, not previously contacted by SchoolCal or in the sales process already, and must sign a contract for our software.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Referral Submission</h3>
              <p className="body-medium text-text-dark-blue">
                Please submit your referral to referrals@schoolcal.com, ideally before the institution contacts us directly.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Payment Limits</h3>
              <p className="body-medium text-text-dark-blue">
                Referral fees are capped at $2,500 per referral.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Program Duration</h3>
              <p className="body-medium text-text-dark-blue">
                This program is ongoing but may be modified or terminated at SchoolCal's discretion with notice.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Compliance</h3>
              <p className="body-medium text-text-dark-blue">
                Referrers must comply with all applicable laws, including anti-bribery and anti-kickback regulations. Referrals must not involve prohibited inducements or conflicts of interest.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Disputes</h3>
              <p className="body-medium text-text-dark-blue">
                SchoolCal reserves the right to determine the validity of referrals and eligibility for rewards. Decisions are final.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Modifications</h3>
              <p className="body-medium text-text-dark-blue">
                SchoolCal may modify or terminate this program at any time.
              </p>
            </div>

            <div className="bg-background-white rounded-lg p-8 shadow-sm">
              <h3 className="heading-3 text-text-black mb-4">Liability</h3>
              <p className="body-medium text-text-dark-blue">
                SchoolCal is not liable for any indirect, incidental, or consequential damages arising from this program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-background-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-2 text-text-black mb-6">
              Contact Us
            </h2>
            <p className="body-large text-text-dark-blue max-w-2xl mx-auto mb-8">
              Questions? Reach out at{' '}
              <a 
                href="mailto:referrals@schoolcal.com" 
                className="text-primary hover:text-primary-dark transition-colors font-medium"
              >
                referrals@schoolcal.com
              </a>
              . Thank you for spreading the word about SchoolCal!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
