// import React from 'react'

// const FAQ = () => {
//   return (
//     <div className='my-4'>
//         <div className="container2">
//             <div className="faq-header text-center my-3 my-md-5">
//                 <h2 className='fw-bolder'>FAQ</h2>
//                 <small className="muted">Common Questions, Clear Answers.</small>
//             </div>
//             <div className="faqs grid4 gap-4">
//                 <div className="faq-image d-none d-md-grid">
//                     <img src="../../Images/faq2.jpg" alt="" />
//                 </div>
//                 <div className="faq-items d-flex flex-column gap-3">
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 ">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>
//                     <div className="faq-item">
//                         <div className='question d-flex gap-3 align-items-center text-white'>
//                             <button>+</button>
//                             <p className='fw-bold'>What is Your Name</p>
//                         </div>
//                         <div className="answer p-2 d-none">
//                             <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quibusdam labore necessitatibus dolores voluptatibus ex blanditiis deserunt vitae, commodi tempora?</small>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default FAQ





import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from "react-icons/fi"; 

const faqs = [
    {
      id: 1,
      question: "What services does your construction company offer?",
      answer: "We provide a range of services including residential and commercial building construction, renovations, remodeling, site planning, and project management.",
    },
    {
      id: 2,
      question: "How long does a construction project take?",
      answer: "The timeline depends on the project size, complexity, and permitting process. We provide an estimated timeline after evaluating the project scope.",
    },
    {
      id: 3,
      question: "Do you offer design and architectural services?",
      answer: "Yes, we collaborate with experienced architects and designers to create custom plans that align with your vision and budget.",
    },
    {
      id: 4,
      question: "Are you licensed and insured?",
      answer: "Yes, we are fully licensed and insured, ensuring compliance with all safety regulations and industry standards.",
    },
    {
      id: 5,
      question: "How do I get a quote for my project?",
      answer: "You can contact us through our website or call our office. We will schedule a consultation to discuss your requirements and provide a detailed estimate.",
    },
    {
      id: 6,
      question: "Can I make changes during the construction process?",
      answer: "Yes, modifications can be made, but they may affect the timeline and cost. We will work with you to accommodate changes as efficiently as possible.",
    }
];


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [openFAQ, setOpenFAQ] = useState(null);

  const handleFaqToggle = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <motion.div 
      className='my-4 faqq'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container2">
        {/* Header */}
        <motion.div 
          className="faq-header text-center my-3 my-md-5"
          initial={{ opacity: 0, y: -30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          viewport={{ once: true }}
        >
          <h2 className='fw-bolder'>FAQ</h2>
          <small className="muted">Common Questions, Clear Answers.</small>
        </motion.div>

        {/* FAQ Section */}
        <div className="faqs grid4 align-items-center gap-4">
          
          {/* Image Animation - Comes in from the Left */}
          <motion.div 
            className="faq-image d-none d-md-block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img src="../../Images/faq1.png" alt="FAQ Illustration" />
          </motion.div>

          {/* FAQs Animation - Comes in from the Right */}
          {/* <motion.div 
            className="faq-items d-flex flex-column gap-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div 
                  className='question d-flex gap-3 align-items-center text-white' 
                  onClick={() => toggleFAQ(index)}
                  style={{ cursor: "pointer" }}
                >
                  <button className='faq-toggle-btn'>
                    {openIndex === index ? <FiMinus size={18} /> : <FiPlus size={18} />}
                  </button>
                  <p className='fw-bold'>{faq.question}</p>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      className="answer p-2"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <small className="muted">{faq.answer}</small>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div> */}


<div className="faqs d-flex flex-column ">
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: faq.id * 0.05 }}
            >
              <div className="faq-head d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-3">
                  <div className="num d-none d-md-flex text-white align-items-center justify-content-center">
                    0{faq.id}
                  </div>
                  <p className="fw-bold faq-q">{faq.question}</p>
                </div>
                <motion.button
                  onClick={() => handleFaqToggle(faq.id)}
                  className="faq-btn"
                  whileTap={{ scale: 0.9 }}
                >
                  {openFAQ === faq.id ? "−" : "+"}
                </motion.button>
              </div>

              {/* Smooth Expand/Collapse Animation */}
              <AnimatePresence initial={false}>
                {openFAQ === faq.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="faq-answer"
                  >
                    <small className="muted">{faq.answer}</small>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQ;
