import React from "react";
import "../../index.css";
import { Button } from "@material-tailwind/react";
import HeroHeading from "./HeroHeading";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGithubAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function HeroSec() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <div>
        <div className="w-full text-[#333333] px-[4.5rem]">
          <section className="flex justify-between">
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
          <section className="w-[74rem]">
            {/* <h1 className="uppercase font-alumni-sans text-[280px] font-extrabold tracking-tight leading-[100%]">
              web developer
            </h1> */}
            <HeroHeading />
          </section>
          <section className="flex justify-between">
            <div className="w-80">
              <small className="font-prompt-light tracking-tighter">
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
              <small className="font-prompt-light tracking-tighter">
                Why do people do what they are doing? 🤔
              </small>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <Button className="font-alumni-sans text-lg font-bold border-2 border-[#e73c37] text-[#e73c37] bg-transparent">
          DOWNLOAD RESUME
        </Button>
        <Button className="font-alumni-sans text-lg bg-[#e73c37] border-none">
          LET'S CONNECT
        </Button>
      </div>
    </div>
  );
}
