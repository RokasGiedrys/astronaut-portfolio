import React from "react";
import Button from "../../components/button/button.component";
import "../portfolio-item/portfolio-item.styles.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Img from "react-cool-img";

const PortfolioItem = ({ title, description, images, linkUrl }) => {
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
    <div className='portfolio-item'>
      <div className='portfolio-container'>
        <div className='text-container'>
          <div className='title-wrapper'>
            <div className='title'>{title}</div>
          </div>
          <div className='description'>{description}</div>
        </div>
        <div className='images-container'>
          <Slider {...settings}>
            {images.map((image, idx) => (
              <Img
                key={idx}
                src={image}
                alt='portfolio project'
                className='image'
              />
            ))}
          </Slider>
        </div>
      </div>
      <div className='button-container'>
        <Button
          title='VISIT PROJECT'
          portfolio
          link={linkUrl}
          target='_blank'
        />
      </div>
    </div>
  );
};

export default PortfolioItem;
