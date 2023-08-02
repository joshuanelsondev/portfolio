// Projects

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { projectData } from '../assets/projectData';
import Project from './Project';


export default function Projects({ setShowNav }) {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setShowNav(true);
        setProjects(projectData);
    }, [projects, setShowNav])

    return (
      <div className="flex flex-col items-center md:items-start gap-10">
        <h1 className="text-5xl text-primary font-semibold">Portfolio</h1>
          <div>
            {projects.map((project) => (
              <div key={project.id} className="">
                <Project project={project} />
              </div>
            ))}
          </div>
      </div>
    );
}

Projects.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};