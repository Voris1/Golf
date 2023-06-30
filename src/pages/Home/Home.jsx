import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Shot from "../../components/Shot/Shot";
import Info from "../../components/Info/Info";
import HomeEvent from "../../components/HomeEvent/HomeEvent";
import HomeGolfist from "../../components/HomeGolfist/HomeGolfist";
import HomeGallery from "../../components/HomeGallery/HomeGallery";
import HomeInfo from "../../components/HomeInfo/HomeInfo";
import Partner from "../../components/Partner/Partner";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <Shot />
        <Info />
        <HomeEvent />
        <HomeGolfist />
        <HomeGallery />
        <HomeInfo />
        <Partner />
        <Footer />
      </div>
    </>
  );
};

export default Home;
