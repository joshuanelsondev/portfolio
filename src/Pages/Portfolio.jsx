// Portfolio.jsx

import Projects from "../Components/Projects";


export default function Portfolio() {
  return (
    <div
      id="portfolio"
      className="h-auto w-auto"
    >
      <h1 className="text-5xl text-primary font-semibold mb-16">Portfolio</h1>
      <Projects  />
    </div>
  );
}

