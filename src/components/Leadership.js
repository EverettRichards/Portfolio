import { LibraryIcon as UserIcon } from "@heroicons/react/solid";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

const leadershipData = [
    {
      title: "President of the ACM @ SDSU",
      body: "Leader of the Association for Computing Machinery Student Chapter. Led workshops, organized tech talks, and expanded membership engagement. Organized and judged projects for the 2025 Innovate 4 SDSU Hackathon.",
      image: require("../images/hackathon_judge.jpg"),
    },
    {
      title: "Associated Students Representative",
      body: "Represented College of Sciences students on the University Council. Advocated for sustainability and STEM funding. Previously served on the College of Sciences Student Council.",
      image: require("../images/AS_Logo.png"),
    },
    {
      title: "Math & Computer Science Tutoring",
      body: "Served as a tutor at the Math and Science Learning Center (MSLC), and an Instructional Assistant for Discrete Mathematics. Tutored physics, computer science, statistics, and advanced mathematics.",
      image: require("../images/mslc.jpeg"),
    },
  ];

export default function Leadership() {
  return (
    <section id="leadership">
    <div className="container px-5 pt-5 lg:pt-10 lg:pb-10 mx-auto text-center lg:px-10">
        <UserIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
        Leadership Roles
        </h1>
        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Section coming soon...
        </p> */}
    </div>

    <div className="space-y-12">
        {leadershipData.map((item, index) => (
        <div
            key={index}
            className={`flex flex-col-reverse lg:w-3/5 lg:mx-auto lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center lg:items-start gap-4 lg:gap-6`}
        >
            {/* Text Section */}
            <div className="lg:w-3/5 lg:my-auto text-center lg:text-left">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-100 mb-2">
                    {item.title}
                </h3>
                <p className="text-gray-400 text-base md:text-lg lg:text-xl">{item.body}</p>
            </div>
            {/* Image Section */}
            <div className="lg:w-2/5 w-full">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover rounded-xl shadow-md bg-white"
                />
            </div>
        </div>
        ))}
    </div>
    </section>
  );
}