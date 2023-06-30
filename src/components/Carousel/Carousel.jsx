import React from "react";
import "./Carousel.scss";
import carousel_img from "../../assets/carousel_img.png";
import carousel_img1 from "../../assets/carousel_img1.png";
import carousel_img2 from "../../assets/carousel_img2.png";

const Carousel = () => {
  return (
    <div className="contayner">
      <div className="carousel ">
        <div className="item">
          <div className="item-text">
            <h2>Кубок страны/5 этап</h2>
            <p>
              Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
              шанс зарегестрироваться на отборочный этап уже сегодня!
            </p>
          </div>

          <img src={carousel_img} alt="img" />
          <button className="item-btn">Принять участие</button>
        </div>
        <div className="item">
          <div className="item-text">
            <h2>Кубок страны/6 этап</h2>
            <p>
              Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
              шанс зарегестрироваться на отборочный этап уже сегодня!
            </p>
          </div>

          <img src={carousel_img1} alt="img" />
          <button className="item-btn">Принять участие</button>
        </div>
        <div className="item">
          <div className="item-text">
            <h2>Кубок страны/7 этап</h2>
            <p>
              Этап пройдет <span> с 6 по 20 сентября 2020.</span> Не упустите
              шанс зарегестрироваться на отборочный этап уже сегодня!
            </p>
          </div>

          <img src={carousel_img2} alt="img" />
          <button className="item-btn">Принять участие</button>
        </div>
        <div className="item">
          <div className="item-text">
            <h2>Кубок страны/5 этап</h2>
            <p>
              Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
              шанс зарегестрироваться на отборочный этап уже сегодня!
            </p>
          </div>

          <img src={carousel_img1} alt="img" />
          <button className="item-btn">Принять участие</button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
