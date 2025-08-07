"use client";
import { useEffect } from "react";
import Image from "next/image";

const personas = [
  {
    id: "leadership",
    title: "Leadership",
    heading: "See your entire day at a glance in the calendar app you already use",
    bullets: [
      "Let staff book time with you instantly when decisions are needed",
      "Free up your team to spend more time serving students (and less scheduling them)",
      "Streamline decision-making with real-time availability insights"
    ],
    image: "/images/persona-leadership.jpg"
  },
  {
    id: "administrative",
    title: "Administrative",
    heading: "End the endless email chains and calendar juggling once and for all",
    bullets: [
      "Spend more time supporting staff & families, and less coordinating them",
      "Save dozens of hours a month coordinating everyone",
      "Eliminate scheduling conflicts and double-bookings automatically"
    ],
    image: "/images/persona-administrative.jpg"
  },
  {
    id: "academic",
    title: "Academic",
    heading: "Always know what's on your plate, no matter what day it is",
    bullets: [
      "Collaborate with other teachers or find classes to sit in on, effortlessly",
      "See leader's availability and book time when you need support",
      "Keep your schedule organized without managing multiple calendars"
    ],
    image: "/images/persona-academic.jpg"
  },
  {
    id: "student-support",
    title: "Student Support",
    heading: "Find students without hunting for them",
    bullets: [
      "View student availability and book them in seconds",
      "Coordinate support services more efficiently",
      "Track student appointments and interventions seamlessly"
    ],
    image: "/images/persona-student-support.jpg"
  },
  {
    id: "it-technology",
    title: "IT/Technology",
    heading: "Provide your school a seamless solution that \"just works\"",
    bullets: [
      "Get everyone using Google or Outlook calendars without the headaches",
      "Solve thousands of daily calendar frustrations without adding to your workload",
      "Reduce support tickets and training requirements significantly"
    ],
    image: "/images/persona-technology.jpg"
  },
  {
    id: "students-parents",
    title: "Students & Parents",
    heading: "Help students own their schedules and build crucial time management skills",
    bullets: [
      "Make getting help as simple as booking an appointment with one click",
      "Give parents a clear window into school life for easier family planning",
      "Empower students to take control of their academic journey"
    ],
    image: "/images/persona-student-parent.jpg"
  }
];

export default function PersonasSection() {
  useEffect(() => {
    // Progressive enhancement: Add tab functionality after page load
    const personaSections = document.querySelectorAll('.persona-section') as NodeListOf<HTMLElement>;
    const tabButtons = document.querySelectorAll('.persona-tab') as NodeListOf<HTMLElement>;
    
    // Hide all sections except the first one
    personaSections.forEach((section, index) => {
      if (index > 0) {
        section.style.display = 'none';
      }
    });
    
    // Add click handlers to tabs
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-persona');
        
        // Update active tab styling
        tabButtons.forEach(btn => {
          btn.classList.remove('bg-primary', 'text-white');
          btn.classList.add('bg-gray-200', 'text-gray-700');
        });
        button.classList.remove('bg-gray-200', 'text-gray-700');
        button.classList.add('bg-primary', 'text-white');
        
        // Show/hide sections
        personaSections.forEach(section => {
          if (section.id === targetId) {
            section.style.display = 'grid';
          } else {
            section.style.display = 'none';
          }
        });
      });
    });
  }, []);

  return (
    <section className="py-20 bg-background-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-text-black mb-8">
            Connect your calendars, connect your school
          </h2>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {personas.map((persona, index) => (
            <button
              key={persona.id}
              data-persona={persona.id}
              className={`persona-tab px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 ${
                index === 0 
                  ? "bg-primary text-white" 
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {persona.title}
            </button>
          ))}
        </div>
        
        {/* Content Area - All personas rendered server-side for SEO */}
        {personas.map((persona) => (
          <div
            key={persona.id}
            id={persona.id}
            className="persona-section grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Content */}
            <div>
              <h3 className="heading-2 text-text-black mb-6">
                {persona.heading}
              </h3>
              <ul className="space-y-4">
                {persona.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="body-medium text-text-dark-blue">
                      {bullet}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative w-full h-80 lg:h-96">
              <Image
                src={persona.image}
                alt={`${persona.title} persona using SchoolCal for calendar management`}
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
