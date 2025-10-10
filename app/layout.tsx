import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PromoBanner from "./components/PromoBanner";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "SchoolCal - Sync SIS schedules to staff & student calendars",
  description: "Sync SIS schedules to staff and students' primary (personal) calendars, so they can see real-time availability, avoid scheduling conflicts, and book meetings instantly.",
  authors: [{ name: "SchoolCal Team" }],
  icons: {
    icon: '/logos/favicon.ico',
    shortcut: '/logos/favicon.ico',
    apple: '/logos/favicon.ico',
  },
  openGraph: {
    title: "SchoolCal - Sync SIS schedules to staff & student calendars",
    description: "Sync SIS schedules to staff and students' primary (personal) calendars, so they can see real-time availability, avoid scheduling conflicts, and book meetings instantly.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Toggle this to show/hide the promo banner
  const SHOW_PROMO_BANNER = true;

  return (
    <html lang="en" className={figtree.variable}>
      <head>
        {/* Fathom - beautiful, simple website analytics */}
        <script src="https://cdn.usefathom.com/script.js" data-site="BCHGHOVK" defer></script>
        {/* / Fathom */}
      </head>
      <body className="font-sans min-h-screen flex flex-col">
        {SHOW_PROMO_BANNER && <PromoBanner />}
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
