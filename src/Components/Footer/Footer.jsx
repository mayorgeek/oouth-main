import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import '../../Styles/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-title">
          <h4>OOUTH</h4>
    	    <p className='wrap'>connecting people to work that matters</p>
        </div>
        <div className="footer-title">
          <p>Careers</p>
    	    <p>About Us</p>
    	    <p>Blog</p>
    	    <p>FAQs</p>
        </div>
        <div className="footer-title">
          <p> Current employees</p>
    	    <p>Cookies Notice</p>
          <p>Contact us</p>
        </div>
        <div className="footer-title">
          <p>Stay Connected</p>
    	    <div className="brands">
         <span> <FaFacebook/> </span>
         <span> <FaInstagram/> </span>
         <span> <FaLinkedin/> </span>
        </div>
        </div>

      </div>
    </footer>
  )
}