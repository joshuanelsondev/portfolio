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
      <div className="flex flex-col items-center ">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="cursor-pointer">
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