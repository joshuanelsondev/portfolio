// Home.jsx
import PropTypes from "prop-types";
import { useEffect } from "react";
// import { Link as LinkScroll } from "react-scroll";
import HomeComponent from "../Components/HomeComponent";
import About from "../Pages/About";
import ProjectIndex from "./ProjectIndex";
import Contact from "../Pages/Contact";

export default function Home({ setShowNav }) {
    useEffect(() => {
    setShowNav(true);
    }, [setShowNav]);

    return (
      <div id="home" className="h-full w-full lg:px-24 flex flex-col items-center">
          <HomeComponent setShowNav={setShowNav} />
          <About  />
          <ProjectIndex setShowNav={setShowNav} />
          <Contact />
      </div>
    );
}


Home.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};