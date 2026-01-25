import { UserGroupIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function LeadershipPreview() {
  const leadershipHighlights = [
    {
      title: "ACM @ SDSU President",
      description: "Founded and lead the ACM Student Chapter, organizing hackathons, workshops, and tech talks.",
      icon: "🏆"
    },
    {
      title: "University Council Representative",
      description: "Represented College of Sciences students, advocating for STEM research funding.",
      icon: "🎓"
    },
    {
      title: "Math & CS Tutoring",
      description: "Tutored students in physics, CS, probability, linear algebra, and real analysis.",
      icon: "📚"
    }
  ];

  return (
    <section id="leadership-preview" className="py-10 lg:py-20 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <UserGroupIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Leadership & Service
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-400">
            Beyond research, I am committed to building community and supporting fellow students 
            through leadership roles and mentorship.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:w-4/5 mx-auto mb-8">
          {leadershipHighlights.map((item, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-800 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/leadership"
            className="inline-flex text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg transition-colors focus:ring-2 focus:ring-blue-400"
          >
            View All Leadership Roles
          </Link>
        </div>
      </div>
    </section>
  );
}
