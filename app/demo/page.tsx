import { Metadata } from 'next'
import DemoBookingForm from '../components/DemoBookingForm'

export const metadata: Metadata = {
  title: 'Book a Personalized Demo - SchoolCal',
  description: 'Book a time to review your specific tooling (SIS and calendar), scenario and questions. We\'ll learn about your school and what you\'re trying to achieve, and show you how SchoolCal can help.',
  openGraph: {
    title: 'Book a Personalized Demo - SchoolCal',
    description: 'Book a time to review your specific tooling (SIS and calendar), scenario and questions. We\'ll learn about your school and what you\'re trying to achieve, and show you how SchoolCal can help.',
    type: 'website',
    url: 'https://schoolcal.com/demo',
  },
  alternates: {
    canonical: 'https://schoolcal.com/demo',
  },
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Book a personalized demo
            </h1>
            <p className="body-large text-text-dark-blue max-w-3xl mx-auto">
              Book a time to review your specific tooling (SIS and calendar), scenario and questions. We'll learn about your school and what you're trying to achieve, and show you how SchoolCal can help. At the end, we'll give you a personalized quote based on your sync needs.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Booking Form */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <DemoBookingForm />
        </div>
      </section>
    </div>
  );
}
