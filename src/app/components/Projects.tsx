"use client";
import React, { useState } from "react";
import { MdBookmark } from "@react-icons/all-files/md/MdBookmark";
import { projects } from "./ProjectsData";
import { HiArrowCircleRight } from "@react-icons/all-files/hi/HiArrowCircleRight";
import { HiArrowCircleLeft } from "@react-icons/all-files/hi/HiArrowCircleLeft";

const Projects = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };
  return (
    <section id="projects" className="p-6 w-full">
      <header className="flex items-center">
        <MdBookmark size={30} className="text-4xl w-[10%]" />
        <h1 className="text-3xl font-bold">Projects</h1>
      </header>
      <div className="projects-container flex flex-col justify-center items-center">
        <div className="carousel shadow rounded-xl border border-gray-100 mt-4 transform transition-transform hover:scale-105">
          <div className="carousel-item">
            <div className="projects-list p-4">
              <div className="projects-card">
                <h1 className="font-bold text-lg">
                  {projects[currentProjectIndex].title}
                </h1>
                <h2 className="text-sm mb-3">
                  {projects[currentProjectIndex].description}
                </h2>
                <div className="flex w-full justify-between">
                  <div className="flex text-left w-[55%] items-center">
                    {projects[currentProjectIndex].tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                  <a
                    href={projects[currentProjectIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border w-[30%] text-center bg-black text-white  py-1 rounded-md items-center text-sm "
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="carousel-controls mt-4 flex w-[20%]">
          <button onClick={handlePrev}>
            <HiArrowCircleLeft
              size={30}
              className="transform transition-transform hover:scale-125"
            />
          </button>
          <button onClick={handleNext}>
            <HiArrowCircleRight
              size={30}
              className="ransform transition-transform hover:scale-125"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
