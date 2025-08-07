"use client"

import { useEffect } from "react";

export default function HubSpotForm() {
  useEffect(() => {
    // Load HubSpot script only on client side
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/21668382.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="hs-form-frame" 
         data-region="na1" 
         data-form-id="dffd94d9-8745-4e0d-9bf5-9af3edc473f0" 
         data-portal-id="21668382">
    </div>
  );
}
