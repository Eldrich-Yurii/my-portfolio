import React from "react";
import { TbArrowLeft } from "react-icons/tb";
import { Link } from "react-router";
import CenroPic from "../../../assets/cenro.png";
import CenroHero from "../../../assets/cenroHero.png";
import Laptop from "../../../assets/laptop.png";
import Carousel from "../../../components/carousel/CenroCarousel";


export default function Cenro() {
 

  return (
    <div className="text-[#333333] p-8  lg:px-[14rem] lg:py-[4.5rem]">
      <header>
        <h2 className="uppercase text-5xl font-alumni-sans font-bold">
          cenro business permit processing system
        </h2>
      </header>
      <section>
        <p className="font-prompt-light pt-4 pb-8  leading-[150%]">
          Cenro is a system developed for San Juan City CENRO (City
          Environmental and Natural Resource Office). The idea of this project
          is to help San Juan City CENRO to automate their process in business
          applications of the San Juan City Business Owners.
        </p>
      </section>
      <section>
        <figure>
          <img
            className="rounded-lg lg:rounded-2xl"
            src={CenroPic}
            alt="Cenro Hero Section"
          />
        </figure>
        {/* <Carousel /> */}
      </section>
      <section className="flex justify-between py-8 lg:py-20">
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-xl lg:text-2xl">
            my role
          </h3>
          <ul className="font-prompt-regular text-xs lg:text-base">
            <li>UI Designer</li>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-xl lg:text-2xl">
            tech stack
          </h3>
          <div className="inline-flex gap-3 lg:gap-10">
            <ul className="font-prompt-regular text-xs lg:text-base">
              <li>Figma</li>
              <li>React.js</li>
              <li>Tailwind</li>
            </ul>
            <ul className="font-prompt-regular text-xs lg:text-base">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDb</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-xl lg:text-2xl">
            date
          </h3>
          <p className="font-prompt-regular text-xs lg:text-base">
            January 2025
          </p>
        </div>
      </section>
      <section>
        <h3 className="border-l-4 pl-2 border-[#e73c37] uppercase text-xl font-alumni-sans font-bold mb-4">
          What I learned?
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            organization
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            As I continue developing something from scratch I am learning to
            organize my folder and files. I noticed when reviewing my codes in
            my past projects, I really saw imporvements when it comes to
            cleanliness and folder structures.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            libraries
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:pb-8 lg:text-base lg:w-[48rem] ">
            Exploring new component libraries and third party api is quite
            overwhelming for me as a junior developer but I tried learning it
            step by step so I understand how they works, it is challenging yet
            great experience.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">jwt</p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            I used this for auth in user accounts. I got the idea how it works.
            It is great to use for security of the users.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between  pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            mongodb
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            As a junior developer it's good to use this as database of the app.
            It is quite simpler than MySql. I will explore this more for my
            future projects.
          </p>
        </div>
      </section>
      {/* <section className="lg:pt-20">
      
      </section> */}
    </div>
  );
}
