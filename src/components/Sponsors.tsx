import React, { useEffect, useRef, useState, useCallback } from 'react';

// Define Sponsor interface for type safety
interface Sponsor {
  name: string;
  logoUrl: string;
}

// Define sponsors data outside the component to prevent re-creation on every render
const SPONSORS_DATA: Sponsor[] = [
  {
    name: "Africa Insurance Company S.C.",
    logoUrl: "/sp1.png", // Updated from placeholder
  },
  {
    name: "Abay Insurance S.C.",
    logoUrl: "/sp2.png", // Updated from placeholder
  },
  {
    name: "Nile Insurance Company S.C",
    logoUrl: "/sp3.png", // Updated from placeholder
  },
  {
    name: "Global Insurance Co.(S.C)",
    logoUrl: "/sp4.png", // Updated from placeholder
  },
  {
    name: "United Insurance S.C.",
    logoUrl: "/sp5.jpg", // Updated from placeholder
  },
  {
    name: "Awash Insurance S.C.",
    logoUrl: "/sp6.jpg", // Updated from placeholder
  },
  {
    name: "Ethio Life and General Insurance S.C.",
    logoUrl: "/sp7.png", // Updated from placeholder
  },
  {
    name: "Lion Insurance Company S.C.",
    logoUrl: "/sp8.jpg", // Updated from placeholder
  },
  {
    name: "Nib Insurance Company S.C.",
    logoUrl: "/sp9.jpg", // Updated from placeholder
  },
  {
    name: "Oromia Insurance Company S.C.",
    logoUrl: "/sp10.png", // Updated from placeholder
  },
];

// Component for an individual sponsor logo
const SponsorLogo: React.FC<Sponsor> = ({ name, logoUrl }) => {
  return (
    // Container for the logo with fixed dimensions, rounded corners, and hover effects
    <div
      className="flex-shrink-0 w-32 h-32 md:w-80 md:h-60 
                 flex items-center justify-center mx-4 p-2 
                 bg-white shadow-lg rounded-xl overflow-hidden 
                 transform transition-all duration-300 ease-in-out
                 hover:scale-105 hover:shadow-xl hover:ring-4 hover:ring-blue-300 hover:ring-offset-2"
    >
      <img
        src={logoUrl}
        alt={name}
        // Image styling: full width/height of container, object-contain to prevent distortion, grayscale by default, color on hover
        className="w-full h-full object-contain   
                   transition-all duration-500 ease-in-out"
        // Fallback for image loading errors
        onError={(e) => {
          // Fallback to a placeholder if the local image fails to load
          e.currentTarget.src = `https://placehold.co/150x150/E0F2F7/000?text=${name.split(' ')[0]}`;
          e.currentTarget.alt = `Image not found for ${name}`;
        }}
      />
    </div>
  );
};

const Sponsors: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const autoScrollIntervalRef = useRef<number | null>(null);

  // Function to start automatic scrolling
  const startAutoScroll = useCallback(() => {
    // Clear any existing auto-scroll interval to prevent duplicates
    if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);

    // Set a new interval for smooth scrolling
    autoScrollIntervalRef.current = window.setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        // The loop point is half the total scroll width (where the duplicated content starts)
        const loopPoint = scrollWidth / 2;

        // If scroll position reaches the start of the duplicated content, reset to the beginning
        if (scrollLeft >= loopPoint) {
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          // Otherwise, increment scroll position for continuous movement
          scrollContainerRef.current.scrollLeft += 1;
        }
      }
    }, 20); // Scroll speed (lower value = faster scroll)
  }, []);

  // Effect hook to start auto-scrolling on component mount and clean up on unmount
  useEffect(() => {
    startAutoScroll();

    return () => {
      // Clean up the interval when the component unmounts
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
    };
  }, [startAutoScroll]); // Re-run effect if startAutoScroll function changes (unlikely due to useCallback)

  // Handler for starting drag (mouse down or touch start)
  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true); // Set dragging state to true
    setStartX(clientX); // Record the starting X position of the cursor/touch
    setScrollLeftState(scrollContainerRef.current?.scrollLeft || 0); // Record current scroll position
    // Stop auto-scrolling when user starts dragging
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  // Handler for moving while dragging (mouse move or touch move)
  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return; // Only proceed if dragging
    const walk = (clientX - startX); // Calculate how much the cursor/touch has moved
    if (scrollContainerRef.current) {
      // Adjust scroll position based on drag movement
      scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
    }
  }, [isDragging, startX, scrollLeftState]); // Dependencies for useCallback

  // Handler for ending drag (mouse up or touch end)
  const handleEnd = useCallback(() => {
    setIsDragging(false); // Reset dragging state
    // Resume auto-scrolling after a short delay
    setTimeout(startAutoScroll, 1000);
  }, [startAutoScroll]); // Dependency for useCallback

  // Mouse event handlers
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => {
    // If dragging ends outside the element, treat it as an end event
    if (isDragging) handleEnd();
  };

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden relative font-inter">
      <div className="container mx-auto px-6 text-center">
        {/* Main title with gradient text and animation */}
        <h2 className="text-5xl md:text-6xl font-extrabold  text-gray-800 leading-tight mb-4 animate-text-reveal">
          Our Valued <span className="block md:inline">Partnerships</span>
        </h2>
        {/* Description paragraph with fade-in animation */}
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto mb-16 animate-fade-in-up">
          At BM Insurance Company S.C., we proudly partner with leading insurers to provide comprehensive and reliable services. Our collaborations ensure top-quality insurance solutions for our clients in Ethiopia. We value these partnerships and are committed to continuing our efforts to serve our community effectively.
        </p>

        {/* Infinite Scrolling Sponsors Container */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-x-scroll py-8 cursor-grab active:cursor-grabbing select-none no-scrollbar transform-gpu" // transform-gpu for hardware acceleration
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="flex whitespace-nowrap">
            {/* Duplicate sponsors to create seamless loop */}
            {[...SPONSORS_DATA, ...SPONSORS_DATA].map((sponsor, index) => (
              <SponsorLogo key={index} {...sponsor} />
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and scrollbar hiding */}
      <style>{`
        /* Define Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        .font-inter {
          font-family: 'Inter', sans-serif;
        }

        /* Text Reveal Animation for Title */
        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(20px); letter-spacing: -0.5em; filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0px); letter-spacing: normal; filter: blur(0px); }
        }
        .animate-text-reveal {
          animation: text-reveal 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          animation-delay: 0.5s;
        }

        /* Fade In Up for Description */
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          animation-delay: 1.2s;
        }

        /* Hide scrollbar for a cleaner look */
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  );
};

export default Sponsors;
