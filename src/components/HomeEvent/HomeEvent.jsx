import React from "react";
import Carousel from "../Carousel/Carousel";
import "./HomeEvent.scss";
import flag2 from "../../assets/flag2.png";

const HomeEvent = () => {
  return (
    <>
      <div className="home-event">
        <div className="home-event-text">
          <h2>Ближайшие события</h2>
          <p>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста{" "}
          </p>
        </div>
        <Carousel />
        <img className="flag" src={flag2} alt="img" />
        <div className="home-event-button">
          <button className="home-event-btn">Все события</button>
        </div>
      </div>
    </>
  );
};

export default HomeEvent;
