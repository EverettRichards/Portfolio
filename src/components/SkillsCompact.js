import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { hard_skills, soft_skills } from "../data";

export default function SkillsCompact() {
  return (
    <section id="skills" className="py-10 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-8">
          <ChipIcon className="w-10 inline-block mb-4 text-gray-700 dark:text-gray-400" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 dark:text-white mb-4">
            Skills &amp; Experience
          </h2>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-700 dark:text-gray-400">
            Technical and professional skills developed through research and academic projects.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:w-4/5 mx-auto">
          {/* Technical Skills */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white py-3 bg-gray-200 dark:bg-gray-900 mb-4 text-center rounded-lg">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hard_skills.map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-900 rounded-lg flex p-3 items-center shadow-sm">
                  <BadgeCheckIcon className="text-blue-500 w-5 h-5 flex-shrink-0 mr-3" />
                  <span className="title-font font-medium text-gray-800 dark:text-white text-sm"
                    dangerouslySetInnerHTML={{ __html: skill }} />
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Skills */}
          <div className="flex-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white py-3 bg-gray-200 dark:bg-gray-900 mb-4 text-center rounded-lg">
              Professional Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {soft_skills.map((skill) => (
                <div key={skill} className="bg-white dark:bg-gray-900 rounded-lg flex p-3 items-center shadow-sm">
                  <BadgeCheckIcon className="text-blue-500 w-5 h-5 flex-shrink-0 mr-3" />
                  <span className="title-font font-medium text-gray-800 dark:text-white text-sm"
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
