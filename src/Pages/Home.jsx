import React from 'react'
import WhyUs from '../Components/WhyUs'
import Card from '../Components/Card'
import FAQ from '../Components/FAQ'
import ServiceCard from '../Components/ServiceCard'
import Trusted from '../Components/Trusted'
import Hero from '../Components/Hero'

const Home = () => {
  return (
    <div>
        <Hero />
        <Trusted />
        <WhyUs />
        <Card />
        <FAQ />
    </div>
  )
}

export default Home