/* eslint-disable react/no-unescaped-entities */
// AboutComponent.jsx
import { useState } from "react";
import GrassHeadshot from "../assets/images/headshot_grass.jpeg";
import SaxImage from "../assets/images/Press6.jpeg";


export default function AboutComponent() {
    // State for showing the image
    const [showImg, setShowImg] = useState(true);
    // State for showing the rest of the About me text section

    // Function to toggle the showImg state
    const toggleImg = () => {
      setShowImg(!showImg);
    };

    return (

      <div id="about" className="flex items-start md:justify-evenly md:items-center h-full min-h-[600px] w-full mb-16 ">
        <div className="flex flex-col items-center lg:flex-row lg:justify-evenly gap-10 h-auto w-full lg:pl-14 xl:p-4">
          {/* Header and Bio container */}
          <div className="flex flex-col items-center lg:items-start lg:text-left lg:text-lg text-black dark:text-white rounded-lg max-w-[500px]">
            {/* Header */}
            <h2 className="text-3xl sm:text-4xl text-darkGray dark:text-white font-semibold">
              Hi, I'm <span className="text-darkGray dark:text-primary">Joshua</span>
            </h2>
            <br />
            {/* Bio text */}
            <p className='px-4 text-justify sm:px-0'>
              Thank you for visiting my page. I'm a web developer and Pursuit software engineering fellow, driven by a passion for coding and adept problem-solving. With a background as a jazz musician and instructor spanning over a decade, I bring my critical thinking intentional learning, and creativity to the tech world. After seven months of self-teaching, I successfully completed the  Fellowship and was hired as a coach. Currently coaching at Pursuit, I am actively seeking a full-time SWE role with a dynamic team, eager to make a meaningful impact outside the current organization. Let's embark on the journey of building something amazing together!
            </p>
          </div>
          {/* Images to toggle between */}
          <div className="relative">
            <img
              src={GrassHeadshot}
              alt="Headshot on grass with blurred background"
              className={`h-auto w-auto max-h-[400px] min-w-[300px] cursor-pointer shadow-lg shadow-gray dark:shadow-black rounded-2xl ${
                !showImg && "hidden"
              }`}
              onClick={toggleImg}
            />
            <img
              src={SaxImage}
              alt="Joshua standing against a black wall holding a saxophone"
              className={`h-auto w-auto max-h-[400px] min-w-[300px] cursor-pointer shadow-lg shadow-gray dark:shadow-black rounded-2xl ${
                showImg && "hidden"
              }`}
              onClick={toggleImg}
            />
          </div>
        </div>
      </div>
    );
}