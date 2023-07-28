// Nav.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import {
  MdAccountCircle,
  MdHome,
  MdEmail,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Nav({ handleThemeChange }) {
  const [showMiniNav, setShowMiniNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setShowMiniNav(!showMiniNav);
  };

  const navAndToggle = (url) => {
    navigate(url);
    toggleNav();
  };

  const currentPage = (path) => {
    return location.pathname === path;
  };


  return (
    <div>
      <h2
        className={`${
          currentPage("/") ? "hidden" : "visible"
        } text-primary dark:text-gray text-2xl mr-4 pt-4 absolute cursor-pointer right-0`}
        onClick={() => navigate("/")}
      >
        Joshua Nelson
      </h2>
      <div className="hidden lg:flex flex-col fixed top-[25%] gap-12 ml-1 sm:ml-4 z-40">
        <LinkScroll
          className="flex items-center lg:gap-4 md:gap-1"
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <MdHome
            onClick={() => navigate("/")}
            className={`peer text-primary dark:text-gray rounded-full hover:outline hover:dark:outline-primary p-2 cursor-pointer ${
              currentPage("/") && "outline dark:outline"
            }`}
            size={40}
          />
          <p
            className="invisible text-primary dark:text-primary font-semibold peer-hover:visible"
            onClick={() => toggleNav()}
          >
            Home
          </p>
        </LinkScroll>
        <LinkScroll
          className="flex items-center lg:gap-4 md:gap-1"
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <MdAccountCircle
            className={`peer text-primary dark:text-gray hover:outline hover:dark:outline-primary rounded-full p-2 cursor-pointer ${
              currentPage("/about") && "outline dark:outline"
            }`}
            size={40}
          />
          <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
            About
          </p>
        </LinkScroll>
        <LinkScroll
          className="flex items-center lg:gap-4 md:gap-1"
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <AiOutlineAppstore
            className={`peer text-primary dark:text-gray hover:outline hover:dark:outline-primary p-[8px] rounded-full cursor-pointer ${
              currentPage("/projects") && "outline dark:outline"
            }`}
            size={40}
          />
          <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
            Portfolio
          </p>
        </LinkScroll>
        <LinkScroll
          className="flex items-center lg:gap-4 md:gap-1"
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <MdEmail
            className={`peer text-primary dark:text-gray hover:outline hover:dark:outline-primary rounded-full p-2 cursor-pointer ${
              currentPage("/contact") && "outline dark:outline"
            }`}
            size={40}
          />
          <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
            Contact
          </p>
        </LinkScroll>

        <div className="relative">
          <div className="absolute invisible dark:visible flex items-center lg:gap-4 md:gap-1">
            <MdOutlineDarkMode
              onClick={() => handleThemeChange("dark")}
              className="peer text-gray hover:outline hover:dark:outline-primary rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-primary font-semibold peer-hover:visible">
              Dark
            </p>
          </div>
          <div className="absolute dark:invisible flex items-center lg:gap-4 md:gap-1">
            <MdOutlineLightMode
              onClick={() => handleThemeChange("light")}
              className="peer text-primary hover:outline  rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-primary font-semibold peer-hover:visible">
              Light
            </p>
          </div>
        </div>
      </div>
      <div className="h-10 w-10 flex justify-center fixed top-10 left-8">
        <div className="z-10 lg:hidden">
          <AiOutlineMenu
            onClick={toggleNav}
            className="text-primary dark:text-primary transition-colors duration-300 ease-in-out transform hover:scale-110 cursor-pointer"
            size={24}
          />
        </div>
        {showMiniNav && (
          <div className="fixed top-9 ml-20 w-fit pr-4 z-30 h-fit bg-primary transition-transform duration-1000 ease-in-out transform translate-y-4 lg:hidden">
            <div
              className={`flex items-center gap-1 group cursor-pointer ${
                currentPage("/") ? "text-dark" : "text-secondary"
              }`}
              onClick={() => navAndToggle("/")}
            >
              <MdHome
                className="group-hover:text-dark rounded-full p-2"
                size={30}
              />
              <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                Home
              </p>
            </div>
            <div
              className={`flex items-center gap-1 group cursor-pointer ${
                currentPage("/about") ? "text-dark" : "text-secondary"
              }`}
              onClick={() => navAndToggle("/about")}
            >
              <MdAccountCircle
                className="group-hover:text-dark rounded-full p-2"
                size={30}
              />
              <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                About
              </p>
            </div>
            <div
              className={`flex items-center gap-1 group cursor-pointer ${
                currentPage("/projects") ? "text-dark" : "text-secondary"
              }`}
              onClick={() => navAndToggle("/projects")}
            >
              <AiOutlineAppstore
                className="group-hover:text-dark p-[8px] rounded-full"
                size={30}
              />
              <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                Portfolio
              </p>
            </div>
            <div
              className={`flex items-center gap-1 group cursor-pointer ${
                currentPage("/contact") ? "text-dark" : "text-secondary"
              }`}
              onClick={() => navAndToggle("/contact")}
            >
              <MdEmail
                className="group-hover:text-dark rounded-full p-2"
                size={30}
              />
              <p className="text-sm font-semibold group-hover:text-dark hover:scale-110">
                Contact
              </p>
            </div>
            <div className="relative">
              <div
                className={`invisible dark:visible flex items-center gap-1 group hover:text-dark cursor-pointer absolute`}
              >
                <MdOutlineDarkMode
                  onClick={() => handleThemeChange("dark")}
                  className="rounded-full p-2 group-hover:scale-110 text-secondary group-hover:text-dark"
                  size={30}
                />
                <p
                  className="text-sm text-secondary font-semibold hover:scale-110 group-hover:scale-110 group-hover:text-dark"
                  onClick={() => handleThemeChange("dark")}
                >
                  Dark
                </p>
              </div>
              <div
                className={`dark:invisible flex items-center gap-1 group cursor-pointer hover:text-dark text-secondary`}
              >
                <MdOutlineLightMode
                  onClick={() => handleThemeChange("light")}
                  className="rounded-full p-2 group-hover:scale-110"
                  size={30}
                />
                <p
                  className="text-sm font-semibold hover:scale-110 group-hover: group-hover:scale-110"
                  onClick={() => handleThemeChange("light")}
                >
                  Light
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Nav.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
};