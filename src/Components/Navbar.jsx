// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { RiMenu4Line } from "react-icons/ri";

// const Navbar = () => {

//   return (
//     <div className='main-navbar border-bottom'>
//         <div className="container2">
//             <nav className='d-flex header align-items-center justify-content-between'>
//                 <Link to="/"><h4 className="navbar-brand  fw-bolder">Konstruction.</h4></Link>

//                 <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
//                     <li><Link className='nav-link'  to="/">Home</Link></li>
//                     <li><Link className='nav-link'  to="/services">Services</Link></li>
//                     <li><Link className='nav-link' to="/about">About Us</Link></li>
//                     <li><Link className='nav-link'  to="/contact">Contact</Link></li>
                    
//                     <button className='main-btn'>+(234) 8123499082</button>
                   
//                 </ul>

//                 <RiMenu4Line size={24} className='d-flex d-md-none' />

//             </nav>
//         </div>
//     </div>
//   )
// }

// export default Navbar



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='main-navbar border-bottom  d-md-block' 
         style={{ position: menuOpen ? 'fixed' : 'static', width: '100%', top: 0, zIndex: 1050 }}>
      <div className="container2">
        <nav className='d-flex header align-items-center justify-content-between'>
          <Link to="/">
            <h4 className="navbar-brand fw-bolder">Konstruction.</h4>
          </Link>

          {/* Desktop Menu */}
          <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
            <li><Link className='nav-link' to="/">Home</Link></li>
            <li><Link className='nav-link' to="/services">Services</Link></li>
            <li><Link className='nav-link' to="/about">About Us</Link></li>
            <li><Link className='nav-link' to="/contact">Contact</Link></li>
            <button className='main-btn'>+(234) 8123499082</button>
          </ul>

          {/* Mobile Menu Button */}
          <motion.div 
            className='d-flex d-md-none' 
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <RiCloseLine size={24} /> : <RiMenu4Line size={24} />}
          </motion.div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul 
              initial={{ x: "-100%", opacity: 0 }} 
              animate={{ x: 0, opacity: 1 }} 
              exit={{ x: "-100%", opacity: 0 }} 
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="mobile-menu position-fixed top-0 start-0 vh-100 bg-white shadow p-4 d-flex flex-column gap-4"
              style={{ zIndex: 1100 }}
            >
              <li><Link className='nav-link' to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link className='nav-link' to="/services" onClick={toggleMenu}>Services</Link></li>
              <li><Link className='nav-link' to="/about" onClick={toggleMenu}>About Us</Link></li>
              <li><Link className='nav-link' to="/contact" onClick={toggleMenu}>Contact</Link></li>
              <button className='main-btn' onClick={toggleMenu}>+(234) 8123499082</button>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
