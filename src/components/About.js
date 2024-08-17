import React from "react";

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
                Hi, I'm Everett.
              </h1>
              <h2 className="title-font sm:text-2xl text-2xl mb-4 font-medium text-gray-300">
              A little bit about me:
              </h2>
              <ul className="title-font sm:text-lg mb-4 font-medium text-gray-300 text-left list-disc text-lg px-5">
                <li>Undergraduate studying Computer Science & Applied Mathematics</li>
                <li>Undergraduate Researcher</li>
                <li>Computer Science & Math Tutor</li>
                <li>President, ACM Student Chapter</li>
              </ul>
              <p className="mb-8 leading-relaxed">
                I am an undergraduate at San Diego State University pursuing
                a double major in Computer Science and Applied Mathematics.
                My areas of interest include machine learning, software engineering,
                and data science. I am currently seeking opportunities to apply my
                skills to computational research, software development, and data analysis,
                both in industry and academia.
              </p>
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  View Projects
                </a>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded-2xl"
                alt="hero"
                src="./ud_symposium.png"
              />
            </div>
          </div>
        </section>
      );
}