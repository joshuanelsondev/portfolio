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
      <div id='portfolio' className="h-auto min-h-[600px] w-auto flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl text-primary font-semibold mb-4 md:mb-10">Portfolio</h1>
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
