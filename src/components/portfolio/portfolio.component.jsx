import React from "react";
import "../portfolio/portfolio.styles.scss";
import PortfolioItem from "../portfolio-item/portfolio-item.component";

const Portfolio = () => (
  <div className='portfolio'>
    <div className='content-container'>
      <PortfolioItem
        title='Project 1'
        description='This is project 1 description'
      />
      <PortfolioItem
        title='Project 2'
        description='This is project 2 description'
      />
      <PortfolioItem
        title='Project 3'
        description='This is project 2 description'
      />
    </div>
  </div>
);

export default Portfolio;
