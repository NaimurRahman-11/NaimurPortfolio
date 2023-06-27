import { useState, useEffect } from "react";
import { FiDownload } from 'react-icons/fi';
import ResumeOfNaimur from "../../assets/ResumeOfNaimur.pdf";

import image from "../../assets/naimur.png";
import TypewriterComponent from "typewriter-effect";
import Count from "../Count/Count";

const Intro = ({homeRef}) => {
    const [jobTitle, setJobTitle] = useState("MERN Stack Developer");
    const jobTitles = ["Front-end Developer", "Back-end Developer", "Full-Stack Developer", "MERN Stack Developer"];

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
        <div ref={homeRef} className="min-h-screen py-10 mt-5 pr-9">
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse lg:items-start justify-center">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-8 lg:mt-0 lg:ml-4" />
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Hi! This is <span className="text-blue-500">Naimur Rahman</span>!</h1> <br />
                        <h2 className="text-3xl font-bold text-blue-500">
                            <TypewriterComponent
                                options={{
                                    strings: [jobTitle],
                                    autoStart: true,
                                    loop: true,
                                }}

                            />
                        </h2>
                        <p className="py-6">
                            Ignite your digital journey with an extraordinary MERN Stack Developer! Fueling innovation and crafting immersive web experiences using MongoDB, Express.js, React, and Node.js. Let&apos;s embark on a coding adventure that will leave a lasting impression.
                        </p>
                        <button className="btn btn-primary" onClick={handleDownloadResume}>Download Resume <FiDownload></FiDownload></button>
                    </div>
                </div>
            </div>

            <Count></Count>
        </div>
    );
};

export default Intro;
