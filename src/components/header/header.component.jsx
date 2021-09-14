import React, { useState } from "react";
import "../header/header.styles.scss";
import { Link } from "react-router-dom";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { CgMenuRound } from "react-icons/cg";
import NavOptions from "../nav-options/nav-options.components";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='header'>
      <div className='buttons-container'>
        <Link
          to={{
            pathname: "https://www.linkedin.com/in/rokasgiedrys/",
          }}
          target='_blank'
        >
          <GrLinkedinOption className='soc-button' />
        </Link>
        <Link
          to={{
            pathname: "https://github.com/RokasGiedrys",
          }}
          target='_blank'
        >
          <GrGithub className='soc-button' />
        </Link>
        <CgMenuRound
          className='menu-button'
          onClick={() => {
            setOpen(!open);
          }}
        />
      </div>
      <NavOptions />
    </div>
  );
};
export default Header;
