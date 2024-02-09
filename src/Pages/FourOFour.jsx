// FourOFour.jsx

import PropTypes from "prop-types";
import FourOFourLogo from "../assets/FourOFourLogo.png"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiHomeModern, HiArrowLeftCircle } from "react-icons/hi2";


export default function FourOFour({ setShowNav }) {
  const navigate = useNavigate();

  useEffect(() => {
    toggleError()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleError = () => {
    setShowNav(false);
  }

  return (
    <div className="flex  flex-col items-center h-screen w-full">
      <HiArrowLeftCircle onClick={() => navigate(-1)} className="text-primary dark:text-white absolute left-0 m-10 cursor-pointer hover:text-secondary dark:hover:text-primary" size={40} />
      <img src={FourOFourLogo} alt="404 Logo" className="h-96 w-96"/>
      <h1 className="text-4xl text-dark dark:text-white">Sorry, Page Not Found</h1>
      <Link to={'/'} className="mt-10 text-primary dark:text-white hover:text-secondary dark:hover:text-primary z-10"><HiHomeModern size={100}/></Link>
    </div>
  );
}

FourOFour.propTypes = {
  setShowNav: PropTypes.func.isRequired,
};