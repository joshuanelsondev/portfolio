// ProjectDetails

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { projectData } from "../assets/projectData";


export default function ProjectDetails() {
  const [project, setProject] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
      let currentProject = projectData.find((project) => project.id === id);
      setProject(currentProject);
      console.log(currentProject)
  }, [id, navigate]);

  return (
    <div className="flex flex-col gap-10 p-10 bg-secondary  dark:bg-dark rounded-xl font-semibold shadow-xl shadow-primary">
      <h1 className="text-5xl text-primary dark:text-blue font-semibold">
        {project.title}
      </h1>
      <a href={project.image} target="_blank" rel="noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="rounded shadow-lg shadow-primary w-full h-auto"
        />
      </a>
      <p className="text-lg text-dark font-normal dark:text-blue leading-loose">
        {project.description}
      </p>
      <ul className="flex gap-x-4 flex-wrap">
        {project.tech.map((str, index) => {
          return (
            <li key={index} className="text-primary">
              {str}
            </li>
          );
        })}
      </ul>

      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <a
            href={project.github_link}
            target="_blank"
            rel="noreferrer"
            className="text-blue"
          >
            <AiFillGithub
              className="p-2 text-primary dark:text-blue hover:text-dark hover:dark:text-primary rounded-full"
              size={40}
            />
          </a>
          <a
            href={project.demo_link}
            target="_blank"
            rel="noreferrer"
            className="text-blue"
          >
            <AiOutlineExport
              className="p-2 text-primary dark:text-blue hover:text-dark hover:dark:text-primary  rounded-full"
              size={40}
            />
          </a>
        </div>
      </div>
    </div>
  );
}