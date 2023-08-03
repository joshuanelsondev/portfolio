// HomePage.jsx

import PropTypes from "prop-types";
import { useEffect } from "react";
import { v4 as generateId } from "uuid";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";


const icons = [
  {
    id: generateId(),
    logo: AiFillLinkedin,
    link: "https://www.linkedin.com/in/joshuanelsondev",
  },
  {
    id: generateId(),
    logo: AiOutlineGithub,
    link: "https://github.com/joshuanelsondev",
  },
  {
    id: generateId(),
    logo: AiFillFacebook,
    link: "https://www.facebook.com/JoshuaNelsonSax",
  },
  {
    id: generateId(),
    logo: AiFillInstagram,
    link: "https://www.instagram.com/joshuanelsonmusic/",
  },
];
export default function HomeComponent({ setShowNav }) {
    useEffect(() => {
    setShowNav(true);
    }, [setShowNav]);

    return (
      <div className="flex flex-col shrink-0 justify-center lg:justify-start lg:pt-40 items-center gap-10 h-full sm:w-screen lg:w-auto z-10">
        <img
          src="./src/assets/pursuit_headshot.png"
          alt="Headshot with green background"
          className="h-40 lg:h-[300px] min-w-[100px] rounded-full bg-primary dark:bg-gray shadow-md shadow-primary"
        />
        <div className="flex flex-col gap-4 w-96 xl:w-9/12 h-auto z-10 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl text-primary dark:text-gray font-semibold">
            Joshua Nelson
          </h1>
          <h2 className="text-2xl lg:text-3xl mt-2 font-semibold text-black dark:text-primary">
            <span className="text-primary dark:text-gray">Web</span> Developer
          </h2>
          {/* Icons iteration */}
          <div className="flex mt-4 gap-8 justify-center">
            {icons.map((icon) => {
              return (
                <div key={icon.id} className="flex flex-col items-center gap-2">
                  <a
                    className="peer"
                    href={`${icon.link}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <icon.logo
                      className="p-2 text-primary h-9 lg:h-10 dark:text-gray cursor-pointer hover:border-b border-b-primary"
                      size={40}
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
}


HomeComponent.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};