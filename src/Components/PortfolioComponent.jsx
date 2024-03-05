// PortfolioComponent.jsx

import { useState, useEffect } from "react";
import { projectData } from '../assets/projectData';
import Project from './Project';


export default function PortfolioComponent() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(projectData);
    }, [projects])

    return (
      <div id='portfolio' className="h-auto min-h-[600px] w-auto flex flex-col items-center mb-12 md:mb-20 md:mt-24">
        <h1 className="text-4xl lg:text-6xl font-semibold text-darkGray dark:text-primary mb-4 md:mb-10">Portfolio</h1>
        <div className="flex flex-wrap place-content-center px-40 gap-20">
          {projects.map((project) => (
            <div key={project.id} className="cursor-pointer">
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    );
}
