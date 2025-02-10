// import React from 'react'
// import { MdOutlineDoubleArrow } from "react-icons/md";


// const Trusted = () => {
//   return (
//     <div className=''>
//         <div className="container2">
//             <div className="faq-header text-center my-5">
//                 <h2 className='fw-bolder'>Your Trusted Construction Agent</h2>
//                 <small className="muted">Comprehensive, expert care for your health needs.</small>
//             </div>
//             <div className="trusted-grid my-3">
//                 <div className="trusted-grid2">
//                     <div className="trusted-cards p-3 d-flex flex-column gap-2">
//                         <img src="../../Images/customer-experience.png" className='why-image' alt="" />
//                         <h3 className='fw-bolder'>10K+</h3>
//                         <h6 className='fw-bold'>Satisfied Customers</h6>
//                     </div>
//                     <div className="trusted-cards p-3 d-flex flex-column gap-2">
//                         <img src="../../Images/working-hours.png" className='why-image' alt="" />
//                         <h3 className='fw-bolder'>12+</h3>
//                         <h6 className='fw-bold'>Years Of Expertise</h6>
//                     </div>
//                     <div className="trusted-cards p-3 d-flex flex-column gap-2">
//                         <img src="../../Images/completed-task.png" className='why-image' alt="" />
//                         <h3 className='fw-bolder'>200+</h3>
//                         <h6 className='fw-bold'>Project Done</h6>
//                     </div>
//                     <div className="trusted-cards p-3 d-flex flex-column gap-2">
//                         <img src="../../Images/trophy.png" className='why-image' alt="" />
//                         <h3 className='fw-bolder'>10+</h3>
//                         <h6 className='fw-bold'>Awards</h6>
//                     </div>
//                 </div>
//                 <div className="trusted d-flex flex-column gap-3 p-3">
//                     <h6 className='fw-bold'>Start Building Now</h6>
//                     <small className="muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut incidunt saepe quos similique rerum quam porro quia nemo repellendus </small>
                    
//                     <h6 className='fw-bold'>Our Process</h6>
//                     <div className='grid4 gap-3'>
//                         <div className="d-flex gap-1">
//                             <MdOutlineDoubleArrow />
//                             <div>
//                                 <p className='fw-bold'>Planning</p>
//                                 <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
//                             </div>
//                         </div>
//                         <div className="d-flex gap-1">
//                             <MdOutlineDoubleArrow />
//                             <div>
//                                 <p className='fw-bold'>Design</p>
//                                 <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
//                             </div>
//                         </div>
//                         <div className="d-flex gap-1">
//                             <MdOutlineDoubleArrow />
//                             <div>
//                                 <p className='fw-bold'>Implement</p>
//                                 <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
//                             </div>
//                         </div>
//                         <div className="d-flex gap-1">
//                             <MdOutlineDoubleArrow />
//                             <div>
//                                 <p className='fw-bold'>Hand Over</p>
//                                 <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
//                             </div>
//                         </div>
                       
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Trusted






// import React from 'react';
// import { MdOutlineDoubleArrow } from "react-icons/md";
// import { motion } from "framer-motion";

// const Trusted = () => {
//   return (
//     <motion.div 
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut" }}
//       viewport={{ once: true }}
//     >
//       <div className="container2">
//         <div className="faq-header text-center my-5">
//           <h2 className='fw-bolder'>Your Trusted Construction Agent</h2>
//           <small className="muted">Building trust through quality construction and exceptional service.</small>
//         </div>
//         <div className="trusted-grid my-3">
//           <div className="trusted-grid2">
//             <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
//               <img src="../../Images/customer-experience.png" className='why-image' alt="" />
//               <h3 className='fw-bolder'>10K+</h3>
//               <h6 className='fw-bold'>Satisfied Customers</h6>
//             </div>
//             <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
//               <img src="../../Images/working-hours.png" className='why-image' alt="" />
//               <h3 className='fw-bolder'>12+</h3>
//               <h6 className='fw-bold'>Years Of Expertise</h6>
//             </div>
//             <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
//               <img src="../../Images/completed-task.png" className='why-image' alt="" />
//               <h3 className='fw-bolder'>200+</h3>
//               <h6 className='fw-bold'>Project Done</h6>
//             </div>
//             <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
//               <img src="../../Images/trophy.png" className='why-image' alt="" />
//               <h3 className='fw-bolder'>10+</h3>
//               <h6 className='fw-bold'>Awards</h6>
//             </div>
//           </div>
//           <div className="trusted d-flex flex-column gap-3 p-3">
//             <h6 className='fw-bold'>Start Building Now</h6>
//             <small className="muted">Ready to bring your dream project to life? We provide expert construction services that ensure quality, efficiency, and excellence in every step.</small>
            
