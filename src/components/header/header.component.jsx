import React from "react";
import "../header/header.styles.scss";
import { Link, NavLink } from "react-router-dom";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { CgMenuRound } from "react-icons/cg";

const Header = () => (
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
      <CgMenuRound className='menu-button' />
    </div>
    <div className='options'>
      <NavLink exact to='/' className='option' activeClassName='selected'>
        HOME
      </NavLink>
      <NavLink
        exact
        to='/portfolio'
        className='option'
        activeClassName='selected'
      >
        PORTFOLIO
      </NavLink>
      <NavLink
        exact
        to='/contact'
        className='option'
        activeClassName='selected'
      >
        CONTACT
      </NavLink>
    </div>
  </div>
);
export default Header;
