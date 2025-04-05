import React from "react";
import "../../index.css";
import { Button } from "@material-tailwind/react";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaGithub, FaGithubAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function HeroSec() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-full text-[#333333] px-[4.5rem]">
          <section className="flex justify-between">
            <small className="font-prompt-extralight">
              👋 Hi! I am Eldrich Jyuri S. Torcuator
            </small>
            <div className="inline-flex gap-2">
              <a href="">
                <FaFacebookSquare />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaLinkedinIn />
              </a>
              <a href="">
                <FaGithubAlt />
              </a>
              <a href="">
                <SiGmail />
              </a>
            </div>
          </section>
          <section>
            <h1 className="uppercase font-alumni-sans text-[280px] font-extrabold tracking leading-[100%]">
              web developer
            </h1>
          </section>
          <section className="flex justify-between">
            <div className="w-80">
              <small className="font-prompt-extralight text-base">
                Based in Philippines - <del>Valenzuela City</del>,
                <del> San Miguel Bulacan</del>, Sta. Maria Bulacan
              </small>
            </div>
            <div>
              <small className="font-prompt-extralight text-base">
                Why do people do what they are doing? 🤔
              </small>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center gap-6">
        <Button className="font-player text-sm tracking-tighter border-2 border-[#e73c37] text-[#e73c37] bg-transparent">
          DOWNLOAD RESUME
        </Button>
        <Button className="font-player text-sm tracking-tighter bg-[#e73c37] border-none">
          LET'S CONNECT
        </Button>
      </div>
    </>
  );
}
