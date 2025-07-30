import React from 'react';

const Claims: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4 sm:p-6 md:p-8 font-sans text-center overflow-hidden">
      {/* Container for the main content */}
      <div className="max-w-5xl mx-auto w-full bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg flex flex-col lg:flex-row items-center lg:items-start lg:justify-between">
        
        {/* Left Side: Act Now, Save Big! content */}
        <div className="flex flex-col items-center text-center lg:w-1/2 lg:pr-6 mb-8 lg:mb-0">
          {/* Piggy bank illustration */}
          <div className="mb-4 sm:mb-6 relative">
            <div className="text-6xl sm:text-7xl md:text-8xl relative">
              <span role="img" aria-label="piggy bank">🐷</span>
              <span className="absolute top-0 right-0 text-3xl sm:text-4xl md:text-5xl transform -translate-y-1/2 translate-x-1/2 text-yellow-500">💰</span>
              <span className="absolute bottom-0 left-0 text-2xl sm:text-3xl md:text-4xl transform translate-y-1/2 -translate-x-1/2 text-gray-400">🪙</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-700 mb-3 sm:mb-4 leading-tight">
            Act Now, Save Big!
          </h2>

          {/* Descriptive Text */}
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-6 max-w-sm mx-auto">
            Purchase your insurance today and unlock exclusive discounts—secure your future with
            unbeatable value and tailored coverage.
          </p>

          {/* Get Quote Button */}
          <button className="flex items-center justify-center px-5 py-2 sm:px-6 sm:py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105">
            Get Quote
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Divider for mobile */}
        <div className="w-16 h-0.5 bg-gray-300 my-4 lg:hidden"></div>

        {/* Right Side: Claims Assistance Section */}
        <div className="w-full lg:w-1/2 pt-6 lg:pt-0 lg:pl-6 border-t border-gray-300 lg:border-t-0 lg:border-l lg:border-gray-300 text-gray-800">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-700 mb-3 sm:mb-4 leading-tight">
            For Claim Assistance
          </h3>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 max-w-xl mx-auto">
            If you need to file a claim, please reach out to our dedicated Claim Officer for support:
          </p>

          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            {/* Phone Information */}
            <div className="flex flex-col items-center">
              <p className="text-base sm:text-lg font-semibold mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                </svg>
                Phone:
              </p>
              <a href="tel:+251911982264" className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600 hover:text-gray-800 transition-colors duration-300 break-words">
                +251 911 982 264
              </a>
            </div>

            {/* Email Information */}
            <div className="flex flex-col items-center">
              <p className="text-base sm:text-lg font-semibold mb-1 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7"></path>
                </svg>
                Email:
              </p>
              <a href="mailto:claims@bminsurancebrokers.com" className="text-base sm:text-lg md:text-xl font-bold text-gray-600 hover:text-gray-800 transition-colors duration-300 break-words">
                claims@bminsurancebrokers.com
              </a>
            </div>
          </div>

          <p className="text-sm sm:text-base font-medium mt-4 sm:mt-6 italic text-gray-600">
            We are here to help with all your claim applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Claims;