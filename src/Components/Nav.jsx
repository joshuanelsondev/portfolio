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
  MdSwapHoriz,
  MdSwapVert,
} from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineMenu,
} from "react-icons/ai";

const navIcons = [
  { id: generateId(), name: "Home", icon: MdHome },
  { id: generateId(), name: "About", icon: MdAccountCircle },
  { id: generateId(), name: "Portfolio", icon: AiOutlineAppstore },
  { id: generateId(), name: "Contact", icon: MdEmail },
];


export default function Nav({ handleThemeChange }) {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div>
      {/* Nav bar Container */}
      <div
        className={`hidden lg:flex flex-col fixed top-[20%] gap-12 ml-1 sm:ml-4 z-40`}
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
                activeClass="outline rounded-full text-primary"
                to={`${button.name.toLowerCase()}`}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <button.icon
                  className="text-primary dark:text-gray rounded-full hover:outline hover:dark:outline-primary p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
              <p className="invisible text-primary dark:text-primary font-semibold peer-hover:visible">
                {button.name}
              </p>
            </div>
          );
        })}
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
          className={`lg:hidden fixed text-primary hover:scale-110 cursor-pointer left-5 top-4 ${
            showNav
              ? " duration-500 ease-out -translate-x-10"
              : "ease-in duration-500"
          }`}
          size={24}
        />
      </div>
      <div
        className={`fixed -left-20 top-0 bg-primary bg-opacity-90 flex flex-col items-center pt-4 h-full w-20 z-50 lg:hidden ${
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
            {navIcons.map((button) => {
              return (
                <div key={button.id} className="flex flex-col items-center">
                  <LinkScroll
                    className="peer"
                    activeClass="outline rounded-full text-gray"
                    to={`${button.name.toLowerCase()}`}
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}
                  >
                    <button.icon
                      className="text-gray rounded-full hover:scale-105 hover:outline outline-gray p-2 cursor-pointer"
                      size={40}
                    />
                  </LinkScroll>
                </div>
              );
            })}
            {/* Theme buttons */}
            <div className="relative flex">
              {/* Dark theme nav button */}
              <div className="absolute invisible dark:visible flex flex-col items-center left-5">
                <MdOutlineDarkMode
                  onClick={() => handleThemeChange("dark")}
                  className="peer text-gray hover:outline hover:dark:outline-gray rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </div>
              {/* Light theme nav button */}
              <div className="absolute dark:invisible flex flex-col items-center left-5">
                <MdOutlineLightMode
                  onClick={() => handleThemeChange("light")}
                  className="peer text-gray hover:outline outline-gray rounded-full p-2 cursor-pointer"
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


