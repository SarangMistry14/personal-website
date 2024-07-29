import React from "react";

function AboutMe() {
  return (
    <section className="about-section" id="AboutMe">
      <div className="about-section-img">
        <img src="../img/hero_img.jpg" alt="About Me" />
      </div>
      <div className="hero-section-content-box about-section-box">
        <div className="hero-section-content">
          <p className="section-title">About</p>
          <h1 className="skills-section-heading">About me</h1>
          <p className="hero-section-description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos repellendus doloribus assumenda, voluptatum molestiae
            magni quas praesentium recusandae magnam ipsum veniam perferendis
            quo ut deleniti optio voluptates aspernatur? Quod, incidunt? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            <br />
            adipisci. Nisi, enim! Nisi repellendus consequatur quae
            consequuntur, corporis sunt quis in pariatur tenetur totam, cum
            ipsa, ea sint recusandae cupiditate?
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
