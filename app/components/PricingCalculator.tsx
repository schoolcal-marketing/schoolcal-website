"use client"

import { useState } from "react";
import { Slider } from "./ui/slider";
import Link from "next/link";

const calculatePublicCost = (students: number) => {
  let annualCost = 0;
  
  // Tier 1: First 1,000 students at $3.00 each
  const firstTier = Math.min(students, 1000);
  annualCost += firstTier * 3;
  
  // Tier 2: Next 1,000 students (1,001-2,000) at $2.00 each
  if (students > 1000) {
    const secondTier = Math.min(students - 1000, 1000);
    annualCost += secondTier * 2;
  }
  
  // Tier 3: All remaining students (2,001+) at $0.50 each
  if (students > 2000) {
    const thirdTier = students - 2000;
    annualCost += thirdTier * 0.5;
  }
  
  return annualCost;
};

export default function PricingCalculator() {
  const [studentCount, setStudentCount] = useState(1000);
  const [showTooltip, setShowTooltip] = useState(false);
  const annualCost = calculatePublicCost(studentCount);
  const perStudentCost = studentCount > 0 ? annualCost / studentCount : 0;

  return (
    <div className="max-w-2xl mx-auto bg-background-white rounded-lg p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="heading-3 text-text-black mb-10">
          School size: {studentCount.toLocaleString()} students
          <span className="ml-2 relative inline-block">
            <span 
              className="inline-flex items-center justify-center w-4 h-4 text-xs text-text-dark-blue cursor-help border border-text-dark-blue rounded-full hover:bg-text-dark-blue hover:text-white transition-colors"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              onClick={() => setShowTooltip(!showTooltip)}
            >
              i
            </span>
            {showTooltip && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs text-white bg-gray-900 rounded shadow-lg whitespace-nowrap z-50">
                Students and staff who have a Google or Outlook calendar
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
              </div>
            )}
          </span>
        </h3>
        
        <div className="mb-6">
          <Slider
            value={[studentCount]}
            onValueChange={(value) => setStudentCount(value[0])}
            min={700}
            max={5000}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-text-dark-blue mt-2">
            <span>700</span>
            <span>5,000</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="body-large text-text-dark-blue">
            <span className="bg-accent-blue text-text-black px-3 py-1 rounded-lg mx-1">
              ${annualCost.toLocaleString()}/year
            </span>
            — ${perStudentCost.toFixed(2)} per user/year
          </p>
        </div>

        <div className="mb-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/demo" 
              className="bg-transparent text-primary border border-primary px-8 py-4 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
            >
              Book a Demo
            </Link>
            <Link 
              href="/pilot" 
              className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl"
            >
              Start Free Pilot
            </Link>
          </div>
        </div>

        <p className="body-small text-text-dark-blue">
          Less than 700 or more than 5,000 students? Contact us for pricing.
        </p>
      </div>
    </div>
  );
}
