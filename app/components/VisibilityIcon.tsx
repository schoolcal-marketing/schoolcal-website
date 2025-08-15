"use client";
import { useEffect, useState } from "react";
import { Eye, EyeClosed } from "lucide-react";

const VisibilityIcon = () => {
  const [isAfterSectionVisible, setIsAfterSectionVisible] = useState(false);
  
  // Force initial state on mobile
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setIsAfterSectionVisible(false);
      const afterSection = document.querySelector('[data-section="after"]');
      const imageContainer = afterSection?.querySelector('.relative');
      if (imageContainer) {
        imageContainer.classList.remove('after-section-in-view');
      }
    }
  }, []);

  useEffect(() => {
    const afterSection = document.querySelector('[data-section="after"]');
    if (!afterSection) return;

    const imageContainer = afterSection.querySelector('.relative');
    
    // Check if we're on mobile
    const isMobile = window.innerWidth < 768;
    
    // On mobile, observe the image itself instead of the section
    const targetElement = isMobile ? imageContainer : afterSection;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isVisible = entry.isIntersecting;
          
          console.log('Intersection Observer:', {
            isMobile,
            scrollY: window.scrollY,
            isVisible,
            intersectionRatio: entry.intersectionRatio,
            boundingClientRect: entry.boundingClientRect
          });
          
          // On mobile, we need to be more careful about the initial state
          if (isMobile && window.scrollY < 100) {
            // If we're at the top of the page on mobile, don't trigger yet
            console.log('Mobile at top - forcing initial state');
            setIsAfterSectionVisible(false);
            if (imageContainer) {
              imageContainer.classList.remove('after-section-in-view');
            }
          } else {
            console.log('Setting visibility to:', isVisible);
            setIsAfterSectionVisible(isVisible);
            
            // Also update the image container
            if (imageContainer) {
              if (isVisible) {
                imageContainer.classList.add('after-section-in-view');
              } else {
                imageContainer.classList.remove('after-section-in-view');
              }
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -30% 0px'
      }
    );

    observer.observe(targetElement);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="absolute top-8 left-8 z-10">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center relative shadow-lg transition-colors duration-300 visibility-icon-container ${isAfterSectionVisible ? 'after-section-in-view' : ''}`}>
        <div className="eye-closed">
          <EyeClosed className="w-10 h-10 text-primary" />
        </div>
        <div className="eye-open">
          <Eye className="w-10 h-10 text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default VisibilityIcon;
