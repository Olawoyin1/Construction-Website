// // import React from 'react'
// // import Navbar from './Navbar'

// // const Hero = () => {
// //   return (
// //     <div id='hero'>
// //         <Navbar />
// //         <div className="container2">
// //             <div className="hero-text d-flex flex-column justify-content-center gap-3">
// //                 <h1 className='fw-bolder text-white'>Let Us Plan Your Big <span>Construction</span></h1>
// //                 <small className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam non voluptate esse, ad id quam animi pariatur inventore ratione?</small>
// //                 <div className="actions d-flex gap-3">
// //                     <button className="main-btn">Our Services</button>
// //                     <button className="main-btn">Contact Us</button>
// //                 </div>
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Hero

// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from 'react-router-dom'

// const words = ["Dreams", "Masterpiece", "Ideas", "Space"];

// const Hero = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 4000); // Slower transition (4 seconds per word)

//     return () => clearInterval(interval);
//   }, []);

//   // Parent container animation (slide up + fade in with delay)
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 1,
//         ease: "easeOut",
//         delay: 0.5, // Delay animation for smoother page load
//       },
//     },
//   };

//   // Child stagger animation (applies to elements inside hero-text)
//   const staggerVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//         staggerChildren: 0.3, // Stagger each child element
//       },
//     },
//   };

//   return (
//     <motion.div
//       id="hero"
//     >
//         <div className='main-navbar border-bottom'>
//             <div className="container2">
//                 <nav className='d-flex header align-items-center justify-content-between'>
//                     <Link to="/"><h4 className="navbar-brand  fw-bolder">Konstruction.</h4></Link>

//                     <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
//                         <li><Link className='nav-link text-white'  to="/">Home</Link></li>
//                         <li><Link className='nav-link text-white'  to="/services">Services</Link></li>
//                         <li><Link className='nav-link text-white' to="/about">About Us</Link></li>
//                         <li><Link className='nav-link text-white'  to="/appointment">Contact</Link></li>

//                         <button className='main-btn'>+(234) 8123499082</button>

//                     </ul>

//                 </nav>
//             </div>
//         </div>
//       <div className="container2">

//         <motion.div
//           className="hero-text d-flex flex-column justify-content-center gap-3"
//           variants={staggerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.h1 className="fw-bolder text-white" variants={staggerVariants}>
//             Let Us Build Your Big{" "}
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, y: 30, scale: 0.95 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: -30, scale: 0.95 }}
//                 transition={{ duration: 1, ease: "easeInOut" }}
//                 className="text-warning"
//               >
//                 {words[index]}
//               </motion.span>
//             </AnimatePresence>
//           </motion.h1>

//           <motion.small className="text-white" variants={staggerVariants}>
//             We turn your vision into reality with precision and expertise.
//             Whether it's a modern masterpiece, a commercial hub, or an innovative space,
//             our team ensures quality craftsmanship from planning to completion.
//           </motion.small>

//           <motion.div className="actions d-flex gap-3" variants={staggerVariants}>
//             <button className="main-btn">Our Services</button>
//             <button className="main-btn">Contact Us</button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu4Line, RiCloseLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";

const words = ["Dreams", "Masterpiece", "Ideas", "Space"];

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 100 : 200; // Typing and deleting speed

  useEffect(() => {
    const currentWord = words[index];
    const updateText = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000); // Hold full text before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length); // Move to next word
      }
    };

    const typingTimer = setTimeout(updateText, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, isDeleting, index]);

  // Slide-in animation for hero-text with delay
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  // Stagger children animation for a smooth entrance effect
  const staggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  return (
    <motion.div id="hero">
      {/* Navbar */}
      <div
        className="main-navbar border-bottom  d-md-block"
        style={{
          position: menuOpen ? "fixed" : "static",
          top: 0,
          width: "100%",
          zIndex: 1050,
        }}
      >
        <div className="container2">
          <nav className="d-flex header align-items-center justify-content-between">
            <Link to="/">
              <h4 className="navbar-brand fw-bolder">Konstruction.</h4>
            </Link>

            {/* Desktop Menu */}
            <ul className="p-0 d-none d-md-flex gap-4 align-items-center">
              <li>
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-link text-white" to="/contact">
                  Contact
                </Link>
              </li>
              <button className="main-btn">+(234) 8123499082</button>
            </ul>

            {/* Mobile Menu Button */}
            <motion.div
              className="d-flex d-md-none"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              {menuOpen ? <RiCloseLine size={24} color="#ffffff" /> : <RiMenu4Line size={24} color="#ffffff" />}
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
                className="mobile-menu d-flex flex-column gap-3  vh-100 py-4  p-4"
                style={{ zIndex: 1100 }}
              >
                <li className="mt-5">
                  <Link
                    className="nav-link text-white py-2"
                    to="/"
                    onClick={toggleMenu}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link text-white py-2"
                    to="/services"
                    onClick={toggleMenu}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link text-white py-2"
                    to="/about"
                    onClick={toggleMenu}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="nav-link text-white py-2"
                    to="/contact"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </li>

                <ul className="p-0  mt-2 mt-sm-4 d-flex  justify-content-sm-start align-items-sm-start flex-column gap-3 ">
                  <h6 className="fw-bold">Konstruction.</h6>
                  <small className=" text-sm-start">
                    Get the care you deserve with our reliable, professional,
                    and patient-focused healthcare services.
                  </small>
                  <div className="socials  d-flex align-items-center gap-3">
                    <FaXTwitter className="muted" size={20} />
                    <FaLinkedinIn className="muted" size={20} />
                    <GrInstagram className="muted" size={20} />
                    <FaFacebookF className="muted" size={20} />
                  </div>
                </ul>
                <button className="main-btn mt-2" onClick={toggleMenu}>
                  +(234) 8123499082
                </button>

                <motion.div
                  className="mobile-menu-icon"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  {menuOpen ? (
                    <RiCloseLine size={24} />
                  ) : (
                    <RiMenu4Line size={24} />
                  )}
                </motion.div>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Hero Section */}
      <div className="container2">
        <motion.div
          className="hero-text d-flex flex-column justify-content-center gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Animated heading with typewriter effect */}
          <motion.h1
            className="fw-bolder text-white"
            variants={staggerVariants}
          >
            Let Us Build Your Big <span className="text-warning">{text}</span>
          </motion.h1>

          {/* Description */}
          <motion.small className="text-white" variants={staggerVariants}>
            Transforming blueprints into reality with precision and expertise.
            Whether it's a luxury home, a modern masterpiece, or a commercial
            landmark, we bring your vision to life with cutting-edge technology
            and craftsmanship.
          </motion.small>

          {/* Buttons */}
          <motion.div
            className="actions d-flex gap-3"
            variants={staggerVariants}
          >
            <button className="main-btn">Our Services</button>
            <button className="main-btn">Contact Us</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
