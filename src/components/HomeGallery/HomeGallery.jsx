import React from "react";
import "./HomeGallery.scss";
import gallery_img from "../../assets/carousel_img.png";
import dot from '../../assets/dot.png'
import flag from '../../assets/flag.png'

const HomeGallery = () => {
  return (
    <>
      <div className="home-gallery">
        <div className="gallery-text">
          <h2>Галерея</h2>
          <p>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста
          </p>
        </div>
        <div className="gallery-cards">
          <div className="gallery-card">
            <img src={gallery_img} alt="img" />
            <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
          </div>
          <div className="gallery-card">
            <img src={gallery_img} alt="img" />
            <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
          </div>
          <div className="gallery-card">
            <img src={gallery_img} alt="img" />
            <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
          </div>
        </div>
        <img className="dot" src={dot} alt="img" />
      </div>
      <img className="gallery-flag" src={flag} alt="img" />

    </>
  );
};

export default HomeGallery;
