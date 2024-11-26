import React from "react";
import "react-slideshow-image/dist/styles.css";
//import { Slide } from 'react-slideshow-image';
//import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Slideshow from "./Slideshow";
import { slides } from "../data";
//import "../styles.css";

const images = slides

export default function About() {
    return (
        <section id="about">
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
            <div className="lg:w-1/2 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-blue-500">
                Hi, I'm Everett.
              </h1>
              <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-300 italic">
              A little bit about me:
              </h2>
              <ul className="title-font sm:text-md mb-4 font-medium text-gray-300 text-left list-disc text-md px-5">
                <li className="my-2">I am pursuing a B.S. in Computer Science & Applied Mathematics at San Diego State University (SDSU)</li>
                <li className="my-2">My goal is to earn a PhD in computer science, and continue in the research field</li>
                <li className="my-2">I tutor computer science, mathematics, and statistics at the SDSU Math & Science Learning Center (MSLC)</li>
                <li className="my-2">I am the founder & president of the <a className="underline" href="https://acm.sdsu.edu" target="_blank">SDSU ACM Chapter</a></li>
              </ul>
              {/*<p className="mb-8 leading-relaxed">
                I am an undergraduate at San Diego State University pursuing
                a double major in Computer Science and Applied Mathematics.
                My areas of interest include machine learning, software engineering,
                and data science. I am currently seeking opportunities to apply my
                skills to computational research, software development, and data analysis,
                both in industry and academia.
              </p>*/}
              <div className="flex justify-center">
                <a
                  href="#contact"
                  className="inline-flex text-white bg-blue-500 border-0 py-2 px-4 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  Contact Me
                </a>
                <a
                  href="#research"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/file/d/110yjcvY4NuCH5E5s9nOv_XM4U6aWJAd4/view?usp=sharing" target="_blank"
                  className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-4 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                  View CV
                </a>
              </div>
            </div>

            <Slideshow images={images} />

            {/*<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded-2xl"
                alt="hero"
                src="./ud_symposium.png"
              />
            </div>*/}
          </div>
        </section>
      );
}