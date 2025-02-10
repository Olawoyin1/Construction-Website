import React from 'react'
import { Link } from 'react-router-dom'

const Intro = () => {
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
                        <h6 className='mx-4  fw-bold'>About Konstruction.</h6>
                    </div>
                    <h2 className="fw-bolder">We Are The Leader In Construction</h2>
                    <small className="muted">At Konstruction, we bring your dream projects to life with cutting-edge technology, expert craftsmanship, and unwavering commitment to quality. With over a decade of experience, we specialize in residential, commercial, and industrial construction—ensuring safety, durability, and innovation in every build.</small>
                    <small className="muted">At Konstruction, we bring your dream projects to life with cutting-edge technology, expert craftsmanship, and unwavering commitment to quality. With over a decade of experience, we specialize in residential, commercial, and industrial construction—ensuring safety, durability, and innovation in every build.</small>
                    <Link to='/about'><button className="main-btn">Learn More</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Intro