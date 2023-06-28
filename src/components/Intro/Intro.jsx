import { useState, useEffect } from "react";
import { FiDownload } from 'react-icons/fi';
import ResumeOfNaimur from "../../assets/ResumeOfNaimur.pdf";
import "./Intro.css";

import image from "../../assets/naimur.png";
import TypewriterComponent from "typewriter-effect";
import Count from "../Count/Count";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";

const Intro = ({ homeRef }) => {
  const [jobTitle, setJobTitle] = useState("MERN Stack Developer");
  const jobTitles = [
    "Front-end Developer",
    "Back-end Developer",
    "Full-Stack Developer",
    "MERN Stack Developer",
  ];

  useEffect(() => {
    const interval = setInterval(changeJobTitle, 3000);
    return () => clearInterval(interval);
  });

  const changeJobTitle = () => {
    const randomIndex = Math.floor(Math.random() * jobTitles.length);
    setJobTitle(jobTitles[randomIndex]);
  };

  const handleDownloadResume = () => {
    window.open(ResumeOfNaimur, "_blank");
  };

  return (
    <div ref={homeRef} className="min-h-screen py-10 mt-5">
      <Slide>
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row-reverse lg:items-start justify-center">
            <motion.img
              src={image}
              className="w-64 h-auto rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-8 lg:mt-0 lg:ml-4"
              drag
              dragConstraints={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl font-bold">Hi! This is <span className="text-blue-500">Naimur Rahman</span>!</h1> <br />
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-500">
                <TypewriterComponent
                  options={{
                    strings: [jobTitle],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
              <p className="py-6 px-4 lg:px-0">
                Ignite your digital journey with an extraordinary MERN Stack Developer! Fueling innovation and crafting immersive web experiences using MongoDB, Express.js, React, and Node.js. Let&apos;s embark on a coding adventure that will leave a lasting impression.
              </p>
              <button className="btn btn-primary glow-on-hover" onClick={handleDownloadResume}>Download Resume <FiDownload /></button>
            </div>
          </div>
        </div>
      </Slide>

      <div className="mx-auto max-w-4xl">
          <Count />
        </div>
    </div>
  );
};

export default Intro;
