// Projects

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdLibraryAdd } from "react-icons/md";
import { projectData } from '../assets/projectData';
import Project from './Project';


export default function Projects({ setShowNav }) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setShowNav(true);
        setProjects(projectData);
    }, [projects, setShowNav])

    return (
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl text-primary dark:text-blue font-semibold mt-20">Portfolio</h1>
          <div>
            {projects.map((project) => (
              <div key={project.id} className="flex justify-start">
                <Project project={project} />
              </div>
            ))}
            {projects.length === 0 && (
              <div className="mt-10 flex items-center gap-4 z-10">
                <h2 className="text-4xl text-primary dark:text-blue">Add Project</h2>
                <Link
                  to={"/projects/new"}
                  className="hover:bg-dark rounded-full p-2"
                >
                  <MdLibraryAdd className="text-primary dark:text-blue" size={24} />
                </Link>
              </div>
            )}
          </div>
      </div>
    );
}

Projects.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};