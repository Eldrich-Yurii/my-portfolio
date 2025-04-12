import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaGithubAlt,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div className="h-screen flex justify-center flex-col text-[#333333] px-[7rem]">
      <div className="grid pb-40">
        <header className="inline-flex items-center gap-4">
          <h4 className="font-alumni-sans uppercase text-5xl font-extrabold">
            let's chat 😁
          </h4>
        </header>
        <a
          href="mailto:sumabateldrichjyuri@gmail.com"
          className="underline decoration-[20%] underline-offset-[14px] decoration-[#e73c37] text-6xl font-prompt-light"
        >
          sumabateldrichjyuri@gmail.com
        </a>
      </div>
      <div className="flex justify-between">
        <section>
          <p className="font-alumni-sans uppercase">crafted by yuri</p>
        </section>
        <section className="inline-flex gap-2">
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
        </section>
      </div>
    </div>
  );
}
