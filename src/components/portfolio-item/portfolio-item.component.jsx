import React from "react";
import "../portfolio-item/portfolio-item.styles.scss";

const PortfolioItem = ({ title, description }) => (
  <div className='portfolio-item'>
    {/*<img src='' alt='project image' className='project-image' />*/}
    <div className='title'>{title}</div>
    <div className='description'>{description}</div>
  </div>
);

export default PortfolioItem;
