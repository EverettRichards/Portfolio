import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { researches } from "../data";

export default function ResearchPage() {
  return (
    <div className="min-h-screen py-10 lg:py-20">
      <style>
        {`
          .research-box {
            height: 24em;
          }

          @media only screen and (max-width: 600px) {
            .research-box {
              height: auto;
            }
          }
        `}
      </style>
      <div className="container px-5 mx-auto text-center lg:px-10">
        <div className="flex flex-col w-full mb-12">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
          <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Research Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700 dark:text-gray-400">
            As an aspiring computer scientist, research is a key part of my academic and professional development. 
            My research interests primarily revolve around intelligent robotics and computer vision, 
            with a focus on autonomous systems and machine learning applications.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Research Experience</h2>
          <div className="text-left lg:w-3/4 mx-auto space-y-8">
            {researches.map((research, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {research.title}
                </h3>
                <p className="text-sm text-blue-500 dark:text-blue-400 mb-1 italic">
                  {research.lab}
                </p>
                <p className="text-sm text-yellow-600 dark:text-yellow-200 mb-2 font-semibold">
                  {research.university}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {research.when}
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 mb-4">
                  <div className="flex-1">
                    <p className="text-base text-gray-700 dark:text-gray-300 text-justify">
                      {research.description}
                    </p>
                  </div>
                  {research.image && (
                    <div className="md:w-1/3">
                      <img
                        src={research.image}
                        alt={research.title}
                        className="w-full h-48 object-cover rounded-lg shadow-md"
                      />
                    </div>
                  )}
                </div>

                {research.links && Object.keys(research.links).length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {Object.entries(research.links).map(([label, url]) => (
                      <a
                        key={label}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
