"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

export default function PromoBanner() {
  const [isVisible, setIsVisible] = useState(false);

  // Update this version when you change the banner content
  const BANNER_VERSION = "rebrand-promo-1";

  // Check if this specific banner version was dismissed
  useEffect(() => {
    const dismissedVersion = sessionStorage.getItem("promo-banner-dismissed");
    if (dismissedVersion === BANNER_VERSION) {
      setIsVisible(false);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("promo-banner-dismissed", BANNER_VERSION);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-background-dark text-white px-4 py-3 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Centered Content Group */}
        <div className="flex-1 flex items-center justify-center gap-4">
          <p className="text-sm sm:text-base font-medium text-center">
            New SchoolCal look: same app, fresh brand. See how we’re advancing our mission.
          </p>
          <Link
            href="/articles/rebrand"
            className="bg-white text-text-dark-blue px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Read Article
          </Link>
        </div>

        {/* Close Button - Positioned absolutely on the right */}
        <div className="flex-shrink-0">
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors p-1"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
