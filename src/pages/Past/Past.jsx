import React, { useState } from "react";
import "./Past.scss";
import Header from "../../components/Header/Header";
import carousel_img from "../../assets/carousel_img.png";
import carousel_img1 from "../../assets/carousel_img1.png";
import carousel_img2 from "../../assets/carousel_img2.png";
import Footer from "../../components/Footer/Footer";

import { Link } from "react-router-dom";

const Past = () => {
  const [past, setPast] = useState(false);

  return (
    <>
      <div className="past">
        <Header />

        <div className="past-golf"></div>

        <div className="past-head" onClick={() => setPast(true)}>
          <p>Прошедшие</p> События<i className="fa-solid fa-chevron-down"></i>
        </div>
        <p className="glavniy">{"Главный  > Прошедшие события"}</p>

        <div className="past-click-div">
          {past ? (
            <div className="past-click">
              <div className="past-content">
                <div className="past-status">
                  <p>Выберите статус событий для отображения</p>{" "}
                  <i
                    onClick={() => setPast(false)}
                    className="fa-regular fa-circle-xmark"
                  ></i>
                </div>
                <div className="past-selects">
                  <Link to={"/event"}>
                    <div className="past-select-2">
                      <p>Ближайшие события</p>
                    </div>
                  </Link>

                  <div className="past-select">
                    <p>Прошедшие события</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="past-div">
          <div className="past-items">
            <div className="item">
              <div className="item-text">
                <h2>Кубок страны/5 этап</h2>
                <p>
                  Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
                  шанс зарегестрироваться на отборочный этап уже сегодня!
                </p>
              </div>
              <img src={carousel_img} alt="img" />
              <Link to={"/pastEvent"}>
                <button className="item-btn">Посмотреть результаты</button>
              </Link>{" "}
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
              <Link to={"/pastEvent"}>
                <button className="item-btn">Посмотреть результаты</button>
              </Link>
            </div>
            <div className="item">
              <div className="item-text">
                <h2>Кубок страны/5 этап</h2>
                <p>
                  Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
                  шанс зарегестрироваться на отборочный этап уже сегодня!
                </p>
              </div>
              <img src={carousel_img2} alt="img" />
              <Link to={"/pastEvent"}>
                <button className="item-btn">Посмотреть результаты</button>
              </Link>
            </div>
          </div>
          <div className="past-items">
            <div className="item">
              <div className="item-text">
                <h2>Кубок страны/5 этап</h2>
                <p>
                  Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
                  шанс зарегестрироваться на отборочный этап уже сегодня!
                </p>
              </div>
              <img src={carousel_img} alt="img" />
              <Link to={"/pastEvent"}>
                <button className="item-btn">Посмотреть результаты</button>
              </Link>{" "}
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
              <Link to={"/pastEvent"}>
                <button className="item-btn">Посмотреть результаты</button>
              </Link>{" "}
            </div>
            <div className="item">
              <div className="item-text">
                <h2>Кубок страны/5 этап</h2>
                <p>
                  Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
                  шанс зарегестрироваться на отборочный этап уже сегодня!
                </p>
              </div>

              <img src={carousel_img2} alt="img" />
              <Link to={"/pastEvent"}>
                <button className="item-btn">Посмотреть результаты</button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Past;
