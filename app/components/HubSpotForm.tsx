"use client"

import { useEffect } from "react";

interface HubSpotFormProps {
  portalId: string;
  formId: string;
  region?: string;
}

export default function HubSpotForm({ portalId, formId, region = "na1" }: HubSpotFormProps) {
  useEffect(() => {
    // Load HubSpot script only on client side
    const script = document.createElement("script");
    script.src = `https://js.hsforms.net/forms/embed/${portalId}.js`;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [portalId]);

  return (
    <div className="hs-form-frame" 
         data-region={region} 
         data-form-id={formId} 
         data-portal-id={portalId}>
    </div>
  );
}
