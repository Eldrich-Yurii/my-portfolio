import React from "react";
import { Link } from "react-router";
import { TbArrowLeft } from "react-icons/tb";
import BambooPic from "../../../assets/Simply_bamboo.png";

export default function SimplyBamboo() {
  return (
    <div className="text-[#333333] p-8  lg:px-[14rem] lg:py-[4.5rem]">
      <header>
        <h2 className="uppercase text-5xl font-alumni-sans font-bold">
          simply bamboo
        </h2>
      </header>
      <section>
        <p className="font-prompt-light pt-0 pb-4 text-sm lg:text-base lg:pt-4 lg:pb-8 leading-[150%]">
          Simply Bamboo is a feasibility study in marketing. The idea is to make
          a product design, Logo and a landing page for the study.
        </p>
      </section>
      <section>
        <figure>
          <img
            className="rounded-lg lg:rounded-2xl"
            src={BambooPic}
            alt="Cenro Hero Section"
          />
        </figure>
      </section>
      <section className="flex justify-between py-8 lg:py-20">
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-xl lg:text-2xl">
            my role
          </h3>
          <ul className="font-prompt-regular text-xs lg:text-base">
            <li>UI Designer</li>
            <li>Product Designer</li>
            <li>Frontend Developer</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-xl lg:text-2xl">
            tech stack
          </h3>
          <div>
            <ul className="font-prompt-regular text-xs lg:text-base">
              <li>Figma</li>
              <li>React.js</li>
              <li>Tailwind</li>
            </ul>
          </div>
        </div>
        <div>
        <h3 className="uppercase font-alumni-sans font-bold text-xl lg:text-2xl">
            date
          </h3>
          <p className="font-prompt-regular text-xs lg:text-base">
            November 2024
          </p>
        </div>
      </section>
      <section>
      <h3 className="border-l-4 pl-2 border-[#e73c37] uppercase text-xl font-alumni-sans font-bold mb-4">
          What I learned?
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            classes
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            In my previous projects I used Bootstrap and a bit of tailwind CSS.
            In this simple project I created, I learned more about the tailwind
            class that is normally used for layouts. I learned to use flexbox
            and grids more on this project.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between  pb-8">
        <p className="uppercase font-alumni-sans font-bold text-2xl">
            layout
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            having a good layout in frontend is crucial. I learned that
            designing UI is also important before diving into coding especially
            in frontend. I experienced before that if we just code and not plan
            what we should do ahead of time, we will found ourselves stuck and
            will be able to accomplish what we need on time.
          </p>
        </div>
      </section>
      <section>pictures and video</section>
    </div>
  );
}
