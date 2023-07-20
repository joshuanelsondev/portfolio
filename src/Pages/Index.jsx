// Index.jsx

import PropTypes from "prop-types";
import Projects from "../Components/Projects";


export default function Index({ setShowNav }) {
  return (
    <div className="mx-4 pb-10 sm:mx-8 md:mx-48 xl:mx-52 2xl:mx-72">
      <Projects setShowNav={ setShowNav }/>
    </div>
  );
}

Index.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};