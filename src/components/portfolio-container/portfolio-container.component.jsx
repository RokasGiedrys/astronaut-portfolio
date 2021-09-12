//import React, { useState } from "react";
//import "./portfolio-container.styles.scss";
//import PortfolioItem from "../portfolio-item/portfolio-item.component";
//import Slider from "react-slick";
//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
//
//import img_pr_1_1 from "../../assets/portfolio/sample_1.png";
//
//const projects = [
//  {
//    id: 1,
//    title: "Project 1",
//    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//    images: [img_pr_1_1, img_pr_1_1, img_pr_1_1],
//    description:
//      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc....... reikia, jog rodytu max tiek ir tiek chars",
//    linkUrl: "portfolio/project-one",
//  },
//  {
//    id: 2,
//    title: "Project 2",
//    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//    images: [img_pr_1_1, img_pr_1_1, img_pr_1_1],
//    description:
//      "This is the description 2simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
//    linkUrl: "portfolio/project-two",
//  },
//  {
//    id: 3,
//    title: "Project 3",
//    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//    images: [img_pr_1_1, img_pr_1_1, img_pr_1_1],
//    description:
//      "This simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.is the description 3",
//    linkUrl: "portfolio/project-three",
//  },
//  {
//    id: 4,
//    title: "Project 4",
//    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//    images: [img_pr_1_1, img_pr_1_1, img_pr_1_1],
//    description: "This is the description 4",
//    linkUrl: "portfolio/project-three",
//  },
//  {
//    id: 5,
//    title: "Project 5",
//    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
//    images: [img_pr_1_1, img_pr_1_1, img_pr_1_1],
//    description: "This is the description 5",
//    linkUrl: "portfolio/project-three",
//  },
//];
//
//const settings = {
//  dots: true,
//  infinite: true,
//  //fade: true,
//  slidesToShow: 1,
//  swipeToSlide: true,
//  autoplay: false,
//  autoplaySpeed: 6000,
//  pauseOnHover: true,
//  speed: 1500,
//};
//
//const PortfolioContainer = () => {
//  const [portfolioProjects] = useState(projects);
//
//  return (
//    <div className='portfolio-container'>
//      <div className='wrapper'>
//        <Slider {...settings}>
//          {portfolioProjects.map(({ id, ...otherProps }) => (
//            <PortfolioItem key={id} {...otherProps} />
//          ))}
//        </Slider>
//      </div>
//    </div>
//  );
//};
//
//export default PortfolioContainer;
