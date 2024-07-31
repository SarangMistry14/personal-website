import React from "react";
import HeroSection from "../HeroSection";
import MySkill from "../MySkill";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import AllSkills from "../AllSkills";

function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe/> 
      {/* <MySkill/> */}
      <AllSkills/>
      <MyPortfolio/>
      <ContactMe/>
      <Footer/>
    </>
  );
}

export default Home;
