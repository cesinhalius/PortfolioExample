import React from "react";
import "./style.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Index = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__front-end">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>React</h4>
              <small className="text-light">Beginning</small>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Node.JS</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Mongo.DB</h4>
              <small className="text-light">Beginning</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>Java</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <h4>MySql</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
