import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Subprocessors - SchoolCal',
  description: 'List of third-party subprocessors that SchoolCal uses to provide our services.',
  openGraph: {
    title: 'Subprocessors - SchoolCal',
    description: 'List of third-party subprocessors that SchoolCal uses to provide our services.',
    type: 'website',
    url: 'https://schoolcal.com/legal/subprocessors',
  },
  alternates: {
    canonical: 'https://schoolcal.com/legal/subprocessors',
  },
}

export default function SubprocessorsPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Subprocessors
            </h1>
            <p className="body-large text-text-dark-blue">
              List of third-party subprocessors that SchoolCal uses to provide our services
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
                <p className="body-medium text-text-dark-blue">
                  SchoolCal engages the following sub-processors as necessary to process customer data to provide SchoolCal Services.
                </p>
              </div>

              {/* Subprocessors List */}
              <div className="space-y-6">
                {/* Microsoft Azure */}
                <div className="border border-border rounded-lg p-6 bg-background-cream">
                  <h3 className="heading-3 text-text-black mb-3">Microsoft Azure</h3>
                  <p className="body-medium text-text-dark-blue">
                    Used for hosting and processing of all data.
                  </p>
                </div>

                {/* Google */}
                <div className="border border-border rounded-lg p-6 bg-background-cream">
                  <h3 className="heading-3 text-text-black mb-3">Google</h3>
                  <p className="body-medium text-text-dark-blue">
                    Used for application functionality.
                  </p>
                </div>

                {/* Auth0 */}
                <div className="border border-border rounded-lg p-6 bg-background-cream">
                  <h3 className="heading-3 text-text-black mb-3">Auth0</h3>
                  <p className="body-medium text-text-dark-blue">
                    Used for application authentication.
                  </p>
                </div>

                {/* SEED */}
                <div className="border border-border rounded-lg p-6 bg-background-cream">
                  <h3 className="heading-3 text-text-black mb-3">SEED (by Anomaly Innovations)</h3>
                  <p className="body-medium text-text-dark-blue">
                    Used for application development. Log records may include customer data.
                  </p>
                </div>

                {/* Vercel */}
                <div className="border border-border rounded-lg p-6 bg-background-cream">
                  <h3 className="heading-3 text-text-black mb-3">Vercel</h3>
                  <p className="body-medium text-text-dark-blue">
                    Used for application development and deployment.
                  </p>
                </div>

                {/* Sentry */}
                <div className="border border-border rounded-lg p-6 bg-background-cream">
                  <h3 className="heading-3 text-text-black mb-3">Sentry</h3>
                  <p className="body-medium text-text-dark-blue">
                    Used for error monitoring and performance tracking service.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-12 p-6 border border-border rounded-lg bg-background-white">
                <p className="body-medium text-text-dark-blue">
                  For questions about our data processing partners, please contact us at{' '}
                  <a 
                    href="mailto:legal@schoolcal.co" 
                    className="text-primary hover:text-primary-dark underline"
                  >
                    legal@schoolcal.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
