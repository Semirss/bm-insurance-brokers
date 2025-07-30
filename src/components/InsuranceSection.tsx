
type FeatureItemProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureItem = ({ title, description, icon }: FeatureItemProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white"> {/* Increased padding, removed rounded-md, shadow-sm */}
      <div className="flex-shrink-0 mb-2"> {/* Increased mb */}
        <div className="bg-blue-100 rounded-full p-2"> {/* Increased padding */}
          {icon}
        </div>
      </div>
      <h3 className="text-sm font-semibold text-gray-900 mb-1.5">{title}</h3> {/* Adjusted mb */}
      <p className="text-xs text-gray-700">{description}</p>
    </div>
  );
};

const InsuranceSection = () => {
  const featuresData = [
    {
      title: "Needs Assessment",
      description: "Assess risks and get tailored recommendations.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
    },
    {
      title: "Claims Assistance",
      description: "Seamless support for quick, fair claims.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>,
    },
    {
      title: "Policy Management",
      description: "Effortless setup and timely renewals.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>,
    },
    {
      title: "Regulatory Compliance",
      description: "Policies meet all legal standards.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>,
    },
    {
      title: "Specialized Products",
      description: "Access tailored insurance for unique risks.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0v10l-8 4m8-4H4m0 0l8 4m-8-4V7m8 4v10l-8 4m8-4V7m0 0L12 3v4m-8 4h16"></path></svg>,
    },
    {
      title: "Policy Selection",
      description: "Compare options, find your perfect fit.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>,
    },
    {
      title: "Policy Acquisition",
      description: "Quick, hassle-free new policy setup.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>,
    },
    {
      title: "Coverage Advice",
      description: "Expert advice to optimize your protection.",
      icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9.247a4.75 4.75 0 000 5.506m0-5.506a4.75 4.75 0 010 5.506M15.712 12a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21.5c-4.97 0-9-3.6-9-8s4.03-8 9-8 9 3.6 9 8-4.03 8-9 8z"></path></svg>,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center p-6 bg-white font-sans min-h-screen"> {/* Increased overall padding */}
      {/* Main Heading and Description */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8"> {/* Increased mb */}
        <h1 className="text-3xl  md:text-4xl font-bold text-gray-900 mb-3 leading-tight"> {/* Adjusted mb */}
          8-in-1 Insurance Solutions
        </h1>
        <p className="text-sm text-gray-700 max-w-lg">
          Say goodbye to hassles and embrace a smarter solution that resolves your pain points:
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl"> {/* Increased gap */}
        {featuresData.map((feature, index) => (
          <FeatureItem
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default InsuranceSection;
