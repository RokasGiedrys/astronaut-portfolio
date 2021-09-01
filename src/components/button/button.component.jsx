import React from "react";
import "../button/button.styles.scss";

const Button = ({ title, resume, contact, pdf }) => (
  <button
    className={`${resume ? "resume" : ""}${contact ? "contact" : ""} button`}
  >
    {title}
  </button>
);

export default Button;
