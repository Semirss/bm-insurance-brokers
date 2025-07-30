import React, { useState } from 'react';

const LandingPage: React.FC = () => {
  // State to manage the active navigation item for the shifting underline effect
  const [activeNav, setActiveNav] = useState('Home');
  // State to manage the mobile menu's open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-sm md:text-base text-gray-800 flex flex-col" style={{ fontFamily: '' }}>
      {/* Header */}
      <header className="container mx-auto px-3 py-2 flex items-center justify-between relative">
        {/* Insor Logo */}
        <div className="text-lg font-bold text-gray-900">Insor</div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-9 text-sm font-medium">
          <a
            href="#"
            className="text-gray-900 hover:text-blue-600 relative py-1"
            onMouseEnter={() => setActiveNav('Home')}
            onMouseLeave={() => setActiveNav('Home')} // Revert to Home when not hovering other items
          >
            Home
            {/* Underline for Home, visible if activeNav is Home */}
            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-900 transition-all duration-300 ${activeNav === 'Home' ? 'opacity-100' : 'opacity-0'}`}></span>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 relative py-1"
            onMouseEnter={() => setActiveNav('About Us')}
            onMouseLeave={() => setActiveNav('Home')}
          >
            insurance policies
            {/* Underline for About Us, visible if activeNav is About Us */}
            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-900 transition-all duration-300 ${activeNav === 'About Us' ? 'opacity-100' : 'opacity-0'}`}></span>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 relative py-1"
            onMouseEnter={() => setActiveNav('Ploicy')}
            onMouseLeave={() => setActiveNav('Home')}
          >
            claims
            {/* Underline for Ploicy, visible if activeNav is Ploicy */}
            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-900 transition-all duration-300 ${activeNav === 'Ploicy' ? 'opacity-100' : 'opacity-0'}`}></span>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 relative py-1"
            onMouseEnter={() => setActiveNav('Blog')}
            onMouseLeave={() => setActiveNav('Home')}
          >
           contact us
            {/* Underline for Blog, visible if activeNav is Blog */}
            <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-0.5 bg-gray-900 transition-all duration-300 ${activeNav === 'Blog' ? 'opacity-100' : 'opacity-0'}`}></span>
          </a>
        </nav>
        
        {/* Contact Us Button for Desktop */}
        <button className="hidden md:block bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out text-sm">
          Contact Us
        </button>

        {/* Hamburger Icon for Mobile */}
        <button className="md:hidden flex items-center px-2 py-1 rounded text-gray-900 hover:text-blue-600" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-0 bg-white shadow-lg py-3 z-10 rounded-b-lg w-48">
            <nav className="flex flex-col items-end space-y-2 text-sm font-medium pr-4"> {/* Aligned to the right */}
              <a href="#" className="text-gray-900 hover:text-blue-600 w-full text-right py-1.5">Home</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 w-full text-right py-1.5">insurance policies</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 w-full text-right py-1.5">claims</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 w-full text-right py-1.5">Contact Us</a> {/* Added Contact Us */}
            </nav>
          </div>
        )}
      </header>

      {/* Horizontal Line below Header */}
      <div className="container mx-auto px-3 w-full h-px bg-gray-200 mt-6"></div>

      {/* Hero Section */}
      <section className="container mx-auto px-3 py-6 flex flex-col lg:flex-row items-center justify-between flex-grow">
        {/* Left Content */}
        <div className="lg:w-1/2 p-9 text-center lg:text-left mb-6 lg:mb-0">
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
            Your Trusted Partner in  <br /> Insurance Solutions
          </h1>
          <p className="text-sm text-gray-600 mb-5 max-w-sm mx-auto lg:mx-0">
