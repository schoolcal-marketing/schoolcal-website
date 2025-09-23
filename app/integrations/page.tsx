import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SchoolCal Integrations - Connect Your SIS',
  description: 'Seamlessly integrate SchoolCal with your Student Information System (SIS) including Veracross, Blackbaud, and PowerSchool.',
  openGraph: {
    title: 'SchoolCal Integrations - Connect Your SIS',
    description: 'Seamlessly integrate SchoolCal with your Student Information System (SIS) including Veracross, Blackbaud, and PowerSchool.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schoolcal.com/integrations',
  },
}

export default function IntegrationsPage() {
  return (
    <div className="min-h-screen">
      {/* Section 1: Hero */}
      <section className="bg-background-cream py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="heading-1 text-text-black mb-6">Explore all integrations</h1>
          </div>
        </div>
      </section>

      {/* Section 2: Integrations */}
      <section className="bg-background-cream py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
              <div className="bg-background-white rounded-lg shadow-md border border-border p-8 hover:shadow-lg transition-shadow">
                <h2 className="heading-3 text-text-black mb-4">Veracross</h2>
                <p className="body-medium">
                  <a href="/integrations/veracross" className="text-primary underline hover:text-primary-dark transition-colors">
                    Explore Integration
                  </a>
                </p>
              </div>
              
              <div className="bg-background-white rounded-lg shadow-md border border-border p-8 hover:shadow-lg transition-shadow">
                <h2 className="heading-3 text-text-black mb-4">PowerSchool</h2>
                <p className="body-medium">
                  <a href="/integrations/powerschool" className="text-primary underline hover:text-primary-dark transition-colors">
                    Explore Integration
                  </a>
                </p>
              </div>
              
              <div className="bg-background-white rounded-lg shadow-md border border-border p-8 hover:shadow-lg transition-shadow">
                <h2 className="heading-3 text-text-black mb-4">Blackbaud</h2>
                <p className="body-medium">
                  <a href="/integrations/blackbaud" className="text-primary underline hover:text-primary-dark transition-colors">
                    Explore Integration
                  </a>
                </p>
              </div>

              <div className="bg-background-white rounded-lg shadow-md border border-border p-8 hover:shadow-lg transition-shadow">
                <h2 className="heading-3 text-text-black mb-4">iSAMS</h2>
                <p className="body-medium">
                  <a href="/integrations/isams" className="text-primary underline hover:text-primary-dark transition-colors">
                    Explore Integration
                  </a>
                </p>
              </div>

              <div className="bg-background-white rounded-lg shadow-md border border-border p-8 hover:shadow-lg transition-shadow">
                <h2 className="heading-3 text-text-black mb-4">Infinite Campus</h2>
                <p className="body-medium">
                  <a href="/integrations/infinite-campus" className="text-primary underline hover:text-primary-dark transition-colors">
                    Explore Integration
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
