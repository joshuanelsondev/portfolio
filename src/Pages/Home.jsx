// Home.jsx
import PropTypes from "prop-types";
import HomeComponent from "../Components/HomeComponent";
import AboutComponent from "../Components/AboutComponent";
import PortfolioComponent from "../Components/PortfolioComponent";
import Contact from "../Pages/Contact";
import Nav from "../Components/Nav";

export default function Home({ handleThemeChange }) {

    return (
      <div className="h-full w-full min-w-fit flex flex-col items-center p-8">
          <Nav handleThemeChange={handleThemeChange} />
          <HomeComponent />
          <AboutComponent />
          <PortfolioComponent />
          <Contact />
      </div>
    );
}


Home.propTypes = {
  handleThemeChange: PropTypes.func.isRequired
};