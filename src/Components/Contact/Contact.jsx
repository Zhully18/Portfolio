import React from 'react'
import {FaEnvelopeOpen, FaPhoneSquareAlt, FaFacebookF, FaTwitter, FaYoutube, FaDribbble } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section_title">Get In <span>Touch</span></h2>
      
      <div className="contact_container container grid">
        <div className="contact_data">
          <h3 className="contact-title">Don't Be Shy</h3>
          <p className="contact_description">
            Feel frre to get in touch with me. I am always open to 
            discussing new projects, creative ideas or oppurtunities
            to be part of your vision
          </p>
          <div className="contact_info">
            <div className="info_item">
              <FaEnvelopeOpen className='info_icon' />

              <div>
                <span className="info_title">Mail me</span>
                <h4 className="info_desc"> agunregeoyinkan@gmail.com</h4>
              </div>
              
            </div>

            <div className="info_item">
              <FaPhoneSquareAlt className='info_icon' />

              <div>
                <span className="info_title">Call me</span>
                <h4 className="info_desc">+2348107214514</h4>
              </div>
              
            </div>

            <div className='contact_socials'>
            <a href="htpps://facebook.com" className="contact_social-link">
              <FaFacebookF />
            </a>
            <a href="htpps://twitter.com" className="contact_social-link">
              <FaTwitter />
            </a>
            <a href="htpps://youtube.com" className="contact_social-link">
              <FaYoutube />
            </a>
            <a href="htpps://dribble.com" className="contact_social-link">
              <FaDribbble />
            </a>
            </div>
          </div>
        </div>

        <form className="contact_form">
          <div className="form_input-group">
             <div className="form_input-div">
              <input type="text" placeholder='Your name' className='form_control' />
             </div>

             <div className="form_input-div">
              <input type="email" placeholder='Your email' className='form_control' />
             </div>

             <div className="form_input-div">
              <input type="text" placeholder='Your subject' className='form_control' />
             </div>
          </div>
          <div className="form_input-div">
              <textarea placeholder='Your Message' className='form_control textarea'></textarea>
          </div>

          <button className="button">
              Send Message  
              <span className="button_icon contact_button-icon">
              </span>
             </button>
        </form>
      </div>
    </section>
  )
}

export default Contact