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
import FallingText from "./FallingText";

export default function Skills() {
  return (
    <div id="skills" className="h-screen text-[#333333] grid place-content-center gap-20">
      <h3 className="uppercase lg:text-[5rem] tracking-tight text-center font-alumni-sans">
        <span className="font-extrabold">discover new skills.</span>{" "}
        <span>unlock more possibilities</span>
      </h3>
      <div className="flex flex-wrap justify-between mx-[7rem]">
        <FaHtml5 className="text-6xl hover:text-[#e73c37]" />
        <FaCss3 className="text-6xl hover:text-[#e73c37]" />
        <FaJs className="text-6xl hover:text-[#e73c37]" />
        <FaBootstrap className="text-6xl hover:text-[#e73c37]" />
        <SiTailwindcss className="text-6xl hover:text-[#e73c37]" />
        <FaReact className="text-6xl hover:text-[#e73c37]" />
        <FaNodeJs className="text-6xl hover:text-[#e73c37]" />
        <SiExpress className="text-6xl hover:text-[#e73c37]" />
        <FaPhp className="text-6xl hover:text-[#e73c37]" />
        <FaFigma className="text-6xl hover:text-[#e73c37]" />
        <SiAdobeillustrator className="text-6xl hover:text-[#e73c37]" />
        <SiCanva className="text-6xl hover:text-[#e73c37]" />
        <SiPostman className="text-6xl hover:text-[#e73c37]" />
        <SiXampp className="text-6xl hover:text-[#e73c37]" />
      </div>
      <footer className="text-center px-[7rem] font-prompt-light">
        As a college graduate I am eager to learn and be comfortable with skills
        I am learning. Adapting to available technologies and resources is
        crucial to achieve my goal and deliver solutions.
      </footer>
    </div>
  );
}
