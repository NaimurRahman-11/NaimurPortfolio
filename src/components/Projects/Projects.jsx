import { useState } from "react";
import toystars from "../../assets/toystars.png";
import chefrecipe from "../../assets/chefrecipe.png";
import learningschool from "../../assets/learningschool.png";
import "./Projects.css";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';


const Projects = ({ projectsRef }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    const projects = [
        {
            title: "Toy Stars",
            image: toystars,
            technologies: "React, Bootstrap, Express, MongoDB, Firebase, React AOS",
            features: ["Firebase Authentication", "MongoDB CRUD operations", "Searching and Sorting features"],
            livesite: "https://toy-stars.web.app/",
            clientside: "https://github.com/NaimurRahman-11/Toy-Stars-Client",
            serverside: "https://github.com/NaimurRahman-11/Toy-Stars-Server",
        },
        {
            title: "Learning School",
            image: learningschool,
            technologies: "React, Express, MongoDB, Bootstrap, Tanstack, Axios, JWT, React Animations, Stripe",
            features: ["Firebase authentication", "Admin, User, Instructor Dashboards", " Stripe Payment Gateway"],
            livesite: "https://learning-school-4dec7.web.app/",
            clientside: "https://github.com/NaimurRahman-11/Learning-School-Client",
            serverside: "https://github.com/NaimurRahman-11/Learning-School-Server",
        },
        {
            title: "Chef's Recipes",
            image: chefrecipe,
            technologies: "React, Express, Bootstrap",
            features: ["Firebase authenticatio", "Bookmark favorite recipes option", "PDF downloading option"],
            livesite: "https://chefrecipes-d5cea.web.app/",
            clientside: "https://github.com/NaimurRahman-11/Chef-s-Universe",
            serverside: "https://github.com/NaimurRahman-11/Chef-s-Universe-Server",
        },
    ];

    return (
        <div ref={projectsRef} className="min-h-screen py-20 mt-5 p-4">
            <h1 className="text-3xl font-bold text-center mb-10 mt-10">Projects</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <div key={index} className="max-w-sm mx-auto bg-base-100 shadow-xl rounded-xl overflow-hidden card transition-transform duration-300 ease-in-out transform hover:scale-110">
                    <figure className="px-10 pt-10">
                        <div className="image-container">
                            <img src={project.image} alt={project.title} className="rounded-xl w-full h-auto object-contain" />
                        </div>
                    </figure>
                    <div className="px-6 h-[250px] py-4">
                        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                        <p className="text-sm mb-4"><span className="font-bold">Technologies: </span>{project.technologies}</p>
                        <p className="font-bold">
                            <a href={project.livesite} className="mr-2">
                                Live Site
                            </a>||&nbsp; 
                            <a href={project.clientside} className="mr-2">
                                Client Side
                            </a>||&nbsp;
                            <a href={project.serverside} className="mr-2">
                                Server Side
                            </a>
                        </p>
                        <div className="mt-4">
                            <button
                                className="btn btn-primary"
                                onClick={() => openModal(project)}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
                ))}
            </div>

            {/* Modal */}
            {isModalOpen && selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="modal modal-open">
                        <div className="modal-box">
                            <h2 className="modal-title">{selectedProject.title} Features:</h2>
                            <ul className="features-list">
                                {selectedProject.features.map((feature, index) => (
                                    <li key={index} className="flex items-center justify-center">
                                        <BsFillArrowRightCircleFill /> &nbsp; {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="modal-action">
                                <button className="btn btn-primary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Projects;
