"use client"

// Onboarding Navigation Component
function OnboardingNav() {
  return (
    <div className="bg-background-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {/* Step 1 - Completed */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="ml-3 body-medium text-text-black font-medium">Start Setup</span>
            </div>
            
            {/* Connector */}
            <div className="w-16 h-0.5 bg-primary"></div>
            
            {/* Step 2 - Current */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">2</span>
              </div>
              <span className="ml-3 body-medium text-text-black font-medium">We'll Prep Your Pilot</span>
            </div>
            
            {/* Connector */}
            <div className="w-16 h-0.5 bg-border"></div>
            
            {/* Step 3 */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-background-cream border-2 border-border rounded-full flex items-center justify-center">
                <span className="text-text-dark-blue text-sm font-medium">3</span>
              </div>
              <span className="ml-3 body-medium text-text-dark-blue">Onboard & Test</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function PilotSetupPage() {
  return (
    <div className="min-h-screen bg-background-cream">
      {/* Onboarding Navigation */}
      <OnboardingNav />
      
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="heading-3 text-text-black mb-4">
            We're setting up your pilot! Here's what happens next…
          </h3>
          <p className="body-large text-text-dark-blue">
            Once your account is ready, a SchoolCal team member will email you login instructions — usually within a few hours (8 AM–5 PM EST).
          </p>
        </div>
        
        <div className="bg-accent-vanilla rounded-lg p-6">
          <p className="body-medium text-text-dark-blue">
            <strong>If you don't see the email within 4 hours</strong>, please check your spam folder or contact us directly at{' '}
            <a 
              href="mailto:pilot@schoolcal.com" 
              className="text-primary hover:text-primary-dark underline"
            >
              pilot@schoolcal.com
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
