import React, { useEffect, useRef, useState, useCallback } from 'react';

interface Sponsor {
  name: string;
  logoUrl: string;
}

// Define sponsors data outside the component to prevent re-creation on every render
const SPONSORS_DATA: Sponsor[] = [
  {
    name: "Africa Insurance Company S.C.",
    logoUrl: "/sp1.png", 
  },
  {
    name: "Abay Insurance S.C.",
    logoUrl: "/sp2.png", 
  },
  {
    name: "Nile Insurance Company S.C",
    logoUrl: "/sp3.png", 
  },
  {
    name: "Global Insurance Co.(S.C)",
    logoUrl: "/sp4.png", 
  },
  {
    name: "United Insurance S.C.",
    logoUrl: "/sp5.jpg", 
  },
  {
    name: "Awash Insurance S.C.",
    logoUrl: "/sp6.jpg", 
  },
  {
    name: "Ethio Life and General Insurance S.C.",
    logoUrl: "/sp7.png", 
  },
  {
    name: "Lion Insurance Company S.C.",
    logoUrl: "/sp8.jpg", 
  },
  {
    name: "Nib Insurance Company S.C.",
    logoUrl: "/sp9.jpg", 
  },
  {
    name: "Oromia Insurance Company S.C.",
    logoUrl: "/sp10.png", 
  },
];

// Component for an individual sponsor logo without background or specific shape
const SponsorLogo: React.FC<Sponsor> = ({ name, logoUrl }) => {
  return (
    <div
      className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center mx-4 p-2" // Removed bg-white, shadow-md, rounded-lg, adjusted padding
    >
      <img
        src={logoUrl}
        alt={name}
        className="max-w-full rounded-full  max-h-full object-contain hover:grayscale-0 transition-all duration-300 transform hover:scale-110" // Removed clip-path, added hover scale
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

  const startAutoScroll = useCallback(() => {
    if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
    autoScrollIntervalRef.current = window.setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current;
        const loopPoint = scrollWidth / 2;

        if (scrollLeft >= loopPoint - clientWidth / 2) {
          scrollContainerRef.current.scrollLeft = 0;
        } else {
          scrollContainerRef.current.scrollLeft += 1;
        }
      }
    }, 20);
  }, []);

  useEffect(() => {
    startAutoScroll();

    return () => {
      if (autoScrollIntervalRef.current) clearInterval(autoScrollIntervalRef.current);
    };
  }, [startAutoScroll]);

  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setScrollLeftState(scrollContainerRef.current?.scrollLeft || 0);
    if (autoScrollIntervalRef.current) {
      clearInterval(autoScrollIntervalRef.current);
      autoScrollIntervalRef.current = null;
    }
  }, []);

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return;
    const walk = (clientX - startX);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollLeftState - walk;
    }
  }, [isDragging, startX, scrollLeftState]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
    setTimeout(startAutoScroll, 1000);
  }, [startAutoScroll]);

  // Mouse event handlers
  const onMouseDown = (e: React.MouseEvent) => handleStart(e.clientX);
  const onMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const onMouseUp = () => handleEnd();
  const onMouseLeave = () => {
    if (isDragging) handleEnd();
  };

  // Touch event handlers
  const onTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
  const onTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const onTouchEnd = () => handleEnd();

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden relative">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-tight mb-4 animate-text-reveal">
          Our Valued <span className="block md:inline">Partnerships</span>
        </h2>
        <p className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto mb-16 animate-fade-in-up">
At BM Insurance Company S.C., we proudly partner with leading insurers to provide comprehensive and reliable services. Our collaborations ensure top-quality insurance solutions for our clients in Ethiopia. We value these partnerships and are committed to continuing our efforts to serve our community effectively.        </p>

        {/* Infinite Scrolling Sponsors Container */}
        <div
          ref={scrollContainerRef}
          className="relative w-full overflow-x-scroll py-8 cursor-grab active:cursor-grabbing select-none no-scrollbar"
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

      <style>{`
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

        /* Removed custom clip-path for rhombus */
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
