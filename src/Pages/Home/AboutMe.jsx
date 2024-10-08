import React from "react";
import data from "../../data/index.json";
function AboutMe() {



  return (
    <section className="about-section" id="AboutMe">
      <div className="about-section-img">
        <img src="../img/hero_img.png" alt="About Me" />
      </div>
      <div className="hero-section-content-box about-section-box">
        <div className="hero-section-content">
          {/* <p className="section-title">About</p> */}
          <h1 className="skills-section-heading">About Me</h1>
          <p className="about-section-description">
            {data.aboutMe.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
