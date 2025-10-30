import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benefits For Your School | SchoolCal',
  description: 'See what benefits SchoolCal can bring to your school',
  openGraph: {
    title: 'Benefits - Real-Time Availability & Conflict-Free Scheduling | SchoolCal',
    description: 'See real-time availability, avoid scheduling conflicts, and book meetings instantly with SchoolCal.',
    type: 'website',
    url: 'https://schoolcal.com/benefits',
  },
  alternates: {
    canonical: 'https://schoolcal.com/benefits',
  },
}

export default function BenefitsPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* Benefits Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              Bring your calendars (and school) together
            </h1>
            <p className="body-large text-text-dark-blue max-w-3xl mx-auto">
              Here are a few of the unexpected benefits our school partners have told us SchoolCal brings.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Increase cross-department collaboration
              </h3>
              <p className="body-medium text-text-dark-blue">
                Real-time visibility into peer activities and events naturally leads teachers to book sessions and observe classrooms, sparking unexpected collaboration and innovative teaching approaches they wouldn't have discovered otherwise.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Make it easier for parents to coordinate life events
              </h3>
              <p className="body-medium text-text-dark-blue">
                With visibility into their children's academic schedules, parents can better plan life commitments like vacations and medical appointments with minimal disruptions to their child's education.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Reduce anxiety around changing academic schedules
              </h3>
              <p className="body-medium text-text-dark-blue">
                Smooth the transition to a more complex scheduling system by automatically syncing teachers' new schedules to their calendar apps, so they always know where they're meant to be next (without having to keep it all in their head).
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Move to Google or Outlook with less friction
              </h3>
              <p className="body-medium text-text-dark-blue">
                Make a successful migration to Google or Outlook native scheduling by eliminating previous headaches: no more manual ICS imports or constantly updating calendar feeds.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Bridge academic and support silos
              </h3>
              <p className="body-medium text-text-dark-blue">
                Bridge the gap between academic staff navigating rotating classroom blocks and the support staff who need to schedule them.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="bg-background-white rounded-lg p-6 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-3">
                Help students take responsibility
              </h3>
              <p className="body-medium text-text-dark-blue">
                Give students the ability to manage their own schedules by showing them exactly where they need to be and which teachers and counselors are available right now, letting them book help with just a few clicks rather than chasing people down.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              What schools are saying…
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "One of the most effective ways to turbo-charge collaboration between students, teachers and colleagues is by having accurate calendars and a culture that permits using them to schedule meetings. SchoolCal is an essential tool that facilitates that collaboration at Riverdale Country School."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">JK</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    JONATHAN KING
                  </cite>
                  <p className="body-small text-text-dark-blue">RIVERDALE COUNTRY SCHOOL</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "Our faculty and administrators have been thrilled with SchoolCal. How did we ever live without it?!?!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">EF</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    ELI FORSYTHE
                  </cite>
                  <p className="body-small text-text-dark-blue">ST. ANN'S SCHOOL</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "SchoolCal has totally eliminated the annoying, time-consuming process of manually uploading events to calendars for our teachers. SchoolCal syncs their class schedule to Google calendar so a teacher's schedule remains up-to-date without them having to be involved in any way. Our teachers could not be happier!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">SS</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    SUE SCOTT
                  </cite>
                  <p className="body-small text-text-dark-blue">ST. PAUL ACADEMY</p>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "We were skeptical that a new tool could actually deliver value and not just be 'one more tool to manage and troubleshoot.' But from super fast and smooth onboarding to flawless daily sync it's been set it and forget it. It just works. We weren't sure if it would be worth the money but it provides a tremendous value to our community to see schedules and availability of others in one place without any manual effort."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">KW</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    KEVIN WARENDA
                  </cite>
                  <p className="body-small text-text-dark-blue">THE HOTCHKISS SCHOOL</p>
                </div>
              </div>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "On day one SchoolCal had already changed my life (for the better)!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">B</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    BRECK
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "Victory! Our special schedules are now accurate and my teachers are thrilled! This functionality is a game-changer!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">SPA</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    ST PAUL ACADEMY
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 7 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "You just solved a quarter century long issue - you have reached god status here in south central PA!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">M</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    MERCERSBURG
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 8 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "SchoolCal has made the process of syncing teacher and student schedules to their google calendars seamless!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">N</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    NOBLES
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 9 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "From a faculty/staff perspective, SchoolCal is life-changing!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">HC</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    HOLY CHILD
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 10 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "SchoolCal is a game changer for us. It was easy to set up, easy to manage and solved an essential problem for us."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">CGP</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    COLUMBIA GRAMMAR & PREP
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 11 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "This is really cool. I love things that make life easier!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">ASIJ</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    ASIJ
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 12 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "Really love how this product will help coordinate with student ambassadors and tour guides!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">HC</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    HOLY CHILD
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 13 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "Having all of our calendars visible makes it easier to coordinate our busy day."
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">SA</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    SEATTLE ACADEMY
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 14 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "I love this simple but extremely useful tool!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">N</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    NOBLES
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 15 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "Having the ability to sync our Veracross class schedule to Google Calendar with a click of a button has been a game changer for Hewitt!"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">H</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    HEWITT
                  </cite>
                </div>
              </div>
            </div>

            {/* Testimonial 16 */}
            <div className="bg-background-white rounded-lg p-6 shadow-lg">
              <blockquote className="body-medium text-text-dark-blue mb-4 italic">
                "SchoolCal solves a key challenge left by other solutions"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-primary font-semibold text-sm">THS</span>
                </div>
                <div>
                  <cite className="body-medium text-text-black font-semibold not-italic">
                    THE HOTCHKISS SCHOOL
                  </cite>
                </div>
              </div>
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/demo" 
              className="bg-transparent text-white border border-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </a>
            <a 
              href="/pilot" 
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
            >
              Start Free Pilot
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
