/* eslint-disable react/no-unescaped-entities */
// AboutMe.jsx

export default function AboutMe() {

    return (
      <div className="flex">
        <div className="flex flex-col">
          {/* <img
              src="./src/assets/headshot.jpeg"
              alt="Headshot on grass with blurred background"
              className="h-[600px] w-auto"
            /> */}
          <div className="text-lg text-blue bg-dark rounded-lg p-8">
            <h2 className="text-4xl text-primary dark:text-blue font-semibold">
              Hey,&nbsp; I'm Joshua
            </h2>
            I'm a web developer and current fellow in the Pursuit software
            engineering fellowship.
            <br />
            I'm passionate about problem-solving, creativity, and building
            functional digital experiences through collaboration.
            <br />
            I believe in using technology to empower underrepresented
            communities, and I'm committed to making a positive impact through
            my skills and creativity.
            <br />
            I love connecting with people from diverse backgrounds and
            collaborating effectively within teams. Learning from others is
            always a joy for me.
            <br />
            Beyond coding, I'm a saxophonist, performing at various venues in
            New York City. I enjoy collaborating with other musicians and
            creating musical experiences. I also enjoy sharing my musical
            knowledge through teaching privately.
            <br />
            Explore my website to see my latest projects and join me in creating
            meaningful digital solutions. Let's build something amazing
            together!
            <br />
            Joshua Nelson
            <br />
            <p className="text-primary font-semibold">
              Web Developer | Musician | Educator
            </p>
          </div>
        </div>
        <img
          src="./src/assets/headshot_grass.jpeg"
          alt="Headshot on grass with blurred background"
          className="h-96"
        />
        {/* <img
              src="./src/assets/pursuit_headshot.jpg"
              alt="Headshot on grass with blurred background"
              className="h-[600px] w-auto"
            /> */}
        {/* <img
              src="./src/assets/pursuit_headshot.png"
              alt="Headshot on grass with blurred background"
              className="h-[600px] w-auto rounded-2xl bg-secondary"
            /> */}
      </div>
    );
}