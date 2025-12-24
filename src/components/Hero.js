import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="relative">
      <div className="container mx-auto flex px-2 lg:px-10 pt-10 lg:pt-20 pb-10 lg:pb-20 md:flex-row flex-col items-center">
        <div className="lg:w-1/2 md:w-1/2 px-4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-blue-500 dark:text-blue-500">
            Hi, I'm Everett.
          </h1>
          <h2 className="title-font sm:text-2xl text-xl mb-6 font-medium text-gray-700 dark:text-gray-300">
            Computer Science & Applied Mathematics Student | AI Researcher
          </h2>
          
          <ul className="title-font sm:text-md mb-8 font-medium text-gray-600 dark:text-gray-300 text-left list-disc text-md px-5">
            <li className="my-2">Pursuing B.S. in Computer Science & Applied Mathematics at SDSU</li>
            <li className="my-2">Research at 4 R1 universities in machine learning for robotics</li>
            <li className="my-2">Published 3 research papers on autonomous systems</li>
            <li className="my-2">Founder & President of SDSU ACM Chapter</li>
          </ul>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              to="/research"
              className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg transition-colors focus:ring-2 focus:ring-blue-400"
            >
              Research Experience
            </Link>
            <a
              href="/files/Richards_CV_12_25.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-lg transition-colors focus:ring-2 focus:ring-blue-400"
            >
              View CV
            </a>
            <a
              href="https://www.linkedin.com/in/everett-richards"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 dark:hover:bg-gray-700 rounded text-lg transition-colors focus:ring-2 focus:ring-blue-400"
            >
              <img src="/icons/linkedin.svg" alt="" className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded-2xl shadow-xl"
            alt="Everett presenting research"
            src="./slideshow/NeurIPS.jpg"
          />
        </div>
      </div>
    </section>
  );
}
