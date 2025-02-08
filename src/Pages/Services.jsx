import React from 'react'
import ServiceCard from '../Components/ServiceCard'

const Services = () => {
  return (
    <div>
        <div className="faq-header text-center my-5">
            <h2 className='fw-bolder'>We Provide Demanding Services</h2>
            <small className="muted">Comprehensive, expert care for your health needs.</small>
        </div>
        <ServiceCard />
    </div>
  )
}

export default Services