// import React from 'react'
// import Navbar from './Navbar'

// const Hero = () => {
//   return (
//     <div id='hero'>
//         <Navbar />
//         <div className="container2">
//             <div className="hero-text d-flex flex-column justify-content-center gap-3">
//                 <h1 className='fw-bolder text-white'>Let Us Plan Your Big <span>Construction</span></h1>
//                 <small className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam non voluptate esse, ad id quam animi pariatur inventore ratione?</small>
//                 <div className="actions d-flex gap-3">
//                     <button className="main-btn">Our Services</button>
//                     <button className="main-btn">Contact Us</button>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Hero



import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const words = ["Dreams", "Masterpiece", "Ideas", "Space"];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000); // Slower transition (4 seconds per word)

    return () => clearInterval(interval);
  }, []);

  // Parent container animation (slide up + fade in with delay)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5, // Delay animation for smoother page load
      },
    },
  };

  // Child stagger animation (applies to elements inside hero-text)
  const staggerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.3, // Stagger each child element
      },
    },
  };

  return (
    <motion.div
      id="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        <Navbar />
      <div className="container2">
        <motion.div
          className="hero-text d-flex flex-column justify-content-center gap-3"
          variants={staggerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="fw-bolder text-white" variants={staggerVariants}>
            Let Us Build Your Big{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-warning"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.small className="text-white" variants={staggerVariants}>
            We turn your vision into reality with precision and expertise. 
            Whether it's a modern masterpiece, a commercial hub, or an innovative space, 
            our team ensures quality craftsmanship from planning to completion.
          </motion.small>

          <motion.div className="actions d-flex gap-3" variants={staggerVariants}>
            <button className="main-btn">Our Services</button>
            <button className="main-btn">Contact Us</button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
