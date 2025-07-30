import React, { useState, useRef } from 'react';

// Define the structure for a team member
interface TeamMember {
  name: string;
  title: string;
  specializations: string[];
  bio: string;
  yearsInPractice: number;
  image: string;
}

// Dummy data for team members
const teamMembers: TeamMember[] = [
   {
    name: 'Ayalew Abebe',
    title: 'CEO',
    specializations: ['CEO'],
    bio: 'Ayalew, with 44 years in insurance, has led EIC and major projects like Gibe II. Now CEO of our brokerage, he brings deep industry and global reinsurance expertise.',
    yearsInPractice: 44,
   
    image: '/pp1.jpg', 
  },
  {
    name: 'Mebratu Gowomsa',
    title: 'Deputy General Manager(Operations)',
    specializations: ['Deputy General Manager(Operations)'],
    bio: 'With a decade of experience, Mebratu ensures exceptional client support in claims and operational services.',
    yearsInPractice: 10,
    
    image: '/pp2.jpg', 
  },
  {
    name: 'Bizuhan Abebe',
    title: 'Deputy General Manager (Marketing)',
    specializations: ['Deputy General Manager (Marketing)'],
    bio: 'With over 19 years in insurance and an MBA, Bizuhan drives growth and client satisfaction through a customer-centric approach.',
    yearsInPractice: 19,
   
    image: '/pp3.jpg', // Placeholder for Bizuhan Abebe
  },
];

const TeamSection: React.FC = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0); // Start with the first member
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the main container div

  const toggleDetail = () => {
    setShowDetail((prev) => {
      const newState = !prev;
      // Scroll to the top of the main container when toggling detail view
      if (containerRef.current) {
        containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return newState;
    });
  };

  const goToNextMember = () => {
    setCurrentMemberIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const goToPreviousMember = () => {
    setCurrentMemberIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const currentMember = teamMembers[currentMemberIndex];
  const nextMembers = [
    teamMembers[(currentMemberIndex + 1) % teamMembers.length],
    teamMembers[(currentMemberIndex + 2) % teamMembers.length],
    teamMembers[(currentMemberIndex + 3) % teamMembers.length],
  ];

  return (
    <div ref={containerRef} className="min-h-screen  bg-gray-100  text-gray-800 flex items-center justify-center p-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Container for the entire section */}
      <div className="  p-4 md:p-8 w-full max-w-5xl overflow-hidden relative">
        {/* Detailed Team Member View */}
        <div
          className={`absolute inset-0 bg-white transition-transform duration-700 ease-in-out ${
            showDetail ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ zIndex: showDetail ? 10 : 0 }} // Ensure detail view is on top when active
        >
          <div className="flex flex-col lg:flex-row h-full">
            {/* Left side: Image */}
            <div className="lg:w-1/2 flex items-center justify-center p-1">
              <img
                src={currentMember.image} // Dynamically display current member's image
                alt={currentMember.name}
                className="w-full h-auto object-cover rounded-md shadow-sm max-w-[250px] lg:max-w-[300px]"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x500/e0e0e0/333333?text=Image+Error'; }}
              />
            </div>
            {/* Right side: Details */}
            <div className="lg:w-1/2 p-1 flex flex-col justify-center">
              <div className="flex space-x-0.5 mb-1">
                {currentMember.specializations.map((spec, index) => (
                  <span key={index} className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full text-xs font-semibold">
                    {spec}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-0.5">
                <span className="text-gray-500 font-normal">{currentMember.name.split(' ')[0]}</span> {currentMember.title}
              </h2>
              <p className="text-xs text-gray-700 mb-2">
                {currentMember.bio}
              </p>
              <div className="flex items-center space-x-3 mb-3">
                <div>
                  <p className="text-xl font-bold text-gray-900">{currentMember.yearsInPractice}</p>
                  <p className="text-xs text-gray-600">Years in practice</p>
                </div>
                <div>
                </div>
              </div>
              <div className="relative self-end -mr-4 -mb-4">
                <div className="bg-yellow-300 text-gray-900 rounded-full w-24 h-24 flex items-center justify-center text-center p-1.5 text-xs shadow-sm transform rotate-12">
                  <p className="font-semibold text-xs">SCHEDULE AN <br /> APPOINTMENT</p>
                  <svg className="w-3 h-3 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Back button for detailed view */}
          <button
            onClick={toggleDetail}
            className="absolute top-1 left-1 bg-gray-800 text-white px-2 py-1 rounded-md shadow-sm hover:bg-gray-700 transition duration-300 text-xs"
          >
            Back to Team
          </button>
        </div>

        {/* Team Overview Section */}
        <div
          className={`flex flex-col  lg:flex-row items-center justify-between h-full transition-transform duration-700 ease-in-out ${
            showDetail ? '-translate-x-full' : 'translate-x-0'
          }`}
        >
          {/* Left Content */}
          <div className="lg:w-1/3 text-center lg:text-left mb-4 lg:mb-0">
            <h1 className=" text-3xl sm:text-4x1  md:text-5xl font-serif font-bold leading-tight mb-1.5">
              <span className="text-gray-900">MEET</span> <br />
              <span className="text-gray-500 font-normal">OUR-</span> 
              <span className="text-gray-900">TEAM</span>
            </h1>
            <p className="text-xs text-gray-600 max-w-[200px] mx-auto lg:mx-0 mb-4">
              When you need fast and effective medical services, you can trust our team at ARX Care Clinic.
            </p>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="lg:w-2/3 flex flex-col items-center relative">
            <div className="w-full max-w-[250px] cursor-pointer" onClick={toggleDetail}>
              <img
                src={currentMember.image}
                alt={currentMember.name}
                className="w-full h-auto object-cover rounded-md shadow-sm"
                onError={(e) => { e.currentTarget.src = 'https://placehold.co/300x400/e0e0e0/333333?text=Image+Error'; }}
              />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-1.5">{currentMember.name} </h3>
            <div className="flex space-x-0.5 mb-3">
              {currentMember.specializations.map((spec, index) => (
                <span key={index} className="bg-gray-200 text-gray-700 px-1.5 py-0.5 rounded-full text-xs font-semibold">
                  {spec}
                </span>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-1.5 mb-4">
              <button onClick={goToPreviousMember} className="bg-gray-200 text-gray-700 p-1.5 rounded-full hover:bg-gray-300 transition duration-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                </svg>
              </button>
              <button onClick={goToNextMember} className="bg-gray-200 text-gray-700 p-1.5 rounded-full hover:bg-gray-300 transition duration-300">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>

            {/* Pagination */}
            <div className="absolute bottom-1 right-1 text-gray-600 text-xs">
              {currentMemberIndex + 1}/{teamMembers.length}
            </div>

            {/* Smaller images in the background (mock carousel effect) */}
            <div className="absolute -z-10 top-1/2 right-0 transform -translate-y-1/2 flex space-x-1.5 -mr-10 opacity-50 pointer-events-none">
              {nextMembers.map((member, index) => (
                <img
                  key={index}
                  src={member.image}
                  alt={member.name}
                  className={`w-12 h-16 object-cover rounded-sm shadow-xs transition-transform duration-300 ${
                    index === 0 ? 'rotate-3' : index === 1 ? '-rotate-3' : 'rotate-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
