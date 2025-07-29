import React, { useState } from 'react';

interface InsuranceSolution {
  title: string;
  description: string; // Single description string for simpler card display
  icon: React.ReactNode;
  isPrimary?: boolean; // To mark "Needs Assessment" as a primary card
}

interface ServiceCardProps {
  solution: InsuranceSolution;
  index: number; // For staggered animation
}

const ServiceCard: React.FC<ServiceCardProps> = ({ solution, index }) => {
  // Set isOpen to true if index is less than 3 (for the first three boxes)
  const [isOpen, setIsOpen] = useState(index < 2 || solution.isPrimary || false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`relative rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1
        ${solution.isPrimary ? 'bg-blue-700 text-white primary-card-glow' : 'bg-white border border-gray-100'}
        animate-fade-in-up flex flex-col col-span-2 md:col-span-2`} 
      style={{ animationDelay: `${0.1 + index * 0.05}s` }} // Reduced staggered animation delay
    >
      <div className={`relative z-10 flex flex-col h-full`}> {/* Inner content wrapper, relative z-index */}
        <div className={`flex items-center p-3 md:p-4 ${solution.isPrimary ? 'bg-blue-700' : 'bg-white'} rounded-t-lg`}> {/* Reduced padding, rounded-t-lg */}
          {/* Dropdowner Circle */}
          <button
            onClick={toggleOpen}
            className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mr-3 transition-colors duration-300
              ${solution.isPrimary ? 'bg-blue-900 hover:bg-blue-800 text-white' : 'bg-blue-100 hover:bg-blue-200 text-blue-600'}`} // Reduced size, mr
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse details" : "Expand details"}
          >
            <svg className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg> {/* Reduced icon size */}
          </button>

          {/* Icon and Title */}
          <div className="flex items-center flex-grow">
            <div className={`mr-3 ${solution.isPrimary ? 'text-blue-200' : 'text-blue-600'} w-8 h-8`}> {/* Reduced mr, fixed icon container size */}
              {solution.icon}
            </div>
            <h3 className={`font-bold text-lg md:text-xl ${solution.isPrimary ? 'text-white' : 'text-gray-900'}`}> {/* Reduced text size */}
              {solution.title}
            </h3>
          </div>
        </div>

        {/* Description Content - Collapsible */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-40 opacity-100 py-3' : 'max-h-0 opacity-0 py-0'}`} // Reduced max-height, py
          style={{ transitionProperty: 'max-height, opacity, padding-top, padding-bottom' }}
        >
          <p className={`px-5 md:px-6 text-sm ${solution.isPrimary ? 'text-blue-100' : 'text-gray-700'}`}> {/* Reduced px, text size */}
            {solution.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Insurance: React.FC = () => {
  // Flattened and enriched data for all 8 solutions
  const solutions: InsuranceSolution[] = [
    {
      title: "Needs Assessment & Risk Analysis",
      description: "We meticulously assess personal and business risks to determine essential insurance types and offer tailored recommendations based on your unique profile and financial situation.",
      icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
      isPrimary: true,
    },
    {
      title: "Claims Assistance",
      description: "Our team provides seamless support throughout the claims process, ensuring quick and fair resolution for your peace of mind.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>,
    },
    {
      title: "Policy Management & Renewal",
      description: "We handle all aspects of your policy, from initial setup to timely renewals, keeping your coverage up-to-date effortlessly.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>,
    },
    {
      title: "Regulatory Compliance",
      description: "Stay compliant with all insurance regulations. We ensure your policies meet all legal and industry standards.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
    },
    {
      title: "Specialized Products",
      description: "Access a wide range of specialized insurance products tailored to unique risks and specific industry needs.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0v10l-8 4m8-4H4m0 0l8 4m-8-4V7m8 4v10l-8 4m8-4V7m0 0L12 3v4m-8 4h16"></path></svg>,
    },
    {
      title: "Policy Selection & Comparison",
      description: "We help you navigate various policy options, comparing features and benefits to find the perfect fit for you.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>,
    },
    {
      title: "Policy Acquisition",
      description: "Our streamlined process makes acquiring new insurance policies quick and hassle-free, from application to activation.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>,
    },
    {
      title: "Coverage Advice",
      description: "Receive expert advice on optimizing your coverage, understanding policy terms, and making informed decisions.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9.247a4.75 4.75 0 000 5.506m0-5.506a4.75 4.75 0 010 5.506M15.712 12a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.5c-4.97 0-9-3.6-9-8s4.03-8 9-8 9 3.6 9 8-4.03 8-9 8z"></path></svg>,
    },
  ];

  return (
    <section className="py-12 bg-white text-gray-800 overflow-hidden"> {/* Reduced py */}
      <div className="container mx-auto px-3 text-center"> {/* Reduced px */}
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2 animate-fade-in-down text-gray-900"> {/* Reduced text size and mb */}
          8-in-1 <span className="text-blue-600">Insurance Solutions</span>
        </h2>
        <p className="text-sm text-gray-700 mt-1 max-w-2xl mx-auto mb-8 animate-fade-in-up"> {/* Reduced text size, mt, mb, max-w */}
          Discover our 8-in-1 Insurance Solutions, a comprehensive suite of services meticulously designed to cater to every aspect of your insurance needs. From personalized risk assessments to seamless claims assistance, our expert team ensures that you receive tailored solutions that provide maximum coverage and peace of mind. With our holistic approach, managing your insurance has never been easier or more efficient.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"> {/* Reduced gap */}
          {solutions.map((solution, index) => (
            <ServiceCard key={index} solution={solution} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        /* Animations */
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s ease-out forwards;
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          /* animation-delay is set dynamically on each card */
        }

        /* Primary Card Glow Effect (retained for primary card) */
        .primary-card-glow {
          box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); /* Initial transparent shadow */
          animation: pulse-shadow 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }

        @keyframes pulse-shadow {
          0% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.7); }
          70% { box-shadow: 0 0 0 8px rgba(59, 130, 246, 0); } /* Reduced glow size */
          100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0); }
        }
      `}</style>
    </section>
  );
};

export default Insurance;
