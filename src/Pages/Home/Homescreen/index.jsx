import React from "react";
import HeroSection from "../HeroSection";

import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import Skills from "../Skills";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe/> 
      <Skills/>
      <MyPortfolio/>
      <ContactMe/>
      {/* <Footer/> */}
      {/* <MySkill/> */}
    </>
  );
}

export default Home;
