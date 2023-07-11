// Nav.jsx

import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MdAccountCircle,
  MdHome,
  MdEmail,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import {
  AiOutlineAppstore,
  AiOutlineAppstoreAdd,
  AiOutlineMenu,
} from "react-icons/ai";

export default function Nav({ handleThemeChange }) {
  const [showNav, setShowNav] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setShowNav(!showNav);
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
      <div className="hidden lg:flex flex-col fixed top-[20%] gap-12 ml-1 sm:ml-4">
        <div className="flex items-center lg:gap-4 md:gap-1">
          <MdHome
            onClick={() => navigate("/")}
            className={`peer text-primary hover:bg-secondary dark:text-blue dark:hover:bg-dark rounded-full p-2 cursor-pointer ${
              currentPage("/") && "bg-secondary"
            } dark:${currentPage("/") && "bg-dark"}`}
            size={40}
          />
          <p
            className="invisible text-primary dark:text-blue font-semibold peer-hover:visible"
            onClick={() => toggleNav()}
          >
            Home
          </p>
        </div>
        <div className="flex items-center lg:gap-4 md:gap-1">
          <MdAccountCircle
            onClick={() => navigate("/about")}
            className={`peer text-primary dark:text-blue hover:bg-secondary dark:hover:bg-dark rounded-full p-2 cursor-pointer ${
              currentPage("/about") && "bg-secondary"
            }  dark:${currentPage("/about") && "bg-dark"}`}
            size={40}
          />
          <p className="invisible text-primary dark:text-blue font-semibold peer-hover:visible">
            About
          </p>
        </div>
        <div className="flex items-center lg:gap-4 md:gap-1">
          <AiOutlineAppstore
            onClick={() => navigate("/projects")}
            className={`peer text-primary dark:text-blue hover:bg-secondary dark:hover:bg-dark p-[8px] rounded-full cursor-pointer ${
              currentPage("/projects") && "bg-secondary"
            }  dark:${currentPage("/projects") && "bg-dark"}`}
            size={40}
          />
          <p className="invisible text-primary dark:text-blue font-semibold peer-hover:visible">
            Portfolio
          </p>
        </div>
        <div className="flex items-center lg:gap-4 md:gap-1">
          <MdEmail
            onClick={() => navigate("/contact")}
            className={`peer text-primary dark:text-blue hover:bg-secondary dark:hover:bg-dark rounded-full p-2 cursor-pointer ${
              currentPage("/contact") && "bg-secondary"
            }  dark:${currentPage("/contact") && "bg-dark"}`}
            size={40}
          />
          <p className="invisible text-primary dark:text-blue font-semibold peer-hover:visible">
            Contact
          </p>
        </div>

        <div className="relative">
          <div className="absolute invisible dark:visible flex items-center lg:gap-4 md:gap-1">
            <MdOutlineDarkMode
              onClick={() => handleThemeChange('dark')}
              className="peer text-blue hover:bg-dark rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-blue font-semibold peer-hover:visible">
              Dark
            </p>
          </div>
          <div className="absolute dark:invisible flex items-center lg:gap-4 md:gap-1">
            <MdOutlineLightMode
              onClick={() => handleThemeChange('light')}
              className="peer text-primary hover:bg-secondary rounded-full p-2 cursor-pointer"
              size={40}
            />
            <p className="invisible text-primary font-semibold peer-hover:visible">
              Light
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Nav.propTypes = {
  handleThemeChange: PropTypes.func.isRequired,
};