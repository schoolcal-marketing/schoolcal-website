"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/schoolcal-horizontal-dark.svg"
              alt="SchoolCal"
              width={80}
              height={24}
              className="h-6 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/product" 
              className="body-medium text-text-dark-blue hover:text-primary transition-colors"
            >
              Product
            </Link>
            <Link 
              href="/benefits" 
              className="body-medium text-text-dark-blue hover:text-primary transition-colors"
            >
              Benefits
            </Link>
            <Link 
              href="/pricing" 
              className="body-medium text-text-dark-blue hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              className="body-medium text-text-dark-blue hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="/resources" 
              className="body-medium text-text-dark-blue hover:text-primary transition-colors"
            >
              Resources
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              href="https://go.schoolcal.co/" 
              className="body-medium text-text-dark-blue hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </Link>
            <Link 
              href="/demo" 
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors body-medium"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-dark-blue" />
            ) : (
              <Menu className="w-6 h-6 text-text-dark-blue" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background-white border-t border-border">
              {/* Mobile Navigation Links */}
              <Link 
                href="/product" 
                className="block px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Product
              </Link>
              <Link 
                href="/benefits" 
                className="block px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Benefits
              </Link>
              <Link 
                href="/pricing" 
                className="block px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link 
                href="/resources" 
                className="block px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Resources
              </Link>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Link 
                  href="https://go.schoolcal.co/" 
                  className="block px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
                <Link 
                  href="/demo" 
                  className="block mt-2 mx-3 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors body-medium text-center"
                  onClick={closeMobileMenu}
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
