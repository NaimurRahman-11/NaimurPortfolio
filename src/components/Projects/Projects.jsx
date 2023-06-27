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
      technologies: "Technologies: React, Bootstrap, MongoDB, Express, Firebase",
      features: ["Firebase Authentication", "Feature 2", "Feature 3"],
    },
    {
      title: "Learning School",
      image: learningschool,
      technologies: "Technologies: React, Bootstrap, MongoDB, Express, Firebase",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      title: "Chef's Recipes",
      image: chefrecipe,
      technologies: "Technologies: React, Bootstrap, MongoDB, Express, Firebase",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
  ];

  return (
    <div ref={projectsRef} className="min-h-screen py-20 mt-5 p-4">
      <h1 className="text-4xl font-bold text-center mb-10 mt-10">Projects</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div className="card bg-base-100 shadow-xl" key={index}>
            <figure className="px-10 pt-10">
              <div className="image-container">
                <img src={project.image} alt={project.title} className="rounded-xl" />
              </div>
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.technologies}</p>
              <div className="card-actions">
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
                   <li key={index} className="flex items-center justify-center"><BsFillArrowRightCircleFill></BsFillArrowRightCircleFill> &nbsp; {feature}</li>
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
