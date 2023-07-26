// Home.jsx
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as LinkScroll } from "react-scroll";
import HomeComponent from "../Components/HomeComponent";

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
          to="home"
          spy={true}
          offset={0}
          duration={500}
        >
          <HomeComponent setShowNav={setShowNav} />
        </LinkScroll>
      </div>
    );
}


Home.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};