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
            <MdOutlineEmail/>
            <h4>Email</h4>
            <h5>abcdefgh@contato.com</h5>
            <a href="#">Send Message</a>
          </article>

          <article className="contact_option">
            <BsWhatsapp/>
            <h4>Whatsapp</h4>
            <h5>+123456789</h5>
            <a href="#">Send Message</a>
          </article>

        </div>
      </div>
    </section>
  )
}

export default Index