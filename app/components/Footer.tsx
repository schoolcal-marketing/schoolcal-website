import Link from "next/link";
import Image from "next/image";
import { Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-background-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logos/schoolcal-logo-horizontal-light.svg"
                alt="SchoolCal"
                width={120}
                height={32}
                className="h-6 w-auto"
                priority
              />
            </div>
            <p className="body-medium text-background-white/80 mb-6 max-w-md">
              Connect your calendars, connect your school.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@SchoolCalTV" target="_blank" rel="noopener noreferrer" className="text-background-white/60 hover:text-primary transition-colors">
                <span className="sr-only">YouTube</span>
                <Youtube className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/schoolcal-apps/" className="text-background-white/60 hover:text-primary transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="heading-3 text-background-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/product" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Referral Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="heading-3 text-background-white mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://schoolcal.freshdesk.com/" target="_blank" rel="noopener noreferrer" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Support
                </a>
              </li>
              <li>
                <Link href="/legal" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Legal
                </Link>
              </li>
              <li>
                <a href="mailto:admin@schoolcal.co" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Billing Questions
                </a>
              </li>
              <li>
                <a href="mailto:careers@schoolcal.co" className="body-medium text-background-white/60 hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-background-white/20 mt-12 pt-8 flex justify-center">
          <p className="body-small text-background-white/60">
            © 2025 SchoolCal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