At BM Insurance Brokers, we protect what matters most. Our expert team provides tailored personal and business insurance solutions, ensuring the right coverage at the right price—for your peace of mind and financial security.                     </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out text-sm font-semibold">
              Start your coverage
            </button>
            <div className="flex items-center text-gray-700 text-sm font-medium ">
              <svg className="w-4 h-4 mr-1.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd" />
              </svg>
              24 Hours claim line
            </div>
          </div>
          <div className='md:mb-20'></div>
        </div>

        {/* Right Image/Content */}
        <div className="lg:w-1/2  bg-yellow-400  p-4 shadow-lg relative overflow-hidden flex flex-col items-start justify-start min-h-[300px] lg:min-h-[330px]">
          <h2 className="text-xl font-bold text-gray-900 mb-1.5">BM INSURANCE BROKERS</h2>
          <p className="text-sm font-medium text-gray-900 mb-5">At BM Insurance Brokers, we build confidence in insurance by being trusted partners to both clients and insurers. Guided by our motto, "Serving you with utmost good faith," we deliver reliable, personalized coverage for every insurable need.</p>
          <button className="shadow-lg rounded-3xl bg-black text-white  px-6 py-3 md:mt-25 z-10 hover:text-blue-700 transition duration-300 ease-in-out text-sm font-semibold mb-3">
            Start your coverage now 
          </button>
          {/* Placeholder for the house image - positioned absolutely */}
          <div className="absolute bottom-0 right-0 w-52 md:w-64 lg:w-72 h-auto">
            <img
              src="/house5.png"
              alt="Modern house illustration"
              className="w-full h-auto object-contain md:block"
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/e0e0e0/333333?text=Image+Error'; }}
            />
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="container mx-auto px-3 py-1 flex flex-col md:flex-row items-center justify-around space-y-6 md:space-y-0 md:space-x-4"style={{marginTop: '-40px'}}>
        {/* Left Card */}
        <div className="relative bg-purple-600 text-white rounded-2xl p-5 shadow-lg w-full md:w-1/3 max-w-xs min-h-[140px] flex flex-col justify-center items-center text-center">
          <div className="absolute top-2 right-2 bg-white text-purple-600 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
            Services
          </div>
          {/* <div className="flex -space-x-1.5 mb-1.5">
            <img className="w-8 h-8 rounded-full border-1.5 border-white" src="https://placehold.co/40x40/ffffff/000000?text=U1" alt="User 1" />
            <img className="w-8 h-8 rounded-full border-1.5 border-white" src="https://placehold.co/40x40/ffffff/000000?text=U2" alt="User 2" />
            <div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center border-1.5 border-white text-xs font-bold">+</div>
          </div> */}
          <p className="text-3xl p-2 font-extrabold mb-0.5">8-in-1 Service</p>
          <p className="text-sm font-medium">From risk assessment to claims assistance, our comprehensive service covers all your insurance needs.</p>
        </div>

        {/* Middle Text */}
        <div className="w-full md:w-1/3 text-center md:text-left text-gray-700 text-sm leading-relaxed max-w-sm">
We prioritize your needs, offering personalized recommendations and ongoing support to keep you protected.        </div>

        {/* Right Card */}
        <div className=" p-2  w-full md:w-1/3 max-w-xs min-h-[140px] flex flex-col justify-center items-center text-center">
          <p className="text-3xl font-extrabold text-gray-900 mb-0.5">Expert Team</p>
          <div className="flex items-center text-yellow-500 mb-1.5">
          
          </div>
          <p className="text-sm text-gray-600 mb-1.5">Our professionals bring decades of experience and specialized knowledge to ensure you get the best advice and solutions.</p>
          <div className="flex -space-x-1.5">
            <img className="w-8 h-8 rounded-full border-1.5 border-white" src="/pp2.jpg" alt="User 3" />
            <img className="w-8 h-8 rounded-full border-1.5 border-white" src="/pp3.jpg" alt="User 4" />
            <img className="w-8 h-8 rounded-full border-1.5 border-white" src="/pp1.jpg" alt="User 5" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
