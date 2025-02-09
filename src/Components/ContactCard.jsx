import React from 'react'

const ContactCard = () => {
  return (
    <div className='bg-dark text-white py-5'>
        <div className="container2 my-5">
            <div className="grid gap-3">
                <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start p-4  flex-column gap-2">
                    <div className="contact-card-image rounded-4 p-2 ">
                        <img src="../../Images/solution.png" className='why-image' alt="" />
                    </div>
                    <h6 className='fw-bold'>Call Us Now</h6>
                    <small className="muted">+(234)8023449081</small>
                    <small className="muted">+(234)8023449081</small>
                </div>
                
                <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start p-4  flex-column gap-2">
                    <div className="contact-card-image rounded-4 p-2">
                        <img src="../../Images/solution.png" className='why-image' alt="" />
                    </div>
                    <h6 className='fw-bold'>Office Time</h6>
                    <small className="muted">+(234)8023449081</small>
                    <small className="muted">+(234)8023449081</small>
                </div>

                <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start p-4  flex-column gap-2">
                    <div className="contact-card-image rounded-4 p-2">
                        <img src="../../Images/solution.png" className='why-image' alt="" />
                    </div>
                    <h6 className='fw-bold'>Need Support</h6>
                    <small className="muted">+(234)8023449081</small>
                    <small className="muted">+(234)8023449081</small>
                </div>

                <div className="contact-info d-flex  justify-content-center align-items-center justify-content-sm-start align-items-sm-start p-4  flex-column gap-2">
                    <div className="contact-card-image rounded-4 p-2">
                        <img src="../../Images/solution.png" className='why-image' alt="" />
                    </div>
                    <h6 className='fw-bold'>Our Address</h6>
                    <small className="muted">+(234)8023449081</small>
                    <small className="muted">+(234)8023449081</small>
                </div>

                
            </div>
        </div>
    </div>
  )
}

export default ContactCard