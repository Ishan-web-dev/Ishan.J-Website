import React from 'react'
import AboutSec from './AboutSec'
import AboutMe from './AboutMe'
import Skills from '../Information/Skills';
import Banner from "../Banner/Banner";

const About = () => {
  return (
    <div>
      <Banner heading="About Me" paragraph=" With over a decade of experience in professional photography, we've mastered the art of storytelling through our lens." />
      <AboutSec/>
      <AboutMe />
      <Skills />
    </div>
  )
}

export default About
