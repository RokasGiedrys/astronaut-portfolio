import React from "react";
import "../about/about.styles.scss";
import { ReactComponent as AstronautWithBalloons } from "../../assets/astronaut_balloons.svg";

import Button from "../button/button.component";

const About = () => (
  <div className='about'>
    {/*<AstronautWithBalloons className='astronaut-with-balloons' />*/}
    <div className='quote-container'>
      <p className='text'>If it is easy - it's boring.</p>
    </div>

    <div className='description-container'>
      <h2 className='about-title'>Curriculum Vitae</h2>
      <p className='description'>
        My main interest is front-end web development using <b>ReactJS</b>,{" "}
        <b>JavaScript</b>,<b>HTML(5)</b>, <b>CSS(3)</b>, <b>SASS</b>, <b>Git</b>
        , <b>Firebase SDK</b>. Also, I have freelance experience in creating
        websites using <b>WordPress CMS</b> and in mobile development using{" "}
        <b>Android SDK</b> with <b>Kotlin</b> and <b>Java</b> programming
        languages. I consider myself highly motivated fast learner.
      </p>
      <p className='description'>
        One module away from The Open University BSc (Hons) in Software
        Engineering.
      </p>
      <Button title='Print Resume' resume />
    </div>
  </div>
);

export default About;
