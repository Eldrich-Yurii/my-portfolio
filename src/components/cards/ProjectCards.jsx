import React from "react";

export default function ProjectCards() {
  const projects = [
    {
      id: 1,
      name: "cenro business processing system",
      description:
        "A system for San Juan City Business permits processing. Designed in Figma. Built with React.js, tailwind CSS, Node.js, Express and MongoDb",
      image: "",
      link: "",
      badges: [
        "Figma",
        "Tailwind CSS",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDb",
      ],
    },
    {
      id: 2,
      name: "simply bamboo",
      description:
        "A landing page for feasibility study in marketing. Designed in Figma and built with React.js, tailwind CSS",
      image: "",
      link: "",
      badges: ["Figma", "Tailwind CSS", "React.js"],
    },
    {
      id: 3,
      name: "weatheria",
      description:
        "A system for Marikina City, designed to predict flood using ARIMA model. Built with Html, Bootstrap, JavaScript, Php and MySql.",
      image: "",
      link: "",
      badges: ["Html", "Bootstrap", "JavaScript", "Php", "MySql"],
    },
    {
      id: 4,
      name: "neighbor's chef",
      description:
        "A website booking management system for a restaurant. Built with React.js, Tailwind CSS, Node.js, Express.js, Mysql",
      image: "",
      link: "",
      badges: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySql"],
    },
  ];

  return (
    <>
      {/* card */}
      {projects.map((project) => {
        return (
          <div
            key={project.id}
            className="drop-shadow-lg bg-white rounded-2xl w-[18rem] h-[24rem] px-3 pt-3"
          >
            <figure className="w-full h-40 bg-black rounded-lg mb-2">
              {/* <img src="" alt="projectPic"/> */}
            </figure>
            <header>
              <h2 className="font-alumni-sans font-bold text-xl uppercase">
                {project.name}
              </h2>
            </header>
            <div className="py-2">
              {/* naka map din to */}
              {project.badges?.map((badge, index) => {
                return (
                  <div key={index} className="inline-block pr-1 pb-1">
                    <span className="bg-[#e73c37] py-1 px-3 rounded-2xl font-prompt-semibold text-[10px] text-white tracking-[0.1rem]">
                      {badge}
                    </span>
                  </div>
                );
              })}
            </div>
            <div>
              <div className="h-24">
                <small className="font-prompt-regular leading-[150%] py-2 tracking-wide">
                  {project.description}
                </small>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
