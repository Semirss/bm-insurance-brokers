import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-20 p-2 md:p-4">
      <nav className="flex items-center justify-between max-w-6xl mx-auto bg-gray-200 bg-opacity-90 backdrop-blur-sm rounded-lg shadow-md px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <span className="text-xl font-extrabold text-gray-800">BM BROKERS</span>
        </div>

        {/* Burger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 focus:outline-none focus:text-gray-600"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 text-gray-700 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Home</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Insurance Policies</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Claims</a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-600 transition-colors duration-200">Contact Us</a>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 z-30 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>

          {/* Menu Content */}
          <div className={`absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Close mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            {/* Mobile Navigation Links */}
            <ul className="flex flex-col space-y-2 text-gray-800 bg-gray-50 p-2  rounded-b-2xl text-base font-medium pt-10">
              <li>
                <a href="#" className="block px-4 py-2  hover:text-gray-600 rounded-md transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-gray-600 rounded-md transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Insurance Policies</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-gray-600 rounded-md transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Claims</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-50 hover:text-gray-600 rounded-md transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/bg9.webp')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-8 md:py-0">
        {/* Left Column: Text Content */}
        <div className="flex-1 text-white text-center md:text-left md:pr-8 animate-fade-in-right">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3 drop-shadow-lg">
            Your Safety, Our Priority Insure Today!
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed drop-shadow-md">
            Secure your future with affordable health, car, and life insurance. Enjoy lasting savings!
          </p>
        </div>

        {/* Right Column: Image with Animated Clip Path */}
        <div className="hidden md:flex flex-1 justify-center items-center animate-fade-in-left mt-8 md:mt-0">
          <div className="relative w-[250px] h-[250px] lg:w-[300px] lg:h-[300px]">
            <div className="absolute inset-0 bg-gray-200 animated-clip-path rounded-xl"></div>
            <img
              src="/bg10.jpg"
              alt="Insurance Solutions"
              className="absolute inset-0 w-full h-full object-cover animated-clip-path rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AnimatedBanner: React.FC = () => {
  const logos = [
    { name: 'Proline', imageUrl: '/sp1.png' },
    { name: 'DevWise', imageUrl: '/sp2.png' },
    { name: 'Invert', imageUrl: '/sp3.png' },
    { name: 'Hitech', imageUrl: '/sp4.png' },
    { name: 'Flash', imageUrl: '/sp5.png' },
    { name: 'Proline', imageUrl: '/sp6.png' },
    { name: 'DevWise', imageUrl: '/sp7.png' },
    { name: 'Invert', imageUrl: '/sp8.png' },
    { name: 'Hitech', imageUrl: '/sp9.png' },
    { name: 'Flash', imageUrl: '/sp10.png' },
    { name: 'Proline', imageUrl: '/sp11.png' },
    { name: 'DevWise', imageUrl: '/sp12.png' },
    { name: 'Invert', imageUrl: '/sp13.png' },
    { name: 'Hitech', imageUrl: '/sp14.png' },
    { name: 'Flash', imageUrl: '/sp15.jpg' },
    { name: 'Flash', imageUrl: '/sp16.jpg' },
  ];

  return (
    <div className="w-full bg-black py-4 overflow-hidden relative">
      <div className="flex animate-scroll-left p-3">
        {logos.map((logo, index) => (
          <div key={index} className="flex items-center ">
            <img
              src={logo.imageUrl}
              alt={`${logo.name} Logo`}
              className="h-10 rounded-xl object-contain ml-40 mr-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <section className="relative flex flex-col items-center justify-center py-4 md:py-8 bg-gray-50 font-sans overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-pattern opacity-30"></div>

      {/* Main Content Container */}
      <div className="relative z-10  p-4 md:p-6 w-full max-w-5xl mx-auto text-center ">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4 leading-tight">
          About <span className="text-gray-700">BM BROKERS</span>
        </h2>
        <p className="text-sm text-gray-700 mb-6 max-w-3xl mx-auto">
          At BM BROKERS, we are your trusted partner in securing a stable and prosperous future.
          Our commitment extends beyond policies, focusing on personalized solutions and unwavering support.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center text-left">
          {/* Left Column: Image/Visual */}
          <div className="flex justify-center items-center p-2">
            <img
              src="/bg1.jpg"
              alt="Our Team"
              className="w-full h-auto object-cover rounded-md shadow-sm transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Right Column: Mission, Vision, Values */}
          <div className="flex flex-col space-y-4 p-2">
            {/* Mission */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mr-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Our Mission</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  To empower individuals and businesses with optimal insurance coverage, fostering security and prosperity through tailored solutions and exceptional service.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mr-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Our Vision</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  To be the most trusted and innovative insurance broker, recognized for integrity, client-centric service, and a commitment to long-term partnerships.
                </p>
              </div>
            </div>

            {/* Values (New Addition) */}
            <div className="flex items-start">
              <div className="flex-shrink-0 bg-gray-100 rounded-full p-1.5 mr-2">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">Our Values</h3>
                <ul className="list-disc list-inside text-xs text-gray-700 leading-relaxed space-y-0.5">
                  <li>Integrity and Transparency</li>
                  <li>Client-Centric Approach</li>
                  <li>Innovation and Adaptability</li>
                  <li>Excellence in Service</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-pattern {
          background-image: radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
          background-position: 0 0, 20px 20px;
        }
      `}</style>
    </section>
  );
};


const HomePage: React.FC = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <HeroSection />
      <AboutUsSection />
      <AnimatedBanner />
      {/* Global Styles */}
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

        /* Infinite Scroll Animation for Banner */
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%); /* Scrolls half the width of duplicated content */
          }
        }
        .animate-scroll-left {
          animation: scroll-left 20s linear infinite; /* Adjust duration for speed */
        }
      `}</style>
    </div>
  );
};

export default HomePage;
