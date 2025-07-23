import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaMediumM } from "react-icons/fa";
import { IoShareSocial } from "react-icons/io5";

export const Contact = () => {
  return (


    
<div>
      <div style={{marginTop:'10rem'}} className='contact'>

      <div className='links'>
          <h2 style={{marginBottom:'1rem'}}>Contact Information</h2>
        <a href="mailto:yusufgocenn0@gmail.com">
            <MdEmail />
            <span style={{marginLeft:'1rem', fontSize:'1.6rem'}}>Yusufgocenn0@gmail.com</span>
        </a>
        <a href="/">
          <IoLocationOutline />
          <span style={{marginLeft:'1rem'}}>İstanbul / Türkiye</span>
        </a>  
        <div className='contact-social'>
                  <span style={{marginTop:'0.5rem'}}><IoShareSocial /></span>
                  <a target="_newblank" href="https://www.linkedin.com/in/yusufgocen/">
                    <FaLinkedin />
                  </a>
                  <a target="_newblank"href="https://github.com/YusufGocen">
                    <FaGithub />
                  </a>
                  <a target="_newblank" href="https://medium.com/@yusufgocenn0">
                    <FaMediumM />
                  </a>
        </div>      
      </div>

      <div className='contact-message' id='contact'>
          <h1 style={{textAlign:'center', marginBottom:"1.5rem", fontSize:'2rem'}}>Send a Message</h1>
        <div className='contact-content'>
          <form className='contact-form'>
            <input type="text" name='name' placeholder='Your Name ... ' required  whileFocus={{scale:1.02}}/>
            <input type="email" name='email' placeholder='Your Email ... ' required  whileFocus={{scale:1.02}}/>
            <textarea name="message" placeholder='Your Message ...'></textarea> 
            <button className='submit-button' type='submit' whileHover={{scale:1.05}} whileTap={{scale:1.05}}>{" "} Send Message</button>
          </form>

        </div>
      </div>
    </div>
    
      <div style={{textAlign:'center', background:'rgba(22, 22, 25, 0.85)'}}>
        <p>&copy; 2025 Yusuf Göçen . All Rights Reserved.</p>
      </div>

</div>

   
  )
}
