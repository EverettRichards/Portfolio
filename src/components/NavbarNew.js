import { ArrowRightIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getInitialTheme, applyTheme, toggleTheme } from "../utils/theme";

export default function NavbarNew() {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();
  const isDarkTheme = theme === 'dark';

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    setTheme(initialTheme);

    const syncThemeFromDocument = () => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    };

    const observer = new MutationObserver(syncThemeFromDocument);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const handleThemeToggle = () => {
    const newTheme = toggleTheme();
    setTheme(newTheme);
  };

  const scrollToContact = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById('contact');
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const headerClassName = isDarkTheme
    ? 'sticky top-0 z-50 bg-gray-800 text-white shadow-md dark:bg-gray-800'
    : 'sticky top-0 z-50 border-b border-slate-200 bg-slate-200 text-slate-900 shadow-sm backdrop-blur';

  const navLinkClassName = (path) => {
    const activeClass = isDarkTheme ? 'text-blue-400' : 'text-blue-700';
    const inactiveClass = isDarkTheme ? 'text-gray-400' : 'text-slate-600';
    const hoverClass = isDarkTheme ? 'hover:text-white' : 'hover:text-slate-900';

    return `mr-8 transition-colors ${hoverClass} ${isActive(path) ? activeClass : inactiveClass}`;
  };

  const iconButtonClassName = isDarkTheme
    ? 'p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400'
    : 'p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400';

  const contactButtonClassName = isDarkTheme
    ? 'inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base focus:ring-2 focus:ring-blue-400'
    : 'inline-flex items-center bg-white border border-slate-200 py-1 px-3 focus:outline-none hover:bg-slate-50 rounded text-base focus:ring-2 focus:ring-blue-400 shadow-sm';

  return (
    <header className={headerClassName}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium mb-4 md:mb-0">
          <span className="ml-3 text-xl">Everett Richards</span>
        </Link>
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l flex flex-wrap items-center text-base justify-center" style={isDarkTheme ? { borderColor: '#374151' } : { borderColor: '#e2e8f0' }}>
          <Link 
            to="/" 
            className={navLinkClassName('/')}
          >
            Home
          </Link>
          <Link 
            to="/publications" 
            className={navLinkClassName('/publications')}
          >
            Publications
          </Link>
          <Link 
            to="/leadership" 
            className={navLinkClassName('/leadership')}
          >
            Leadership
          </Link>
          <Link 
            to="/about" 
            className={navLinkClassName('/about')}
          >
            Personal
          </Link>
          <Link 
            to="/tutor" 
            className={navLinkClassName('/tutor')}
          >
            Tutoring
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/everett-richards"
            target="_blank"
            rel="noopener noreferrer"
            className={isDarkTheme ? 'text-gray-400 hover:text-white transition-colors' : 'text-slate-500 hover:text-slate-900 transition-colors'}
            aria-label="LinkedIn Profile"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>

          <button
            onClick={handleThemeToggle}
            className={iconButtonClassName}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-slate-600" />
            )}
          </button>

          <Link
            to="/"
            onClick={scrollToContact}
            className={contactButtonClassName}
          >
            <span className={isDarkTheme ? 'text-gray-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}>Contact</span>
            <ArrowRightIcon className={isDarkTheme ? 'w-4 h-4 ml-1 text-gray-400' : 'w-4 h-4 ml-1 text-slate-500'} />
          </Link>
        </div>
      </div>
    </header>
  );
}
