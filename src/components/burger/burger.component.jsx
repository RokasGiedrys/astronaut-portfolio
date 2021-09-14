import React from "react";
import "../burger/burger.styles.scss";
import { slide as Menu } from "react-burger-menu";
import NavOptions from "../nav-options/nav-options.components";

const Burger = ({ isOpen }) => {
  return (
    <Menu isOpen={isOpen} top>
      <NavOptions />
    </Menu>
  );
};
export default Burger;
