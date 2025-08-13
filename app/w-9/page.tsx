import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SchoolCal W-9 | Tax Information',
  description: 'Download SchoolCal W-9 tax form for business purposes.',
  openGraph: {
    title: 'SchoolCal W-9 | Tax Information',
    description: 'Download SchoolCal W-9 tax form for business purposes.',
    type: 'website',
  },
  alternates: {
    canonical: '/w-9',
  },
};

export default function W9Page() {
  return (
    <div className="min-h-screen bg-background-white">
      {/* W-9 Hero Section */}
      <section className="bg-background-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-1 text-text-black mb-8">
              SchoolCal W-9
            </h1>
            <a
              href="https://drive.google.com/file/d/1KY-k-NaiUvCJ4_asHpSHfeBHFWWLWRGb/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl inline-block"
            >
              View W-9
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
