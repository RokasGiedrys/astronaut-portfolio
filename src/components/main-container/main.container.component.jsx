import React from "react";
import "../main-container/main-container.styles.scss";
import { ReactComponent as HangingAstronaut } from "../../assets/astronaut_hanging.svg";
import Button from "../button/button.component";

const MainContainer = () => (
  <div className='main-container'>
    <section className='hero-content'>
      <div className='text-container'>
        <div className='heading'>
          <div className='hello-world'>Hi, I'm</div>
          <span className='name'>Rokas Giedrys</span>
        </div>
        <div className='subheading'>
          front-end web developer based in Cambridge, UK who creates websites &
          web apps using ReactJS, WordPress and has an experience working with
          native Android.
        </div>
        <Button title='VIEW RESUME' resume />
      </div>
      <div className='hanging-astronaut-container'>
        <HangingAstronaut className='astronaut' />
      </div>
    </section>
  </div>
);

export default MainContainer;
