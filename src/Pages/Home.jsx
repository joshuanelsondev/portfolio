// Home.jsx
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import HomeComponent from "../Components/HomeComponent";
import About from "../Pages/About";
import Index from "../Pages/Index";
import Contact from "../Pages/Contact";

export default function Home({ setShowNav }) {
    useEffect(() => {
    setShowNav(true);
    }, [setShowNav]);

    return (
      <div>
        <LinkScroll
          activeClass="active"
          to="home"
          spy={true}
          offset={0}
          duration={500}
        >
          <HomeComponent setShowNav={setShowNav} />
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="about"
          spy={true}
          offset={0}
          duration={500}
        >
          <About />
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="projects"
          spy={true}
          offset={0}
          duration={500}
        >
          <Index setShowNav={setShowNav} />
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="contact"
          spy={true}
          offset={0}
          duration={500}
        >
          <Contact />
        </LinkScroll>
      </div>
    );
}


Home.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};