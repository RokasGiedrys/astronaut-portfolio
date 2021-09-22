import React from "react";
import "../header/header.styles.scss";
import { Link } from "react-router-dom";
import { GrLinkedinOption } from "react-icons/gr";
import Navigation from "../navigation/navigation.component";

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
        </div>
      </div>
      <Navigation />
    </div>
  );
};
export default Header;
