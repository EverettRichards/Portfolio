import { UserGroupIcon } from "@heroicons/react/solid";
import React from "react";

const leadershipData = [
  {
    title: "President of the <a class='underline' href='https://acm.sdsu.edu' target='_blank'>ACM @ SDSU</a>",
    body: "Founder of the Association for Computing Machinery (ACM) Student Chapter. Lead workshops, organize tech talks, and expanded membership engagement. Planned, implemented, and judged projects for the 2025 <a class='underline' href='https://acm.sdsu.edu/innovate4sdsu' target='_blank'>Innovate 4 SDSU Hackathon.</a>",
    image: require("../images/hackathon_judge.jpg"),
  },
  {
    title: "University Council Representative",
    body: "Represented College of Sciences students on the Associated Students University Council. Advocated for sustainability and STEM research funding. Serve as an Executive Officer on the College of Sciences Student Council.",
    image: require("../images/adela1.jpg"),
  },
  {
    title: "Math & Computer Science Tutoring",
    body: "Served as a tutor at the Math and Science Learning Center (MSLC), and an Instructional Assistant for Discrete Mathematics. Tutored physics, computer science, probability, linear algebra, and real analysis.",
    image: require("../images/mslc.jpeg"),
  },
];

export default function LeadershipPage() {
  return (
    <div className="min-h-screen py-10 lg:py-20">
      <div className="container px-5 mx-auto text-center lg:px-10">
        <UserGroupIcon className="mx-auto inline-block w-10 mb-4 text-gray-700 dark:text-gray-400" />
        <h1 className="sm:text-5xl text-4xl font-medium title-font mb-4 text-gray-900 dark:text-white">
          Leadership Roles
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700 dark:text-gray-400 mb-16">
          Beyond my research work, I am deeply committed to building community, 
          supporting fellow students, and contributing to the academic environment through various leadership roles.
        </p>
      </div>

      <div className="space-y-12 lg:space-y-16">
        {leadershipData.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col w-5/6 lg:w-3/5 mx-auto md:flex-row ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center md:items-start gap-6 md:gap-8`}
          >
            {/* Text Section */}
            <div className="flex-1 md:my-auto text-center md:text-left">
              <h3 
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left" 
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <p 
                className="text-gray-700 dark:text-gray-400 text-base md:text-lg lg:text-xl" 
                dangerouslySetInnerHTML={{ __html: item.body }}
              ></p>
            </div>
            
            {/* Image Section */}
            <div className="w-full md:w-auto md:flex-shrink-0">
              <img
                src={item.image}
                alt={item.title.replace(/<[^>]*>/g, '')}
                className="w-full mx-auto md:w-auto md:h-56 lg:h-64 h-auto object-cover rounded-xl shadow-lg bg-white border-4 border-blue-400 dark:border-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
