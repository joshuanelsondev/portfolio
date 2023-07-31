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
  MdWest,
} from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Nav({ handleThemeChange }) {
  const [showNav, setShowNav] = useState(false);
  // const [activeNavItem, setActiveNavItem] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  // const navAndToggle = (url) => {
  //   navigate(url);
  //   toggleNav();
  // };

  const currentPage = (path) => {
    return location.pathname === path;
  };


  return (
    <div>
      {/* Clickable logo to return to home page */}
      <h2
        className={`${
          currentPage("/") ? "hidden" : "visible"
        } text-primary dark:text-gray text-2xl mr-4 pt-4 absolute cursor-pointer right-0`}
        onClick={() => navigate("/")}
      >
        Joshua Nelson
      </h2>
      {/* Nav bar Container */}
      <div
        className={`hidden lg:flex flex-col fixed top-[25%] gap-12 ml-1 sm:ml-4 z-40`}
      >
        {/* Home nav button */}
        <div className="flex items-center lg:gap-4 md:gap-1">
          <LinkScroll
            className="peer"
            activeClass="outline rounded-full text-primary"
            to="home"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <MdHome
              className="text-primary dark:text-gray rounded-full hover:outline hover:dark:outline-primary p-2 cursor-pointer"
              size={40}
            />
          </LinkScroll>
          <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
            Home
          </p>
        </div>

        {/* About nav button */}
        <div className="flex items-center lg:gap-4 md:gap-1">
          <LinkScroll
            className="peer"
            activeClass="outline rounded-full text-primary"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <MdAccountCircle
              className="text-primary dark:text-gray rounded-full hover:outline hover:dark:outline-primary p-2 cursor-pointer"
              size={40}
            />
          </LinkScroll>
          <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
            About
          </p>
        </div>
        {/* Portfolio nav button */}
        <div className="flex items-center lg:gap-4 md:gap-1">
          <LinkScroll
            className="peer"
            activeClass="outline rounded-full text-primary"
            to="projects"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <AiOutlineAppstore
              className="text-primary dark:text-gray rounded-full hover:outline hover:dark:outline-primary p-2 cursor-pointer"
              size={40}
            />
          </LinkScroll>
          <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
            Portfolio
          </p>
        </div>
        {/* Contact nav button */}
        <div className="flex items-center lg:gap-4 md:gap-1">
          <LinkScroll
            className="peer"
            activeClass="outline rounded-full text-primary"
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <MdEmail
              className="text-primary dark:text-gray rounded-full hover:outline hover:dark:outline-primary p-2 cursor-pointer"
              size={40}
            />
          </LinkScroll>
          <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
            Contact
          </p>
        </div>

        <div className="relative">
          {/* Dark theme nav button */}
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
          {/* Light theme nav button */}
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
      {/* Hamburger Menu */}

      <div>
        <AiOutlineMenu
          onClick={toggleNav}
          className={`fixed text-primary hover:scale-110 cursor-pointer left-5 top-4 ${
            showNav
              ? " duration-500 ease-out -translate-x-10"
              : "ease-in duration-500"
          }`}
          size={24}
        />
      </div>
      <div
        className={`fixed -left-20 bg-secondary bg-opacity-90 flex flex-col items-center pt-4 h-full w-20 z-50 lg:hidden ${
          showNav
            ? "duration-500 ease-in translate-x-20"
            : "duration-500 ease-out"
        }`}
      >
        <MdWest
          className="text-gray hover:scale-110 cursor-pointer left-5 top-4"
          onClick={toggleNav}
          size={28}
        />

        {/* Smaller screen nav bar */}
        {
          <div className={`flex flex-col h-full w-20 mt-24 gap-8 top-10`}>
            {/* Home nav button */}
            <div className="flex flex-col items-center">
              <LinkScroll
                className="peer"
                activeClass="outline rounded-full text-primary"
                to="home"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <MdHome
                  className="text-gray rounded-full hover:scale-105 hover:outline outline-primary p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            {/* About nav button */}
            <div className="flex flex-col items-center">
              <LinkScroll
                className="peer"
                activeClass="outline rounded-full text-primary"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <MdAccountCircle
                  className="text-gray rounded-full hover:scale-105 hover:outline outline-primary p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            {/* Portfolio nav button */}
            <div className="flex flex-col items-center">
              <LinkScroll
                className="peer"
                activeClass="outline rounded-full text-primary"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <AiOutlineAppstore
                  className="text-gray rounded-full hover:scale-105 hover:outline outline-primary p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            {/* Contact nav button */}
            <div className="flex flex-col items-center">
              <LinkScroll
                className="peer"
                activeClass="outline rounded-full text-primary"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                <MdEmail
                  className="text-gray rounded-full hover:scale-105 hover:outline outline-primary p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
              {/* <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
                Contact
              </p> */}
            </div>
            {/* Theme buttons */}
            <div className="relative flex">
              {/* Dark theme nav button */}
              <div className="absolute invisible dark:visible flex flex-col items-center left-5">
                <MdOutlineDarkMode
                  onClick={() => handleThemeChange("dark")}
                  className="peer text-gray hover:outline hover:dark:outline-primary rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </div>
              {/* Light theme nav button */}
              <div className="absolute dark:invisible flex flex-col items-center left-5">
                <MdOutlineLightMode
                  onClick={() => handleThemeChange("light")}
                  className="peer text-gray hover:outline outline-primary rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

Nav.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
};