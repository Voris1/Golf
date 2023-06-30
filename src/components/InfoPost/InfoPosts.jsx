import React from "react";
import "./InfoPosts.scss";
import info from "../../assets/info_img.png";
import info1 from "../../assets/info_img1.png";
import info2 from "../../assets/info_img2.png";
import info3 from "../../assets/info_img3.png";
import { Link } from "react-router-dom";

const InfoPosts = () => {
  return (
    <>
      <div className="info-posts">
        <div className="info-golf-cards">
          <Link to="/singlePost">
            <div className="info-golf-card">
              <img src={info} alt="img" />
              <div className="info-golf-text">
                <p>2 мая, 2020</p>
                <h4>Открытый чемпионат по гольфу в Ташкенте</h4>
                <p>Завершился Открытый чемпионат Республики Узбекистан...</p>
              </div>
            </div>
          </Link>

          <Link to="/singlePost">
            <div className="info-golf-card">
              <img src={info1} alt="img" />
              <div className="info-golf-text">
                <p>4 мая, 2020</p>
                <h4>Финал чемпионата по гольфу пройдет в Узбекистане</h4>
                <p>
                  С 16.10.2020 по 18.10.2020 под эгидой Министерства спорта...
                </p>
              </div>
            </div>
          </Link>

          <Link to="/singlePost">
            <div className="info-golf-card">
              <img src={info2} alt="img" />
              <div className="info-golf-text">
                <p>4 мая, 2020</p>
                <h4>“ELITSTROY CHAMPIONSHIP-2020” в Узбекистане</h4>
                <p>Завершился Открытый чемпионат Республики Узбекистан...</p>
              </div>
            </div>
          </Link>

          <Link to="/singlePost">
            <div className="info-golf-card">
              <img src={info3} alt="img" />
              <div className="info-golf-text">
                <p>7 июля, 2020</p>
                <h4>Открытый чемпионат по гольфу в Ташкенте</h4>
                <p>Завершился Открытый чемпионат Республики Узбекистан...</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoPosts;
