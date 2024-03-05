// Project.jsx

import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";

export default function Project({ project }) {
  return (
    <div className="max-w-sm p-2 z-10 relative">
        <img
          src={`${project.image}`}
          alt={`${project.title} - Error Loading`}
          onError={this.src=''}
          className="rounded-md text-primary h-60 w-[500px] box-border"
        />
    </div>
  );
}

Project.propTypes = {
    project: PropTypes.object.isRequired
}