//             <h6 className='fw-bold'>Our Process</h6>
//             <div className='grid4 gap-3'>
//               {['Planning', 'Design', 'Implement', 'Hand Over'].map((step, index) => (
//                 <motion.div 
//                   key={index} 
//                   initial={{ opacity: 0, x: -20 }} 
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.5, delay: index * 0.2 }}
//                   viewport={{ once: true }}
//                   className="d-flex gap-1"
//                 >
//                   <MdOutlineDoubleArrow />
//                   <div>
//                     <p className='fw-bold'>{step}</p>
//                     <small className="muted">We ensure a structured approach to {step.toLowerCase()} that guarantees success.</small>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default Trusted;






import React, { useEffect, useState } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { motion, useSpring } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useMotionValue, useTransform } from "framer-motion";

const Counter = ({ value }) => {
    const { ref, inView } = useInView({ triggerOnce: true });
    const [count, setCount] = useState(0);
  
    const springValue = useSpring(0, {
      stiffness: 50,
      damping: 10,
    });
  
    useEffect(() => {
      if (inView) {
        setTimeout(() => {
          springValue.set(value);
        }, 1200); // 1.2 seconds delay before animation starts
      }
    }, [inView, springValue, value]);
  
    useEffect(() => {
      return springValue.onChange((latest) => {
        setCount(Math.round(latest));
      });
    }, [springValue]);
  
    return (
      <motion.h3 ref={ref} className="fw-bolder">
        {count}+
      </motion.h3>
    );
  };





const Trusted = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container2">
        <div className="faq-header text-center my-5">
          <h2 className="fw-bolder">Your Trusted Construction Agent</h2>
          <small className="muted">
            Building trust through quality construction and exceptional service.
          </small>
        </div>
        <div className="trusted-grid my-3">
          <div className="trusted-grid2">
            <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
              <img src="../../Images/customer-experience.png" className="why-image" alt="" />
              <Counter value={1000} />
              <h6 className="fw-bold">Satisfied Customers</h6>
            </div>
            <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
              <img src="../../Images/working-hours.png" className="why-image" alt="" />
              <Counter value={12} />
              <h6 className="fw-bold">Years Of Expertise</h6>
            </div>
            <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
              <img src="../../Images/completed-task.png" className="why-image" alt="" />
              <Counter value={200} />
              <h6 className="fw-bold">Projects Done</h6>
            </div>
            <div className="trusted-cards p-3 d-flex flex-column justify-content-between gap-2">
              <img src="../../Images/trophy.png" className="why-image" alt="" />
              <Counter value={10} />
              <h6 className="fw-bold">Awards</h6>
            </div>
          </div>
          <div className="trusted d-flex flex-column gap-3 p-3">
            <h6 className="fw-bold">Start Building Now</h6>
            <small className="muted">
              Ready to bring your dream project to life? We provide expert construction services
              that ensure quality, efficiency, and excellence in every step.
            </small>

            <h6 className="fw-bold">Our Process</h6>
            <div className="grid4 gap-3">
              {["Planning", "Design", "Implement", "Hand Over"].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="d-flex gap-1"
                >
                  <MdOutlineDoubleArrow />
                  <div>
                    <p className="fw-bold">{step}</p>
                    <small className="muted">
                      We ensure a structured approach to {step.toLowerCase()} that guarantees
                      success.
                    </small>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Trusted;
