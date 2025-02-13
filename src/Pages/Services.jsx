import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import Navbar from '../Components/Navbar'
import FAQ from '../Components/FAQ'
import ContactCard from '../Components/ContactCard'
import WhyUs from '../Components/WhyUs'
import Team from '../Components/Team'

const Services = () => {
  return (
    <div>
        <Navbar />
        <div className="faq-header text-center my-5">
            <h2 className='fw-bolder'>We Provide Demanding Services</h2>
            <small className="muted">Transforming spaces with our comprehensive construction services.</small>
        </div>
        <ServiceCard />
        <WhyUs />
        <Team />
        <FAQ />
        <ContactCard />
    </div>
  )
}

export default Services