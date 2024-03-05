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
      <div id='portfolio' className="h-auto min-h-[600px] w-full flex flex-col items-center mb-12 md:mb-20 md:mt-24">
        <h1 className="text-4xl lg:text-6xl font-semibold text-darkGray dark:text-primary mb-4 md:mb-10">Portfolio</h1>
        <div className="grid place-content-center lg:px-20 lg:grid-cols-2 gap-20">
          {projects.map((project) => (
            <div key={project.id} >
              <Project project={project} />
            </div>
          ))}
        </div>
      </div>
    );
}
