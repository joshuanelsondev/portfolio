// HomePage.jsx
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { v4 as generateId } from "uuid";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import  PursuitHeadshot  from "../assets/images/pursuit_headshot.jpg";

// Array of icons and links for external links
const icons = [
  {
    id: generateId(),
    logo: AiFillLinkedin,
    link: "https://www.linkedin.com/in/joshuanelsondev",
    aria: "Link to Joshua Nelson's LinkedIn profile"
  },
  {
    id: generateId(),
    logo: AiOutlineGithub,
    link: "https://github.com/joshuanelsondev",
    aria: "Link to Joshua Nelson's GitHub profile"
  },
  {
    id: generateId(),
    logo: AiFillFacebook,
    link: "https://www.facebook.com/JoshuaNelsonSax",
    aria: "Link to Joshua Nelson's Facebook page"
  },
  {
    id: generateId(),
    logo: AiFillInstagram,
    link: "https://www.instagram.com/joshuanelsonmusic/",
    aria: "Link to Joshua Nelson's Instagram page"
  },
];
export default function HomeComponent() {

    return (
      <div id='home' className="h-full sm:min-h-[800px] w-full min-w-fit z-10 max-lg:pt-24 lg:grid mb-20">
        <div className="flex flex-col lg:flex-row-reverse items-center md:justify-evenly lg:pl-10">
          <img
            src={PursuitHeadshot}
            alt="Headshot with green background"
            className="h-[250px] sm:h-[350px] lg:h-[400px] w-auto  bg-darkGray z-10 rounded-2xl shadow-lg shadow-darkGray dark:shadow-black"
          />
          <div className="flex flex-col w-fit h-auto z-10 items-center lg:items-start">
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl text-darkGray dark:text-primary drop-shadow-xl w-full text-center mt-10">
              Joshua Nelson
            </h1>
             <p className="text-base sm:text-xl font-normal text-darkGray dark:text-white text-center lg:text-start mt-4">
              Developer <span className='text-primary'>|</span> Musician <span className='text-primary'>|</span> Educator
            </p>
            {/* <h2 className="text-xl sm:text-2xl lg:text-3xl mt-2 font-normal text-darkGray dark:text-white w-full text-center lg:text-start">
              <span className="text-darkGray dark:text-primary">Software</span> Developer
            </h2> */}
            {/* Icons iteration */}
            <div className="flex mt-4 gap-9 sm:gap-12 md:pl-1">
              {icons.map((icon) => {
                return (
                  <div
                    key={icon.id}
                  >
                    <a
                      className="peer"
                      href={`${icon.link}`}
                      target="_blank"
                      rel="noreferrer"
                    aria-label={`${icon.aria}`}
                    >
                      <icon.logo
                        className=" text-darkGray dark:text-white cursor-pointer border-b-primary scale-125"
                      />
                    </a>
                  </div>
                );
              })}
            </div>
            <div className='flex gap-4 mt-4 text-sm sm:text-base lg:text-lg'>
              <LinkScroll to={'about'} smooth={true} offset={-50} duration={500} className='text-darkGray dark:text-white font-semibold sm:hover:underline underline-offset-8 decoration-primary cursor-pointer'>About me</LinkScroll>
              <LinkScroll to={'portfolio'} smooth={true} offset={-50} duration={500} className='text-darkGray dark:text-white font-semibold sm:hover:underline underline-offset-8 decoration-primary cursor-pointer'>Portfolio</LinkScroll>
              <Link to={'https://joshuanelsondev.github.io/resume/resume.pdf'} className='text-darkGray dark:text-white font-semibold hover:underline decoration-primary underline-offset-8 cursor-pointer'>Resume</Link>
            </div>
          </div>
        </div>
      </div>
    );
}

