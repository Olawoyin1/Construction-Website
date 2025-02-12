// import React from 'react'
// import { TbHelpSquareFilled } from "react-icons/tb";

// const ContactCard = () => {
//   return (
//     <div className='main-contact-card py-md-5 py-2'>
//         <div className="container2 my-5">
//             <div className="grid gap-3">
//                 <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start p-4  flex-column gap-2">
//                     <div className="contact-card-image rounded-4 p-2 ">
//                         <img src="../../Images/telephone.png" className='why-image' alt="" />
//                     </div>
//                     <h6 className='fw-bold'>Call Us Now</h6>
//                     <small className="muted">+(234)8023449081</small>
//                     <small className="muted">+(234)8023449081</small>
//                 </div>

//                 <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start p-4  flex-column gap-2">
//                     <div className="contact-card-image rounded-4 p-2">
//                         <img src="../../Images/time.png" className='why-image' alt="" />
//                     </div>
//                     <h6 className='fw-bold'>Office Time</h6>
//                     <small className="muted">Mon-Fri: 9:00 am to 6pm</small>
//                     <small className="muted">Sat: 9:00am to 2:00pm</small>
//                 </div>

//                 <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start p-4  flex-column gap-2">
//                     <div className="contact-card-image rounded-4 p-2">
//                         <img src="../../Images/support.png" className='why-image' alt="" />
//                     </div>
//                     <h6 className='fw-bold'>Need Support</h6>
//                     <small className="muted">konstruction@gmail.com</small>
//                     <small className="muted">services@gmail.com</small>
//                 </div>

//                 <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start text-center text-sm-start p-4  flex-column gap-2">
//                     <div className="contact-card-image rounded-4 p-2">
//                         <img src="../../Images/pin.png" className='why-image' alt="" />
//                     </div>
//                     <h6 className='fw-bold'>Our Address</h6>
//                     <small className="muted">No 19, Olarewaju Clement street, Oke Oko Isawo, Ikorodu Lagos State</small>
//                 </div>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default ContactCard

import React from "react";
import { motion } from "framer-motion";
import { TbHelpSquareFilled } from "react-icons/tb";

const ContactCard = () => {
  return (
    <motion.div
      className="main-contact-card py-md-5 py-2"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container2 my-5">
        <div className="grid gap-3">
          {[
            {
              img: "../../Images/telephone.png",
              title: "Call Us Now",
              details: ["+(234)8039364605", "+(234)8024302868"],
            },
            {
              img: "../../Images/time.png",
              title: "Office Time",
              details: ["Mon-Fri: 9:00 am to 6pm", "Sat: 9:00am to 2:00pm"],
            },
            {
              img: "../../Images/support.png",
              title: "Need Support",
              details: ["info@360uniqueconstruction.com", "olawuni7@gmail.com"],
            },
            {
              img: "../../Images/pin.png",
              title: "Our Address",
              details: [
                "12, Church Street, Gbagada, Lagos",
              ],
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="contact-info d-flex justify-content-center align-items-center justify-content-sm-start text-center text-sm-start align-items-sm-start p-4 flex-column gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="contact-card-image rounded-4 p-2">
                <img src={item.img} className="why-image" alt="" />
              </div>
              <h6 className="fw-bold">{item.title}</h6>
              {item.details.map((detail, idx) => (
                <small key={idx} className="muted">
                  {detail}
                </small>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
