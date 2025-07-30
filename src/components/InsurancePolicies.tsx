import React, { useState, useRef, useEffect } from 'react';

// A simple component to wrap the SVG icons, providing consistent styling
const PolicyIcon: React.FC<{ children: React.ReactNode; size?: string; bg?: string; text?: string }> = ({ children, size = 'h-10 w-10', bg = 'bg-gray-100', text = 'text-gray-600' }) => ( // Smaller default icon size
  <div className={`flex-shrink-0 flex items-center justify-center ${size} rounded-full ${bg} ${text} mb-3`}> {/* Reduced margin-bottom */}
    {children}
  </div>
);

interface Policy {
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: React.ReactNode;
  contact: { phone: string; email: string; chat: string };
}

const InsurancePolicies: React.FC = () => {
  // State to manage which policy's details are currently displayed
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const policyDetailRef = useRef<HTMLDivElement>(null);

  // Policy data with full descriptions and contact info
  const policies: Policy[] = [
    {
      title: 'Motor Vehicle',
      shortDescription: 'Covers vehicle damages and third-party protection.',
      fullDescription: 'Mandatory vehicle insurance covers damages to the insured vehicle through liability, collision, and comprehensive policies. These ensure protection for drivers, passengers, and third parties from financial losses due to accidents and other incidents.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20h9M12 4h9m-9 16V4m0 0a2 2 0 00-2-2H7a2 2 0 00-2 2v16a2 2 0 002 2h3a2 2 0 002-2v0zM7 8h4m-4 4h4m-4 4h4" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
    {
      title: 'Marine Cargo',
      shortDescription: 'Protects goods in transit by sea, air, or land.',
      fullDescription: 'Marine Cargo Insurance covers goods in transit by sea, air, or land against physical loss or damage. It provides protection for importers, exporters, freight forwarders, and others involved in global trade. Policies can be tailored to specific cargo types, transportation modes, and routes to ensure comprehensive coverage.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4m0-10h.01" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
    {
      title: 'Industrial All Risks',
      shortDescription: 'Shields industrial operations from various risks.',
      fullDescription: 'Industrial All Risks Insurance protects the insured against both property damage and business interruption losses. It covers a wide range of risks, including fire, natural disasters, machinery breakdown, and more. This insurance is designed for manufacturing plants, warehouses, processing facilities, and other industrial operations.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m-4-4h4m-4 0h.01M17 17h.01" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
    {
      title: 'Group Life',
      shortDescription: 'Provides death benefits to employees.',
      fullDescription: 'Group life insurance covers employees under a single policy, providing death benefits to beneficiaries upon the insured’s demise. It helps employers attract and retain talent with appealing benefits packages.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V4a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2m0 0l-1-1m1 1l1-1m-1 1v-4l-1 1m1-1l1-1m-1 1h4m0 0a2 2 0 00-2-2v-4m0 0a2 2 0 00-2-2H7m4-2a2 2 0 00-2-2h-3a2 2 0 00-2 2v4a2 2 0 002 2h3a2 2 0 002-2v-4z" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
    {
      title: 'Product Liability',
      shortDescription: 'Covers claims for product-related injuries/damages.',
      fullDescription: 'Product liability insurance covers claims for injuries or damages caused by the insured’s products, protecting manufacturers, distributors, and retailers from liability lawsuits and helping maintain financial stability during product-related incidents.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 12v-4m0 0h.01M12 12h.01M12 16h.01" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
    {
      title: 'General Liability',
      shortDescription: 'Protects businesses from third-party claims.',
      fullDescription: 'General liability insurance protects businesses from third-party claims of bodily injury or property damage, covering legal expenses and compensation if found liable. It provides coverage for incidents on business premises or from products and services.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 17h.01" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
    {
      title: 'Professional Liability',
      shortDescription: 'Shields professionals from negligence claims.',
      fullDescription: 'Professional liability insurance shields professionals like architects, engineers, and consultants from negligence claims, covering legal defense costs and damages if found liable for errors or omissions. It helps mitigate risks for various professions.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.563 23.563 0 0112 15c-3.185 0-6.223-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M12 10h.01M12 14h.01M12 18h.01M12 22h.01M12 2L12 22" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
    {
      title: 'Construction All Risks',
      shortDescription: 'Covers physical damage to construction projects.',
      fullDescription: 'Construction insurance covers physical damage to projects and equipment, providing protection against liability claims from construction activities. It’s crucial for large infrastructure, energy, and real estate development projects.',
      icon: (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Smaller SVG icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 00-1 1v1a2 2 0 11-4 0v-1a1 1 0 00-1-1H7a1 1 0 01-1-1v-3a1 1 0 011-1h3a1 1 0 001-1V9a1 1 0 00-1-1H7a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1z" />
        </svg>
      ),
      contact: { phone: '+251912345678', email: 'info@bminsurancebrokers.com', chat: '#' },
    },
  ];

  // Scroll to the policy detail section when it becomes visible
  useEffect(() => {
    if (selectedPolicy && policyDetailRef.current) {
      policyDetailRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [selectedPolicy]);

  return (
    <section className="py-8 bg-gray-100 font-sans"> {/* Reduced vertical padding */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6"> {/* Reduced max-width and horizontal padding */}
        {/* Main Heading */}
        <h1 className="text-2xl md:text-4xl font-extrabold text-center text-gray-900 mb-3"> {/* Reduced font size and margin */}
          Insurance Policies
        </h1>
        {/* Sub-description */}
        <p className="text-sm text-gray-700 text-center mb-8 max-w-2xl mx-auto leading-relaxed"> {/* Reduced font size and margin */}
          Explore our comprehensive range of policies for peace of mind and robust protection.
        </p>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"> {/* Reduced gap */}
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg border border-gray-100" // Reduced padding, shadow, and rounded corners slightly
            >
              {/* Policy Icon */}
              <PolicyIcon>{policy.icon}</PolicyIcon>
              {/* Policy Title */}
              <h3 className="text-base font-bold text-gray-900 mb-1"> {/* Reduced font size */}
                {policy.title}
              </h3>
              {/* Policy Description */}
              <p className="text-xs text-gray-600 leading-snug mb-3"> {/* Reduced font size and margin */}
                {policy.shortDescription}
              </p>
              {/* Call to Action Button */}
              <button
              
                className="mt-auto px-3 py-1.5 bg-gray-600 text-white text-xs font-medium rounded-md hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2" // Reduced padding, font size, and rounded corners
                onClick={() => setSelectedPolicy(policy)}
              >
                Learn More
              </button> <div ref={policyDetailRef}></div>
            </div >
           
          ))}
        </div>

        {/* Policy Detail Section */}
        {selectedPolicy && (
          <div  className="mt-12 bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-200 animate-fade-in"> {/* Reduced padding and margin-top */}
            <div className="flex justify-between items-start mb-4"> {/* Reduced margin-bottom */}
              <div className="flex items-center">
                <PolicyIcon size="h-14 w-14" bg="bg-gray-600" text="text-white">{selectedPolicy.icon}</PolicyIcon> {/* Slightly smaller icon */}
                <h3 className="text-2xl font-extrabold text-gray-800 ml-3"> {/* Reduced font size and margin */}
                  {selectedPolicy.title} Insurance
                </h3>
              </div>
              <button
                onClick={() => setSelectedPolicy(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                aria-label="Close"
              >
                <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> {/* Slightly smaller icon */}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <p className="text-base text-gray-700 leading-relaxed mb-6"> {/* Reduced font size and margin */}
              {selectedPolicy.fullDescription}
            </p>

            <div className="border-t border-gray-200 pt-4"> {/* Reduced padding-top */}
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Get Consultation</h4> {/* Reduced font size and margin */}
              <div className="space-y-2 text-sm text-gray-600"> {/* Reduced space-y and font size */}
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684L10.5 9l2.5-2.5L15 10l2.5-2.5L19 10l2-2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"></path></svg>
                  Call: <a href={`tel:${selectedPolicy.contact.phone}`} className="ml-1 text-gray-600 hover:underline font-medium">{selectedPolicy.contact.phone}</a> {/* Reduced margin */}
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 6v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path></svg>
                  Email: <a href={`mailto:${selectedPolicy.contact.email}`} className="ml-1 text-gray-600 hover:underline font-medium">{selectedPolicy.contact.email}</a> {/* Reduced margin */}
                </p>
                <p className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
                  <a href={selectedPolicy.contact.chat} className="ml-1 text-gray-600 hover:underline font-medium">Chat online here</a> {/* Reduced margin */}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* General Contact Call to Action */}
        <div className="mt-12 text-center"> {/* Reduced margin-top */}
          <p className="text-base text-gray-800 mb-3"> {/* Reduced font size and margin */}
            Need a personalized consultation?
          </p>
          <a
            href="mailto:info@bminsurancebrokers.com"
            className="inline-flex items-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200" // Reduced padding and font size
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 6v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"></path></svg>
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsurancePolicies;
