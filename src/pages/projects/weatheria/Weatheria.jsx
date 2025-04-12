import React from "react";
import { Link } from "react-router";
import { TbArrowLeft } from "react-icons/tb";
import WeatheriaPic from "../../../assets/weatheria-fms.png";

export default function Weatheria() {
  return (
    <div className="px-[14rem] py-[4.5rem] text-[#333333]">
      <header>
        <h2 className="uppercase text-5xl font-alumni-sans font-bold">
          cenro business permit processing system
        </h2>
      </header>
      <section>
        <p className="font-prompt-light pt-4 pb-8  leading-[150%]">
          Weatheria is a web app developed for Marikina City. The idea of this
          capstone project is to help Marikina City to predict alert them
          through SMS blast for possible floods based on the data from previous
          year.
        </p>
      </section>
      <section>
        <figure>
          <img
            className="rounded-2xl"
            src={WeatheriaPic}
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
              <li>Figma</li>
              <li>Html</li>
              <li>Bootstrap</li>
            </ul>
            <ul className="font-prompt-regular">
              <li>JavaScript</li>
              <li>Php</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="uppercase font-alumni-sans font-bold text-2xl">
            date
          </h3>
          <p className="font-prompt-regular">December 2023</p>
        </div>
      </section>
      <section>
        <h3 className="uppercase text-xl font-alumni-sans font-bold pb-4">
          What I learned?
        </h3>
        <div className="flex justify-between  pb-8">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            syntax
          </p>
          <p className="font-prompt-regular w-[48rem]">
            As I making this project I learned that there are similarities of
            the logic of major programming languages it just varies on the
            syntax being used depending on what programmig language is.
            Memorizing syntax might be hard but learning how that syntax work
            would really help.
          </p>
        </div>
        <div className="flex justify-between ">
          <p className="uppercase font-alumni-sans font-bold text-2xl">
            weather api
          </p>
          <p className="font-prompt-regular w-[48rem] pb-8 ">
            In this project we used openweatherAPI for data of rainfalls. I
            learned that there are bunch of APIs out there that is readily
            available. We just need to understand how the API works so that we
            can use it in our projects.
          </p>
        </div>
      </section>
      <section>pictures and video</section>
    </div>
  );
}
