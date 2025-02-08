// import React from 'react'

// const WhyUs = () => {
//   return (
//     <div>
//         <div className="container2">

//             <div className="faq-header text-center my-5">
//                 <h2 className='fw-bolder'>Why Choose Us</h2>
//                 <small className="muted">Comprehensive, expert care for your health needs.</small>
//             </div>

//             <div className="grid1">

//                 <div className="grid-card d-flex flex-column gap-2">
//                     <div className="grid-header d-flex align-items-center gap-3">
//                         <h5>01</h5>
//                         <h6 className="fw-bold">Trusted Quality</h6>
//                     </div>
//                     <div className="grid-content">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, distinctio numquam. Ipsa facilis soluta magnam eum debitis enim deserunt iusto?</small>
//                     </div>
//                 </div>

//                 <div className="grid-card d-flex flex-column gap-2">
//                     <div className="grid-header d-flex align-items-center gap-3">
//                         <h5>01</h5>
//                         <h6 className="fw-bold">Trusted Quality</h6>
//                     </div>
//                     <div className="grid-content">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, distinctio numquam. Ipsa facilis soluta magnam eum debitis enim deserunt iusto?</small>
//                     </div>
//                 </div>

//                 <div className="grid-card d-flex flex-column gap-2">
//                     <div className="grid-header d-flex align-items-center gap-3">
//                         <h5>01</h5>
//                         <h6 className="fw-bold">Trusted Quality</h6>
//                     </div>
//                     <div className="grid-content">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, distinctio numquam. Ipsa facilis soluta magnam eum debitis enim deserunt iusto?</small>
//                     </div>
//                 </div>

//                 <div className="grid-card d-flex flex-column gap-2">
//                     <div className="grid-header d-flex align-items-center gap-3">
//                         <h5>01</h5>
//                         <h6 className="fw-bold">Trusted Quality</h6>
//                     </div>
//                     <div className="grid-content">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, distinctio numquam. Ipsa facilis soluta magnam eum debitis enim deserunt iusto?</small>
//                     </div>
//                 </div>

//                 <div className="grid-card d-flex flex-column gap-2">
//                     <div className="grid-header d-flex align-items-center gap-3">
//                         <h5>01</h5>
//                         <h6 className="fw-bold">Trusted Quality</h6>
//                     </div>
//                     <div className="grid-content">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, distinctio numquam. Ipsa facilis soluta magnam eum debitis enim deserunt iusto?</small>
//                     </div>
//                 </div>

//                 <div className="grid-card d-flex flex-column gap-2">
//                     <div className="grid-header d-flex align-items-center gap-3">
//                         <h5>01</h5>
//                         <h6 className="fw-bold">Trusted Quality</h6>
//                     </div>
//                     <div className="grid-content">
//                         <small className="muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, distinctio numquam. Ipsa facilis soluta magnam eum debitis enim deserunt iusto?</small>
//                     </div>
//                 </div>

//             </div>

//         </div>
//     </div>
//   )
// }

// export default WhyUs

import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyUs = () => {
  const reasons = [
    {
      title: "100% Satisfaction",
      desc: "We prioritize your needs, ensuring complete satisfaction with our services and products.",
      image: "../../Images/review.png"
    },
    {
      title: "The Best Price",
      desc: "We offer competitive pricing without compromising quality, giving you the best value for your investment.",
      image: "../../Images/price-tag.png"
    },
    {
      title: "Premium Quality",
      desc: "Our commitment to excellence guarantees that you receive only the highest quality materials and services.",
      image: "../../Images/quality.png"
    },
    {
      title: "Custom Design",
      desc: "We tailor every project to meet your unique requirements, ensuring a perfect fit for your vision.",
      image: "../../Images/building.png"
    },
    {
      title: "Professional Staff",
      desc: "Our team consists of experienced professionals dedicated to delivering top-notch service with expertise and care.",
      image: "../../Images/costumer.png"
    },
    {
      title: "Unique Solutions",
      desc: "We provide innovative solutions that set your project apart, ensuring efficiency and effectiveness.",
      image: "../../Images/solution.png"
    },
  ];

  return (
    <div className="container2">
      <div className="faq-header text-center my-5">
        <h2 className="fw-bolder">Why Choose Us</h2>
        <small className="muted">
          Comprehensive, expert care for your health needs.
        </small>
      </div>

      <div className="grid1">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            className="grid-card d-flex flex-column gap-2"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid-header d-flex align-items-center gap-3">
              <img src={reason.image} className="why-image" alt="" />
              <h6 className="fw-bold">{reason.title}</h6>
            </div>
            <div className="grid-content">
              <small className="muted">{reason.desc}</small>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
