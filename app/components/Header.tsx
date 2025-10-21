"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isBenefitsDropdownOpen, setIsBenefitsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const benefitsDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleProductDropdown = () => {
    setIsProductDropdownOpen(!isProductDropdownOpen);
  };

  const closeProductDropdown = () => {
    setIsProductDropdownOpen(false);
  };

  const toggleBenefitsDropdown = () => {
    setIsBenefitsDropdownOpen(!isBenefitsDropdownOpen);
  };

  const closeBenefitsDropdown = () => {
    setIsBenefitsDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
      if (benefitsDropdownRef.current && !benefitsDropdownRef.current.contains(event.target as Node)) {
        setIsBenefitsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-background-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/schoolcal-logo.svg"
              alt="SchoolCal"
              width={80}
              height={24}
              className="h-6 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Product Dropdown */}
            <div 
              className="relative" 
              ref={dropdownRef}
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button
                onClick={toggleProductDropdown}
                className="body-medium text-text-dark-blue hover:text-primary transition-colors flex items-center gap-1"
                aria-expanded={isProductDropdownOpen}
                aria-haspopup="true"
              >
                Product
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isProductDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              {isProductDropdownOpen && (
                <>
                  {/* Invisible bridge to maintain hover connection */}
                  <div className="absolute top-full left-0 w-full h-2"></div>
                  <div className="absolute top-full left-0 mt-2 w-72 bg-background-white border border-border rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/product"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeProductDropdown}
                    >
                      All Features
                    </Link>
                    <Link
                      href="/integrations/powerschool"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeProductDropdown}
                    >
                      For PowerSchool
                    </Link>
                    <Link
                      href="/integrations/veracross"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeProductDropdown}
                    >
                      For Veracross
                    </Link>
                    <Link
                      href="/integrations/blackbaud"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeProductDropdown}
                    >
                      For Blackbaud
                    </Link>
                    <Link
                      href="/integrations/isams"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeProductDropdown}
                    >
                      <div className="flex items-center justify-between">
                        <span>For iSAMS</span>
                        <span className="bg-[#FEEAAE] text-text-black px-2 py-1 rounded-full text-xs font-medium">
                          Join Beta
                        </span>
                      </div>
                    </Link>
                    <Link
                      href="/integrations/infinite-campus"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeProductDropdown}
                    >
                      <div className="flex items-center justify-between">
                        <span>For Infinite Campus</span>
                        <span className="bg-[#FEEAAE] text-text-black px-2 py-1 rounded-full text-xs font-medium">
                          Join Beta
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
                </>
              )}
            </div>
            
            {/* Benefits Dropdown */}
            <div 
              className="relative" 
              ref={benefitsDropdownRef}
              onMouseEnter={() => setIsBenefitsDropdownOpen(true)}
              onMouseLeave={() => setIsBenefitsDropdownOpen(false)}
            >
              <button
                onClick={toggleBenefitsDropdown}
                className="body-medium text-text-dark-blue hover:text-primary transition-colors flex items-center gap-1"
                aria-expanded={isBenefitsDropdownOpen}
                aria-haspopup="true"
              >
                Results
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isBenefitsDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Dropdown Menu */}
              {isBenefitsDropdownOpen && (
                <>
                  {/* Invisible bridge to maintain hover connection */}
                  <div className="absolute top-full left-0 w-full h-2"></div>
                  <div className="absolute top-full left-0 mt-2 w-72 bg-background-white border border-border rounded-lg shadow-lg z-50">
                  <div className="py-2">
                    <Link
                      href="/benefits"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeBenefitsDropdown}
                    >
                      Benefits – What schools gain from SchoolCal
                    </Link>
                    <Link
                      href="/stories"
                      className="block px-4 py-3 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 transition-colors"
                      onClick={closeBenefitsDropdown}
                    >
                      Story – How Seattle Academy improved coordination
                    </Link>
                  </div>
                </div>
                </>
              )}
            </div>
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
              {/* Product Dropdown for Mobile */}
              <button
                onClick={toggleProductDropdown}
                className="flex items-center justify-between w-full px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                aria-expanded={isProductDropdownOpen}
              >
                Product
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isProductDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Mobile Dropdown Menu - Conditional rendering with proper event handling */}
              <div className={`transition-all duration-200 ${isProductDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <Link
                  href="/product"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  All Features
                </Link>
                <Link
                  href="/integrations/powerschool"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  For PowerSchool
                </Link>
                <Link
                  href="/integrations/veracross"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  For Veracross
                </Link>
                <Link
                  href="/integrations/blackbaud"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  For Blackbaud
                </Link>
                <Link
                  href="/integrations/isams"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center justify-between">
                    <span>For iSAMS</span>
                    <span className="bg-[#FEEAAE] text-text-black px-2 py-1 rounded-full text-xs font-medium">
                      Join Beta
                    </span>
                  </div>
                </Link>
                <Link
                  href="/integrations/infinite-campus"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  <div className="flex items-center justify-between">
                    <span>For Infinite Campus</span>
                    <span className="bg-[#FEEAAE] text-text-black px-2 py-1 rounded-full text-xs font-medium">
                      Join Beta
                    </span>
                  </div>
                </Link>
              </div>
              
              {/* Benefits Dropdown for Mobile */}
              <button
                onClick={toggleBenefitsDropdown}
                className="flex items-center justify-between w-full px-3 py-2 body-medium text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
                aria-expanded={isBenefitsDropdownOpen}
              >
                Results
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    isBenefitsDropdownOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {/* Mobile Benefits Dropdown Menu - Conditional rendering with proper event handling */}
              <div className={`transition-all duration-200 ${isBenefitsDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <Link
                  href="/benefits"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  Benefits – What schools gain from SchoolCal
                </Link>
                <Link
                  href="/stories"
                  className="block px-3 py-2 body-small text-text-dark-blue hover:text-primary hover:bg-gray-50 rounded-md transition-colors ml-4"
                  onClick={closeMobileMenu}
                >
                  Story – How Seattle Academy improved coordination
                </Link>
              </div>
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
