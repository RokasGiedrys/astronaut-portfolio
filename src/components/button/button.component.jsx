import React from "react";
import "../button/button.styles.scss";

const Button = ({ title, resume, contact, portfolio, link, target }) => (
  <button
    className={`${resume ? "resume" : ""}${contact ? "contact" : ""}${
      portfolio ? "portfolio" : ""
    } main`}
  >
    <a className='highlighted' href={link} target={target}>
      {title}
    </a>
  </button>
);

export default Button;
