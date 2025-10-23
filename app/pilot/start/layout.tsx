import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Your Pilot Setup | SchoolCal',
  description: 'Begin your SchoolCal pilot setup. We\'ll use this information to set up your account and pilot environment for a seamless 3-week trial.',
  openGraph: {
    title: 'Start Your Pilot Setup | SchoolCal',
    description: 'Begin your SchoolCal pilot setup. We\'ll use this information to set up your account and pilot environment for a seamless 3-week trial.',
    type: 'website',
    url: 'https://schoolcal.com/pilot/start',
  },
  alternates: {
    canonical: 'https://schoolcal.com/pilot/start',
  },
}

export default function PilotStartLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
