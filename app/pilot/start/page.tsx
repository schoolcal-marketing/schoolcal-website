"use client"

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HubSpotAPIForm from '@/app/components/HubSpotAPIForm'

// Onboarding Navigation Component
function OnboardingNav() {
  return (
    <div className="bg-background-white border-b border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {/* Step 1 - Current */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">1</span>
              </div>
              <span className="ml-3 body-medium text-text-black font-medium">Start Setup</span>
            </div>
            
            {/* Connector */}
            <div className="w-16 h-0.5 bg-border"></div>
            
            {/* Step 2 */}
            <div className="flex items-center">
              <div className="w-8 h-8 bg-background-cream border-2 border-border rounded-full flex items-center justify-center">
                <span className="text-text-dark-blue text-sm font-medium">2</span>
              </div>
              <span className="ml-3 body-medium text-text-dark-blue">We'll Prep Your Pilot</span>
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

// Custom Form Component for Pilot Setup
function PilotSetupForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    schoolName: '',
    schoolWebsite: '',
    allowedDomains: '',
    sis: '',
    calendars: [] as string[],
    howDidYouHear: '',
    termsAccepted: false,
    pilotAgreementAccepted: false
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateEmail = (email: string) => {
    if (email.includes('gmail.com')) {
      return 'Please use your school email address'
    }
    return null
  }

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
  }

  const handleCalendarChange = (calendar: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      calendars: checked 
        ? [...prev.calendars, calendar]
        : prev.calendars.filter(c => c !== calendar)
    }))
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailError = validateEmail(formData.email)
      if (emailError) newErrors.email = emailError
    }
    if (!formData.schoolName.trim()) newErrors.schoolName = 'School name is required'
    if (!formData.schoolWebsite.trim()) newErrors.schoolWebsite = 'School website is required'
    if (!formData.allowedDomains.trim()) newErrors.allowedDomains = 'Allowed domains are required'
    if (!formData.sis) newErrors.sis = 'Please select an SIS'
    if (formData.calendars.length === 0) newErrors.calendars = 'Please select at least one calendar'
    if (!formData.termsAccepted) newErrors.termsAccepted = 'You must agree to the terms of service'
    if (!formData.pilotAgreementAccepted) newErrors.pilotAgreementAccepted = 'You must accept the pilot agreement'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check for browser validation errors first
    const form = e.target as HTMLFormElement
    if (!form.checkValidity()) {
      // Let browser show validation messages
      return
    }
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/hubspot/pilot-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form')
      }
      
      // Navigate to setup page after successful submission
      router.push('/pilot/setup')
    } catch (error) {
      console.error('Form submission error:', error)
      setErrors({ submit: 'Failed to submit form. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block body-medium text-text-black mb-2">
            First name *
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-black ${
              errors.firstName ? 'border-red-500' : 'border-border'
            }`}
            placeholder="Jane"
          />
          {errors.firstName && (
            <p className="mt-1 body-small text-red-600">{errors.firstName}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="lastName" className="block body-medium text-text-black mb-2">
            Last name *
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-black ${
              errors.lastName ? 'border-red-500' : 'border-border'
            }`}
            placeholder="Doe"
          />
          {errors.lastName && (
            <p className="mt-1 body-small text-red-600">{errors.lastName}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block body-medium text-text-black mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-black ${
            errors.email ? 'border-red-500' : 'border-border'
          }`}
          placeholder="jane@myschool.com"
        />
        {errors.email && (
          <p className="mt-1 body-small text-red-600">{errors.email}</p>
        )}
      </div>

      {/* School Name */}
      <div>
        <label htmlFor="schoolName" className="block body-medium text-text-black mb-2">
          School name *
        </label>
        <input
          type="text"
          id="schoolName"
          value={formData.schoolName}
          onChange={(e) => handleInputChange('schoolName', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-black ${
            errors.schoolName ? 'border-red-500' : 'border-border'
          }`}
          placeholder="My School"
        />
        {errors.schoolName && (
          <p className="mt-1 body-small text-red-600">{errors.schoolName}</p>
        )}
      </div>

      {/* School Website */}
      <div>
        <label htmlFor="schoolWebsite" className="block body-medium text-text-black mb-2">
          School website address *
        </label>
        <input
          type="url"
          id="schoolWebsite"
          value={formData.schoolWebsite}
          onChange={(e) => handleInputChange('schoolWebsite', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-black ${
            errors.schoolWebsite ? 'border-red-500' : 'border-border'
          }`}
          placeholder="https://www.yourschool.edu"
          title="Please enter the full URL, e.g. https://example.com"
        />
        {errors.schoolWebsite && (
          <p className="mt-1 body-small text-red-600">{errors.schoolWebsite}</p>
        )}
      </div>

      {/* Allowed Domains */}
      <div>
        <label htmlFor="allowedDomains" className="block body-medium text-text-black mb-2">
          Allowed domains *
        </label>
        <input
          type="text"
          id="allowedDomains"
          value={formData.allowedDomains}
          onChange={(e) => handleInputChange('allowedDomains', e.target.value)}
          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-black ${
            errors.allowedDomains ? 'border-red-500' : 'border-border'
          }`}
          placeholder="myschool.com, students.myschool.com, faculty.myschool.com"
        />
        <p className="mt-1 body-small text-text-dark-blue">
          List all domains you'll sync to, e.g. myschool.com, students.myschool.com, faculty.myschool.com
        </p>
        {errors.allowedDomains && (
          <p className="mt-1 body-small text-red-600">{errors.allowedDomains}</p>
        )}
      </div>

      {/* SIS Selection */}
      <div>
        <label className="block body-medium text-text-black mb-2">
          SIS *
        </label>
        <p className="body-small text-text-dark-blue mb-3">Select one</p>
        <div className="space-y-3">
          {['PowerSchool', 'Veracross', 'Blackbaud'].map((sis) => (
            <label key={sis} className="flex items-center">
              <input
                type="radio"
                name="sis"
                value={sis}
                checked={formData.sis === sis}
                onChange={(e) => handleInputChange('sis', e.target.value)}
                className="w-4 h-4 text-primary border-border focus:ring-primary"
              />
              <span className="ml-3 body-medium text-text-black">{sis}</span>
            </label>
          ))}
        </div>
        {errors.sis && (
          <p className="mt-1 body-small text-red-600">{errors.sis}</p>
        )}
      </div>

      {/* Calendar Selection */}
      <div>
        <label className="block body-medium text-text-black mb-2">
          Calendars *
        </label>
        <p className="body-small text-text-dark-blue mb-3">Select all that apply</p>
        <div className="space-y-3">
          {['Google', 'Outlook'].map((calendar) => (
            <label key={calendar} className="flex items-center">
              <input
                type="checkbox"
                checked={formData.calendars.includes(calendar)}
                onChange={(e) => handleCalendarChange(calendar, e.target.checked)}
                className="w-4 h-4 text-primary border-border rounded focus:ring-primary"
              />
              <span className="ml-3 body-medium text-text-black">{calendar}</span>
            </label>
          ))}
        </div>
        {errors.calendars && (
          <p className="mt-1 body-small text-red-600">{errors.calendars}</p>
        )}
      </div>

      {/* How did you hear about us */}
      <div>
        <label htmlFor="howDidYouHear" className="block body-medium text-text-black mb-2">
          How did you hear about us?
        </label>
        <input
          type="text"
          id="howDidYouHear"
          value={formData.howDidYouHear}
          onChange={(e) => handleInputChange('howDidYouHear', e.target.value)}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-text-black"
          placeholder="e.g. Google search, referral, conference, etc."
        />
      </div>

      {/* Terms Checkbox */}
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={formData.termsAccepted}
            onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
            className="w-4 h-4 text-primary border-border rounded focus:ring-primary mt-1"
          />
          <span className="ml-3 body-medium text-text-black">
            I agree to the{' '}
            <Link href="/legal/service-agreement" className="text-primary hover:text-primary-dark underline">
              terms of service
            </Link>
            {' '}&{' '}
            <Link href="/legal/privacy-policy" className="text-primary hover:text-primary-dark underline">
              privacy policy
            </Link>
            {' '}*
          </span>
        </label>
        <p className="mt-1 body-small text-text-dark-blue">
          We take great care to protect your data and keep it secure.
        </p>
        {errors.termsAccepted && (
          <p className="mt-1 body-small text-red-600">{errors.termsAccepted}</p>
        )}
      </div>

      {/* Pilot Agreement Checkbox */}
      <div>
        <label className="flex items-start">
          <input
            type="checkbox"
            checked={formData.pilotAgreementAccepted}
            onChange={(e) => handleInputChange('pilotAgreementAccepted', e.target.checked)}
            className="w-4 h-4 text-primary border-border rounded focus:ring-primary mt-1"
          />
          <span className="ml-3 body-medium text-text-black">
            I understand and accept the Pilot Agreement *
          </span>
        </label>
        <p className="mt-1 body-small text-text-dark-blue">
          This pilot gives you <strong>free access to all SchoolCal features for three weeks.</strong> There's <strong>no obligation to purchase</strong> afterward. If {formData.schoolName || 'your school'} wants to continue using SchoolCal after that time, a new agreement will be provided.
        </p>
        {errors.pilotAgreementAccepted && (
          <p className="mt-1 body-small text-red-600">{errors.pilotAgreementAccepted}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors body-large font-medium"
        >
          {isSubmitting ? 'Submitting...' : 'Submit & Start Pilot'}
        </button>
        {errors.submit && (
          <p className="mt-2 body-small text-red-600 text-center">{errors.submit}</p>
        )}
      </div>
    </form>
  )
}

export default function PilotStartPage() {
  return (
    <div className="min-h-screen bg-background-cream">
      {/* Onboarding Navigation */}
      <OnboardingNav />
      
      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <h3 className="heading-3 text-text-black mb-4">
            Start your setup
          </h3>
          <p className="body-large text-text-dark-blue">
            We'll use this to set up your account and pilot environment
          </p>
        </div>
        
        <div className="bg-background-white border border-border rounded-lg p-8 shadow-sm">
          <PilotSetupForm />
        </div>
      </div>
    </div>
  )
}
