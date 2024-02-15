// Nav.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import { Link as LinkScroll } from "react-scroll";
import { v4 as generateId } from "uuid";
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

// Icons for the navbar and hamburger menu
const navIcons = [
  { id: generateId(), name: "Home", icon: MdHome },
  { id: generateId(), name: "About", icon: MdAccountCircle },
  { id: generateId(), name: "Portfolio", icon: AiOutlineAppstore },
  { id: generateId(), name: "Contact", icon: MdEmail },
];


export default function Nav({ handleThemeChange }) {
  const [showMiniNav, setShowMiniNav] = useState(false);
  // Function to show and hide the smaller screen nav bar
  const toggleNav = () => {
    setShowMiniNav(!showMiniNav);
  };

  return (
    <div>
      {/* Nav bar Container */}
      <div
        className={`hidden md:flex flex-col fixed top-[30%] left-6 xl:left-16 2xl:left-36 pl-4 gap-12 sm:ml-4 z-40`}
      >
        {/* Loop through the nav buttons */}
        {navIcons.map((button) => {
          return (
            <div
              key={button.id}
              className="flex items-center lg:gap-4 md:gap-1"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full text-primary"
                to={`${button.name.toLowerCase()}`}
                spy={true}
                smooth={true}
                offset={button.name === 'Home' ? -200 : -100}
                duration={500}
              >
                <button.icon
                  className="text-primary dark:text-white rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
          );
        })}
        <div className="relative">
          {/* Dark theme nav button */}
          <div className="absolute invisible dark:visible flex items-center lg:gap-4 md:gap-1">
            <MdOutlineDarkMode
              onClick={() => handleThemeChange("light")}
              className="peer text-gray dark:text-white hover:dark:outline-primary rounded-full p-2 cursor-pointer"
              size={40}
            />
          </div>
          {/* Light theme nav button */}
          <div className="absolute dark:invisible flex items-center lg:gap-4 md:gap-1">
            <MdOutlineLightMode
              onClick={() => handleThemeChange("dark")}
              className="peer text-primary rounded-full p-2 cursor-pointer"
              size={40}
            />
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div
        className={`fixed md:hidden h-12 w-full z-50 top-0 left-0 flex items-center ${
          showMiniNav
            ? "bg-none duration-500 ease-out -translate-x-10 "
            : "bg-white dark:bg-dark ease-in duration-500 "
        }`}
      >
        <AiOutlineMenu
          onClick={toggleNav}
          className={`md:hidden text-black hover:scale-110 cursor-pointer ${
            showMiniNav
              ? "duration-500 ease-out -translate-x-10"
              : "ease-in duration-600 translate-x-6"
          }`}
          size={24}
        />
      </div>
      {/* Smaller screen nav bar */}
      <div
        className={`fixed  -left-20 top-0 bg-primary bg-opacity-90 flex flex-col items-center pt-4 h-full w-10 z-50 lg:hidden ${
          showMiniNav
            ? "duration-500 ease-in translate-x-20"
            : "duration-500 ease-in-out"
        }`}
      >
        {/* Arrow for closing side nav */}
        <MdWest
          className="text-gray hover:scale-110 cursor-pointer left-5 top-4"
          onClick={toggleNav}
          size={20}
        />

        {
          <div className={`grid h-full w-20`}>
            {navIcons.map((button) => {
              return (
                <div key={button.id} className="flex flex-col items-center justify-center">
                  <LinkScroll
                    className="peer"
                    activeClass="outline rounded-full text-gray"
                    to={`${button.name.toLowerCase()}`}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                  >
                    <button.icon
                      className="text-gray rounded-full p-1 cursor-pointer"
                      size={25}
                    />
                  </LinkScroll>
                </div>
              );
            })}
            {/* Theme buttons */}
            <div className="flex flex-col items-center justify-center">
              {/* Dark theme nav button */}
              <div className="absolute invisible dark:visible">
                <MdOutlineDarkMode
                  onClick={() => handleThemeChange("dark")}
                  className="peer text-gray hover:outline hover:dark:outline-gray rounded-full p-1 cursor-pointer"
                  size={25}
                />
              </div>
              {/* Light theme nav button */}
              <div className="absolute dark:invisible">
                <MdOutlineLightMode
                  onClick={() => handleThemeChange("light")}
                  className="peer text-gray hover:outline outline-gray rounded-full p-1 cursor-pointer"
                  size={25}
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


    
