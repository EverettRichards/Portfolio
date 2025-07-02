import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Leadership from "./components/Leadership";
import Skills from "./components/Skills";
import Research from "./components/Research";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font min-h-screen">
      <Navbar />
      <About />
      <Research />
      <Leadership />
      {/*<Projects />*/}
      <Skills />
      <Contact />
    </main>
  );
}