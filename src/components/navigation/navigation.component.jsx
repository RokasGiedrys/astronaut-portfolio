import React from "react";
import { NavLink } from "react-router-dom";
import "../navigation/navigation.styles.scss";

const Navigation = () => (
  <div className='options'>
    <NavLink
      exact
      to='portfolio/home'
      className='option'
      activeClassName='selected'
    >
      HOME
    </NavLink>
    <NavLink
      exact
      to='portfolio/projects'
      className='option'
      activeClassName='selected'
    >
      PORTFOLIO
    </NavLink>
    <NavLink
      exact
      to='portfolio/contact'
      className='option'
      activeClassName='selected'
    >
      CONTACT
    </NavLink>
  </div>
);
export default Navigation;
