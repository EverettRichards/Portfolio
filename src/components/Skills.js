import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { hard_skills, soft_skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-6">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Experience
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have a wide range of technical skills and experience that I have developed through my academic and research projects.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 md:gap-8 lg:w-3/4 sm:mx-auto sm:mb-2">
          {/* Hard Skills Section */}
          <div className="flex-1 order-1 lg:order-1">
            <h2 className="text-base md:text-lg font-bold text-white py-2 bg-gray-800 mb-2 lg:mb-4 text-center col-span-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              {hard_skills.map((skill) => (
                <div key={skill} className="bg-gray-800 rounded flex p-2 lg:p-4 items-center">
                  <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4 hidden md:block" />
                  <span className="title-font font-medium text-white text-xs md:text-base"
                    dangerouslySetInnerHTML={{ __html: skill }} />
                </div>
              ))}
            </div>
          </div>
          {/* Soft Skills Section */}
          <div className="flex-1 order-2 lg:order-2">
            <h2 className="text-base md:text-lg font-bold text-white py-2 bg-gray-800 mb-2 lg:mb-4 text-center col-span-2">
              Professional Skills
            </h2>
            <div className="grid grid-cols-2 gap-2 lg:gap-4">
              {soft_skills.map((skill) => (
                <div key={skill} className="bg-gray-800 rounded flex p-2 lg:p-4 items-center">
                  <BadgeCheckIcon className="text-blue-400 w-6 h-6 flex-shrink-0 mr-4 hidden md:block" />
                  <span className="title-font font-medium text-white text-xs md:text-base"
                    dangerouslySetInnerHTML={{ __html: skill }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}