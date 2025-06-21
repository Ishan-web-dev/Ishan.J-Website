import React from 'react'
import WhatIDo from './WhatIDo'
import Banner from '../Banner/Banner'
import Skills from '../Information/Skills'

const Services = () => {
  return (
    <div>
      <Banner heading="What I Do ?" paragraph=" With over a decade of experience in professional photography, we've mastered the art of storytelling through our lens." />
      <WhatIDo />
      <Skills />
    </div>
  )
}

export default Services
