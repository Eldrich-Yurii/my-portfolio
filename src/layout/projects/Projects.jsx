import React from "react";
import ProjectCards from "../../components/cards/ProjectCards";


export default function Projects() {
  return (
    <div id="projects" className="h-screen text-[#333333] px-8 lg:px-[4.5rem] ">
      <h3 className="border-l-4 pl-2 border-[#e73c37] uppercase font-alumni-sans text-2xl font-extrabold lg:border-none lg:text-center lg:text-7xl">
        Projects
      </h3>
      <div className="h-screen flex gap-4 overflow-x-auto pt-6 lg:pt-0 lg:justify-center lg:items-center ">
        {/* card */}
        <ProjectCards />
      </div>
    </div>
  );
}
