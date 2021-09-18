import React from "react";
import "../header/header.styles.scss";
import { Link } from "react-router-dom";
import { GrLinkedinOption, GrGithub } from "react-icons/gr";
import Navigation from "../navigation/navigation.component";
import MobileNavigation from "../mobile-navigation/mobile-navigation.component";

const Header = () => {
  return (
    <div className='header'>
      <div className='buttons-container'>
        <div className='soc-container'>
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
        <MobileNavigation />
      </div>
      <Navigation />
    </div>
  );
};
export default Header;
