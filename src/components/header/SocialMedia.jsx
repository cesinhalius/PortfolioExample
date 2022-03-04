import React from 'react'
import {BsLinkedin} from 'react-icons/bs' 
import {FaGithubAlt} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa' 

const SocialMedia = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com"><BsLinkedin/></a>
        <a href="https://github.com"><FaGithubAlt/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
    </div>
  )
}

export default SocialMedia