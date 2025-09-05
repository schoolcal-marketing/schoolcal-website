import { Metadata } from 'next'
import Image from "next/image"
import { 
  BookOpen, 
  Trophy, 
  Users, 
  UserCheck, 
  Calendar, 
  RotateCcw, 
  Gift,
  Calendar as CalendarIcon,
  Mail,
  ChevronDown
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sync Veracross Schedules to Google or Outlook | SchoolCal',
  description: 'Automatically sync Veracross schedules and events to users primary Google or Outlook calendars.',
  openGraph: {
    title: 'Veracross Integration - SchoolCal',
    description: 'Seamlessly integrate SchoolCal with Veracross Student Information System for automatic calendar synchronization and management.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://schoolcal.com/integrations/veracross',
  },
}

export default function VeracrossIntegrationPage() {
  return (
    <div className="min-h-screen bg-background-white">
      <style dangerouslySetInnerHTML={{
        __html: `
          input[name="accordion"]:checked + label + div[data-content] {
            display: block !important;
          }
          input[name="accordion"]:checked + label .chevron {
            transform: rotate(180deg);
          }
          .accordion-item:hover {
            background-color: rgb(249 250 251);
          }
          .accordion-item:hover label {
            background-color: transparent !important;
          }
        `
      }} />
      {/* Hero Section */}
      <section className="bg-background-cream py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="heading-display text-text-black mb-6">
                Sync Veracross schedules to Google or Outlook calendars
              </h1>
              <p className="max-w-2xl mx-auto body-large text-text-dark-blue mb-8">
                Automatically sync event data from Veracross to staff and students' primary Google or Outlook calendars.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a 
                  href="/demo" 
                  className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
                >
                  Book a Demo
                </a>
              </div>
            </div>
            
            {/* Calendar Interface Image */}
            <div className="max-w-7xl mx-auto">
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
              Trusted by Veracross schools like...
            </h2>
          </div>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
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
            
            {/* Customer Logo 6 - Duplicate one for 6 total */}
            <div className="w-40 h-20 bg-background-white rounded-lg flex items-center justify-center border border-border shadow-sm p-4">
              <Image
                src="/logos/customer-breck.png"
                alt="Customer school logo"
                width={140}
                height={56}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pipelines Section */}
      <section className="py-20 bg-background-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Sync Veracross... */}
            <div>
              <h2 className="heading-2 text-text-black mb-8">
                Sync Veracross...
              </h2>
              
              {/* Accordion Features Stack */}
              <div className="space-y-4">
                {/* Class Schedules */}
                <div className="bg-background-white rounded-lg shadow-md border border-border accordion-item">
                  <input type="checkbox" name="accordion" id="class-schedules" className="hidden" />
                  <label 
                    htmlFor="class-schedules"
                    className="w-full p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-3 text-text-black">
                        Class Schedules
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-text-dark-blue transition-transform duration-200 chevron" />
                  </label>
                  <div className="px-6 pb-6 hidden" data-content>
                    <p className="body-medium text-text-dark-blue">
                      Sync teacher and student class schedules directly to their primary Google calendars. As schedules shift in Veracross (add/drops, alternate block schedules, etc.), availability automatically updates in real-time. Beyond just helping individuals, this creates school-wide visibility that solves the perpetual challenge of finding meeting times across busy schedules.
                    </p>
                  </div>
                </div>

                {/* Athletic Events */}
                <div className="bg-background-white rounded-lg shadow-md border border-border accordion-item">
                  <input type="checkbox" name="accordion" id="athletic-events" className="hidden" />
                  <label 
                    htmlFor="athletic-events"
                    className="w-full p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Trophy className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-3 text-text-black">
                        Athletic Events
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-text-dark-blue chevron transition-transform duration-200" />
                  </label>
                  <div className="px-6 pb-6 hidden" data-content>
                    <p className="body-medium text-text-dark-blue">
                      Never be caught off-guard by games or practices again! Sync athletic schedules straight to players' and coaches' primary calendars. This visibility extends beyond teams to your entire community for smoother scheduling. Bonus feature: You can set event "start times" based on class dismissal times (rather than official event times) to accurately reflect total unavailability periods.
                    </p>
                  </div>
                </div>

                {/* Group Events */}
                <div className="bg-background-white rounded-lg shadow-md border border-border accordion-item">
                  <input type="checkbox" name="accordion" id="group-events" className="hidden" />
                  <label 
                    htmlFor="group-events"
                    className="w-full p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Users className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-3 text-text-black">
                        Group Events
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-text-dark-blue chevron transition-transform duration-200" />
                  </label>
                  <div className="px-6 pb-6 hidden" data-content>
                    <p className="body-medium text-text-dark-blue">
                      Start syncing Veracross Group Events to general/overlay calendars with precision. SchoolCal handles both public and non-public events, giving you complete control over what displays and how it appears to your community or the wider world. Perfect for division calendars (private), faculty schedules (private), athletic events (public), team calendars (private), school-wide calendars (public), parent events (public), and more.
                    </p>
                  </div>
                </div>

                {/* Group Event Attendance */}
                <div className="bg-background-white rounded-lg shadow-md border border-border accordion-item">
                  <input type="checkbox" name="accordion" id="group-event-attendance" className="hidden" />
                  <label 
                    htmlFor="group-event-attendance"
                    className="w-full p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <UserCheck className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-3 text-text-black">
                        Group Event Attendance
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-text-dark-blue chevron transition-transform duration-200" />
                  </label>
                  <div className="px-6 pb-6 hidden" data-content>
                    <p className="body-medium text-text-dark-blue">
                      Bring clarity by syncing Veracross event attendance records directly to teacher and/or student primary calendars. This puts essential information exactly where people already look daily. Ideal for staff/faculty meetings, parent-teacher conferences, field trips, admissions events, development functions, school celebrations, and beyond!
                    </p>
                  </div>
                </div>

                {/* Resource Reservations */}
                <div className="bg-background-white rounded-lg shadow-md border border-border accordion-item">
                  <input type="checkbox" name="accordion" id="resource-reservations" className="hidden" />
                  <label 
                    htmlFor="resource-reservations"
                    className="w-full p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-3 text-text-black">
                        Resource Reservations
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-text-dark-blue chevron transition-transform duration-200" />
                  </label>
                  <div className="px-6 pb-6 hidden" data-content>
                    <p className="body-medium text-text-dark-blue">
                      Sync Veracross resource reservations to dedicated calendar spaces, making room and resource availability instantly visible within your regular calendar view. This simplifies booking your valuable school resources including services, rooms, shared spaces, and equipment. Customize your sync by data type (group events, class schedules, reservations), resource category (services, rooms, gyms, fields), or specific individual resources.
                    </p>
                  </div>
                </div>

                {/* Rotation Days */}
                <div className="bg-background-white rounded-lg shadow-md border border-border accordion-item">
                  <input type="checkbox" name="accordion" id="rotation-days" className="hidden" />
                  <label 
                    htmlFor="rotation-days"
                    className="w-full p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <RotateCcw className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-3 text-text-black">
                        Rotation Days
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-text-dark-blue chevron transition-transform duration-200" />
                  </label>
                  <div className="px-6 pb-6 hidden" data-content>
                    <p className="body-medium text-text-dark-blue">
                      Does your school use day rotations beyond the standard Monday-through-Friday? Sync "Day Labels" as free all-day events on primary calendars to bring clarity to everyone's schedule. This feature helps students, parents and teachers navigate rotating schedules, while also supporting cross-over teachers, HR, development, admissions, and tech teams who operate on traditional weekday schedules.
                    </p>
                  </div>
                </div>

                {/* Birthday Calendars */}
                <div className="bg-background-white rounded-lg shadow-md border border-border accordion-item">
                  <input type="checkbox" name="accordion" id="birthday-calendars" className="hidden" />
                  <label 
                    htmlFor="birthday-calendars"
                    className="w-full p-6 text-left flex items-center justify-between transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Gift className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="heading-3 text-text-black">
                        Birthday Calendars
                      </h3>
                    </div>
                    <ChevronDown className="w-5 h-5 text-text-dark-blue chevron transition-transform duration-200" />
                  </label>
                  <div className="px-6 pb-6 hidden" data-content>
                    <p className="body-medium text-text-dark-blue">
                      Celebrate your community members on their special days without the hassle of manual tracking. SchoolCal syncs birthdates (excluding years) to one or multiple calendars for your community. Customize syncs to exclude certain users, create separate calendars for different divisions, distinguish between student and employee birthdays, or extend celebrations to digital signage. Make recognition effortless and personal!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - With Google or Outlook */}
            <div>
              <h2 className="heading-2 text-text-black mb-8">
                ...With
              </h2>
              
              <div className="space-y-6">
                {/* Google Calendar */}
                <div className="bg-background-white rounded-lg p-6 shadow-md border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src="/logos/google-square.png"
                      alt="Google Calendar"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="heading-3 text-text-black mb-3">
                    Google Calendar
                  </h3>
                  <p className="body-medium text-text-dark-blue">
                    Enable effortless cross-device access, automatic video conferencing links, and intuitive side-by-side schedule comparison—all within Google's streamlined, mobile-friendly interface that students and staff already know how to use.
                  </p>
                </div>

                {/* Outlook Calendar */}
                <div className="bg-background-white rounded-lg p-6 shadow-md border border-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Image
                      src="/logos/outlook-square.png"
                      alt="Outlook Calendar"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                  <h3 className="heading-3 text-text-black mb-3">
                    Outlook Calendar
                  </h3>
                  <p className="body-medium text-text-dark-blue">
                    Seamlessly connect your SIS data to Microsoft's robust scheduling ecosystem to access delegation capabilities, focused time protection, sophisticated meeting polls, and deep integration with Teams, OneDrive and other Microsoft tools your school relies on daily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* vs iCal Section */}
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
                With Veracross iCal feeds
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Inconsistent sync times - if you change details or locations last minute, your attendees may show up at the wrong spot
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">×</span>
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Doesn't impact users' free/busy status - you can see your schedule, but others can't – leading to scheduling tag and double bookings.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">×</span>
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
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Sync automatically, and on-demand - if events change last-minute, just push the change out on-demand
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="body-medium text-text-dark-blue">
                    Show users' actual availability - sync events to users' primary (personal) calendars so they – and others – can see when they're actually free/busy.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                    <span className="text-white text-sm font-bold">✓</span>
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
              Sync Veracross data, effortlessly
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
  )
}