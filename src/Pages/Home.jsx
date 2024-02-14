// Home.jsx
import PropTypes from "prop-types";
// import { Link as LinkScroll } from "react-scroll";
import HomeComponent from "../Components/HomeComponent";
// import About from "../Pages/About";
import AboutComponent from "../Components/AboutComponent";
import Portfolio from "./Portfolio";
import Contact from "../Pages/Contact";
import Nav from "../Components/Nav";

export default function Home({ handleThemeChange }) {

    return (
      <div className="h-full w-full min-w-fit flex flex-col items-center p-8">
          <Nav handleThemeChange={handleThemeChange} />
          <HomeComponent />
          <AboutComponent />
          <Portfolio />
          <Contact />
      </div>
    );
}


Home.propTypes = {
  handleThemeChange: PropTypes.func.isRequired
};