import React from "react";
import "./About.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import AboutGolf from "../../components/AboutGolf/AboutGolf";
import Partner from "../../components/Partner/Partner";

const About = () => {
  return (
    <>
      <div className="about">
        <Header />
        <AboutGolf />
        <Partner />
        <Footer />
      </div>
    </>
  );
};

export default About;
