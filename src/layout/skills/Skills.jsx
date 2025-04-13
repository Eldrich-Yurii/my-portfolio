import React from "react";
import {
  FaHtml5,
  FaLock,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaFigma,
} from "react-icons/fa6";
import { SiTailwindcss, SiExpress, SiAdobeillustrator, SiCanva, SiPostman, SiXampp } from "react-icons/si";

export default function Skills() {
  return (
    <div id="skills" className="h-screen text-[#333333] grid place-content-center gap-12 lg:gap-20">
      <h3 className="uppercase text-2xl lg:text-[5rem] tracking-tight text-center font-alumni-sans">
        <span className="font-extrabold">discover new skills.</span>{" "}
        <span>unlock more possibilities</span>
      </h3>
      <div className="flex flex-wrap justify-center mx-14 gap-4 lg:gap-0 lg:justify-between lg:mx-[7rem]">
        <FaHtml5 className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <FaCss3 className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <FaJs className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <FaBootstrap className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <SiTailwindcss className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <FaReact className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <FaNodeJs className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <SiExpress className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <FaPhp className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <FaFigma className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <SiAdobeillustrator className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <SiCanva className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <SiPostman className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
        <SiXampp className="text-3xl hover:text-[#e73c37] lg:text-6xl" />
      </div>
      <footer className="text-center font-prompt-light text-xs lg:text-base px-8 lg:px-[7rem]">
        As a college graduate I am eager to learn and be comfortable with skills
        I am learning. Adapting to available technologies and resources is
        crucial to achieve my goal and deliver solutions.
      </footer>
    </div>
  );
}
