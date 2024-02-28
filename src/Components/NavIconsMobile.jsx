//NavIconsMobile.jsx

import { Link as LinkScroll } from "react-scroll";
import { v4 as generateId } from "uuid";
import {
  MdAccountCircle,
  MdHome,
  MdEmail,
  MdDarkMode,
  MdLightMode
} from "react-icons/md"; 
import {
  AiFillAppstore,
} from "react-icons/ai";
import PropTypes from "prop-types";

export default function NavIconsMobile({handleThemeChange}) {

    return (
 
      <div className={`flex justify-between w-full`}>
        {/* Loop through the nav buttons */}
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full"
                to={`home`}
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                <MdHome
                  className="text-darkGray rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full"
                to={`about`}
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                <MdAccountCircle
                  className="text-darkGray rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full"
                to={`portfolio`}
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                <AiFillAppstore
                  className="text-darkGray rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
            <div
              key={generateId()}
              className="flex"
            >
              <LinkScroll
                className="peer"
                activeClass="outline outline-2 rounded-full"
                to={`contact`}
                spy={true}
                smooth={true}
                offset={-10}
                duration={500}
              >
                <MdEmail
                  className="text-darkGray rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </LinkScroll>
            </div>
             {/* Theme buttons */}
            <div className="flex items-center justify-center">
              {/* Dark theme nav button */}
              <div className="hidden dark:block">
                <MdDarkMode
                  onClick={() => handleThemeChange("light")}
                  className="peer text-darkGray rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </div>
              {/* Light theme nav button */}
              <div className="block dark:hidden">
                <MdLightMode
                  onClick={() => handleThemeChange("dark")}
                  className="peer text-darkGray rounded-full p-2 cursor-pointer"
                  size={40}
                />
              </div>
            </div>
      </div>
    )
}


NavIconsMobile.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
};