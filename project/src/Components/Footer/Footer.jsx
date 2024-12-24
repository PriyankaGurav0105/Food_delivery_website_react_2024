/* eslint-disable no-unused-vars */
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className='footer-content-left'>
                <img src={assets.logo}/>
                <p>This is a dummy text here......This is a dummy text here...This is a dummy text here......This is a dummy text here...This is a dummy text here......This is a dummy text here</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                  <li>+91 9874261520</li>
                  <li>contact@tomato.com</li> 
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2024 Tomato.com - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer