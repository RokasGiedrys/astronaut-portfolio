import React from "react";
import Button from "../../components/button/button.component";
import "../portfolio-item/portfolio-item.styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PortfolioItem = ({ title, description, images, linkUrl, reverse }) => {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={`${reverse ? "reverse" : ""} portfolio-item`}>
      <div className='content-wrapper'>
        <div className='title-wrapper'>
          <div className='title'>{title}</div>
        </div>
        <div className='description'>{description}</div>
        <div className='buttons-wrapper'>
          <Button
            title='VISIT PROJECT'
            portfolio
            link={linkUrl}
            target='_blank'
          />
        </div>
      </div>
      <div className='images-wrapper'>
        <Slider {...settings}>
          {images.map((image, idx) => (
            <img
              key={idx}
              src={image}
              alt='portfolio project'
              className='image'
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PortfolioItem;
