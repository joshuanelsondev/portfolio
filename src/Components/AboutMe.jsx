/* eslint-disable react/no-unescaped-entities */
// AboutMe.jsx
import { Link } from "react-router-dom";

export default function AboutMe() {

    return (
      <div className="flex flex-col md:flex-row border border-primary ">
        <div className="flex flex-col">
          <div className="text-lg text-black dark:text-gray rounded-lg">
            <h2 className="text-4xl text-primary dark:text-gray font-semibold">
              Hi, I'm <span className="text-primary">Joshua</span>
            </h2>
            <br />
            <p>
              Thank you for taking the time to visit my page.
              I'm currently a developer and saxophonist that loves
              to express my creativity through code and music. Within the past
              year I've been able to grow as a developer during my time as a
              fellow at <Link to={"https://www.pursuit.org/"} className="text-primary font-bold hover:underline underline-offset-2" target="_blank">Pursuit</Link>.
              Learning from others and connecting with people from diverse backgrounds... 


            {/*           
              I'm a web developer and current fellow in the Pursuit software
              engineering fellowship. I'm passionate about problem-solving,
              creativity, and building functional digital experiences through
              collaboration. I believe in using technology to empower
                underrepresented communities, and I'm committed to making a
              positive impact through my skills and creativity. I love
              connecting with people from diverse backgrounds and collaborating
              effectively within teams. Learning from others is always a joy for
              me. Beyond coding, I'm a saxophonist, performing at various venues
              in New York City. I enjoy collaborating with other musicians and
              creating musical experiences. I also enjoy sharing my musical
              knowledge through teaching privately. Explore my website to see my
              latest projects and join me in creating meaningful digital
              solutions. Let's build something amazing together! Joshua Nelson */}
            </p>
            <p className="text-primary font-semibold">
              Web Developer | Musician | Educator
            </p>
          </div>
        </div>
        <img
          src="./src/assets/headshot_grass.jpeg"
          alt="Headshot on grass with blurred background"
          className="h-[600px] w-auto"
        />
      </div>
    );
}