import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blackbaud Integration - SchoolCal',
  description: 'Seamlessly integrate SchoolCal with Blackbaud Student Information System for automatic calendar synchronization and management.',
  openGraph: {
    title: 'Blackbaud Integration - SchoolCal',
    description: 'Seamlessly integrate SchoolCal with Blackbaud Student Information System for automatic calendar synchronization and management.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schoolcal.com/integrations/blackbaud',
  },
}

export default function BlackbaudIntegrationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-1 mb-6">Blackbaud Integration</h1>
          <p className="body-large text-gray-600 mb-12">
            Connect SchoolCal with your Blackbaud Student Information System for seamless calendar management.
          </p>
          
          <div className="prose max-w-none">
            <p className="body-medium text-gray-700">
              This page will contain detailed information about the Blackbaud integration, including setup instructions, features, and benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
