import React from "react";
import "./HomeInfo.scss";
import InfoPosts from "../InfoPost/InfoPosts";

const HomeInfo = () => {
  return (
    <>
      <div className="info">
        <div className="info-text">
          <h2>Информация о гольфе</h2>
          <p>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста
          </p>
        </div>
       <InfoPosts/>
       <button className="aplicate-btn">Смотреть все</button>
      </div>
    </>
  );
};

export default HomeInfo;
