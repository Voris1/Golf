import React from "react";
import Header from "../../components/Header/Header";
import "./Golfist.scss";

import Footer from "../../components/Footer/Footer";
import Golfist_user from "../../components/Golfist_user/Golfist_user";

const Golfist = () => {
  return (
    <>
      <div className="golfists">
        <Header />
        <h1>Гольфисты Узбекистана</h1>
        <p className="glavniy">{"Главный  > Гольфисты Узбекистана"}</p>

        <div className="about-golf"></div>
        <Golfist_user />
        <Footer />
      </div>
    </>
  );
};

export default Golfist;
