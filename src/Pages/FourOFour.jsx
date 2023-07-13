// FourOFour.jsx

import PropTypes from "prop-types";
import FourOFourLogo from "../assets/FourOFourLogo.png"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiHomeModern, HiArrowLeftCircle } from "react-icons/hi2";


export default function FourOFour({ errorPage, setErrorPage }) {
  const navigate = useNavigate();

  useEffect(() => {
    toggleError()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleError = () => {
    setErrorPage(!errorPage);
  }

  return (
    <div className="flex  flex-col items-center h-screen w-full">
      <HiArrowLeftCircle onClick={() => navigate(-1)} className="text-secondary absolute left-0 m-10 cursor-pointer hover:text-primary" size={40} />
      <img src={FourOFourLogo} alt="404 Logo" className="h-96 w-96"/>
      <h1 className="text-4xl text-dark">Sorry, Page Not Found</h1>
      <Link to={'/'} className="mt-10 text-secondary hover:text-primary hover:dark:text-dark z-10"><HiHomeModern size={100}/></Link>
    </div>
  );
}

FourOFour.propTypes = {
  errorPage: PropTypes.bool.isRequired,
  setErrorPage: PropTypes.func.isRequired,
};