import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page Not Found - SchoolCal',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background-white flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          {/* 404 Number */}
          <h1 className="text-9xl font-bold text-primary mb-4">
            404
          </h1>
          
          {/* Main Heading */}
          <h2 className="heading-1 text-text-black mb-6">
            Let's see your hall pass
          </h2>
          
          {/* Description */}
          <p className="body-large text-text-dark-blue mb-8">
            Hmm, we can't find the page you're looking for.
          </p>
        </div>
        
        {/* CTA Button */}
        <Link 
          href="/" 
          className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl inline-block"
        >
          Back to Class
        </Link>
      </div>
    </div>
  );
}
