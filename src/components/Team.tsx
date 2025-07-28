import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  alignment: 'left' | 'right';
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ name, title, description, imageUrl, alignment }) => {
  const isLeft = alignment === 'left';
  return (
    <div className={`flex flex-col items-center text-center md:flex-row ${isLeft ? 'md:text-left' : 'md:flex-row-reverse md:text-right'} mb-16 md:mb-24`}>
      <div className={`relative w-60 h-60 md:w-72 md:h-72 flex-shrink-0 overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300 rounded-xl
        ${isLeft ? 'md:mr-12' : 'md:ml-12'}`}> {/* Removed slanted-container, added rounded-xl */}
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" /> {/* Removed counter-slanted-image */}
      </div>
      <div className={`mt-6 md:mt-0 ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-semibold mb-4 text-lg">{title}</p>
        <p className="text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">{description}</p>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Ayalew Abebe",
      title: "CEO",
      description: "Ayalew, with 44 years in Insurance, has directed EIC and managed major projects like Gibe II. Now CEO of our brokerage, he brings vast industry and global reinsurance expertise.",
      imageUrl: "pp1.jpg", // Placeholder image
      alignment: "left" as const,
    },
    {
      name: "Mebratu Gowomsa",
      title: "Deputy General Manager (Operations)",
      description: "His decade-long tenure in claims management and import-export operations ensures our clients receive exceptional support and service.",
      imageUrl: "https://placehold.co/250x250/E0E7FF/4F46E5?text=Mebratu+Gowomsa", // Placeholder image
      alignment: "right" as const,
    },
    {
      name: "Bizuhan Abebe",
      title: "Deputy General Manager (Marketing)",
      description: "With over 19 years in insurance, Bizuhan's customer-centric approach and MBA background drive our company's growth and client satisfaction.",
      imageUrl: "https://placehold.co/250x250/E0E7FF/4F46E5?text=Bizuhan+Abebe", // Placeholder image
      alignment: "left" as const,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Meet Our <span className="text-blue-600">Exceptional Team</span>
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Experienced Professionals Dedicated to Your Insurance Needs
          </p>
        </div>

        <div className="flex flex-col items-center">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
      <style>{`
        /* Removed .slanted-container and .counter-slanted-image as they are no longer needed */
      `}</style>
    </section>
  );
};

export default Team;
