import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id='hero'>
        <Navbar />
        <div className="container2">
            <div className="hero-text d-flex flex-column justify-content-center gap-3">
                <h1 className='fw-bolder text-white'>Let Us Plan Your Big <span>Construction</span></h1>
                <small className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam non voluptate esse, ad id quam animi pariatur inventore ratione?</small>
                <div className="actions d-flex gap-3">
                    <button className="main-btn">Our Services</button>
                    <button className="main-btn">Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero