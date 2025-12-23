import { ArrowRightIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { getInitialTheme, applyTheme, toggleTheme } from "../utils/theme";

export default function NavbarNew() {
  const [theme, setTheme] = useState('dark');
  const location = useLocation();

  useEffect(() => {
    const initialTheme = getInitialTheme();
    applyTheme(initialTheme);
    setTheme(initialTheme);
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

  return (
    <header className="bg-gray-800 dark:bg-gray-800 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="title-font font-medium text-white mb-4 md:mb-0">
          <span className="ml-3 text-xl">Everett Richards</span>
        </Link>
        
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <Link 
            to="/" 
            className={`mr-8 hover:text-white transition-colors ${isActive('/') ? 'text-blue-400' : 'text-gray-400'}`}
          >
            Home
          </Link>
          <Link 
            to="/research" 
            className={`mr-8 hover:text-white transition-colors ${isActive('/research') ? 'text-blue-400' : 'text-gray-400'}`}
          >
            Research
          </Link>
          <Link 
            to="/leadership" 
            className={`mr-8 hover:text-white transition-colors ${isActive('/leadership') ? 'text-blue-400' : 'text-gray-400'}`}
          >
            Leadership
          </Link>
          <Link 
            to="/about" 
            className={`mr-8 hover:text-white transition-colors ${isActive('/about') ? 'text-blue-400' : 'text-gray-400'}`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/everett-richards"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
            aria-label="LinkedIn Profile"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>

          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5 text-yellow-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-300" />
            )}
          </button>

          <Link
            to="/"
            onClick={scrollToContact}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base focus:ring-2 focus:ring-blue-400"
          >
            <span className="text-gray-400 hover:text-white">Contact</span>
            <ArrowRightIcon className="w-4 h-4 ml-1 text-gray-400" />
          </Link>
        </div>
      </div>
    </header>
  );
}
