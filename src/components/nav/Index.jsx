import React, {useState} from 'react'
import './style.css'
import { BiHome } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { FiUser } from 'react-icons/fi'
import { ImBook } from 'react-icons/im'
import { MdOutlineDesignServices } from 'react-icons/md'


const Index = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><FiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav ==='#experience' ? 'active' : ''}><ImBook/></a>
      <a href="#service" onClick={() => setActiveNav('#service')} className={activeNav ==='#service' ? 'active' : ''}><MdOutlineDesignServices/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}  

export default Index