import React from 'react'
import WhyUs from '../Components/WhyUs'
import Card from '../Components/Card'
import FAQ from '../Components/FAQ'

import Trusted from '../Components/Trusted'
import Hero from '../Components/Hero'
import ContactCard from '../Components/ContactCard'
import Intro from '../Components/Intro'

const Home = () => {
  return (
    <div>
        <Hero />
        <Intro />
        <Trusted />
        <WhyUs />
        <Card />
        <FAQ />
        <ContactCard />
    </div>
  )
}

export default Home