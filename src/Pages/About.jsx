import React from 'react'
import Navbar from '../Components/Navbar'
import ContactCard from '../Components/ContactCard'
import Intro from '../Components/Intro'
import Values from '../Components/Values'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="faq-header text-center my-5">
            <h2 className='fw-bolder'>Building the Future with Strength & Integrity</h2>
            <small className="muted">Your Trusted Partner in Construction Excellence.</small>
        </div>
        <Intro />
        <Values />
        <ContactCard />
    </div>
  )
}

export default About