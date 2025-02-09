import React from 'react'

const Form = () => {
  return (
    <div className='my-4'>
        <div className="container2">
        <div className="faq-header text-center my-5">
            <h2 className='fw-bolder'>Would You Like To Discuss A Project</h2>
            <small className="muted">Comprehensive, expert care for your health needs.</small>
        </div>
            <div className="form-grid">
                <div className="form-image">
                    <img src="../../Images/home-post-2-418x315.jpg" alt="" />
                </div>
                <div className="form-field">
                    <form action="" className='p-4 d-flex justify-content-start align-items-start flex-column gap-4'>
                        <h5 className='fw-bold'>Something</h5>
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="email" placeholder='Enter Your Email'/>
                        <input type="text" placeholder='Enter Your Phone'/>
                        <textarea name="" placeholder='Tell Us About Your Message' id=""></textarea>
                        <button className="main-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Form