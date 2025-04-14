import React from "react";
import NeighborsPic from "../../../assets/pictures/neighbors-chef.png";
import { Link } from "react-router";
import { TbArrowLeft } from "react-icons/tb";
import Carousel from "../../../components/carousel/CenroCarousel";
import ChefVid from "../../../assets/videos/chef-vid.gif"

export default function NeighborsChef() {
  return (
    <div className="text-[#333333] p-8  lg:px-[14rem] lg:py-[4.5rem]">
      <header>
        <h2 className="uppercase text-5xl font-alumni-sans font-bold">
          neighbos's chef booking management system
        </h2>
      </header>
      <section>
        <p className="font-prompt-light pt-0 pb-4 text-sm lg:text-base lg:pt-4 lg:pb-8 leading-[150%]">
          A website booking management system for a restaurant. This is to help
          a restaurant to automate their booking reservation and can be easily
          accessible for their customers.
        </p>
      </section>
      <section>
        <figure>
          <img
            className="rounded-lg lg:rounded-2xl"
            src={NeighborsPic}
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
              <li>React.js</li>
              <li>Tailwind</li>
              <li>Node.js</li>
            </ul>
            <ul className="font-prompt-regular text-xs lg:text-base">
              <li>Express.js</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-xl lg:text-2xl">
            date
          </h3>
          <p className="font-prompt-regular text-xs lg:text-base">
            August 2023
          </p>
        </div>
      </section>
      <section>
        <h3 className="border-l-4 pl-2 border-[#e73c37] uppercase text-xl font-alumni-sans font-bold mb-4 lg:mb-12">
          What I learned?
        </h3>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            syntax
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            As I making this project I learned that there are similarities of
            the logic of major programming languages it jsut varies on the
            syntax being used depending on what programmig language is.
            Memorizing syntax might be hard but learning how that syntax work
            would really help.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">crud</p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            Learning web development is hard yet fulfilling when you
            accomplished something. One of the major part that a junior
            developer must learn is CRUD functionalities. For me, the logic is
            simple but as a junior it quite challenging to know what to use. But
            I will say it is worth to learn because this is one of the basic
            needs to master programming.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            tailwind css
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            Tailwind is a great tool for style a webpage, it is more flexible
            than bootstrap. However, similar to bootstrap learning this is quite
            challenging especially for someone who just starting to use this. In
            my opinion, learning first the CSS is crucial before jumping to css
            libraries like this.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between  lg:pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            database
          </p>
          <p className="font-prompt-regular text-sm pb-4 lg:text-base lg:w-[48rem]">
            One of the major part of web development is the database. this is
            where data being store gathered or collected from inputs. I learned
            that there are many types of database and each have its own
            functionality. In this project we used MySQL. For me, learning this
            is quite challenging but it is worth it.
          </p>
        </div>
      </section>
      <section>
        <img src={ChefVid} alt="" className="w-full"/>
      </section>
    </div>
  );
}
