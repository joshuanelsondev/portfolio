// HomePage.jsx

import PropTypes from "prop-types";
import { useEffect } from "react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

export default function HomeComponent({ setShowNav }) {
    useEffect(() => {
    setShowNav(true);
    }, [setShowNav]);

    return (
      <div
        className="flex flex-col shrink-0 justify-start pt-40 lg:pt-20 items-center gap-10 h-full sm:w-screen lg:w-auto z-10"
      >
        <img
          src="./src/assets/pursuit_headshot.png"
          alt="Headshot with green background"
          className="h-[300px] min-w-[300px] rounded-full bg-primary dark:bg-gray shadow-md shadow-primary"
        />
        <div className="flex flex-col gap-4 w-96 xl:w-9/12 h-auto z-10 text-center">
          <h1 className="text-6xl xl:text-6xl text-primary dark:text-gray font-semibold">
            Joshua Nelson
          </h1>
          <h2 className="text-3xl mt-2 font-semibold text-black dark:text-primary">
            <span className="text-primary dark:text-gray">Web</span> Developer
          </h2>
          <div className="flex mt-4 gap-8 justify-center">
            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://www.linkedin.com/in/joshuanelsondev"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin
                  className="p-2 text-primary dark:text-gray cursor-pointer hover:border-b border-b-primary"
                  size={40}
                />
              </a>
              {/* <p className="text-primary dark:text-primary font-semibold invisible peer-hover:visible">
                LinkedIn
              </p> */}
            </div>

            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://github.com/joshuanelsondev"
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineGithub
                  className="p-2 text-primary hover:border-b border-b-primary dark:text-gray cursor-pointer"
                  size={40}
                />
              </a>
              {/* <p className="text-primary dark:text-primary font-semibold invisible peer-hover:visible">
                GitHub
              </p> */}
            </div>

            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://www.facebook.com/JoshuaNelsonSax"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillFacebook
                  className="p-2 text-primary dark:text-gray cursor-pointer hover:border-b border-b-primary"
                  size={40}
                />
              </a>
              {/* <p className="text-primary dark:text-primary font-semibold invisible peer-hover:visible">
                Facebook
              </p> */}
            </div>

            <div className="flex flex-col items-center gap-2">
              <a
                className="peer"
                href="https://www.instagram.com/joshuanelsonmusic/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram
                  className="p-2 text-primary dark:text-gray cursor-pointer hover:border-b border-b-primary"
                  size={40}
                />
              </a>
              {/* <p className="text-primary dark:text-primary font-semibold invisible peer-hover:visible">
                Instagram
              </p> */}
            </div>
          </div>
        </div>
      </div>
    );
}


HomeComponent.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};