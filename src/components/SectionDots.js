import React, { useState, useEffect } from "react";

export default function SectionDots() {
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Hero' },
    { id: 'research-overview', label: 'Research' },
    { id: 'leadership-preview', label: 'Leadership' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Account for sticky navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleKeyPress = (e, sectionId) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <nav 
      className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      aria-label="Page sections"
      style={{ 
        '@media (prefers-reduced-motion: reduce)': {
          scrollBehavior: 'auto'
        }
      }}
    >
      <ul className="flex flex-col gap-4">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              onKeyPress={(e) => handleKeyPress(e, section.id)}
              className={`group relative flex items-center transition-all focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-full ${
                activeSection === section.id ? 'scale-110' : ''
              }`}
              aria-label={`Go to ${section.label} section`}
              aria-current={activeSection === section.id ? 'true' : 'false'}
            >
              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all ${
                  activeSection === section.id 
                    ? 'bg-blue-500 border-blue-500 scale-125' 
                    : 'bg-gray-700 border-gray-500 hover:bg-gray-600 hover:border-gray-400'
                }`}
              />
              <span className={`absolute right-6 whitespace-nowrap bg-gray-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity ${
                activeSection === section.id ? 'font-bold' : ''
              }`}>
                {section.label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
