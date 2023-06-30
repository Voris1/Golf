import React from 'react';
import './Info.scss'
import golfist from "../../assets/golfist.png";
import golfist1 from "../../assets/golfist1.png";
import golfist2 from "../../assets/golfist2.png";
import flag from "../../assets/flag.png"

const Info = () => {
    return (
        <>
            <div className="info">
          <div className="info-text">
            <h2>О Федерации Гольфа Узбекистана</h2>
            <p>
              Ташкентский гольф-клуб — это международный проект, в строительстве
              которого участвовали специалисты из Южной Кореи и Узбекистана.
            </p>
          </div>
          <div className="info-cards">
            <div className="info-card">
              <img src={golfist} alt="img" className="info-img" />
              <h2>Основана в 2000 году</h2>
              <p>
                Главная задача этой организации заключается в популяризации
                данного вида спорта среди граждан Узбекистана
              </p>
            </div>
            <div className="info-card">
              <img src={golfist1} alt="img" className="info-img" />
              <h2>Площадь клуба 100 гектаров</h2>
              <p>
                На территории клуба, помимо полей для гольфа, располагаются
                ресторан, гостиница, бассейн и тренировочная площадка
              </p>
            </div>{" "}
            <div className="info-card">
              <img src={golfist2} alt="img" className="info-img" />
              <h2>Первый клуб в Центр. Азии</h2>
              <p>
                Это первый клуб международного стандарта, состоящий из 18 лунок,
                и для каждой лунки имеется своё поле
              </p>
            </div>
          </div>
          <img className="flag" src={flag} alt="img" />
        </div>

    
        </>
    );
};

export default Info;