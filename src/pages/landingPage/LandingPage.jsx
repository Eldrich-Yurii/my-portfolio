import HeroSec from '../../layout/hero/HeroSec'
import Nav from '../../components/navbar/Nav'
import About from '../../layout/about/About'
import Skills from '../../layout/skills/Skills'
import Projects from '../../layout/projects/Projects'
import Education from '../../layout/education/Education'
import Contact from '../../layout/contact/Contact'
import Footer from '../../layout/footer/Footer'
import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <HeroSec />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}


