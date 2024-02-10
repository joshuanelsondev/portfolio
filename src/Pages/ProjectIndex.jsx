// ProjectIndex.jsx

import PropTypes from "prop-types";
import Projects from "../Components/Projects";


export default function Index({ setShowNav }) {
  return (
    <div
      id="portfolio"
      className="p-10 lg:px-0 lg:mx-20 h-auto w-auto"
    >
      <Projects setShowNav={setShowNav} />
    </div>
  );
}

Index.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};