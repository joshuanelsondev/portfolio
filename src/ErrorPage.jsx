// ErrorPage.jsx

import ErrorPageLogo from "./assets/FourOFourLogo.png"
import { Link, useNavigate } from "react-router-dom";
import { HiHomeModern, HiArrowLeftCircle } from "react-icons/hi2";


export default function FourOFour() {
  const navigate = useNavigate();

  return (
    <div className="flex  flex-col items-center h-screen w-full">
      <HiArrowLeftCircle onClick={() => navigate(-1)} className="text-primary dark:text-white absolute left-0 m-10 cursor-pointer hover:text-secondary dark:hover:text-primary" size={40} />
      <img src={ErrorPageLogo} alt="404 Logo" className="h-96 w-96"/>
      <h1 className="text-4xl text-dark dark:text-white">Sorry, Page Not Found</h1>
      <Link to={'/'} className="mt-10 text-primary dark:text-white hover:text-secondary dark:hover:text-primary z-10"><HiHomeModern size={100}/></Link>
    </div>
  );
}
