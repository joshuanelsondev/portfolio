// Nav.jsx

import NavIcons from "./NavIcons";
import NavIconsMobile from "./NavIconsMobile";
import PropTypes from "prop-types";
import {
  MdDarkMode,
  MdLightMode,
} from "react-icons/md"; 


export default function Nav({ handleThemeChange }) {


  return (
    <div>
      {/* Nav bar Container */}
      <div  className={`hidden md:flex flex-col fixed top-[30%] left-6 2xl:left-16 pl-4 gap-12 sm:ml-4 z-40`}> 
        <NavIcons />
        <div className="relative">
          {/* Dark theme nav button */}
          <div className="absolute invisible dark:visible flex items-center lg:gap-4 md:gap-1">
            <MdDarkMode
              onClick={() => handleThemeChange("light")}
              className="peer text-gray dark:text-white hover:dark:outline-primary rounded-full p-2 cursor-pointer"
              size={40}
            />
          </div>
          {/* Light theme nav button */}
          <div className="absolute dark:invisible flex items-center lg:gap-4 md:gap-1">
            <MdLightMode
              onClick={() => handleThemeChange("dark")}
              className="peer text-primary rounded-full p-2 cursor-pointer"
              size={40}
            />
          </div>
        </div>
      </div>
    {/* Smaller screen nav bar */}
      <div
        className={`fixed bg-primary bottom-0 flex items-center h-14 w-full p-2 left-0 z-50 md:hidden`}
      >
        {/* Arrow for closing side nav */}        
          <div className={`flex justify-around w-full text-darkGray px-4`}>
            <NavIconsMobile handleThemeChange={handleThemeChange} />       
          </div>
        
      </div>
    </div>
  );
}

Nav.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
};


    
