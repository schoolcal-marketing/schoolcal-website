import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Pilot Agreement - SchoolCal',
  description: 'This pilot agreement is to use SchoolCal for free for three weeks without pay. There is no agreement beyond the three weeks.',
  openGraph: {
    title: 'Free Pilot Agreement - SchoolCal',
    description: 'This pilot agreement is to use SchoolCal for free for three weeks without pay. There is no agreement beyond the three weeks.',
    type: 'website',
    url: 'https://schoolcal.com/legal/pilot-agreement',
  },
  alternates: {
    canonical: 'https://schoolcal.com/legal/pilot-agreement',
  },
}

export default function PilotAgreementPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Free Pilot Agreement
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <p className="body-medium text-text-dark-blue mb-4">
                  This pilot agreement is to use SchoolCal for free for three weeks without pay. There is no agreement beyond the three weeks. A separate agreement will be signed if the piloting School wants to continue to use SchoolCal beyond the three weeks.
                </p>
                <p className="body-medium text-text-dark-blue">
                  The plan includes onboarding support (if needed), ongoing support for the SchoolCal Administrator, and hosting of necessary data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

