import React, { useState, useEffect, useRef } from 'react';

// Define the types for the props
interface HeroSectionProps {}

// Helper component for Icons in the features section
const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-blue-100 text-blue-600 rounded-full w-10 h-10 flex items-center justify-center mb-3"> {/* Corrected size from w-0 to w-10 */}
    {children}
  </div>
);

// Main HeroSection Component
const App: React.FC<HeroSectionProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); 
  const searchInputRef = useRef<HTMLInputElement>(null); 

  // Close mobile menu or search bar if screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsMenuOpen(false);
        if (isSearchOpen && searchInputRef.current) {
          searchInputRef.current.focus();
        }
      } else { 
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isSearchOpen]); 

  useEffect(() => {
    if (isSearchOpen && window.innerWidth >= 768 && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <div className="bg-white text-gray-800 font-sans antialiased">
      {/* Header - Now fixed at the top */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 bg-opacity-95 shadow-md backdrop-blur-sm">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center relative"> {/* Reduced py */}
          {/* Logo in header (always on the left) */}
          <div className="flex items-center">
            <img
              src="/logo1.png"
              alt="Company Logo"
              className="h-8 mr-2"
            />
          </div>

          {/* Desktop Navigation  */}
          <div className="hidden md:flex items-center space-x-8"> 
            <nav className="flex items-center space-x-8"> {/* Reduced space-x */}
              <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium text-base">Home</a> {/* Explicit text-base */}
              <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium text-base">Policies</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium text-base">Claims</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 transition-colors duration-300 font-medium text-base">Contact</a>
            </nav>

            {/* Desktop Actions: Search  */}
            <div className="flex items-center space-x-3"> 
              {/* Expanding Search Input - positioned to slide from right */}
              <div className={`relative flex items-center transition-all duration-300 ease-in-out
                ${isSearchOpen ? 'w-56 opacity-100' : 'w-0 opacity-0'}`}>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className={`flex-grow p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm
                    ${isSearchOpen ? 'block' : 'hidden'}`}
                />
                {isSearchOpen && (
                  <button
                    className="ml-2 p-1 rounded-full text-gray-600 hover:bg-gray-100 transition-colors duration-300"
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Close Search"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                )}
              </div>

              {/* Search Icon (always visible) */}
              <button
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle Search"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu and Search Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              className="p-2 rounded-full text-gray-800"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Toggle Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            {/* Mobile Menu Button */}
            <button className="text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Mobile Menu">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (Full width, slides down) */}
        {isSearchOpen && (
          <div className="md:hidden bg-white shadow-lg mx-4 rounded-lg mt-2 p-3 transition-all duration-300 ease-in-out">
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            />
             <button
                className="mt-2 w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 text-sm"
                onClick={() => setIsSearchOpen(false)}
              >
                Close Search
              </button>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mx-4 rounded-lg mt-2 transition-all duration-300 ease-in-out">
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 font-medium text-sm">Home</a>
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 font-medium text-sm">Policies</a>
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 font-medium text-sm">Claims</a>
            <a href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-100 font-medium text-sm">Contact</a>
            <div className="p-3">
            </div>
          </div>
        )}
      </header>

      {/* Hero Content */}
      <main className="relative overflow-hidden pb-80 md:pb-0 pt-20 md:pt-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg1.jpg')",
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative container mx-auto px-6 pt-12 pb-20 md:pt-20 md:pb-28 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center md:text-left animate-fade-in-right">
              {/* Logo */}
              <div className="mb-4 flex justify-center md:justify-start items-center">
                <img src="/logo2.png" alt="Company Logo" className="h-16 mr-3 shadow-2xl transform hover:scale-110 transition-transform duration-300" />
              </div>

              <span className="bg-blue-100 text-blue-600 font-semibold py-1 px-3 rounded-full text-xs uppercase">No-Obligation start now</span>
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-extrabold leading-tight my-3 drop-shadow-lg">
                Your Trusted Partner in <span className="text-blue-300">Insurance Solutions</span>
              </h1>
              <p className="text-sm text-gray-200 max-w-xl mx-auto md:mx-0 mb-6 drop-shadow-md">
                We provide peace of mind with tailored insurance solutions. Our expert team is dedicated to protecting what matters most to you and your business.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                <button className="w-full sm:w-auto bg-blue-900 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-base">
                  Start Your Coverage
                </button>
                <div className="font-semibold text-gray-200 text-base">It's 100% Free!</div>
              </div>
            </div>
            
            {/* Right Column: Image with Animated Clip Path */}
            <div className="hidden md:flex justify-center items-center animate-fade-in-left">
              <div className="relative w-[400px] h-[400px]">
                <div className="absolute inset-0 bg-blue-200 animated-clip-path"></div>
                <img 
                  src="/bg1.jpg" 
                  alt="Insurance Solutions" 
                  className="absolute inset-0 w-full h-full object-cover animated-clip-path rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Combined and Creative Services/Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why choose <span className="text-blue-600">us</span>
            </h2>
            <p className="text-lg text-gray-700 mt-4">
                At BM Insurance Brokers, we understand that every aspect of your life and business is worth protecting. With a team of highly experienced and dedicated insurance professionals, we offer tailored insurance solutions that meet your unique needs. Whether it's personal or business insurance, our expertise ensures that you get the best coverage at the best price, providing you with peace of mind and financial security. Trust us to be your reliable partner in navigating the complex world of insurance.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <div className="bg-white p-8 rounded-xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
              <FeatureIcon>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </FeatureIcon>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Expert Team</h3>
              <p className="text-gray-600 flex-grow">
                Our professionals bring decades of experience and specialized knowledge to ensure you get the best advice and solutions.
              </p>
            </div>

            {/* Feature Card 2: 8-in-1 Service */}
            <div className="bg-white p-8 rounded-xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
              <FeatureIcon>
                {/* Icon for 8-in-1 Service - using a briefcase */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-1.208-8.584-3.345m8.584 3.345a23.931 23.931 0 01-9.75-4.414M12 15a23.931 23.931 0 018.584-3.345m-8.584 3.345c-3.183 0-6.22-1.208-8.584-3.345M12 15V3m0 0a2 2 0 00-2 2v10a2 2 0 002 2m0-12a2 2 0 002 2v10a2 2 0 00-2 2m-2-2h4"></path></svg>
              </FeatureIcon>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">8-in-1 Service</h3>
              <p className="text-gray-600 flex-grow">
                From risk assessment to claims assistance, our comprehensive service covers all your insurance needs.
              </p>
            </div>

            {/* Feature Card 3: Customer Focus */}
            <div className="bg-white p-8 rounded-xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center">
              <FeatureIcon>
                {/* Icon for Customer Focus - using a person with a headset/support icon */}
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 0A3.997 3.997 0 0115 11.5a4 4 0 01-4 4c-1.105 0-2-.895-2-2s.895-2 2-2m0 0L5.636 18.364m12.728-12.728a6 6 0 00-8.485 0m8.485 0a6 6 0 01-8.485 0M12 12v.01"></path></svg>
              </FeatureIcon>
              <h3 className="text-2xl font-bold mb-3 text-gray-800">Customer Focus</h3>
              <p className="text-gray-600 flex-grow">
                We prioritize your needs, offering personalized recommendations and ongoing support to keep you protected.
              </p>
            </div>
          </div>
        </div>
      </section>

     

      <style>{`
        /* Font import for Inter */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        body {
          font-family: 'Inter', sans-serif;
        }

        @keyframes fade-in-right {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }
        
        /* Animated Clip Path for Hero Image */
        @keyframes clip-path-animation {
          0% {
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
          }
          50% {
            clip-path: polygon(0% 25%, 75% 0%, 100% 75%, 25% 100%);
          }
          100% {
            clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
          }
        }
        .animated-clip-path {
          animation: clip-path-animation 10s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default App;
