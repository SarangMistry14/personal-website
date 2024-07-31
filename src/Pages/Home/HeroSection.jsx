import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import data from "../../data/index.json";
function HeroSection() {
  //
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Contact");
  };

  return (
    <section id="heroSection" className="hero-section">
      <div className="hero-section-content-box">
        <div className="hero-section-content">
          <p className="section-title">Hey I'm Sarang</p>
          <h1 className="hero-section-title">
            <span className="hero-section-title-color">Software</span> <br />
            Developer
          </h1>
          <p className="hero-section-description">
            {/* getting the description */}
            {data.heroSection.description}
          </p>
        </div>
        <div className="hero-section-button-group">
          <Link
            activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1000}
            className="btn btn-primary"
          >
            Get in Touch
          </Link>
          <button className="btn btn-primary hero-section-downloadCV">Download CV</button>
        </div>
        {/* TODO add a button that says download Resume */}
      </div>
      {/* Picture */}
      <div className="hero-section-img">
        <img src="./img/hero_img.jpg" alt="Hero Section image" />
      </div>
    </section>
  );
}

export default HeroSection;
