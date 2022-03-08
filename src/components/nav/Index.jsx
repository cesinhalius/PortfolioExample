import React from 'react'
import './style.css'
import { BiHome } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { ImBook } from 'react-icons/im'
import { MdOutlineDesignServices } from 'react-icons/md'

const Index = () => {
  return (
    <nav>
      <a href="#"><BiHome/></a>
      <a href="#about"><FiUser/></a>
      <a href="#experience"><ImBook/></a>
      <a href="#services"><MdOutlineDesignServices/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Index