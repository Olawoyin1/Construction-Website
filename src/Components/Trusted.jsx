import React from 'react'
import { MdOutlineDoubleArrow } from "react-icons/md";


const Trusted = () => {
  return (
    <div className=''>
        <div className="container2">
            <div className="faq-header text-center my-5">
                <h2 className='fw-bolder'>Your Trusted Construction Agent</h2>
                <small className="muted">Comprehensive, expert care for your health needs.</small>
            </div>
            <div className="trusted-grid my-3">
                <div className="trusted-grid2">
                    <div className="trusted-cards p-3 d-flex flex-column gap-2">
                        <img src="../../Images/customer-experience.png" className='why-image' alt="" />
                        <h3 className='fw-bolder'>10K+</h3>
                        <h6 className='fw-bold'>Satisfied Customers</h6>
                    </div>
                    <div className="trusted-cards p-3 d-flex flex-column gap-2">
                        <img src="../../Images/working-hours.png" className='why-image' alt="" />
                        <h3 className='fw-bolder'>12+</h3>
                        <h6 className='fw-bold'>Years Of Expertise</h6>
                    </div>
                    <div className="trusted-cards p-3 d-flex flex-column gap-2">
                        <img src="../../Images/completed-task.png" className='why-image' alt="" />
                        <h3 className='fw-bolder'>200+</h3>
                        <h6 className='fw-bold'>Project Done</h6>
                    </div>
                    <div className="trusted-cards p-3 d-flex flex-column gap-2">
                        <img src="../../Images/trophy.png" className='why-image' alt="" />
                        <h3 className='fw-bolder'>10+</h3>
                        <h6 className='fw-bold'>Awards</h6>
                    </div>
                </div>
                <div className="trusted d-flex flex-column gap-3 p-3">
                    <h6 className='fw-bold'>Start Building Now</h6>
                    <small className="muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt aut incidunt saepe quos similique rerum quam porro quia nemo repellendus </small>
                    
                    <h6 className='fw-bold'>Our Process</h6>
                    <div className='grid4 gap-3'>
                        <div className="d-flex gap-1">
                            <MdOutlineDoubleArrow />
                            <div>
                                <p className='fw-bold'>Planning</p>
                                <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
                            </div>
                        </div>
                        <div className="d-flex gap-1">
                            <MdOutlineDoubleArrow />
                            <div>
                                <p className='fw-bold'>Design</p>
                                <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
                            </div>
                        </div>
                        <div className="d-flex gap-1">
                            <MdOutlineDoubleArrow />
                            <div>
                                <p className='fw-bold'>Implement</p>
                                <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
                            </div>
                        </div>
                        <div className="d-flex gap-1">
                            <MdOutlineDoubleArrow />
                            <div>
                                <p className='fw-bold'>Hand Over</p>
                                <small className="muted">Lorem ipsum dolor sit amet consectetur adipisicing </small>
                            </div>
                        </div>
                       
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Trusted