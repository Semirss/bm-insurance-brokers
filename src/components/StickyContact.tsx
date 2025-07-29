import  { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react'; 

// Main App component to demonstrate the StickyContact component


export default function StickyContact() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility of the contact options
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end space-y-2">
      {/* Contact Options (Telegram and WhatsApp) */}
      <div
        className={`flex flex-col items-end space-y-2 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'
        }`}
      >
        {/* Telegram Button */}
        <a
          href="https://t.me/yourtelegramusername" // Replace with your Telegram username or link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200 group"
          aria-label="Contact us on Telegram"
        >
          <Send className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" />
          <span className="ml-2 text-sm font-semibold whitespace-nowrap opacity-100 transition-opacity duration-200">
            Telegram
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/yourphonenumber" // Replace with your WhatsApp phone number (e.g., 1234567890)
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 group"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-200" />
          <span className="ml-2 text-sm font-semibold whitespace-nowrap opacity-100 transition-opacity duration-200">
            WhatsApp
          </span>
        </a>
      </div>

      {/* Main "Contact us" Button */}
      <button
        onClick={toggleOpen}
        className="flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 transition-all duration-300 ease-in-out transform hover:scale-105"
        aria-expanded={isOpen}
        aria-controls="contact-options"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
    </div>
  );
}
