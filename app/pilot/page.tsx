import { Metadata } from 'next'
import Link from "next/link";
import CustomCheckIcon from "../components/CustomCheckIcon";
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Start a Free Pilot - SchoolCal',
  description: 'Try SchoolCal free for 3-weeks and see how it can help your school. No contract or obligation. Access all pipelines & features, free.',
  openGraph: {
    title: 'Start a Free Pilot - SchoolCal',
    description: 'Try SchoolCal free for 3-weeks and see how it can help your school. No contract or obligation. Access all pipelines & features, free.',
    type: 'website',
    url: 'https://schoolcal.com/pilot',
    images: [
      {
        url: 'https://schoolcal.com/images/homepage-hero.png',
        width: 1200,
        height: 800,
        alt: 'SchoolCal calendar interface showing schedule management and availability features',
      },
    ],
  },
  alternates: {
    canonical: 'https://schoolcal.com/pilot',
  },
}

export default function Pilot() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background-cream py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Start a free pilot
            </h1>
            <p className="body-large text-text-dark-blue mb-8 max-w-3xl mx-auto">
              <strong>Try SchoolCal free for 3-weeks</strong> and see how it can improve operations at your school. <strong>Setup usually takes less than 30 minutes</strong> once we've set up your account.
            </p>
            
            {/* Checkmark bullets */}
            <div className="flex flex-col gap-4 justify-center items-center mb-8 max-w-2xl mx-auto">
              <div className="flex items-center gap-3">
                <CustomCheckIcon className="w-6 h-6 text-accent-blue flex-shrink-0" />
                <span className="body-medium text-text-dark-blue">No contract or obligation.</span>
              </div>
              <div className="flex items-center gap-3">
                <CustomCheckIcon className="w-6 h-6 text-accent-blue flex-shrink-0" />
                <span className="body-medium text-text-dark-blue">Run test syncs on select accounts.</span>
              </div>
              <div className="flex items-center gap-3">
                <CustomCheckIcon className="w-6 h-6 text-accent-blue flex-shrink-0" />
                <span className="body-medium text-text-dark-blue">Access all pipelines & features, free.</span>
              </div>
            </div>
            
            <div className="flex justify-center">
              <Link 
                href="/pilot/start"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
              >
                Start Your Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 bg-background-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-8">
              What to expect
            </h2>
          </div>
          
          <div className="flex flex-col gap-8 max-w-2xl mx-auto">
            {/* Step 1 */}
            <div className="bg-background-white border border-border-dark rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-vanilla rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-text-black">1</span>
                </div>
                <h3 className="heading-3 text-text-black">
                  Submit the form (30 seconds)
                </h3>
              </div>
              <p className="body-medium text-text-dark-blue">
                This gives us the information we need to set up your account and pilot environment.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-background-white border border-border-dark rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-blue rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-text-black">2</span>
                </div>
                <h3 className="heading-3 text-text-black">
                  Onboard (Less than 30 minutes)
                </h3>
              </div>
              <p className="body-medium text-text-dark-blue">
                After your account is setup, we'll email setup instructions to onboard by yourself or with an onboarding specialist.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-background-white border border-border-dark rounded-lg p-6 shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-accent-melon rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-text-black">3</span>
                </div>
                <h3 className="heading-3 text-text-black">
                  Run a test sync (10 minutes)
                </h3>
              </div>
              <p className="body-medium text-text-dark-blue">
                Select what you'd like to sync and how it should display. Then run a test sync to any user calendars of your choosing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-background-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-6">
              Low cost. High value. Easy maintenance.
            </h2>
            <p className="body-large text-text-dark-blue max-w-3xl mx-auto">
              Join hundreds of schools that are using SchoolCal to improve visibility and school-wide operations.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Quote 1 */}
            <div className="bg-background-white border border-border-dark rounded-lg p-6 shadow-sm">
              <blockquote className="body-medium text-text-dark-blue mb-4">
                "Sometimes you get solutions that cause many more problems than they're worth. That is definitely not the case with SchoolCal. <span className="bg-accent-vanilla px-1 rounded">It just works. It's easy to maintain.</span> Once I get it configured, it's really a <span className="bg-accent-vanilla px-1 rounded">'set it and forget it' sort of scenario</span>."
              </blockquote>
              <cite className="body-small text-text-black font-semibold italic">
                <span className="flex items-center gap-3">
                  <Image src="/logos/customer-seattle-academy-square.jpeg" alt="Seattle Academy logo" width={32} height={32} className="rounded-full object-cover w-8 h-8" />
                  <span>Willy Felton, Director of Information Technology at Seattle Academy</span>
                </span>
              </cite>
            </div>

            {/* Quote 2 */}
            <div className="bg-background-white border border-border-dark rounded-lg p-6 shadow-sm">
              <blockquote className="body-medium text-text-dark-blue mb-4">
                "From <span className="bg-accent-vanilla px-1 rounded">super fast and smooth onboarding to flawless daily sync</span>, it's been <span className="bg-accent-vanilla px-1 rounded">'set it and forget it'. It just works.</span> We weren't sure if it would be worth the money but <span className="bg-accent-vanilla px-1 rounded">it provides a tremendous value to our community</span> to see schedules and availability of others in one place without any manual effort."
              </blockquote>
              <cite className="body-small text-text-black font-semibold italic">
                <span className="flex items-center gap-3">
                  <Image src="/logos/customer-hotchkiss-square.jpeg" alt="The Hotchkiss School logo" width={32} height={32} className="rounded-full object-cover w-8 h-8" />
                  <span>Kevin Warenda, Director of Information Technology at The Hotchkiss School</span>
                </span>
              </cite>
            </div>

            {/* Quote 3 */}
            <div className="bg-background-white border border-border-dark rounded-lg p-6 shadow-sm">
              <blockquote className="body-medium text-text-dark-blue mb-4">
                "SchoolCal is a <span className="bg-accent-vanilla px-1 rounded">game changer</span> for us. It was <span className="bg-accent-vanilla px-1 rounded">easy to set up, easy to manage</span> and <span className="bg-accent-vanilla px-1 rounded">solved an essential problem for us.</span>"
              </blockquote>
              <cite className="body-small text-text-black font-semibold italic">
                <span className="flex items-center gap-3">
                  <Image src="/logos/customer-columbia-grammar-square.jpeg" alt="Columbia Grammar & Preparatory School logo" width={32} height={32} className="rounded-full object-cover w-8 h-8" />
                  <span>Columbia Grammar & Prep School</span>
                </span>
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-background-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="heading-2 text-text-black mb-6">
              Try a free test sync
            </h2>
            <p className="body-large text-text-dark-blue mb-8 max-w-3xl mx-auto">
              Start your free, 3-week pilot to see how SchoolCal can benefit your school. Try all features and pipelines without pressure or obligation.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/pilot/start"
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
              >
                Start Your Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Options Section */}
      <section className="py-20 bg-background-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-text-black mb-8">
              Not ready to pilot?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Watch a demo */}
            <div className="bg-accent-vanilla rounded-lg p-6">
              <Link 
                href="/product" 
                className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity duration-300"
              >
                <h3 className="heading-3 text-text-black">
                  Watch a demo
                </h3>
                <svg className="w-5 h-5 text-text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="body-medium text-text-dark-blue">
                Learn how SchoolCal works in under 3 minutes.
              </p>
            </div>

            {/* Book a call */}
            <div className="bg-accent-blue rounded-lg p-6">
              <Link 
                href="/demo" 
                className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity duration-300"
              >
                <h3 className="heading-3 text-text-black">
                  Book a call
                </h3>
                <svg className="w-5 h-5 text-text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="body-medium text-text-dark-blue">
                See how SchoolCal can serve your community.
              </p>
            </div>

            {/* Get a quote */}
            <div className="bg-accent-melon rounded-lg p-6">
              <Link 
                href="/pricing" 
                className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity duration-300"
              >
                <h3 className="heading-3 text-text-black">
                  Get a quote
                </h3>
                <svg className="w-5 h-5 text-text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <p className="body-medium text-text-dark-blue">
                Get an estimate based on your exact needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
