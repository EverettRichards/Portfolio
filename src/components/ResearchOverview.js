import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

export default function ResearchOverview() {
  const universities = [
    {
      name: "Worcester Polytechnic Institute (WPI)",
      description: "Developed noise-aware training for collaborative autonomous vehicle perception, achieving up to 40% improvement in robustness under challenging conditions.",
      image: "./research_videos/carla.gif"
    },
    {
      name: "University of California San Diego (UCSD)",
      description: "Modeled imitation learning robustness to noisy demonstrations using sigmoid degradation curves with R² values between 0.91 and 0.99.",
      image: "./research_videos/mimicgen_coffee.gif"
    },
    {
      name: "University of Delaware",
      description: "Created edge-enabled collaborative object detection framework (PACE & VOTE algorithms) for multi-vehicle perception systems.",
      image: "./research_videos/reu_video.gif"
    },
    {
      name: "San Diego State University (SDSU)",
      description: "Designed data analytics for construction worker safety using IMU sensor fusion and machine learning with real-time 3D visualization.",
      image: "./research_videos/dice_video.gif"
    }
  ];

  return (
    <section id="research-overview" className="py-10 lg:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-12">
          <AcademicCapIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
          <h2 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-gray-900 dark:text-white">
            Research Experience
          </h2>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700 dark:text-gray-400">
            I have conducted research at four R1 research universities, focusing on machine learning,
            computer vision, and robotics. My work spans autonomous vehicles, imitation learning,
            and sensor fusion applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:w-4/5 mx-auto mb-8">
          {universities.map((uni, index) => (
            <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {uni.name}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 mb-4">
                {uni.description}
              </p>
              {uni.image && (
                <img
                  src={uni.image}
                  alt={`Research at ${uni.name}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/publications"
            className="inline-flex text-white bg-blue-500 border-0 py-3 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg transition-colors focus:ring-2 focus:ring-blue-400"
          >
            View Publications
          </Link>
        </div>
      </div>
    </section>
  );
}
