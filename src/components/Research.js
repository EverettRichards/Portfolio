import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { researches } from "../data";

export default function Research() {
  return (
    <section id="research" className="text-gray-400 bg-gray-900 body-font">
      <style>
        {`
          .research-box {
            height: 24em;
          }

          @media only screen and (max-width: 600px) {
            .research-box {
              height: auto;
            }
          }
        `}
      </style>
      <div className="container px-5 pt-5 lg:pt-10 lg:pb-10 mx-auto text-center lg:px-10">
        <div className="flex flex-col w-full mb-6">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Research Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            As an aspiring computer scientist, research is a key part of my academic and professional development. My research interests primarily revolve around intelligent robotics and computer vision.
            <span className="hidden md:block italic pt-3">Hover your mouse over each thumbnail to learn more about the research project.</span>
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {researches.map((research) => (
            <a
              href={research.main_link}
              key={research.image}
              target="_blank"
              className="md:w-1/2 w-100 p-4">
              <div className="flex relative bg-gray-800">
                <img
                  alt="gallery"
                  className="research-box absolute inset-0 w-full h-full object-cover object-center bg-gray-800 sm:hidden md:block"
                  src={research.image}
                />
                <div className="research-box px-8 py-6 relative z-10 w-full border-4 border-gray-800 bg-gray-900 sm:opacity-100 md:opacity-0 md:hover:opacity-100 flex flex-col justify-center h-full">
                  <h2 className="tracking-widest text-xs lg:text-sm title-font font-medium text-blue-400 mb-1 italic">
                    {research.lab}
                  </h2>
                  <h2 className="tracking-widest text-xs lg:text-sm title-font font-medium text-yellow-200 mb-1">
                    {research.university}
                  </h2>
                  <h1 className="title-font text-base lg:text-lg font-medium text-white mb-3">
                    {research.title}
                  </h1>
                  <p className="text-justify text-xs lg:text-base">
                    {research.description}
                  </p>

                  <div className="flex flex-wrap lg:w-full sm:mx-auto sm:mb-2 -mx-6 mt-2 items-center justify-center">
                    {Object.entries(research.links).map(([label, url]) => (
                      <div key={label} className="p-2 sm:w-1/4 w-1/2">
                        <div className="bg-gray-800 rounded flex px-1 py-0 h-full items-center justify-center">
                          <span className="title-font font-medium text-white">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                              {label}
                            </a>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}