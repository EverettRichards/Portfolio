import { BadgeCheckIcon } from "@heroicons/react/solid";
import React from "react";

const awardGroups = [
  {
    title: "Academic Honors",
    awards: [
      {
        title: "Most Outstanding Computer Science Graduate",
        organization: "SDSU Department of Computer Science",
        year: "2026"
      },
      {
        title: "Most Outstanding Mathematics Graduate",
        organization: "SDSU Department of Mathematics and Statistics",
        year: "2026"
      },
      {
        title: "Certificate of Excellence in Advanced Programming Languages",
        organization: "World Computing Organization",
        year: "2025"
      },
      {
        title: "Dean’s List",
        organization: "SDSU College of Sciences",
        year: "2023–2026"
      },
      {
        title: "Social Science Department Award",
        organization: "Poway High School",
        year: "2023"
      },
    ]
  },
  {
    title: "Scholarships & Fellowships",
    awards: [
      {
        title: "Robert W. Gore Engineering Fellowship",
        organization: "University of Delaware",
        year: "2026"
      },
      {
        title: "Daniel L. Chester Graduate Fellowship",
        organization: "University of Delaware",
        year: "2026",
      },
      { title: "UPE ACM Scholarship", year: "2025" },
      { title: "Steven Michael Rogers Scholarship in Mathematics", year: "2025" },
      { title: "George A. Hansen Scholarship", year: "2025" },
      { title: "Deloitte Foundation Scholarship", year: "2024" },
      { title: "Mensa Foundation Scholarship", year: "2024" },
      { title: "Intuit STEM Scholarship", year: "2023"}
    ]
  }
];

export default function Awards() {
  return (
    <section
      id="awards"
      aria-labelledby="awards-heading"
      className="border-t border-gray-200 py-10 dark:border-gray-800 lg:py-20"
    >
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <BadgeCheckIcon
            aria-hidden="true"
            className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400"
          />
          <h2
            id="awards-heading"
            className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white"
          >
            Awards
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-400">
            Selected academic honors, scholarships, and fellowships.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:w-4/5 mx-auto">
          {awardGroups.map((group) => (
            <div key={group.title} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {group.title}
              </h3>
              <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                {group.awards.map((award) => (
                  <li key={award.title} className="flex items-start justify-between gap-4 py-4 last:pb-0">
                    <div className="min-w-0">
                      <h4 className="font-medium leading-relaxed text-gray-900 dark:text-white">
                        {award.title}
                      </h4>
                      {award.organization && (
                        <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
                          {award.organization}
                        </p>
                      )}
                    </div>
                    <span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-200">
                      {award.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
