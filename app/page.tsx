import { Metadata } from 'next'
import RotatingLogo from "./components/RotatingLogo";
import Image from "next/image";
import ToggleSection from "./components/ToggleSection";
import PersonasSection from "./components/PersonasSection";

export const metadata: Metadata = {
  title: 'SchoolCal - Sync SIS Schedules to Staff & Student Calendars',
  description: 'Sync your SIS schedules to staff and students\' primary calendars. See real-time availability, avoid scheduling conflicts, and book meetings instantly. Works with Veracross, Powerschool, and Blackbaud.',
  openGraph: {
    title: 'SchoolCal - Sync SIS Schedules to Staff & Student Calendars',
    description: 'Sync your SIS schedules to staff and students\' primary calendars. See real-time availability, avoid scheduling conflicts, and book meetings instantly.',
    type: 'website',
    url: 'https://schoolcal.com',
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
    canonical: 'https://schoolcal.com',
  },
}

export default function Home() {
  return (
    <div className="min-h-screen snap-y snap-mandatory">
      {/* Hero Section */}
      <section className="bg-background-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-display text-text-black mb-6">
              Sync schedules
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-baseline sm:justify-center sm:gap-2 mt-4">
                <span className="inline-flex items-center gap-2">
                  from
                  <RotatingLogo
                    logos={[
                      { src: "/logos/sis-veracross.png", alt: "Veracross" },
                      { src: "/logos/sis-powerschool.png", alt: "Powerschool" },
                      { src: "/logos/sis-blackbaud.png", alt: "Blackbaud" },
                    ]}
                    className="mx-2"
                  />
                </span>
                <span className="inline-flex items-center gap-2">
                  to
                  <RotatingLogo
                    logos={[
                      { src: "/logos/calendar-google.png", alt: "Google Calendar" },
                      { src: "/logos/calendar-outlook.png", alt: "Outlook" },
                    ]}
                    className="mx-2"
                    startDelay={1200}
                  />
                </span>
              </div>
            </h1>
            <p className="body-large text-text-dark-blue mb-8 max-w-2xl mx-auto">
              Sync SIS schedules to staff and students' primary calendars, so they can <strong>see real-time availability</strong>, <strong>avoid scheduling conflicts</strong>, and <strong>book meetings instantly</strong> – instead of seeing blank calendars and playing scheduling tag.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="/demo" 
                className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
              >
                Book a Demo
              </a>
            </div>
            
            {/* Calendar Interface Image */}
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <Image
                  src="/images/homepage-hero.png"
                  alt="SchoolCal calendar interface showing schedule management and availability features"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Section */}
      <section className="py-12 pb-40 bg-background-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-text-black mb-4">
              Streamlining scheduling at public & private schools like...
            </h2>
          </div>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Customer Logo 1 */}
            <div className="w-40 h-20 bg-background-white rounded-lg flex items-center justify-center border border-border shadow-sm p-4">
              <Image
                src="/logos/customer-breck.png"
                alt="Customer school logo"
                width={140}
                height={56}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Customer Logo 2 */}
            <div className="w-40 h-20 bg-background-white rounded-lg flex items-center justify-center border border-border shadow-sm p-4">
              <Image
                src="/logos/customer-hotchkiss.png"
                alt="Customer school logo"
                width={140}
                height={56}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Customer Logo 3 */}
            <div className="w-40 h-20 bg-background-white rounded-lg flex items-center justify-center border border-border shadow-sm p-4">
              <Image
                src="/logos/customer-new-trier.png"
                alt="Customer school logo"
                width={140}
                height={56}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Customer Logo 4 */}
            <div className="w-40 h-20 bg-background-white rounded-lg flex items-center justify-center border border-border shadow-sm p-4">
              <Image
                src="/logos/customer-poly-prep.png"
                alt="Customer school logo"
                width={140}
                height={56}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            {/* Customer Logo 5 */}
            <div className="w-40 h-20 bg-background-white rounded-lg flex items-center justify-center border border-border shadow-sm p-4">
              <Image
                src="/logos/customer-ravenscroft.png"
                alt="Customer school logo"
                width={140}
                height={56}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Before SchoolCal Section */}
      <section className="py-40 bg-background-dark snap-start overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg space-y-6">
                <h2 className="heading-2 text-white">
                  Before SchoolCal
                </h2>
                <p className="body-large text-white/90">
                  Your SIS has the schedule, but everyone's actually working in Google and Outlook. They can't see who's free or what spaces are available. So <strong>simple scheduling becomes complicated, and the whole school feels it.</strong>
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="body-medium text-white/90">
                      Administrators spend hours coordinating people & spaces.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="body-medium text-white/90">
                      Teachers can't access schedules or observe classes.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="body-medium text-white/90">
                      Students can't take ownership of their schedules.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <span className="body-medium text-white/90">
                      Parents lack visibility into their student's school life.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <Image
              src="/images/before.png"
              alt="Before SchoolCal - showing scheduling chaos and complexity"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </section>

      {/* After SchoolCal Section */}
      <section className="py-40 bg-background-cream snap-start overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg space-y-6">
                <h2 className="heading-2 text-text-black">
                  After SchoolCal
                </h2>
                <p className="body-large text-text-dark-blue">
                  Your SIS schedule data automatically syncs to staff and student calendars. Everyone can see their schedule, and when others are free or busy. So <strong>scheduling is a breeze.</strong>
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="body-medium text-text-dark-blue">
                      Administrators book meetings & spaces in seconds
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="body-medium text-text-dark-blue">
                      Teachers can see their classes and observe others
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="body-medium text-text-dark-blue">
                      Students take ownership of their schedule
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="body-medium text-text-dark-blue">
                      Parents have more visibility
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <Image
              src="/images/after.png"
              alt="After SchoolCal - showing streamlined scheduling and organization"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </section>

      {/* Before/After Toggle Section */}
      {/* <ToggleSection /> */}

      {/* Solution Section */}
      <section className="py-20 bg-background-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-text-black mb-6">
              Fix calendar chaos for good
            </h2>
            <p className="body-large text-text-dark-blue max-w-3xl mx-auto">
              Most solutions sync events via iCal, which adds events to "overlay" or "secondary" calendars. This means the calendar user see they're busy, but nobody else can. SchoolCal uses Google & Outlook's native API to sync events to your staff's primary calendars. So events actually impact their free/busy status, and they can see each other's availability in real-time.
            </p>
          </div>
          
          {/* Solution Image */}
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <Image
                src="/images/diagram.png"
                alt="SchoolCal solution diagram showing native API integration vs iCal overlay"
                width={1200}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-8">
              Maximum control, minimum maintenance
            </h2>
            
            {/* Testimonial */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="flex items-center justify-center mb-4">
                <Image
                  src="/logos/customer-hotchkiss.png"
                  alt="Hotchkiss School logo"
                  width={80}
                  height={32}
                  className="h-6 w-auto object-contain"
                />
              </div>
              <blockquote className="body-large text-text-dark-blue mb-2 italic">
                "We were skeptical that a new tool could actually deliver value and not just be one more tool to manage and troubleshoot. But from super fast and smooth onboarding to flawless daily sync <strong>it's been set it and forget it. It just works.</strong>"
              </blockquote>
              <cite className="body-medium text-text-black font-semibold">
                - Kevin Warenda
              </cite>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                No new logins or learning curve
              </h3>
              <p className="body-medium text-text-dark-blue">
                SchoolCal displays events natively on the calendar app your school already uses, so there's nothing new for your staff to learn, or logins to remember.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Set it and forget it
              </h3>
              <p className="body-medium text-text-dark-blue">
                Get set up in 20 minutes, and let SchoolCal take it from there. New events or changes sync automatically, no ongoing maintenance required.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Only sync what you need
              </h3>
              <p className="body-medium text-text-dark-blue">
                SchoolCal can sync Class Schedules, Athletic Events, Calendar Events, Rooms & Resources, and Day Labels. Pick the type of data you want synced, and only pay for the connections you need.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Filter out irrelevant data
              </h3>
              <p className="body-medium text-text-dark-blue">
                Include or exclude where you want the data to sync by native SIS filters (e.g. Course Type, School Levels, Students). Exclude people, classes, or courses from the sync.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Customize how events display in calendars
              </h3>
              <p className="body-medium text-text-dark-blue">
                Customize the title and description, include the block, set event visibility to public/private, and choose whether invitees can see other guests.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Test syncs before releasing to your school
              </h3>
              <p className="body-medium text-text-dark-blue">
                Do a full sync for a group of Pilot Users to test how the events will look when synced to their calendar, so you can make sure it's displaying correctly before rolling it out.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Sync last minute changes on-demand
              </h3>
              <p className="body-medium text-text-dark-blue">
                Are classes unexpectedly shortened, delayed, or canceled? Room availability changed at the last minute? Initiate a fresh sync in 1-click to quickly update staff and student calendars.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Check your sync history at a glance
              </h3>
              <p className="body-medium text-text-dark-blue">
                Want to double check today's sync, or make sure a specific event got passed through correctly? View a history of all data that got synced in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <PersonasSection />

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-white mb-4">
            Learn how SchoolCal can help you
          </h2>
          <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
            Book a personalized demo, or watch a quick overview to see how it works.
          </p>
          <a 
            href="/demo" 
            className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-background-cream transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
          >
            Book a Demo
          </a>
        </div>
      </section>
    </div>
  );
}
