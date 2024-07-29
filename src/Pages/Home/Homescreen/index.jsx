import React from "react";
import HeroSection from "../HeroSection";
import MySkill from "../MySkill";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";

function Home() {
  return (
    <>
      <HeroSection />
      <MySkill/>
      <AboutMe/> 
      <MyPortfolio/>
      <ContactMe/>
    </>
  );
}

export default Home;
