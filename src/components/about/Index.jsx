import React from "react";
import "./style.css";
import ME from "../../assets/about.jpg";
import {FaAward} from 'react-icons/fa';
import {FiUser} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
 
const Index = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="perfil" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Year Working</small>
              </article>

            <article className="about__card">
                <FiUser className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ Clients</small>
              </article>

            <article className="about__card">
                <VscFolderLibrary className='about__icon'/>
                <h5>Project</h5>
                <small>80 Complete</small>
              </article>
          </div>


          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla ex facere repellendus laudantium sequi 
            ipsum sint dolore cupiditate? Dolor,non similique porro maxime iure vel. Sapiente exercitationem voluptatem nobis ipsum?
          </p>

          <a href="#contact" className="btn btn-primary">Let`s Talk</a>
        </div>
      </div>
    </section>
  );
};

export default Index;
