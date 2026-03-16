import { UserGroupIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";

const leadershipData = [
  {
    title: "Founder & President",
    org: "Association for Computing Machinery (ACM) at SDSU",
    link: "https://acm.sdsu.edu",
    body: `
    Organized and presented 30+ workshops on topics including machine learning, web development, version control, prompt engineering, and Python programming.
    Planned and implemented recurring social events, including the STEM Karaoke Night series and biannual Computer Science Bowling Night.
    Managed an operating budget of more than $6,000 per year, including $2,500 from Google.`,
    image: require("../images/hackathon_judge.jpg"),
  },
  {
    title: "Co-Founder & Vice President",
    org: "Coalition of Tech Representatives and Leadership (CTRL)",
    link: "https://ctrl.sdsu.edu",
    body: `Supervised a wide range of tech-oriented career development activities, including the
    <a href="https://acm.sdsu.edu/hack" target="_blank" class="underline">Innovate4SDSU Hackathon</a> (150+ participants),
    <a href="https://ctrl.sdsu.edu/#/nxp" target="_blank" class="underline">NXP Engineering Bootcamp</a> (10-week industry collaboration), and
    <a href="https://ctrl.sdsu.edu/#/codeblitz" target="_blank" class="underline">CodeBlitz</a> (fast-paced programming competition).
    Chaired the <a href="https://ctrl.sdsu.edu/#/icc" target="_blank" class="underline">Inter-Club Council</a> of representatives from a dozen tech organizations at SDSU.
    Developed and maintained the organization's <a href="https://ctrl.sdsu.edu" target="_blank" class="underline">website</a>.`,
    image: require("../images/ctrlhack.jpeg"),
  },
  {
    title: "University Council Representative",
    org: "Associated Students of SDSU + College of Sciences Student Council",
    link: "https://as.sdsu.edu/",
    body: "Represented nearly 8,000 College of Sciences students on the Associated Students University Council. Met with university officials (including SDSU President Adela de la Torre, pictured on the right) to advocate for student needs. Led a push for transparency in mandatory student fees. Served as an Executive Officer on the College of Sciences Student Council.",
    image: require("../images/adela1.jpg"),
  },
  {
    title: "Math & Computer Science Tutoring",
    org: "SDSU Math and Science Learning Center (MSLC)",
    link: "https://mslc.sdsu.edu",
    body: "Served as a tutor at the Math and Science Learning Center (MSLC), and an Instructional Assistant for Discrete Mathematics. Tutored hundreds of students in physics, computer science, probability, linear algebra, discrete mathematics, and real analysis.",
    image: require("../images/mslc.jpeg"),
  },
];

export default function LeadershipPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center md:text-left" 
                dangerouslySetInnerHTML={{ __html: item.title }}
              ></h3>
              <h3 
                className="text-lg md:text-xl font-bold text-gray-800 dark:text-blue-300 mb-2 text-center md:text-left">
                <a
                  href={ item.link }
                  target='_blank'
                  dangerouslySetInnerHTML={{ __html: item.org }}
                ></a>
              </h3>
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
                className="w-full mx-auto md:w-auto md:h-56 lg:h-64 h-auto object-cover rounded-xl shadow-lg bg-white border-2 border-blue-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
