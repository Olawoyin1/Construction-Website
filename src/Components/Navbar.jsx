import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [color, setColor] = useState(true)
  return (
    <div className='main-navbar border-bottom'>
        <div className="container2">
            <nav className='d-flex header align-items-center justify-content-between'>
                <Link to="/"><h4 className="navbar-brand text-white fw-bolder">Konstruction.</h4></Link>

                <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
                    <li><Link className='nav-link' onClick={()=>setColor(true)} to="/">Home</Link></li>
                    <li><Link className='nav-link' onClick={()=>setColor(false)} to="/services">Services</Link></li>
                    <li><Link className='nav-link' onClick={()=>setColor(false)} to="/about">About Us</Link></li>
                    <li><Link className='nav-link' onClick={()=>setColor(false)} to="/appointment">Contact</Link></li>
                    
                    <button className='main-btn'>+(234) 8123499082</button>
                   
                </ul>

            </nav>
        </div>
    </div>
  )
}

export default Navbar