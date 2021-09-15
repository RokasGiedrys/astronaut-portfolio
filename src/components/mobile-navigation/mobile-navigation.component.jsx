import React from "react";
import { NavLink } from "react-router-dom";
import "../mobile-navigation/mobile-navigation.styles.scss";

const MobileNavigation = () => (
  <div className='mobile-navigation'>
    <NavLink exact to='/' className='menu-option' activeClassName='selected'>
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
);
export default MobileNavigation;
