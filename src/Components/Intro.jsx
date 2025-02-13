import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
    const paragraph = `360 is a wholly engineering construction firm which has been able to bring together a group experienced, resourceful and highly seasoned Nigerian Engineers, Architects, Quantity Surveyors.We are known for matching quality with speed and we are successfully completed various Engineering Projects.\n\nAt 360 Unique Design and Construction Ltd, our clients satisfaction is obsession Every site and project is unique and as such must be considered and thought out in such a manner. Users vary and user preference exists in a wide continuum. Our architectural goal is at the point where every user preference and spatial function is balanced to produce a space where any user can become a better performer; and this is our starting point in design.\n\nOur aim is to continue to be a standard in the industry providing world class architectural, design and construction services. The firm has a portfolio of quality projects that meets local and international standards. Our strong points is in attention to details and the appropriate use of human and technological resources to realize our client's project goal. We also collaborate and consult with other built environment professionals when necessary to achieve our aim.`
  return (
    <div className='my-5'>
        <div className="container2 py-5">
            <div className="grid4 align-items-center gap-3 gap-md-5">
                <div className="intro-image">
                    <div className="first-image ">
                        <img src="../../Images/intro.jpg" alt="" />
                    </div>
                    <div className="second-image">
                        <img src="../../Images/intro2.jpg" alt="" />
                    </div>
                </div>
                <div className="intro-content mt-4 mt-md-0 d-flex flex-column gap-3 justify-content-start align-items-start">
                    <div className='d-flex align-items-center gap-5'>
                        <span className="des"></span>
                        <h6 className='mx-4  fw-bold'>About 360 unique designs and construction Ltd.</h6>
                    </div>
                    <h2 className="fw-bolder">We Are The Leader In Construction</h2>
                    <small className="muted"  style={{ whiteSpace: "pre-wrap" }}>{paragraph}</small>
                    <Link to='/about'><button className="main-btn">Learn More</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro