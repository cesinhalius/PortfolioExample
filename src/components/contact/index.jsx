import React from 'react'
import './style.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'



const Index = () => {
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>abcdefgh@contato.com</h5>
            <a href="#">Send Message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="#">Send Message</a>
          </article>

        </div>
        <form action="">
          <input type="text" name="name" placeholder='Full Name' required />
          <input type="email" name="email" placeholder='abcdefghi@contato.com' required />
          <textarea name="message" rows="7" placeholder='Message' required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Index