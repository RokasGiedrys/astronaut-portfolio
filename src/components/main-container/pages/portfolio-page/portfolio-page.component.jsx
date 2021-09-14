import React, { useState } from "react";
import "./portfolio-page.styles.scss";
import PortfolioItem from "../../../portfolio-item/portfolio-item.component";

import portfolio_0 from "../../assets/portfolio/this-portfolio/portfolio_0.png";
import portfolio_1 from "../../assets/portfolio/this-portfolio/portfolio_1.png";
import portfolio_2 from "../../assets/portfolio/this-portfolio/portfolio_2.png";

import simplified_0 from "../../assets/portfolio/simplified-notes/simplified_notes_0.png";
import simplified_1 from "../../assets/portfolio/simplified-notes/simplified_notes_1.png";
import simplified_2 from "../../assets/portfolio/simplified-notes/simplified_notes_2.png";

import old_portfolio_wp_0 from "../../assets/portfolio/old_portfolio_wp/old_portfolio_wp_0.png";

const projects = [
  {
    id: 1,
    title: "This Portfolio Website",
    images: [portfolio_0, portfolio_1, portfolio_2],
    description:
      "Personal website built from scratch to showcase my portfolio, print resume and get in touch with me on social media, email and phone. This one-page web app is written in JavaScript using ReactJS with libraries such as React Router for navigation and React Slick to display portfolio project images in carousels. Also, the SASS is used to superpower the CSS, React Icons for beautiful social icons and Git for the version control.",
    linkUrl: "/",
  },
  {
    id: 2,
    title: "Native Android Application: Simplified Notes",
    images: [simplified_0, simplified_1, simplified_2],
    description:
      "Simplified Notes is a digital notebook designed to capture and organise thoughts in the simplest way possible. Without unnecessary animations and transitions, this notepad app is easy to use when you need to write something down quickly. This application is written in Kotlin and Model-View-ViewModel in mind as an architecture pattern. Room is used to store data internally, Navigation Component for transition between fragments, MaterialUI for design solutions, Google AdMob and FaceBook SDK for monetising.",
    linkUrl:
      "https://play.google.com/store/apps/details?id=com.giedrysapps.projectgaby",
  },
  {
    id: 3,
    title: "Portfolio Website From Early 2021",
    images: [old_portfolio_wp_0],
    description:
      "A website built using WordPress Content Management System to get more familiar with the technology and showcase myself simplest way possible.",
    linkUrl: "portfolio/project-three",
  },
];

const PortfolioPage = () => {
  const [portfolioProjects] = useState(projects);
  return (
    <div className='portfolio-page'>
      <div className='introduction'>
        A collection of projects built for real-world clients and hobby projects
        created with the latest technologies.
      </div>
      {portfolioProjects.map(({ id, ...otherProps }) =>
        Math.abs(id % 2) === 1 ? (
          <PortfolioItem key={id} {...otherProps} />
        ) : (
          <PortfolioItem key={id} {...otherProps} reverse />
        )
      )}
    </div>
  );
};

export default PortfolioPage;
