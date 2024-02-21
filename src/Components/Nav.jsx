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
  MdApps
} from "react-icons/md"; 
import {
  AiFillAppstore,
  AiOutlineMenu,
} from "react-icons/ai";

// Icons for the navbar and hamburger menu
const navIcons = [
  { id: generateId(), name: "home", icon: MdHome },
  { id: generateId(), name: "about", icon: MdAccountCircle },
  { id: generateId(), name: "portfolio", icon: AiFillAppstore },
  { id: generateId(), name: "contact", icon: MdEmail },
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
        className={`hidden md:flex flex-col fixed top-[30%] left-6 2xl:left-16 pl-4 gap-12 sm:ml-4 z-40`}
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
                to={`${button.name}`}
                spy={true}
                smooth={true}
                offset={-125}
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

    {/* Smaller screen nav bar */}
      <div
        className={`fixed bg-primary bottom-0 flex items-center h-10 w-full p-2 left-0 z-50 md:hidden ${
          showMiniNav
            ? "duration-500 ease-in "
            : "duration-500 ease-in-out"
        }`}
      >
        {/* Arrow for closing side nav */}
        {/* <MdWest
          className="text-gray hover:scale-110 cursor-pointer left-5 top-4"
          onClick={toggleNav}
          size={20}
        /> */}

        {
          <div className={`flex justify-around w-full text-darkGray px-4`}>
            {navIcons.map((button) => {
              return (
                <div key={button.id} className="flex">
                  <LinkScroll
                    className="peer"
                    activeClass="outline rounded "
                    to={`${button.name.toLowerCase()}`}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <button.icon
                      className="text-darkGray rounded-full p-1 cursor-pointer"
                      size={25}
                    />
                  </LinkScroll>
                </div>
              );
            })}
            {/* Theme buttons */}
            <div className="flex flex-col items-center justify-center pr-2">
              {/* Dark theme nav button */}
              <div className="absolute invisible dark:visible">
                <MdOutlineDarkMode
                  onClick={() => handleThemeChange("light")}
                  className="peer text-darkGray hover:outline hover:dark:outline-gray rounded-full p-1 cursor-pointer"
                  size={25}
                />
              </div>
              {/* Light theme nav button */}
              <div className="absolute dark:invisible">
                <MdOutlineLightMode
                  onClick={() => handleThemeChange("dark")}
                  className="peer text-darkGray hover:outline outline-gray rounded-full p-1 cursor-pointer"
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


    
