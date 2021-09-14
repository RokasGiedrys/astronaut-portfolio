import React from "react";
import { NavLink } from "react-router-dom";
import "../nav-options/nav-options.styles.scss";

const NavOptions = () => (
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
    <NavLink exact to='/contact' className='option' activeClassName='selected'>
      CONTACT
    </NavLink>
  </div>
);
export default NavOptions;
