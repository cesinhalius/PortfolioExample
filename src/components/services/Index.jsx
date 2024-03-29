import React from 'react'
import './style.css'
import { BiCheck } from 'react-icons/bi'

const Index = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container service__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              </ul>
          </article>
        <article className="service">
          <div className="service__head">
            <h3>Developer Web</h3>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              </ul>
          </article>
        <article className="service">
          <div className="service__head service__content">
            <p>Content Creation</p>
            </div>

            <ul className="service__list">
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className='service__list-icon'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </li>
              </ul>
          </article>

        </div>
      </section>
  )
}

export default Index