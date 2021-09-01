import React from "react";
import "../contact-page/contact-page.styles.scss";
import Button from "../../components/button/button.component";
import { ReactComponent as YogaAstronaut } from "../../assets/astronaut_yoga.svg";

const ContactPage = () => (
  <div className='contact-page'>
    <div className='main-container'>
      <div className='astronaut-container'>
        <YogaAstronaut className='yoga-astronaut' />
      </div>
      <h2 className='heading'>Get in touch</h2>
      <p className='subheading'>
        Contact me at giedrysrokas@gmail.com or call +447522408963 for upcoming
        roles.
      </p>
      <Button title='Email me' contact />
    </div>
  </div>
);

export default ContactPage;
