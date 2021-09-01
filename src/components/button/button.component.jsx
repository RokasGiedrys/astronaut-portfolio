import React from "react";
import "../button/button.styles.scss";

const Button = ({ title, resume, contact, link, target }) => (
  <button
    className={`${resume ? "resume" : ""}${contact ? "contact" : ""} main`}
  >
    <a className='highlighted' href={link} target={target}>
      {title}
    </a>
  </button>
);

export default Button;
