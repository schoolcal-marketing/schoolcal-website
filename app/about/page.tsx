import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | SchoolCal',
  description: 'Meet the team, and learn more about our mission.',
  openGraph: {
    title: 'About Us | SchoolCal',
    description: 'Meet the team, and learn more about our mission.',
    type: 'website',
    url: 'https://schoolcal.com/about',
  },
  alternates: {
    canonical: 'https://schoolcal.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* About Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-6">
              About SchoolCal
            </h1>
          </div>
          <div className="text-left">
            <p className="body-large text-text-dark-blue max-w-4xl mx-auto">
              School operations are complex, with lots of moving parts. Every day, you work with complex scheduling needs, coordinating stakeholders, regulatory compliance, space and budget constraints, seasonal cycles, transportation logistics and student needs. Technology can help manage this complexity, but it also introduces new challenges. One of those challenges is scheduling. Despite calendar apps and SIS platforms, coordinating student, staff, spaces, and events remains a challenge for many schools.
            </p>
            <p className="body-large text-text-dark-blue max-w-4xl mx-auto mt-6">
              So, we set out to solve it — working closely with 11 founding school partners (listed below). These partners provided invaluable feedback and insights to help us build a valuable, low-maintenance solution to calendar chaos at schools. Since then, we've helped hundreds of schools put an end to calendar chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Founding Partners Section */}
      <section className="bg-background-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              Our founding school partners
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Partner 1 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Hotchkiss School</p>
            </div>

            {/* Partner 2 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">American School in Japan</p>
            </div>

            {/* Partner 3 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Williston Northampton School</p>
            </div>

            {/* Partner 4 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Riverdale Country School</p>
            </div>

            {/* Partner 5 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Crystal Springs Uplands School</p>
            </div>

            {/* Partner 6 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Hewitt School</p>
            </div>

            {/* Partner 7 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Kent School</p>
            </div>

            {/* Partner 8 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Mary McDowell Friends School</p>
            </div>

            {/* Partner 9 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Columbia Grammar and Prep</p>
            </div>

            {/* Partner 10 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">Colorado Academy</p>
            </div>

            {/* Partner 11 */}
            <div className="bg-secondary rounded-lg p-6 text-center">
              <p className="body-large text-white">St. Hilda's & St. Hugh's</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              Our values
            </h2>
            <p className="body-large text-text-dark-blue max-w-3xl mx-auto">
              We're growing, but our core stays the same. Here's what drives us:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-4">
                Build it Right
              </h3>
              <p className="body-medium text-text-dark-blue">
                We craft software that's clean, intuitive, and "just works". The last thing you need is another app with a steep learning curve and upkeep.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-4">
                Max Value, Fair Price
              </h3>
              <p className="body-medium text-text-dark-blue">
                We build solutions that bring real value, priced so every school can use it.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="heading-3 text-text-black mb-4">
                Schools Are Our World
              </h3>
              <p className="body-medium text-text-dark-blue">
                After 20+ years working with schools, we understand your unique headaches. Our support is fast, human, and focused on helping you achieve your mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-background-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-2 text-text-black mb-4">
              Our team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-aaron.jpeg" alt="Aaron Vogelzang" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Aaron Vogelzang
              </p>
              <p className="body-small text-text-dark-blue">Owner</p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-andy.jpeg" alt="Andy Blyler" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Andy Blyler
              </p>
              <p className="body-small text-text-dark-blue">Product & Engineering</p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-derek.png" alt="Derek Williams" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Derek Williams
              </p>
              <p className="body-small text-text-dark-blue">Product & Engineering</p>
            </div>

            {/* Team Member 4 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-roman.jpg" alt="Roman Yezerskyi" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Roman Yezerskyi
              </p>
              <p className="body-small text-text-dark-blue">Product & Engineering</p>
            </div>

            {/* Team Member 5 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-anne.jpeg" alt="Anne Benson" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Anne Benson
              </p>
              <p className="body-small text-text-dark-blue">Customer Success</p>
            </div>

            {/* Team Member 6 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
               <img src="/images/team/team-cole.png" alt="Cole Levis" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Cole Levis
              </p>
              <p className="body-small text-text-dark-blue">Sales</p>
            </div>

            {/* Team Member 7 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-jill.jpeg" alt="Jill Bergey" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Jill Bergey
              </p>
              <p className="body-small text-text-dark-blue">Sales</p>
            </div>

            {/* Team Member 8 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-garrett.jpeg" alt="Garrett Sattazahn" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Garrett Sattazahn
              </p>
              <p className="body-small text-text-dark-blue">Sales</p>
            </div>

            {/* Team Member 9 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-alisha.png" alt="Alisha Balmer" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Alisha Balmer 
              </p>
              <p className="body-small text-text-dark-blue">Operations</p>
            </div>

            {/* Team Member 10 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 overflow-hidden">
                {/* Example: Add image src here when available */}
                <img src="/images/team/team-jeremiah.jpeg" alt="Jeremiah Rizzo" className="w-full h-full object-cover" />
              </div>
              <p className="body-large text-text-black mb-2">
                Jeremiah Rizzo
              </p>
              <p className="body-small text-text-dark-blue">Operations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
