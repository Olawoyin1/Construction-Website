import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RiMenu4Line } from "react-icons/ri";

const Navbar = () => {

  return (
    <div className='main-navbar border-bottom'>
        <div className="container2">
            <nav className='d-flex header align-items-center justify-content-between'>
                <Link to="/"><h4 className="navbar-brand  fw-bolder">Konstruction.</h4></Link>

                <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
                    <li><Link className='nav-link'  to="/">Home</Link></li>
                    <li><Link className='nav-link'  to="/services">Services</Link></li>
                    <li><Link className='nav-link' to="/about">About Us</Link></li>
                    <li><Link className='nav-link'  to="/contact">Contact</Link></li>
                    
                    <button className='main-btn'>+(234) 8123499082</button>
                   
                </ul>

                <RiMenu4Line size={24} className='d-flex d-md-none' />

            </nav>
        </div>
    </div>
  )
}

export default Navbar