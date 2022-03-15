import React from 'react'
import './style.css'
import {FaFacebook} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

export const Index = () => {
  return (
    <footer>
        <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experient">Experient</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer__socials">
            <a href="https://facebook.com"><FaFacebook/></a>
            <a href="https://instagram.com"><FaInstagram/></a>
            <a href="https://twitter.com"><FaTwitter/></a>
        </div>
    </footer>
  )
}
export default Index;