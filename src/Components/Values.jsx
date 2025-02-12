import React from "react";
import { LuHeartPulse } from "react-icons/lu";
import { motion } from "framer-motion";

const benefits = [
  {
    id: 1,
    image: "../../Images/worker.png",
    name: " Safety",
    icon: `<LuHeartPulse />`,
    desc: "The safety of our employees and the traveling public is everyone's responsibility. We are committed to the highest standards of safety, constistent with sound construction practices.",
  },
  {
    id: 2,
    image: "../../Images/collaborate.png",
    name: "Integrity",
    icon: "icon-smartphone",
    desc: "Our business conduct will include the highest level of honesty, ethics, and moral correctness.",
  },
  
  {
    id: 3,
    image: "../../Images/united.png",
    name: "Teamwork",
    icon: "icon-smartphone",
    desc: "We work with our clients as a team and mutual respect provides the foundation for our success.",
  },
  
  {
    id: 3,
    image: "../../Images/shake.png",
    name: "Respect",
    icon: "icon-smartphone",
    desc: "Respect is the basic rule of behavior that guides every employee in all of his or her actions: respect for oneself and respect for other employees, customers, third parties, the trade unions, society at large, the Group's principles, laws and regulations, the environment, fairness and ethics in the broadest sense.",
  },
  {
    id: 3,
    image: "../../Images/leadership.png",
    name: "Leadership",
    icon: "icon-smartphone",
    desc: "Each day, every employee is expected to give the best of themselves, to strive constantly for quality and to demonstrate the highest level of professionalism - and to lead by example.",
  },
  {
    id: 3,
    image: "../../Images/transparency.png",
    name: "Transparency",
    icon: "icon-smartphone",
    desc: "Our actions must match our words. Each day we must strive to earn our reputation rather than simply manage it. To that end, we must operate in a manner in which our integrity and values cannot be questioned - that is, we must be authentic.",
  },

  {
    id: 3,
    image: "../../Images/enterpreneurship.png",
    name: "Enterpreneurship",
    icon: "icon-smartphone",
    desc: "Each employee should show initiative and be motivated by a desire to win. to commit, and to succeed.",
  },
 
  {
    id: 3,
    image: "../../Images/clipboard.png",
    name: "Accountability",
    icon: "icon-smartphone",
    desc: "Each individual is fully accountable for his or her decisioris and actions.",
  },
  
 
 
];

const Values = () => {
  return (
    <div className="container2 mt-4">
      <div className="mt-4">

        <motion.div 
                  className="faq-header text-center my-3 my-md-5"
                  initial={{ opacity: 0, y: -30 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.5 }} 
                  viewport={{ once: true }}
                >
                  <h2 className='fw-bolder'>Our Core Values</h2>
                  <small className="muted">Experience maximum quality, ease, and satisfaction in all we provide.</small>
                </motion.div>


        <div className="services-contents grid1 my-5">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              className="service-card2 d-flex flex-column gap-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="p-1">
                    <img src={item.image} className="serv-image" alt="" />
                </div>
                <h6 className="fw-bold">{item.name}</h6>
                <small className="muted">{item.desc}</small>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
