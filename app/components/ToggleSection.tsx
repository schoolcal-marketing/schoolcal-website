"use client";
import { useState, useEffect } from "react";

export default function ToggleSection() {
  const [isCan, setIsCan] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleState = () => {
    setIsCan(!isCan);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('toggle-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="toggle-section" className="py-20 bg-background-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`heading-2 text-text-black mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            When your school
          </h2>
          <div className={`mb-4 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <button
              onClick={toggleState}
              className={`px-6 py-3 rounded-full text-2xl font-semibold transition-all duration-300 ${
                isCan 
                  ? "bg-accent-green text-white shadow-lg shadow-green-200" 
                  : "bg-primary text-white shadow-lg shadow-orange-200"
              } hover:scale-105 active:scale-95 ${
                isVisible ? 'animate-bounce-subtle' : ''
              }`}
            >
              {isCan ? "can" : "can't"}
            </button>
          </div>
          <h2 className={`heading-2 text-text-black transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            see each other's schedules
          </h2>
        </div>

        {/* Content for "can't" state */}
        <div className={`text-center transition-all duration-500 ${isCan ? 'opacity-0 hidden' : 'opacity-100'}`}>
          <p className="body-large text-text-dark-blue mb-8 max-w-3xl mx-auto">
            Your SIS has the schedule, but everyone's actually working in Google and Outlook. They can't see who's free or what spaces are available. So simple scheduling becomes complicated, and the whole school feels it.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Administrators spend hours coordinating people & spaces.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Teachers can't access schedules or observe classes.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Students can't take ownership of their schedules.
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Parents lack visibility into their student's school life.
              </p>
            </div>
          </div>
        </div>

        {/* Content for "can" state */}
        <div className={`text-center transition-all duration-500 ${isCan ? 'opacity-100' : 'opacity-0 hidden'}`}>
          <p className="body-large text-text-dark-blue mb-8 max-w-3xl mx-auto">
            Your SIS schedule data automatically syncs to staff and student calendars. Everyone can see their schedule, and when others are free or busy. So scheduling is a breeze.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Administrators book meetings & spaces in seconds
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Teachers can see their classes and observe others
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Students take ownership of their schedule
              </p>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="body-medium text-text-dark-blue text-left">
                Parents have more visibility
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
