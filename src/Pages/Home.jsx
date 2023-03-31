import React from 'react'
import '../Styles/Home.css'
import img02 from '../images/img3.jpg'
import {FaChevronRight} from 'react-icons/fa'

export default function Home() {
  return (
    <>
    <section className="home-wrapper">
      <div className="home-header">
        <h2 className="header-title">
          We'll take care of<span> your Health</span>
        </h2>
        <p>Our board-certified doctors with over a decade of experience handling a wide range of diseases and are qualified 
          to serve our patients under proper supervision
        </p>
      </div>
    </section>
    <section className="about">
      <div className="about-wrapper">
        <div className="img-wrapper">
          <img src= {img02} alt="about" />
        </div>
        <div className="about-text">
          <h2 className="about-title">
            ABOUT US
          </h2>
          <h5>
            What we are and our history
          </h5>
          <p>
          Olabisi Onabanjo University Teaching Hospital, Sagamu is designed to focus on providing high quality healthcare services to Ogun in particular and Nigeria as a whole. OOUTH is driven by the vision of providing excellent health to the people. OOUTH is a epitome of a contemporary Teaching Hospital geared towards mutual interaction between health workers and patients. Our strong emphasis is on emergency services with modern equipment at our disposal. Our professionals are disciplined vast with adequate knowledge of medical practice. At OOUTH, efficient, affordable and accessible healthcare delivery is always within reach. OOUTH is redefining healthcare delivery in Ogun State Nigeria. Within this site you will be able to find out about our Specialties, our locations and our current vacancies. You can also find out about who sits on our Board, check out the latest OOUTH news. If you have any 
          comments about the site or suggestions on how we can improve it, please tell us by sending your comments to info@oouth.com
          </p>
          <h2 className="about-tit">
            VISION AND MISSION
          </h2>
          <h5 className='vision'>
            OUR MISSION
          </h5>
          <p>To achieve a client-friendly, efficient and effective tertiary health care services and to oper
            ate best practices through absolute dedication, discipline and commitment to the well being of the people of Ogun State.
          </p>
          <h5 className='vision'>
            OUR VISION
          </h5>
          <p>
          To provide standards of teaching and tertiary healthcare services with a leading edge amongst its peers
           internationally in support of improved well being of the people of Ogun State towards the agenda for a secured future.
          </p>

          <div className="link">
            <a href="/home">
              read more
            </a>
          </div>
        </div>
      </div>
      <div className="services">
        <div className="services-wrapper">
          <div className="card card1">
            <h3>Our clinical services list</h3>
            <p>Our consultants are some of the best in their respective specialties and under their guidance our dedicated and committed medical,
               nursing, paramedical and other health staff workers tirelessly provide a comprehensive healthcare to our patients.
            </p>
          </div>
          <div className="card card2">
            <h3>Our Benefits</h3>
            <h5>Few benefits of visiting us</h5>
            <p>
              <FaChevronRight/> Qualified Staff of Doctors
            </p>
            <p>
              <FaChevronRight/> Employee Occupational Health & Wellness
            </p>
            <p>
              <FaChevronRight/> Save Your Money and Time with us
            </p>
            <p>
              <FaChevronRight/> 24x7 Emergency service
            </p>
            <p>
              <FaChevronRight/> Feel Like you are at Home Services
            </p>
          </div>
          <div className="card card3">
            <h3>Our Working Hours</h3>
            <p className='hours'><span>Monday - Sunday</span> <span>24 Hours Daily</span></p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

