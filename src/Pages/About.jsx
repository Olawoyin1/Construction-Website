import React from 'react'
import Navbar from '../Components/Navbar'
import ContactCard from '../Components/ContactCard'
import Intro from '../Components/Intro'

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="faq-header text-center my-5">
            <h2 className='fw-bolder'>Building the Future with Strength & Integrity</h2>
            <small className="muted">Your Trusted Partner in Construction Excellence.</small>
        </div>
        <Intro />


        Our Core Values
1. Integrity
We uphold the highest standards of honesty, transparency, and ethics in all our projects. Our commitment to integrity ensures that we build not just structures, but lasting relationships based on trust and reliability.

2. Quality Craftsmanship
We believe that excellence lies in the details. From the foundation to the finishing touches, we deliver top-tier craftsmanship using the best materials and industry best practices to ensure long-lasting and aesthetically pleasing results.

3. Innovation
The construction industry is constantly evolving, and so are we. We embrace modern building techniques, cutting-edge technology, and sustainable solutions to create structures that stand the test of time while minimizing environmental impact.

4. Customer Satisfaction
Our clients are at the heart of everything we do. We listen to your needs, provide expert guidance, and ensure that every project is tailored to meet and exceed expectations. Your satisfaction is our ultimate success.

5. Safety First
We prioritize the safety of our workers, clients, and communities. Adhering to strict safety regulations and protocols, we create work environments that prevent hazards and promote well-being on and off the construction site.

6. Teamwork & Collaboration
A successful project is built on strong teamwork. We foster collaboration among engineers, architects, contractors, and clients to ensure smooth project execution and deliver the best possible outcomes.
        <ContactCard />
    </div>
  )
}

export default About