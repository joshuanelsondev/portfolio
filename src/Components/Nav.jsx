// Nav.jsx

import PropTypes from "prop-types";

export default function Nav({ toggleMode }) {
 const toggleTheme = () => {
   toggleMode();
 };

 return <div></div>
}

Nav.propTypes = {
  toggleMode: PropTypes.func.isRequired,
};