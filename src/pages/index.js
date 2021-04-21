import React from "react";
// import Features from "../components/Features";
import InfoSection from "../components/InfoSection";
// import Listings from "../components/Listings";
import { aboutData, educationData } from "../data/InfoData";
// import Hero from "../components/Hero";
// import { SliderData } from "../data/SliderData";
import HeroSection from "../components/HeroSection";
import TimeLine from "../components/Experience/Timeline";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <>
      {/* <Hero slides={SliderData} /> */}
      <HeroSection />
      <InfoSection {...aboutData} />
      <InfoSection {...educationData} />
      {/* <Features /> */}
      <TimeLine />
      <Skills />
      {/* <Listings /> */}
    </>
  );
};

export default Home;
