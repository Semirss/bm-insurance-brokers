import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 md:py-10"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Reduced horizontal padding and gap */}
        {/* Column 1: Logo and Partnership Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          {/* Placeholder for the BM BROKERS logo */}
          <div className="mb-3"> {/* Reduced margin-bottom */}
            {/* Using an SVG for a scalable, clean logo representation */}
            <svg width="120" height="80" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg"> {/* Reduced SVG size */}
              <path d="M100 0L0 100H200L100 0Z" fill="#3B82F6"/> {/* Blue triangle */}
              <text x="100" y="70" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold" fontFamily="Inter, sans-serif">BM</text>
              <text x="100" y="90" textAnchor="middle" fill="white" fontSize="12" fontFamily="Inter, sans-serif">BROKERS</text>
            </svg>
          </div>
          <p className="text-base font-semibold mb-1">Bizuhan & Mebratu Insurance</p> {/* Reduced text size */}
          <p className="text-sm text-gray-400">Brokers G/Partnership</p> {/* Reduced text size */}
          
          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-4"> {/* Reduced space-x and margin-top */}
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Address and Contact */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Address</h3> {/* Reduced text size and margin-bottom */}
          <div className="space-y-3 text-gray-400 text-sm"> {/* Reduced space-y and text size */}
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg>
              <span>contact@bminsurancebrokers.com</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1v3c0 .55-.45 1-1 1C12.95 22 2 11.05 2 2c0-.55.45-1 1-1h3c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"></path></svg>
              <span>+251 91 198 2284</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.32.57 3.57.57.55 0 1 .45 1 1v3c0 .55-.45 1-1 1C12.95 22 2 11.05 2 2c0-.55.45-1 1-1h3c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.12.35.03.75-.24 1.02l-2.2 2.2z"></path></svg>
              <span>+251 91 175 2727</span>
            </div>
            <div className="flex items-start justify-center md:justify-start">
              <svg className="w-4 h-4 text-blue-500 mr-2 mt-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></svg>
              <p>From Meskel flower to Gorgorios round about <br/> Martereza building 1st floor</p>
            </div>
          </div>
        </div>

        {/* Column 3: Protecting Your Future */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Protecting Your Future</h3> {/* Reduced text size and margin-bottom */}
          <p className="text-gray-400 text-sm leading-relaxed"> {/* Reduced text size */}
            At BM Insurance Brokers, we are dedicated to safeguarding your personal and business assets with comprehensive insurance solutions. Stay in touch with us for expert guidance, updates, and insights to help you make the best insurance choices. Your protection is our mission.
          </p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-xs"> {/* Reduced margin-top, padding-top, and text size */}
        <p>Copyright © 2024 Bizuhan & Mebratu Insurance Brokers | Powered by Gravity Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
