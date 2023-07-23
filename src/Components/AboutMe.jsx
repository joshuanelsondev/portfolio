// AboutMe.jsx

export default function AboutMe() {

    return (
      <div>
        <div className="flex flex-col">
          <h2 className="text-5xl text-primary dark:text-blue font-semibold mt-20">
            About Me
          </h2>
          {/* <img
            src="./src/assets/headshot_grass.jpeg"
            alt="Headshot on grass with blurred background"
            className="h-96"
          />
          <img
            src="./src/assets/pursuit_headshot.jpg"
            alt="Headshot on grass with blurred background"
            className="h-96"
          />
          <img
            src="./src/assets/headshot.jpeg"
            alt="Headshot on grass with blurred background"
            className="h-96"
          /> */}
          <div className="flex">
            <div className="text-blue border border-primary h-[400px] w-[400px]">
              Image Here
            </div>
            <div>Content Here</div>
          </div>
        </div>
      </div>
    );
}