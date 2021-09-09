import React from "react";
import Button from "../../components/button/button.component";
import "../portfolio-item/portfolio-item.styles.scss";

const PortfolioItem = ({ title, description, images }) => (
  <div className='portfolio-item'>
    {/*<img src='' alt='project image' className='project-image' />*/}
    <div className='title-wrapper'>
      <div className='title'>{title}</div>
    </div>
    <div className='description-wrapper'>
      <div className='description'>{description}</div>
    </div>
    <div className='buttons-wrapper'>
      <Button title='VISIT PROJECT' portfolio />
    </div>
    <div className='images-wrapper'>
      {images.map((image, idx) => (
        <img key={idx} className='image' src={image} alt='project ' />
      ))}
    </div>
  </div>
);

export default PortfolioItem;
