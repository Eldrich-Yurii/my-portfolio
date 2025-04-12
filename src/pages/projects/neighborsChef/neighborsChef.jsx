import React from "react";
import NeighborsPic from "../../../assets/neighbors-chef.png";
import { Link } from "react-router";
import { TbArrowLeft } from "react-icons/tb";

export default function NeighborsChef() {
  return (
    <div className="px-[14rem] py-[4.5rem] text-[#333333]">
      <header>
        <h2 className="uppercase text-5xl font-alumni-sans font-bold">
          neighbos's chef booking management system
        </h2>
      </header>
      <section>
        <p className="font-prompt-light pt-4 pb-8  leading-[150%]">
          A website booking management system for a restaurant. This is to help
          a restaurant to automate their booking reservation and can be easily
          accessible for their customers.
        </p>
      </section>
      <section>
        <figure>
          <img
            className="rounded-2xl"
            src={NeighborsPic}
            alt="Cenro Hero Section"
          />
        </figure>
      </section>
      <section className="flex justify-between py-16">
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-2xl">
            my role
          </h3>
          <ul className="font-prompt-regular">
            <li>UI Designer</li>
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
          </ul>
        </div>
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-2xl">
            tech stack
          </h3>
          <div className="inline-flex gap-10">
            <ul className="font-prompt-regular">
              <li>React.js</li>
              <li>Tailwind</li>
            </ul>
            <ul className="font-prompt-regular">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-2xl">
            date
          </h3>
          <p className="font-prompt-regular">August 2023</p>
        </div>
      </section>
      <section>
        <h3 className="uppercase text-xl font-alumni-sans font-bold pb-16">
          What I learned?
        </h3>
        <div className="flex justify-between  pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            syntax
          </p>
          <p className="font-prompt-regular w-[48rem]">
            As I making this project I learned that there are similarities of
            the logic of major programming languages it jsut varies on the
            syntax being used depending on what programmig language is.
            Memorizing syntax might be hard but learning how that syntax work
            would really help.
          </p>
        </div>
        <div className="flex justify-between ">
          <p className="uppercase font-alumni-sans font-bold text-2xl">crud</p>
          <p className="font-prompt-regular w-[48rem] pb-8 ">
            Learning web development is hard yet fulfilling when you
            accomplished something. One of the major part that a junior
            developer must learn is CRUD functionalities. For me, the logic is
            simple but as a junior it quite challenging to know what to use. But
            I will say it is worth to learn because this is one of the basic
            needs to master programming.
          </p>
        </div>
        <div className="flex justify-between  pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            tailwind css
          </p>
          <p className="font-prompt-regular w-[48rem]">
            Tailwind is a great tool for style a webpage, it is more flexible
            than bootstrap. However, similar to bootstrap learning this is quite
            challenging especially for someone who just starting to use this. In
            my opinion, learning first the CSS is crucial before jumping to css
            libraries like this.
          </p>
        </div>
        <div className="flex justify-between  pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            database
          </p>
          <p className="font-prompt-regular w-[48rem]">
            One of the major part of web development is the database. this is
            where data being store gathered or collected from inputs. I learned
            that there are many types of database and each have its own
            functionality. In this project we used MySQL. For me, learning this
            is quite challenging but it is worth it.
          </p>
        </div>
      </section>
      <section>pictures and video</section>
    </div>
  );
}
