import React from "react";

export default function About() {
  return (
    <div className="h-screen grid items-center text-[#333333] px-[4.5rem]">
      <div>
        <section>
          <h4 className="font-alumni-sans font-semibold text-5xl pb-12">
            MORE ABOUT{" "}
            <span className="underline decoration-[20%] decoration-[#e73c37] underline-offset-1">
              ME
            </span>
          </h4>
        </section>
        <section className="flex justify-between">
          <div>
            <h2 className="w-[37rem] font-alumni-sans font-black text-9xl uppercase leading-[70%]">
              Hi My name is <span className="text-[#e73c37]">Eldrich</span>{" "}
              Jyuri S. Torcuator
            </h2>
          </div>
          <div className="font-medium text-xl w-[34rem] leading-10 font-prompt-regular">
            <p>
              A college <span className="line-through decoration-[#333333] decoration-[20%] ">student</span> <span className="text-[#e73c37]">graduate</span> of Bachelor of Science in Information
              Technology. <br />I love learning new things whether it is design or
              programming technologies. <br />As an aspiring developer and designer I
              would love to work and collaborate with like-minded people. 
              <br />Have an idea? Thoughts in mind? 🤔 <a href="https://www.linkedin.com/in/eldrich-jyuri-sumabat/"className="underline underline-offset-1 decoration-[#e73c37] decoration-[20%] hover:text-[#e73c37]">Let's connect.</a> 🤝
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
