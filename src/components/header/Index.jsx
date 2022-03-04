import React from 'react'
import './style.css'
import ME from '../../assets/perfil1.png'
import CTA from './CTA';
import SocialMedia from './SocialMedia';

const Index = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Thais Oliveira</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA/>
        <SocialMedia/>

        <div className="me">
          <img src={ME} alt="me" />
          </div>
      </div>
    </header>

  )
}

export default Index