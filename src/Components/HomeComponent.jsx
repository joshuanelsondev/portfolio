// HomePage.jsx

import { v4 as generateId } from "uuid";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import  PursuitHeadshot  from "../assets/pursuit_headshot.jpg";

// Array of icons and links for external links
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
export default function HomeComponent() {

    return (
      <div id='home' className="h-full min-h-[600px] w-full min-w-fit z-10 pt-10">
        <div className="flex flex-col md:flex-row-reverse items-center md:justify-evenly gap-8">
          <img
            src={PursuitHeadshot}
            alt="Headshot with green background"
            className="h-[300px] md:h-[400px] min-w-[100px]  bg-darkGray z-10 rounded-2xl  dark:shadow-black"
          />
          <div className="flex flex-col w-auto h-auto z-10 items-start">
            <h1 className="text-4xl font-semibold sm:text-6xl text-primary drop-shadow-xl md:pl-2">
              Joshua Nelson
            </h1>
            <h2 className="text-2xl sm:text-3xl 2xl:text-4xl mt-2 font-normal text-darkGray dark:text-white md:pl-2">
              <span className="text-primary">Software</span> Developer
            </h2>
            {/* Icons iteration */}
            <div className="flex mt-4 gap-4 sm:gap-8">
              {icons.map((icon) => {
                return (
                  <div
                    key={icon.id}
                    className="flex flex-col items-center gap-2"
                  >
                    <a
                      className="peer"
                      href={`${icon.link}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <icon.logo
                        className="p-2 text-primary h-9 sm:h-10 cursor-pointer hover:border-b border-b-primary"
                        size={40}
                      />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
}

