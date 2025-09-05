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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Integrations</h1>
          <p className="body-large text-gray-600 mb-12">
            Connect SchoolCal with your existing Student Information System for seamless calendar management.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="heading-3 mb-4">Veracross</h2>
              <p className="body-medium text-gray-600 mb-6">
                Integrate with Veracross to automatically sync your school calendar.
              </p>
              <a href="/integrations/veracross" className="btn-primary">
                Learn More
              </a>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="heading-3 mb-4">Blackbaud</h2>
              <p className="body-medium text-gray-600 mb-6">
                Connect with Blackbaud for streamlined calendar management.
              </p>
              <a href="/integrations/blackbaud" className="btn-primary">
                Learn More
              </a>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="heading-3 mb-4">PowerSchool</h2>
              <p className="body-medium text-gray-600 mb-6">
                Sync with PowerSchool to keep your calendar up to date.
              </p>
              <a href="/integrations/powerschool" className="btn-primary">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
