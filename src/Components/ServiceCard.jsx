import React from "react";
import { motion } from "framer-motion";
const services = [
    {
      id: 1,
      image: "../../Images/services3.jpg",
      name: "Interior Design",
      icon: `<LuPaintBucket />`, 
      desc: "We transform spaces into aesthetically pleasing and functional environments with expert interior design solutions tailored to your style and needs.",
    },
    {
      id: 2,
      image: "../../Images/services2.jpg",
      name: "Tiling & Painting",
      icon: `<LuBrush />`, 
      desc: "Our professional tiling and painting services enhance the beauty and durability of your walls and floors with high-quality materials and finishes.",
    },
    {
      id: 3,
      image: "../../Images/services1.jpg",
      name: "Architecture Service",
      icon: `<LuBuilding />`, 
      desc: "From concept to blueprint, our architectural services ensure innovative, sustainable, and structurally sound designs for all types of buildings.",
    },
    {
      id: 4,
      image: "../../Images/services4.jpg",
      name: "Construction Management",
      icon: `<LuBriefcase />`, 
      desc: "We oversee every aspect of your construction project, ensuring timely completion, cost control, and adherence to quality standards.",
    },
    {
      id: 5,
      image: "../../Images/service1.jpg",
      name: "Design Build Contract",
      icon: `<LuHammer />`, 
      desc: "Our design-build approach streamlines the construction process by integrating design and execution under a single contract for efficiency and accountability.",
    },
    {
      id: 6,
      image: "../../Images/services2.jpg",
      name: "Project Planning",
      icon: `<LuClipboardList />`, 
      desc: "We provide detailed project planning services, ensuring that every phase of construction is strategically mapped out for efficiency and success.",
    },
    {
      id: 7,
      image: "../../Images/services1.jpg",
      name: "Budget Planning",
      icon: `<LuDollarSign />`, 
      desc: "Our budget planning services help you manage costs effectively while ensuring quality construction without unexpected expenses.",
    },
    {
      id: 8,
      image: "../../Images/services4.jpg",
      name: "Site Preparation",
      icon: `<LuMountain />`, 
      desc: "We handle land clearing, excavation, and site preparation to create a solid foundation for construction projects of all scales.",
    },
    {
      id: 9,
      image: "../../Images/services3.jpg",
      name: "Structural Engineering",
      icon: `<LuRuler />`, 
      desc: "Our structural engineering expertise ensures that your building is safe, durable, and capable of withstanding environmental factors and load requirements.",
    },
];

  
  

const ServiceCard = () => {
  return (
    <div className="container2 mt-4">
      <div className="mt-4">

        <div className="services-contents grid2 my-5">
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              className="service-card d-flex flex-column"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
                <div className="service-card-image">
                    <img src={item.image}  alt="" />
                    {/* <img src="../../Images/service1.jpg" alt="" /> */}
                </div>
                <div className="grid2-content p-3 d-flex flex-column gap-2">
                    <h6 className="fw-bold">{item.name}</h6>
                    <small className="muted">{item.desc}</small>
                </div>
              
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
