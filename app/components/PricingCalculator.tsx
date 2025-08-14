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
  const annualCost = calculatePublicCost(studentCount);
  const perStudentCost = studentCount > 0 ? annualCost / studentCount : 0;

  return (
    <div className="max-w-2xl mx-auto bg-background-white rounded-lg p-8 shadow-lg">
      <div className="text-center mb-8">
        <h3 className="heading-3 text-text-black mb-4">
          School size: {studentCount.toLocaleString()} Active Users*
        </h3>
        
        <div className="mb-6">
          <Slider
            value={[studentCount]}
            onValueChange={(value) => setStudentCount(value[0])}
            min={700}
            max={20000}
            step={100}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-text-dark-blue mt-2">
            <span>700</span>
            <span>20,000</span>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="heading-2 text-primary mb-2">
            ${annualCost.toLocaleString()}/year
          </h3>
          <p className="body-large text-text-dark-blue">
            <strong>Only ${perStudentCost.toFixed(2)} per user</strong>, to sync their schedules all year. *Students and staff who have a Google or Outlook calendar
          </p>
        </div>

        <div className="mb-6">
          <Link 
            href="/demo" 
            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95 font-medium body-large shadow-lg hover:shadow-xl inline-block"
          >
            Book a Demo
          </Link>
        </div>

        <p className="body-small text-text-dark-blue">
          Less than 700 or more than 20,000 users? Call for pricing.
        </p>
      </div>
    </div>
  );
}
