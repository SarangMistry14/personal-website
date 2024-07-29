import React from "react";

function HeroSection() {
  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey I am Sarang</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Full Stack</span> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            soluta? Nobis repellendus rerum voluptate itaque ipsam! Culpa, et
            <br />
            tempora magnam, maiores ducimus maxime minima aspernatur asperiores,
            adipisci blanditiis commodi tempore.
          </p>
        </div>
        <button className="btn btn-primary">Get in Touch</button>
      </div>
      <div className="hero-section-img">
        <img src="./img/hero_img.jpg" alt="Hero Section image" />
      </div>
    </section>
  );
}

export default HeroSection;
