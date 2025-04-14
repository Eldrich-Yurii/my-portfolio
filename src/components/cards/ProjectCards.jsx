import React from "react";
import TiltCard from "./TiltCard";
import proj1 from "../../assets/pictures/cenro.png";
import proj2 from "../../assets/pictures/Simply_bamboo.png";
import proj3 from "../../assets/pictures/weatheria-fms.png";
import proj4 from "../../assets/pictures/neighbors-chef.png";
import { Link } from "react-router";

export default function ProjectCards() {
  const projects = [
    {
      id: 1,
      name: "cenro business processing system",
      description:
        "A system for San Juan City Business permits processing. Designed in Figma. Built with React.js, tailwind CSS, Node.js, Express and MongoDb.",
      image: proj1,
      link: <Link to="/cenro">See more</Link>,
      alt: "cenro business processing system",
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
        "A landing page for feasibility study in marketing. Designed in Figma and built with React.js, tailwind CSS.",
      image: proj2,
      link: <Link to="/simply-bamboo">See more</Link>,
      alt: "simply bamboo",
      badges: ["Figma", "Tailwind CSS", "React.js"],
    },
    {
      id: 3,
      name: "weatheria",
      description:
        "A system for Marikina City, designed to predict flood using ARIMA model. Built with Html, Bootstrap, JavaScript, Php and MySql.",
      image: proj3,
      link: <Link to="/weatheria">See more</Link>,
      alt: "weatheria",
      badges: ["Html", "Bootstrap", "JavaScript", "Php", "MySql"],
    },
    {
      id: 4,
      name: "neighbor's chef",
      description:
        "A website booking management system for a restaurant. Built with React.js, Tailwind CSS, Node.js, Express.js, Mysql.",
      image: proj4,
      link: <Link to="/neighbors-chef">See more</Link>,
      alt: "neighbor's chef",
      badges: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MySql"],
    },
  ];

  return (
    <>
      {/* card */}
      {projects.map((project) => {
        return (
          <TiltCard
            key={project.id}
            imageSrc={project.image}
            title={project.name}
            description={project.description}
            projectLink={project.link}
            badge={project.badges?.map((badge, index) => {
              return (
                <div key={index} className="inline-block pr-1 pb-1">
                  <span className="bg-[#e73c37] py-1 px-3 rounded-2xl font-prompt-semibold text-[10px] text-white tracking-[0.1rem]">
                    {badge}
                  </span>
                </div>
              );
            })}
            altText={project.alt}
            captionText="Click - See more"
            containerHeight="23rem"
            containerWidth="280px"
            rotateAmplitude={10}
            scaleOnHover={1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
          />
        );
      })}
    </>
  );
}
