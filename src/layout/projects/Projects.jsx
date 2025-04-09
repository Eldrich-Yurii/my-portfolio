import React from "react";
import ProjectCards from "../../components/cards/ProjectCards";


export default function Projects() {
  return (
    <div className="h-screen px-[4.5rem] text-[#333333]">
      <h3 className="text-center uppercase font-alumni-sans text-7xl font-extrabold">
        Projects
      </h3>
      <div className="flex justify-center gap-4 items-center h-screen">
        {/* card */}
        <ProjectCards />
      </div>
    </div>
  );
}
