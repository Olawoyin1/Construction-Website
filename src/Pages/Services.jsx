import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import Navbar from '../Components/Navbar'
import FAQ from '../Components/FAQ'
import ContactCard from '../Components/ContactCard'

const Services = () => {
  return (
    <div>
        <Navbar />
        <div className="faq-header text-center my-5">
            <h2 className='fw-bolder'>We Provide Demanding Services</h2>
            <small className="muted">Comprehensive, expert care for your health needs.</small>
        </div>
        <ServiceCard />
        <FAQ />
        <ContactCard />
    </div>
  )
}

export default Services