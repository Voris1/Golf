import React from "react";
import "./Shot.scss";
import shot from "../../assets/shot.png";

const Shot = () => {
  return (
    <>
      <div className="shot" id="shot">
        <div className="shot-content">
          <h2 className="shot-h2">
            В Ташкенте стартовал Чемпионат Узбекистана по гольфу 2021
          </h2>
          <p className="shot-p">
            Недавно в состав Федерации гольфа Узбекистана был избран новый
            Председатель. Руководство Федерации уже начало осуществление новых
            планов.
          </p>
          <button className="shot-btn">Подробнее</button>
        </div>
        <img className="shot-img" src={shot} alt="img" />
      </div>
    </>
  );
};

export default Shot;
