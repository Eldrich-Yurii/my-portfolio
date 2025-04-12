import HeroSec from "../../layout/hero/HeroSec";
import About from "../../layout/about/About";
import Skills from "../../layout/skills/Skills";
import Projects from "../../layout/projects/Projects";
import Education from "../../layout/education/Education";
import Contact from "../../layout/contact/Contact";
import Footer from "../../layout/footer/Footer";
import React from "react";
import FadeContent from "../../animation/FadeContent";

export default function LandingPage() {
  return (
    <div>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <HeroSec />
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <About />
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Skills />
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Projects />
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Education />
      </FadeContent>
      <FadeContent
        blur={true}
        duration={1000}
        easing="ease-out"
        initialOpacity={0}
      >
        <Contact />
      </FadeContent>
      <Footer />
    </div>
  );
}
