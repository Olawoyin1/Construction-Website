// import React from 'react'

// const Card = () => {
//   return (
//     <div className='my-4'>
//         <div className="container2">
//             <div className="trial p-md-5 p-3 d-flex align-items-center  gap-3 flex-column flex-md-row justify-content-center justify-content-md-between">
//                 <div className="card-text d-flex gap-3 flex-column left text-center text-md-start">
//                     <h4 className='fw-bold'>Get in Touch for Expert Healthcare</h4>
//                     <small className="muted ">Contact us for expert medical support, advanced treatments, and a compassionate approach to your well-being.</small>
//                 </div>
//                 <button className="main-btn"><span>Contact Us</span></button>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Card




import React from 'react'
import { motion } from 'framer-motion'

const Card = () => {
  // Animation for the card container (fade in and slide up)
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  }

  // Animation for the button (bounce effect)
  const bounceButton = {
    hidden: { scale: 0.9 },
    visible: { 
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeInOut", 
        yoyo: Infinity // This makes it bounce continuously
      }
    }
  }

  return (
    <div className='my-4 card-bg'>
      <div className="container2 ">
        <motion.div
          className="trial p-md-5 p-4 d-flex align-items-center gap-3 flex-column  justify-content-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp} // Apply the fade-up animation to the entire container
        >
          {/* Card Text */}
          <div className="card-text d-flex gap-5 flex-column  text-center text-md-start">
            <motion.h4 className='fw-bold mb-4 text-center text-uppercase' variants={fadeUp}>
              WE UNDERSTAND THE VALUE OF YOUR DREAM AND WE PROMISE TO GIVE YOU THE BEST ONE
            </motion.h4>
          </div>

          {/* Button with bounce effect */}
          <motion.button 
            className="main-btn"
            variants={bounceButton} // Apply bounce animation to the button
          >
            <span>Contact Us</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default Card
