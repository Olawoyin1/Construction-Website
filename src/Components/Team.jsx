import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";



const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Team = ({ data, search, header, title, liked, setLiked }) => {
  const slider = React.useRef(null);

  const [display, setDisplay] = useState(true);
  const [width, setWidth] = useState(600);

  const settings = {
    dots: true,
    infinite: true,
    nextArrow: false,
    prevArrow: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const developers = [
    {
      id: "1",
      name: "Abayomi Awofungase",
      image: "../../Images/team.jpg",
      stack: "Architect",
    },
    
    {
      id: "2",
      name: "Atukale H. Adijun",
      image: "../../Images/team.jpg",
      stack: "Structural Engineer",
    },
    {
      id: "2",
      name: "Olawuni N. Oladayo",
      image: "../../Images/team.jpg",
      stack: "Civil Engineer",
    },
    {
        id: "2",
        name: "Balogun L. Oladipo",
        image: "../../Images/team.jpg",
        stack: "Structural Engineer",
      },
      {
        id: "2",
        name: "Ajibade A. Adeyemo",
        image: "../../Images/team.jpg",
        stack: "Architect",
      },
      {
          id: "2",
          name: "Akinade K. Omolade ",
          image: "../../Images/team.jpg",
          stack: "Structural Engineer",
      },
    {
      id: "2",
      name: "Tijani I. Mayowa",
      image: "../../Images/team.jpg",
      stack: "Builder (Construction Management & Technology)",
    },
    {
      id: "2",
      name: "Aliu Badmus",
      image: "../../Images/team.jpg",
      stack: "Builder (Construction Management & Technology)",
    },
    
      
  ];

  return (
    <div className="my-4 testimonials py-4">
      <div className="container2">
        <h3 className="text-center fw-bold">Meet Our Team</h3>
        <p className="lead text-center">Experienced builders dedicated to quality and innovation.</p>
        <div className="all-items mt-3">
          <div className="slider-container mt-5">
            <div>
              <Slider className="sliderr" ref={slider} {...settings}>
                
                  {developers.map((dev) => (
                    <motion.div className="item" key={dev.id} variants={fadeUp}>
                      <div className="coloured">
                        <div className="member-image d-flex align-items-center justify-content-center">
                          <img src={dev.image} alt={dev.name} />
                        </div>
                      </div>
                      <div className="item-details bg-white d-flex align-items-center justify-content-center flex-column gap-2 p-3 mt-5">
                        <p className="fw-bold m-0">{dev.name}</p>
                        <small className="muted text-center">{dev.stack}</small>
                      </div>
                    </motion.div>
                  ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
