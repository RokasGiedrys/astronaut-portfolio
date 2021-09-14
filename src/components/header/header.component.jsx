import React, { useState } from "react";
import "../header/header.styles.scss";
import { Link, NavLink } from "react-router-dom";
import { GrLinkedinOption } from "react-icons/gr";
import { GrGithub } from "react-icons/gr";
import { CgMenuRound } from "react-icons/cg";
import NavOptions from "../nav-options/nav-options.components";

const Header = () => {
  return (
    <div className='header'>
      <div className='buttons-container'>
        <div className='soc-button-wrapper'>
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
        </div>
        {/*<CgMenuRound
          className='menu-button'
          onClick={() => {
            setOpen(!open);
          }}
        />*/}
        <div className='mobile-menu'>
          <NavLink
            exact
            to='/'
            className='menu-option'
            activeClassName='selected'
          >
            HOME
          </NavLink>
          <NavLink
            exact
            to='/portfolio'
            className='menu-option'
            activeClassName='selected'
          >
            PORTFOLIO
          </NavLink>
          <NavLink
            exact
            to='/contact'
            className='menu-option'
            activeClassName='selected'
          >
            CONTACT
          </NavLink>
        </div>
      </div>
      <NavOptions />
    </div>
  );
};
export default Header;
