"use client"

import { useState } from "react";
import { Slider } from "./ui/slider";
import Link from "next/link";

const calculatePublicCost = (students: number) => {
  // Simple formula: $3 per student
  return students * 3;
};

export default function PricingCalculator() {
  // Slider range: 500 to 2500+ (2500 is second to last, then one more step for "2500+")
  const minStudents = 500;
  const maxStudents = 2500; // Second to last step
  const stepSize = 100;
  const lastStepValue = maxStudents + stepSize; // Last step shows "2500+"
  
  const [sliderValue, setSliderValue] = useState(500); // Default to 500 students (far left)
  
  // Convert slider value to student count
  // If sliderValue is at the last step (> 2500), show "2500+"
  const isMaxStep = sliderValue > maxStudents;
  const studentCount = isMaxStep ? maxStudents : sliderValue;
  const displayStudentCount = isMaxStep ? "2,500+" : studentCount.toLocaleString();
  
  // Calculate cost: $3 per student
  const annualCost = calculatePublicCost(studentCount);

  return (
    <div className="text-center space-y-8">
      {/* Price Display - Centered below H1 */}
      <div className="mb-4">
        {isMaxStep ? (
          <p className="heading-2 text-primary">
            Contact us
          </p>
        ) : (
          <p className="heading-2 text-primary">
            ${annualCost.toLocaleString()}/year
          </p>
        )}
      </div>

      {/* Slider Label */}
      <div className="mb-6">
        <h3 className="heading-3 text-text-black">
          School size: {displayStudentCount} students
        </h3>
      </div>

      {/* Range Slider */}
      <div className="py-6 mb-10">
        <Slider
          value={[sliderValue]}
          onValueChange={(value) => setSliderValue(value[0])}
          min={minStudents}
          max={lastStepValue} // Goes to 2600, but displays as "2500+"
          step={stepSize}
          className="w-full"
        />
      </div>

      {/* Buttons */}
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
    </div>
  );
}
