import React from "react";
import "../main-container/main-container.styles.scss";
import Button from "../button/button.component";
import { ReactComponent as HangingAstronaut } from "../../assets/astronaut_hanging.svg";
import Pdf from "../../assets/rokas_giedrys_cv_2021_pdf.pdf";

const MainContainer = () => (
  <div className='main-container'>
    <div className='introduction-container'>
      <div className='heading'>
        <div className='hello-world'>Hi, I'm</div>
        <span className='name'>Rokas Giedrys</span>
      </div>
      <div className='subheading'>
        Front-end web developer based in Cambridge, UK who creates web apps
        using ReactJS and has experience working with WordPress and native
        Android.
      </div>
      <div className='button-container'>
        <Button title='VIEW RESUME' resume link={Pdf} target='_blank' />
      </div>
    </div>
    <div className='hanging-astronaut-container'>
      <HangingAstronaut className='astronaut' />
    </div>
  </div>
);

export default MainContainer;
