import React from "react";
import { pageData } from "../../data/dummyData";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <h1>{pageData.hero.title}</h1>
        <p>{pageData.hero.description}</p>
      </div>
    </section>
  );
};

export default Hero;
