import { LibraryIcon as UserIcon } from "@heroicons/react/solid";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";

const leadershipData = [
    {
      title: "President of the <a class='underline' href='https://acm.sdsu.edu' target='_blank'>ACM @ SDSU</a>",
      body: "Founder of the Association for Computing Machinery (ACM) Student Chapter. Lead workshops, organize tech talks, and expanded membership engagement. Planned, implemented, and judged projects for the 2025 <a class='underline' href='https://acm.sdsu.edu/innovate4sdsu' target='_blank'>Innovate 4 SDSU Hackathon.</a>",
      image: require("../images/hackathon_judge.jpg"),
    },
    {
      title: "Associated Students Representative",
      body: "Represented College of Sciences students on the University Council. Advocated for sustainability and STEM research funding. Serve as an Executive Officer on the College of Sciences Student Council.",
      image: require("../images/AS_Logo.png"),
    },
    {
      title: "Math & Computer Science Tutoring",
      body: "Served as a tutor at the Math and Science Learning Center (MSLC), and an Instructional Assistant for Discrete Mathematics. Tutored physics, computer science, probability, linear algebra, and real analysis.",
      image: require("../images/mslc.jpeg"),
    },
  ];

export default function Leadership() {
  return (
    <section id="leadership">
    <div className="container px-5 pt-5 md:pt-10 md:pb-10 mx-auto text-center lg:px-10">
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
            className={`flex flex-col-reverse md:w-5/6 lg:w-3/5 md:mx-auto md:flex-row ${
            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center md:items-start gap-4 md:gap-6`}
        >
            {/* Text Section */}
            <div className="md:w-3/5 md:my-auto text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-2" dangerouslySetInnerHTML={{ __html: item.title }}></h3>
                <p className="text-gray-400 text-base md:text-lg lg:text-xl" dangerouslySetInnerHTML={{ __html: item.body }}></p>
            </div>
            {/* Image Section */}
            <div className="md:w-2/5 md:w-1/2 w-full">
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