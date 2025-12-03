'use client'

import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

export default function HelpArticleExamplePage() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([])
  const [isTicketModalOpen, setIsTicketModalOpen] = useState(false)

  useEffect(() => {
    // Extract all h2 headings from the article
    const articleContent = document.getElementById('article-content')
    if (articleContent) {
      const h2Elements = articleContent.querySelectorAll('h2')
      const headingData = Array.from(h2Elements).map((h2, index) => {
        const id = `section-${index + 1}`
        h2.id = id
        return {
          id,
          text: h2.textContent || ''
        }
      })
      setHeadings(headingData)
    }
  }, [])

  const handleSubmitTicket = (e: React.FormEvent) => {
    e.preventDefault()
    // Example form submission - just close modal for demo
    alert('Ticket submitted! (This is a demo)')
    setIsTicketModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-background-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="sticky top-8">
              {/* Submit Ticket Button */}
              <button
                onClick={() => setIsTicketModalOpen(true)}
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-all duration-300 font-medium body-medium mb-6 shadow-md hover:shadow-lg"
              >
                Submit a ticket
              </button>

              {/* Navigation Menu */}
              <nav className="bg-background-cream rounded-lg p-4 border border-border">
                <h3 className="heading-3 text-text-black mb-4">Table of Contents</h3>
                <ul className="space-y-2">
                  {headings.map((heading) => (
                    <li key={heading.id}>
                      <a
                        href={`#${heading.id}`}
                        className="body-medium text-text-dark-blue hover:text-primary transition-colors block py-2 px-3 rounded hover:bg-background-white"
                        onClick={(e) => {
                          e.preventDefault()
                          const element = document.getElementById(heading.id)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          }
                        }}
                      >
                        {heading.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Article Content */}
          <article className="flex-1 max-w-4xl">
            <header className="mb-8">
              <h1 className="heading-1 text-text-black mb-4">
                Getting Started with SchoolCal Calendar Sync
              </h1>
              <p className="body-large text-text-dark-blue">
                Learn how to set up and configure SchoolCal to automatically sync your school's schedules to Google or Outlook calendars.
              </p>
            </header>

            <div id="article-content" className="prose prose-lg max-w-none">
              <p className="body-medium text-text-dark-blue mb-6">
                SchoolCal makes it easy to keep your school community's calendars up to date by automatically syncing schedules from your Student Information System (SIS) to Google Calendar or Microsoft Outlook. This guide will walk you through the setup process and help you get the most out of SchoolCal's features.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Initial Setup and Configuration
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                Before you begin syncing calendars, you'll need to complete the initial setup process. This involves connecting your SIS account, configuring your calendar preferences, and setting up your sync rules.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                Start by logging into your SchoolCal dashboard and navigating to the Settings section. Here, you'll find options to connect your Student Information System. SchoolCal supports integrations with PowerSchool, Blackbaud, Veracross, Infinite Campus, iSAMS, and FMX.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                Once your SIS is connected, you'll need to choose which calendar platform you want to sync to—either Google Calendar or Microsoft Outlook. You can sync to both platforms if needed, but each requires separate configuration.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Understanding Sync Types
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                SchoolCal supports several different types of calendar syncs, each designed to handle specific types of school data. Understanding these sync types will help you configure the right options for your school's needs.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                Class schedules sync teacher and student class schedules directly to their primary calendars. This ensures that everyone has their daily schedule visible in the calendar app they already use. Resource calendars map your school's rooms and facilities to calendar resources, making it easy to see availability and avoid double bookings.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                Rotation days keep everyone on the same page by syncing cycle days as all-day events. Birthday calendars can automatically celebrate your community by syncing birthdays (without years) to one or multiple calendars. You can customize these to exclude certain users or separate divisions.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                Each sync type can be configured independently, allowing you to choose exactly what data gets synced and to whom. This granular control ensures that users only see the information that's relevant to them.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Configuring User Permissions
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                One of SchoolCal's most powerful features is the ability to control who receives which calendar events. You can filter syncs by user roles, departments, grade levels, or any other criteria that makes sense for your school.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                For example, you might want to sync class schedules only to students and teachers, while keeping resource calendars visible to all staff members. You can also exclude specific users or groups from certain syncs if needed.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                Permissions are managed through the SchoolCal dashboard, where you can create custom filters based on your SIS data. These filters are applied in real-time, so changes to user roles or assignments are automatically reflected in calendar syncs.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Customizing Event Display
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                SchoolCal gives you full control over how events appear in your users' calendars. You can customize event titles, descriptions, visibility settings, and more to ensure that calendar events contain all the information your community needs.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                Event titles can include information like course names, room numbers, teacher names, or any other metadata from your SIS. Descriptions can contain additional details such as course codes, section numbers, or special instructions.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                You can also control event visibility, choosing whether events are public, private, or visible only to specific groups. This is particularly useful for sensitive information or events that should only be visible to certain members of your community.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                All of these display options can be configured per sync type, so you can have different display rules for class schedules versus resource calendars or rotation days.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Testing and Pilot Programs
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                Before rolling out SchoolCal to your entire school, we recommend starting with a pilot program. This allows you to test how events appear in calendars and make any necessary adjustments before a full deployment.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                SchoolCal makes it easy to test syncs with a small group of pilot users. You can select specific users or groups to participate in the pilot, and all syncs will only go to these users until you're ready to expand.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                During the pilot phase, you can review how events look in both Google Calendar and Outlook, test different display configurations, and gather feedback from your pilot users. Once you're satisfied with the setup, you can easily expand the sync to include all users.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                The pilot program also gives you a chance to verify that all your filters and permissions are working correctly, ensuring that users only receive the calendar events they should see.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Managing Syncs and Updates
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                Once your syncs are configured and running, SchoolCal handles updates automatically. When changes occur in your SIS—such as schedule changes, room assignments, or new events—these updates are automatically reflected in your users' calendars.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                SchoolCal syncs on a regular schedule, but you can also trigger manual syncs when needed. This is particularly useful for last-minute changes or when you want to ensure that a specific update is reflected immediately.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                You can view your sync history in the SchoolCal dashboard, which shows a complete log of all data that has been synced. This makes it easy to verify that specific events or changes were successfully synced to calendars.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                If you ever need to pause or disable a sync, you can do so from the dashboard. All syncs can be paused and resumed at any time, giving you full control over when calendar updates occur.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Troubleshooting Common Issues
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                While SchoolCal is designed to work seamlessly, you may occasionally encounter issues. Most problems can be resolved quickly by checking a few common areas.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                If events aren't appearing in calendars, first check that your SIS connection is active and that syncs are enabled. Verify that your filters aren't excluding the users or events you're trying to sync. You can also check the sync history to see if events were successfully processed.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                If events appear but with incorrect information, review your event display settings. Make sure that the metadata fields you're using exist in your SIS and contain the expected data. You may need to adjust your display templates to match your SIS data structure.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                For issues with calendar permissions or visibility, check your user permission settings and event visibility configurations. Remember that users need appropriate calendar permissions in Google or Outlook to receive synced events.
              </p>

              <h2 className="heading-2 text-text-black mt-12 mb-6">
                Best Practices and Tips
              </h2>
              <p className="body-medium text-text-dark-blue mb-4">
                To get the most out of SchoolCal, follow these best practices. Start with a pilot program to test your configuration before rolling out to all users. Use clear, descriptive event titles that include key information like course names and room numbers.
              </p>
              <p className="body-medium text-text-dark-blue mb-4">
                Regularly review your sync history to ensure that all expected events are being synced correctly. Keep your filters and permissions up to date as your school's structure changes. Consider using different sync types for different purposes—for example, separate syncs for academic schedules versus athletic events.
              </p>
              <p className="body-medium text-text-dark-blue mb-6">
                Finally, communicate with your users about what calendar events they should expect to see. This helps set expectations and reduces confusion about which events are synced from SchoolCal versus manually created events.
              </p>
            </div>
          </article>
        </div>
      </div>

      {/* Ticket Submission Modal */}
      {isTicketModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setIsTicketModalOpen(false)}>
          <div className="bg-background-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-background-white border-b border-border px-6 py-4 flex items-center justify-between">
              <h2 className="heading-2 text-text-black">Submit a Support Ticket</h2>
              <button
                onClick={() => setIsTicketModalOpen(false)}
                className="p-2 hover:bg-background-cream rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-text-dark-blue" />
              </button>
            </div>
            <form onSubmit={handleSubmitTicket} className="p-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block body-medium text-text-black mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary body-medium"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block body-medium text-text-black mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary body-medium"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block body-medium text-text-black mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary body-medium"
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block body-medium text-text-black mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary body-medium"
                  >
                    <option value="">Select a category</option>
                    <option value="setup">Setup & Configuration</option>
                    <option value="sync">Sync Issues</option>
                    <option value="permissions">Permissions & Access</option>
                    <option value="display">Event Display</option>
                    <option value="billing">Billing & Account</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block body-medium text-text-black mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary body-medium resize-none"
                  />
                </div>
              </div>
              <div className="flex gap-4 mt-8">
                <button
                  type="button"
                  onClick={() => setIsTicketModalOpen(false)}
                  className="flex-1 bg-background-cream text-text-black px-6 py-3 rounded-lg hover:bg-background-sand transition-colors font-medium body-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors font-medium body-medium"
                >
                  Submit Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

