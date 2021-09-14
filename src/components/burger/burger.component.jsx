import React from "react";
import "../burger/burger.styles.scss";
import { slide as Menu } from "react-burger-menu";
import NavOptions from "../nav-options/nav-options.components";

const Burger = ({ isOpen }) => {
  return (
    <div className='burger'>
      <Menu isOpen={isOpen}>
        <NavOptions />
      </Menu>
    </div>
  );
};
export default Burger;
