import { Metadata } from 'next'
import Image from "next/image";
import CustomXIcon from '../components/CustomXIcon';
import CustomCheckIcon from '../components/CustomCheckIcon';

export const metadata: Metadata = {
  title: 'Learn How SchoolCal Works in 3 Min| SchoolCal',
  description: 'Watch how SchoolCal syncs your SIS schedules to staff and students\' primary calendars.',
  openGraph: {
    title: 'Product - SchoolCal SIS Calendar Sync Solution',
    description: 'Discover how SchoolCal seamlessly syncs your SIS schedules to staff and students\' primary calendars.',
    type: 'website',
    url: 'https://schoolcal.com/product',
  },
  alternates: {
    canonical: 'https://schoolcal.com/product',
  },
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Product Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="heading-1 text-text-black mb-6">
              Learn how SchoolCal works in under 3 minutes
            </h1>
          </div>
          
          {/* Loom Video Embed */}
          <div className="max-w-4xl mx-auto mb-12">
            <div style={{ position: 'relative', paddingBottom: '56.308654848800835%', height: 0 }}>
              <iframe 
                src="https://www.loom.com/embed/1ffe283095fd48c48c9d3744b3fea1ee?sid=420c19e6-6dd2-4fe8-b30f-7e66fac4a33d" 
                frameBorder="0" 
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a 
              href="/demo" 
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl inline-block"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="bg-background-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              The only solution for real-time availability
            </h2>
            <p className="body-large text-text-dark-blue max-w-3xl mx-auto">
              School operational excellence relies on the ability to see where people are, who's free, and who's busy. Only SchoolCal syncs schedules to users' primary (personal) calendars, so they can see real-time availability and others can book them.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - iCal & Overlay Calendars */}
            <div className="bg-background-sand rounded-lg p-8">
              <h3 className="heading-3 text-text-black mb-6">
                With iCal & Overlay Calendars
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <CustomXIcon className="w-6 h-6 text-accent-melon" />
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Inconsistent sync times - if you change details or locations last minute, your attendees may show up at the wrong spot
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <CustomXIcon className="w-6 h-6 text-accent-melon" />
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Doesn't impact users' free/busy status - you can see your schedule, but others can't – leading to scheduling tag and double bookings.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <CustomXIcon className="w-6 h-6 text-accent-melon" />
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Less granular filtering - you have less control over who you share with, and what metadata you display.
                  </p>
                </li>
              </ul>
            </div>

            {/* Right Column - SchoolCal */}
            <div className="bg-background-white rounded-lg p-8 border border-border shadow-sm">
              <h3 className="heading-3 text-text-black mb-6">
                With SchoolCal
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <CustomCheckIcon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Sync automatically, and on-demand - if events change last-minute, just push the change out on-demand
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <CustomCheckIcon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Show users' actual availability - sync events to users' primary (personal) calendars so they – and others – can see when they're actually free/busy.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-3 mt-0.5">
                    <CustomCheckIcon className="w-6 h-6 text-accent-blue" />
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Customize how events display - select who you want to sync to, and granular metadata you want to display so recipients have the details they need.
                  </p>
                </li>
              </ul>
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

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-2 text-white mb-4">
            Learn how SchoolCal can help you
          </h2>
          <p className="body-large text-white/90 mb-8 max-w-2xl mx-auto">
            Book a personalized demo, or watch a quick overview to see how it works.
          </p>
          <a 
            href="/demo" 
            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
          >
            Book a Demo
          </a>
        </div>
      </section>
    </div>
  );
}
