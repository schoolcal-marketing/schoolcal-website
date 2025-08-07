import { Metadata } from 'next'
import PricingCalculator from "../components/PricingCalculator";
import HubSpotForm from "../components/HubSpotForm";

export const metadata: Metadata = {
  title: 'Pricing - Get an Instant Estimate | SchoolCal',
  description: 'See how much SchoolCal will cost for your school',
  openGraph: {
    title: 'Pricing - Get a Ballpark Estimate | SchoolCal',
    description: 'Get transparent pricing for SchoolCal. Sync your SIS schedules to staff and student calendars with our tiered pricing model.',
    type: 'website',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="heading-1 text-text-black mb-4">
              Get a ballpark estimate
            </h1>
            <p className="body-large text-text-dark-blue max-w-2xl mx-auto">
              Sync class schedules to active users* (staff and student) calendars.
            </p>
          </div>
          
          {/* Pricing Calculator */}
          <PricingCalculator />
        </div>
      </section>

      {/* Request Quote Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-text-black mb-4">
              Get a personalized estimate
            </h2>
            <p className="body-large text-text-dark-blue">
              Get exact pricing based on your exact school size and sync needs.
            </p>
          </div>
          
          {/* HubSpot Form */}
          <div className="bg-background-white rounded-lg p-8 shadow-lg">
            <HubSpotForm />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="bg-background-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              FAQs
            </h2>
          </div>
          
          <div className="space-y-12">
            {/* FAQ 1 */}
            <div>
              <h3 className="heading-3 text-text-black mb-4">
                How is SchoolCal different from my SIS iCal feed?
              </h3>
              <p className="body-large text-text-dark-blue">
                Your SIS probably lets you download an iCal feed. The problem is, each staff member or student needs to download their own feed and upload it to their calendar… every time their schedule changes. Besides being a ton of manual work, iCal feeds also aren't publicly visible to the rest of your organization. Which means the individual student or staff member will see that they're busy, but nobody else will. So your staff can't see real-time availability or know when to book them.
              </p>
            </div>

            {/* FAQ 2 */}
            <div>
              <h3 className="heading-3 text-text-black mb-4">
                How long does SchoolCal take to set up?
              </h3>
              <p className="body-large text-text-dark-blue">
                Very quickly. Most schools are onboarded and set up in about 20 minutes.
              </p>
            </div>

            {/* FAQ 3 */}
            <div>
              <h3 className="heading-3 text-text-black mb-4">
                How long does it take to sync my school's events the first time?
              </h3>
              <p className="body-large text-text-dark-blue">
                Usually 2-3 hours, depending on the amount of event data you need to sync. Event syncs are limited to small batches by Google and Outlook, but SchoolCal will continue processing them until they're complete. Each sync after that typically takes 10 minutes or less.
              </p>
            </div>

            {/* FAQ 4 */}
            <div>
              <h3 className="heading-3 text-text-black mb-4">
                Does SchoolCal have to do a full sync each time?
              </h3>
              <p className="body-large text-text-dark-blue">
                No, it only looks for new updates or changes to your events.
              </p>
            </div>

            {/* FAQ 5 */}
            <div>
              <h3 className="heading-3 text-text-black mb-4">
                How does event color coding work?
              </h3>
              <p className="body-large text-text-dark-blue">
                The event colors are inherited by the user's Google calendar settings.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
