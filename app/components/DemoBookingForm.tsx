"use client";

import { useState } from 'react';
import Image from 'next/image';

interface Representative {
  name: string;
  firstName: string;
  calendlyUrl: string;
  image: string;
  usStates: string[];
  international: string[];
}

const representatives: Representative[] = [
  {
    name: "Jill Bergey",
    firstName: "Jill",
    calendlyUrl: "https://meetings.hubspot.com/jill-bergey",
    image: "/images/team/team-jill.jpeg",
    usStates: [
      "Alaska", "Hawaii", "Washington", "Oregon", "California", "Nevada", 
      "Idaho", "Montana", "Wyoming", "Utah", "Colorado", "Arizona", 
      "New Mexico", "North Dakota", "South Dakota", "Nebraska", "Kansas", 
      "Oklahoma", "Texas", "Louisiana", "Minnesota", "Iowa", "Missouri", "Arkansas"
    ],
    international: ["Australia", "Asia Pacific"]
  },
  {
    name: "Garrett Sattazahn",
    firstName: "Garrett",
    calendlyUrl: "https://meetings.hubspot.com/garrett-sattazahn",
    image: "/images/team/team-garrett.jpeg",
    usStates: [
      "Maine", "New Hampshire", "Vermont", "Massachusetts", "Rhode Island", 
      "Connecticut", "New York", "New Jersey", "Michigan", "Wisconsin", 
      "Illinois", "Indiana", "Ohio", "West Virginia"
    ],
    international: ["Europe (excluding UK)", "United Kingdom", "Turkey"]
  },
  {
    name: "Cole Levis",
    firstName: "Cole",
    calendlyUrl: "https://meetings.hubspot.com/cole-levis",
    image: "/images/team/team-cole.png",
    usStates: [
      "Pennsylvania", "Delaware", "Maryland", "Virginia", "North Carolina", 
      "South Carolina", "Georgia", "Florida", "Alabama", "Mississippi", 
      "Tennessee", "Kentucky"
    ],
    international: ["Canada", "Central America", "South America", "Middle East"]
  }
];

const usStates = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan",
  "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire",
  "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia",
  "Wisconsin", "Wyoming"
].sort();

const internationalOptions = [
  "Australia", "Asia Pacific", "Europe (excluding UK)", "United Kingdom", "Turkey",
  "Canada", "Central America", "South America", "Middle East"
].sort();

export default function DemoBookingForm() {
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedInternational, setSelectedInternational] = useState<string>("");
  const [showStateDropdown, setShowStateDropdown] = useState<boolean>(false);
  const [showInternationalDropdown, setShowInternationalDropdown] = useState<boolean>(false);

  const getRepresentative = (): Representative | null => {
    if (selectedState) {
      return representatives.find(rep => rep.usStates.includes(selectedState)) || null;
    }
    if (selectedInternational) {
      return representatives.find(rep => rep.international.includes(selectedInternational)) || null;
    }
    return null;
  };

  const handleLocationSelect = (location: string) => {
    setSelectedLocation(location);
    setSelectedState("");
    setSelectedInternational("");
    setShowStateDropdown(location === "US");
    setShowInternationalDropdown(location === "International");
  };

  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setShowStateDropdown(false);
  };

  const handleInternationalSelect = (country: string) => {
    setSelectedInternational(country);
    setShowInternationalDropdown(false);
  };

  const representative = getRepresentative();

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="heading-2 text-text-black mb-8 text-center">
          Select your location to get started
        </h2>

        {/* Location Selection */}
        <div className="space-y-6">
          {/* Main Location Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto">
            <button
              onClick={() => handleLocationSelect("US")}
              className={`p-4 rounded-lg border-2 transition-colors ${
                selectedLocation === "US" 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🇺🇸</div>
                <div className="body-medium font-medium text-text-black">United States</div>
              </div>
            </button>

            <button
              onClick={() => handleLocationSelect("International")}
              className={`p-4 rounded-lg border-2 transition-colors ${
                selectedLocation === "International" 
                  ? "border-primary bg-primary/5" 
                  : "border-border hover:border-primary/50"
              }`}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">🌍</div>
                <div className="body-medium font-medium text-text-black">Outside US</div>
              </div>
            </button>
          </div>

          {/* US States Dropdown */}
          {showStateDropdown && (
            <div className="space-y-4">
              <label className="block body-medium font-medium text-text-dark-blue">
                Select your state:
              </label>
              <div className="relative">
                <select
                  value={selectedState}
                  onChange={(e) => handleStateSelect(e.target.value)}
                  className="w-full p-3 border border-border rounded-lg body-medium focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Choose a state...</option>
                  {usStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* International Options Dropdown */}
          {showInternationalDropdown && (
            <div className="space-y-4">
              <label className="block body-medium font-medium text-text-dark-blue">
                Select your region:
              </label>
              <div className="relative">
                <select
                  value={selectedInternational}
                  onChange={(e) => handleInternationalSelect(e.target.value)}
                  className="w-full p-3 border border-border rounded-lg body-medium focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Choose a region...</option>
                  {internationalOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

                    {/* Representative Display */}
          {representative && (
            <div className="mt-8 p-6 bg-background-cream rounded-lg border border-border">
              <div className="flex flex-col items-center space-y-4">
                {/* Profile Photo */}
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={representative.image}
                    alt={representative.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Text Content */}
                <div className="text-center">
                  <h3 className="heading-3 text-text-black mb-2">
                    {representative.firstName} works with {selectedState || selectedInternational} schools
                  </h3>
                  <p className="body-medium text-text-black">
                    {representative.firstName} will help you learn how SchoolCal can help with your school's specific needs.
                  </p>
                </div>
                
                {/* Book Now Button */}
                <a
                  href={representative.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors body-medium font-medium"
                >
                  <span>Book Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
