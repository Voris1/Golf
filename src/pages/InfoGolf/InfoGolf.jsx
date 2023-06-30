import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import InfoPosts from "../../components/InfoPost/InfoPosts";
import "./InfoGolf.scss";

const InfoGolf = () => {
  return (
    <>
      <div className="info-golf">
        <Header />
        <h1>Информация о гольфе</h1>
        <p className="glavniy">{"Главный  > Информация о гольфе"}</p>

        <div className="info-text"></div>
        <InfoPosts />
        <InfoPosts />

        <div className="info-golf-button">
          <button className="info-golf-btn">Смотреть все</button>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default InfoGolf;
