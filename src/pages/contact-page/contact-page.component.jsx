import React from "react";
import "../contact-page/contact-page.styles.scss";
import Button from "../../components/button/button.component";
import { ReactComponent as YogaAstronaut } from "../../assets/astronaut_yoga.svg";

const ContactPage = () => (
  <div className='contact-page'>
    <div className='contact-page-container'>
      <div className='astronaut-container'>
        <YogaAstronaut className='yoga-astronaut' />
      </div>
      <h3 className='heading'>Get in touch</h3>
      <p className='subheading'>
        To discuss full time roles or your projects - please email me{" "}
        <a className='highlighted' href='mailto:giedrysrokas@gmail.com'>
          giedrysrokas@gmail.com
        </a>{" "}
        or call{" "}
        <a className='highlighted' href='tel:+447522408963'>
          +447522408963
        </a>
      </p>
      <Button title='EMAIL ME' main link='mailto:giedrysrokas@gmail.com' />
    </div>
  </div>
);

export default ContactPage;
