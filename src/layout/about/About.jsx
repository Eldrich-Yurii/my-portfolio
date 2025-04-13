import React from "react";

export default function About() {
  return (
    <div id="about" className="h-screen grid items-center text-[#333333] px-[7rem]">
      <div>
        <section>
          <h4 className="font-alumni-sans font-semibold lg:text-5xl lg:pb-12">
            MORE ABOUT{" "}
            <span className="underline decoration-[20%] decoration-[#e73c37] underline-offset-1">
              ME
            </span>
          </h4>
        </section>
        <section className="flex flex-col lg:flex-row lg:justify-between">
          <div>
            <h2 className="uppercase leading-[70%] font-alumni-sans font-black lg:leading-[72%] lg:w-[37rem] lg:text-9xl">
              Hi My name is <span className="text-[#e73c37]">Eldrich</span>{" "}
              Jyuri S. Torcuator
            </h2>
          </div>
          <div className="font-prompt-regular font-medium lg:text-xl lg:w-[34rem] lg:leading-[200%]">
            <p>
              A college <span className="line-through decoration-[#333333] decoration-[20%] ">student</span> <span className="text-[#e73c37]">graduate</span> of Bachelor of Science in Information
              Technology. <br />I love learning new things whether it is design or
              programming technologies. <br />As an aspiring developer and designer I
              would love to work and collaborate with like-minded people. 
              <br />Have an idea? Thoughts in mind? 🤔 <a href="https://www.linkedin.com/in/eldrich-jyuri-sumabat/" target="_blank" className="underline underline-offset-1 decoration-[#e73c37] decoration-[20%] hover:text-[#e73c37]">Let's connect.</a> 🤝
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
