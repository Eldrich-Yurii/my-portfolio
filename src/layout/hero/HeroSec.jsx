import React from "react";
import "../../index.css";
import { Button } from "@material-tailwind/react";
import HeroHeading from "../../components/headingText/HeroHeading";
import HeroSecCTA from "../../components/buttons/HeroSecCTA/HeroSecCTA";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function HeroSec() {
  return (
    <div className="flex-col h-screen flex px-8 lg:px-0 lg:items-center justify-center">
      <div>
        <div className="w-full text-[#333333]">
          <section className="flex flex-col-reverse gap-1 lg:flex-row lg:gap-0 lg:justify-between">
            <small className="font-prompt-light tracking-tighter">
              👋 Hi! I am Eldrich Jyuri S. Torcuator
            </small>
            <div className="inline-flex gap-2">
              <a
                href="https://www.facebook.com/eldrich.jyuri.sumabat.22"
                className="hover:text-[#e73c37]"
                target="_blank"
              >
                <FaFacebookSquare />
              </a>
              <a href="" target="_blank" className="hover:text-[#e73c37]">
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/eldrich-jyuri-sumabat/"
                target="_blank"
                className="hover:text-[#e73c37]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/Eldrich-Yurii"
                target="_blank"
                className="hover:text-[#e73c37]"
              >
                <FaGithubAlt />
              </a>
              <a
                href="mailto:sumabateldrichjyuri@gmail.com"
                target="_blank"
                className="hover:text-[#e73c37]"
              >
                <SiGmail />
              </a>
            </div>
          </section>
          <section className="lg:w-[74rem]">
            <HeroHeading />
          </section>
          <section className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:w-80">
              <small className="font-prompt-light tracking-tighter text-[10px] lg:text-[12.8px]">
                Based in Philippines -{" "}
                <span className="line-through decoration-[15%] decoration-[#e73c37]">
                  Valenzuela City
                </span>
                ,
                <span className="line-through decoration-[15%] decoration-[#e73c37]">
                  {" "}
                  San Miguel Bulacan
                </span>
                , Sta. Maria Bulacan
              </small>
            </div>
            <div>
              <small className="font-prompt-light tracking-tighter leading-[100%] text-[10px] lg:text-[12.8px]">
                Why do people do what they are doing? 🤔
              </small>
            </div>
          </section>
        </div>
      </div>
      <div className="flex flex-col gap-2 pt-3 lg:pt-0 lg:flex-row lg:justify-center lg:gap-6">
        <HeroSecCTA />
      </div>
    </div>
  );
}
