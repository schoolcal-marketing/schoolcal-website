import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Legal Info - SchoolCal',
  description: 'Legal documentation and policies for SchoolCal. Find our privacy policy, service agreement, data processing agreement, and more.',
  openGraph: {
    title: 'Legal Info - SchoolCal',
    description: 'Legal documentation and policies for SchoolCal. Find our privacy policy, service agreement, data processing agreement, and more.',
    type: 'website',
    url: 'https://schoolcal.com/legal',
  },
  alternates: {
    canonical: 'https://schoolcal.com/legal',
  },
}

const legalPages = [
  {
    title: 'Data Processing Agreement',
    href: '/legal/data-processing-agreement',
    description: 'Our comprehensive data processing agreement outlining how we handle and protect personal data in compliance with GDPR and other data protection regulations.'
  },
  {
    title: 'Privacy Policy',
    href: '/legal/privacy-policy',
    description: 'Details about what information we collect, how we use it, and your rights regarding your personal data.'
  },
  {
    title: 'Service Agreement',
    href: '/legal/service-agreement',
    description: 'The terms and conditions governing your use of SchoolCal\'s services and platform.'
  },
  {
    title: 'Acceptable Use Policy',
    href: '/legal/acceptable-use-policy',
    description: 'Guidelines and restrictions for the proper use of SchoolCal\'s services and platform.'
  },
  {
    title: 'Subprocessors',
    href: '/legal/subprocessors',
    description: 'List of third-party subprocessors that SchoolCal uses to provide our services.'
  }
]

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Legal Info
            </h1>
            <p className="body-large text-text-dark-blue max-w-2xl mx-auto mb-8">
              If you have any questions about our legal documentation or need clarification on any policy, please don't hesitate to contact us.
            </p>
            <a
              href="mailto:legal@schoolcal.co"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors body-medium font-medium"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Legal Pages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="block bg-white rounded-lg border border-border shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
              >
                <h2 className="heading-3 text-text-black mb-3">
                  {page.title}
                </h2>
                <p className="body-medium text-text-dark-blue">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
