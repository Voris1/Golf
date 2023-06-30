import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Gallery.scss";
import gallery_img from "../../assets/gallery_img.svg";
import gallery_img1 from "../../assets/gallery_img1.png";
import gallery_img2 from "../../assets/gallery_img2.png";
import gallery_img3 from "../../assets/gallery_img3.png";
import gallery_img4 from "../../assets/gallery_img4.png";
import gallery_img5 from "../../assets/gallery_img5.png";
import Footer from "../../components/Footer/Footer";
import count_img from "../../assets/count_img.svg";
import dot from "../../assets/count_dot.png";

const Gallery = () => {
  const [count, setCount] = useState(false);

  return (
    <>
      <div className="gallery-page">
        <Header />
        <h1>Галерея</h1>
        <p className="glavniy">{"Главный  > Галерея"}</p>
        <div className="about-golf"></div>

        <div className="gallery-content">
          {count ? (
            <div className="count">
              <div className="count-content">
                <i
                  onClick={() => setCount(false)}
                  className="fa-regular fa-circle-xmark"
                ></i>
                <img src={count_img} alt="img" />
                <p>
                  Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр
                </p>
                <img className="count-dot" src={dot} alt="img" />
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="gallery-cards">
            <div className="gallery-card" onClick={() => setCount(true)}>
              <img src={gallery_img} alt="img" />
              <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
            </div>
            <div className="gallery-card" onClick={() => setCount(true)}>
              <img src={gallery_img1} alt="img" />
              <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
            </div>
            <div className="gallery-card" onClick={() => setCount(true)}>
              <img src={gallery_img2} alt="img" />
              <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
            </div>
          </div>
          <div className="gallery-cards">
            <div className="gallery-card" onClick={() => setCount(true)}>
              <img src={gallery_img3} alt="img" />
              <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
            </div>
            <div className="gallery-card" onClick={() => setCount(true)}>
              <img src={gallery_img4} alt="img" />
              <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
            </div>
            <div className="gallery-card" onClick={() => setCount(true)}>
              <img src={gallery_img5} alt="img" />
              <p>Чемпионат 2020, турнир 2/ этап 5, Победитель Югай Александр</p>
            </div>
          </div>
          <div className="gallery-button">
            <button className="gallery-btn">Показать еще</button>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Gallery;
