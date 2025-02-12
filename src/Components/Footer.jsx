// import React from 'react'
// import { Link } from 'react-router-dom'
// import { FaXTwitter } from "react-icons/fa6";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { GrInstagram } from "react-icons/gr";
// import { FaFacebookF } from "react-icons/fa6";
// import { TbArrowBadgeRightFilled } from "react-icons/tb";
// import { FaPhone } from "react-icons/fa6";

// const Footer = () => {
//   return (
//     <div className='py-2 footer pb-5 m-0'>
//         <div className="container2">
//             <div className="grid flex-wrap">

//                 <ul className='p-0  mt-5 mt-sm-4 d-flex  justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 '>
//                     <h6 className='fw-bold'>Konstruction.</h6>
//                     <small className='text-center text-sm-start'>Get the care you deserve with our reliable, professional, and patient-focused healthcare services.</small>
//                     <div className="socials d-flex align-items-center gap-3">
//                         <FaXTwitter className='muted' size={20}/>
//                         <FaLinkedinIn className='muted' size={20}/>
//                         <GrInstagram className='muted' size={20}/>
//                         <FaFacebookF className='muted' size={20}/>
//                     </div>
//                 </ul>


//                 {/* <ul className='p-0 mt-5 mt-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 text-center'>
//                     <h6 className='fw-bold'>Quick Links</h6>
//                     <li><Link className='nav-link' to='/'>Home</Link></li>                    
//                     <li><Link className='nav-link' to='/about'>About Us</Link></li>                    
//                     <li><Link className='nav-link' to='/services'>Services</Link></li>                    
//                     <li><Link className='nav-link' to='/appointment'>Contact</Link></li>                    
//                 </ul> */}


//                 <ul className='p-0 mt-5 mt-sm-4 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3  text-center text-sm-start'>
//                     <h6 className='fw-bold'>Services</h6>
//                     <li className='d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
//                     <TbArrowBadgeRightFilled />
//                         <small>Interior Design</small>
//                     </li>                  
//                     <li className='d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
//                     <TbArrowBadgeRightFilled />
//                         <small>Budget Planning</small>
//                     </li>                    
//                     <li className='d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start align-items-center gap-2'>
//                     <TbArrowBadgeRightFilled />
//                         <small>Construction Management</small>
//                     </li>                    
//                     <li className='d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
//                     <TbArrowBadgeRightFilled />
//                         <small>Architecture Services</small>
//                     </li>                                       
//                     <li className='d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
//                     <TbArrowBadgeRightFilled />
//                         <small>Tiling & Painting</small>
//                     </li>                                       
//                     <li className='d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
//                     <TbArrowBadgeRightFilled />   
//                         <small>Project Planning</small>
//                     </li>                                       
//                 </ul>


//                 <ul className='p-0 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 text-center text-sm-start mt-5 mt-sm-4'>
//                     <h6 className='fw-bold'>Quick Contact</h6>
//                     <small>If you have any question or need help, feel free to contact our team</small>                   
//                     <h5 className='fw-bolder'> <FaPhone />+(234) 8123443332</h5> 
//                     <small>No 19, Olarewaju Clement street, Oke Oko Isawo, Ikorodu Lagos State</small>                
//                 </ul>


//                 <ul className='p-0 d-flex align-items-center justify-content-center justify-content-sm-start align-items-sm-start flex-column gap-3 text-center text-sm-start mt-5 mt-sm-4'>
//                     <h6 className='fw-bold'>Subscribe To Our Newsletter</h6>
//                     <small>Stay updated and always be in the know with the latest news and health tips.</small>                   
//                     <form action="" className='d-flex footer-form'>
//                         <input type="text" placeholder='Your Email..' />
//                         <button className='main-btn'><span>Subscribe</span></button>
//                     </form>                  
//                 </ul>

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Footer





import React from 'react'
import { Link } from 'react-router-dom'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa6";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='py-2 footer text-white pb-5 m-0'>
        <div className="container2">
            <div className="grid flex-wrap">

                <ul className='p-0  mt-5 mt-sm-4 d-flex  justify-content-sm-start align-items-sm-start flex-column gap-3 '>
                    <img src="../../Images/logo.png" className="logo" alt="" />
                    <small className=' text-sm-start'>Get the care you deserve with our reliable, professional, and patient-focused healthcare services.</small>
                    <div className="socials  d-flex align-items-center gap-3">
                        <FaXTwitter className='muted' size={20}/>
                        <FaLinkedinIn className='muted' size={20}/>
                        <GrInstagram className='muted' size={20}/>
                        <FaFacebookF className='muted' size={20}/>
                    </div>
                </ul>


                


                <ul className='p-0 mt-5 mt-sm-4 d-flex  justify-content-sm-start align-items-sm-start flex-column gap-3  text-sm-start'>
                    <h6 className='fw-bold'>Services</h6>
                    <li className='d-flex align-items-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
                    <TbArrowBadgeRightFilled />
                        <small>Construction Administration</small>
                    </li>                  
                    <li className='d-flex align-items-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
                    <TbArrowBadgeRightFilled />
                        <small>Budget Planning</small>
                    </li>                    
                    <li className='d-flex align-items-center justify-content-sm-start align-items-sm-start align-items-center gap-2'>
                    <TbArrowBadgeRightFilled />
                        <small>Project Management</small>
                    </li>                    
                    <li className='d-flex align-items-center justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
                    <TbArrowBadgeRightFilled />
                        <small>Architecture Services</small>
                    </li>                                       
                    <li className='d-flex align-items-center  justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
                    <TbArrowBadgeRightFilled />
                        <small>Facility Management</small>
                    </li>                                       
                    <li className='d-flex align-items-center  justify-content-sm-start align-items-sm-start  align-items-center gap-2'>
                    <TbArrowBadgeRightFilled />   
                        <small>Master Planning</small>
                    </li>                                       
                </ul>


                <ul className='p-0 d-flex   justify-content-sm-start align-items-sm-start flex-column gap-3  text-sm-start mt-5 mt-sm-4'>
                    <h6 className='fw-bold'>Quick Contact</h6>
                    <small>If you have any question or need help, feel free to contact our team</small>                   
                    <h5 className='fw-bolder'> <FaPhone />+(234) 8039364605</h5> 
                    <small>12, Church Street, Gbagada, Lagos</small>                
                </ul>


                <ul className='p-0 d-flex  justify-content-sm-start align-items-sm-start flex-column gap-3  text-sm-start mt-5 mt-sm-4'>
                    <h6 className='fw-bold'>Subscribe To Our Newsletter</h6>
                    <small>Stay updated and always be in the know with the latest news and health tips.</small>                   
                    <form action="" className='d-flex footer-form'>
                        <input type="text" placeholder='Your Email..' />
                        <button className='main-btn'><span>Subscribe</span></button>
                    </form>                  
                </ul>

            </div>
        </div>
    </div>
  )
}

export default Footer