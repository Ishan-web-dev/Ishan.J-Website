import React from 'react'
import Hero from './Hero/Hero'
import AboutMe from '../Pages/About/AboutMe';
import Skills from "../Pages/Information/Skills";
import Gride from '../Pages/Grides/Gride';
import Services from '../Pages/Services/WhatIDo';

const Head = () => {
  return (
    <div>
      <Hero /> 
      <AboutMe />
      <Skills />
      <Services />
    </div>
  )
}

export default Head
