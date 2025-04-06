import HeroSec from '../../components/hero/HeroSec'
import Nav from '../../components/navbar/Nav'
import About from '../../components/about/About'
import Skills from '../../components/skills/Skills'
import Projects from '../../components/projects/Projects'
import Contact from '../../components/contact/Contact'
import Footer from '../../components/footer/Footer'
import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <HeroSec />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}


