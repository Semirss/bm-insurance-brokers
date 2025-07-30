"use client";
import React, { useState, useRef, useEffect } from 'react';

// Define the type for a single FAQ item
interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: '1',
    question: 'What is an insurance broker?',
    answer: 'An insurance broker is a professional who helps clients find the best insurance policies for their needs. Brokers work with multiple insurance companies to provide unbiased advice and a range of options, ensuring clients get the most suitable and cost-effective coverage.',
  },
  {
    id: '2',
    question: 'How do you help with insurance claims?',
    answer: 'We assist clients throughout the claims process, from filing to resolution. Our team advocates on your behalf with insurance companies, ensuring claims are handled promptly and fairly, and we provide support to resolve any issues that arise.',
  },
  {
    id: '3',
    question: 'Does it cost me anything to use your brokerage services?',
    answer: 'Generally, our services come at no direct cost to clients. We earn commissions from insurance companies for the policies we help place. This means you receive expert advice and support without paying additional fees.',
  },
  {
    id: '4',
    question: 'Why should I use an insurance broker?',
    answer: 'Using an insurance broker simplifies the insurance process. Brokers assess your risks, recommend tailored policies, and negotiate with insurers on your behalf. We offer expert guidance, saving you time and ensuring you receive the best value and coverage for your situation.',
  },
  {
    id: '5',
    question: 'What types of insurance do you provide?',
    answer: 'BM Insurance Brokers offer a variety of insurance products, including home, auto, life, health, and business insurance. We also provide specialized coverage for unique needs, ensuring comprehensive protection for both personal and business clients.',
  },
  {
    id: '6',
    question: 'How can I contact BM Insurance Brokers for more information?',
    answer: 'You can reach us via contact@bminsurancebrokers.com or by visiting our office. We\'re here to provide personalized consultations and address any questions you have about your insurance needs.',
  },
];

const FAQ: React.FC = () => {
  // Initialize with the IDs of the first two items and the emphasized item ('3')
  const [openItemIds, setOpenItemIds] = useState<Set<string>>(() => new Set(['1', '2', '3']));
  const emphasizedItemRef = useRef<HTMLDivElement>(null);
  const [arrowPosition, setArrowPosition] = useState({ top: 0, left: 0, visible: false });

  const toggleItem = (id: string) => {
    setOpenItemIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(id)) {
        newIds.delete(id);
      } else {
        newIds.add(id);
      }
      return newIds;
    });
  };

  // Effect to position the arrow next to the emphasized item
  useEffect(() => {
    if (emphasizedItemRef.current) {
      const itemRect = emphasizedItemRef.current.getBoundingClientRect();
      const containerElement = document.querySelector('.faq-container'); // Get the main container for relative positioning
      
      if (containerElement) {
        const containerRect = containerElement.getBoundingClientRect();
        setArrowPosition({
          top: itemRect.top - containerRect.top + itemRect.height / 2, // Vertically center with the item
          left: itemRect.left - containerRect.left - 40, // Position to the left of the item, adjust as needed
          visible: true,
        });
      }
    } else {
      setArrowPosition({ top: 0, left: 0, visible: false }); // Hide arrow if item is not found
    }
  }, [openItemIds]); // Recalculate if items open/close, potentially shifting layout

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 font-sans">
      <div className="container mx-auto max-w-2xl py-8 relative faq-container"> {/* Added 'faq-container' class and 'relative' */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Frequently Asked Questions
        </h2>

        {/* Animated Arrow */}
        {arrowPosition.visible && (
          <div
            className="absolute z-20 arrow-bounce"
            style={{ top: arrowPosition.top, left: arrowPosition.left }}
          >
            <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" />
            </svg>
          </div>
        )}

        <div className="space-y-4">
          {faqData.map((item) => {
            const isEmphasized = item.id === '3'; // Check if the current item is the emphasized one
            const isOpen = openItemIds.has(item.id);

            return (
              <div
                key={item.id}
                ref={isEmphasized ? emphasizedItemRef : null} // Assign ref only to emphasized item
                className={`rounded-lg shadow-md overflow-hidden transition-all duration-300
                  ${isEmphasized ? 'bg-gray-600 shadow-xl pulse-effect' : 'bg-gray-900'}
                `}
              >
                <button
                  className={`w-full flex justify-between items-center py-3 px-4 text-base font-semibold focus:outline-none transition-colors duration-300
                    ${isEmphasized ? 'text-white hover:bg-gray-700' : 'text-white hover:bg-gray-800'}
                  `}
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                >
                  {item.question}
                  <div className={`w-6 h-6 flex items-center justify-center rounded-full border text-white
                    ${isEmphasized ? 'border-white' : 'border-white'}
                  `}>
                    <svg
                      className={`w-3 h-3 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </button>
                {isOpen && (
                  <div className={`px-4 pt-1 pb-4 text-sm leading-relaxed animate-fade-in
                    ${isEmphasized ? 'bg-white text-gray-800 border-t border-gray-200' : 'bg-white text-gray-800 border-t border-gray-200'}
                  `}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }

        @keyframes pulse-effect {
          0% {
            transform: scale(1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
          50% {
            transform: scale(1.01);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          }
        }
        .pulse-effect {
          animation: pulse-effect 2s infinite ease-in-out;
        }

        @keyframes arrow-bounce {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px); /* Adjust bounce distance */
          }
        }
        .arrow-bounce {
          animation: arrow-bounce 1s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default FAQ;
