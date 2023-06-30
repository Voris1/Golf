import React, { useState } from "react";
import "./EventPage.scss";
import Header from "../../components/Header/Header";
import carousel_img from "../../assets/carousel_img.png";
import carousel_img1 from "../../assets/carousel_img1.png";
import carousel_img2 from "../../assets/carousel_img2.png";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const EventPage = () => {
  const [event, setEvent] = useState(false);

  return (
    <>
      <div className="event">
        <Header />

        <div className="event-golf"></div>

        <div className="event-head" onClick={() => setEvent(true)}>
          <p>Ближайшие</p> События<i className="fa-solid fa-chevron-down"></i>
        </div>
        <p className="glavniy">{"Главный  > Ближайшие События"}</p>

        <div className="event-click-div">
          {event ? (
            <div className="event-click">
              <div className="event-content">
                <div className="event-status">
                  <p>Выберите статус событий для отображения</p>{" "}
                  <i
                    onClick={() => setEvent(false)}
                    className="fa-regular fa-circle-xmark"
                  ></i>
                </div>
                <div className="event-selects">
                  <div className="event-select">
                    <p>Ближайшие события</p>
                  </div>
                  <Link to={"/past"}>
                    <div className="event-select-2">
                      <p>Прошедшие события</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="items-div">
          <div className="items">
            <div className="item">
              <div className="item-text">
                <h2>Кубок страны/5 этап</h2>
                <p>
                  Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
                  шанс зарегестрироваться на отборочный этап уже сегодня!
                </p>
              </div>

              <img src={carousel_img} alt="img" />
              <Link to={"/participate"}>
                <button className="item-btn">Принять участие</button>
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
              <img src={carousel_img1} alt="img" />
              <Link to={"/participate"}>
                <button className="item-btn">Принять участие</button>
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
              <Link to={"/participate"}>
                <button className="item-btn">Принять участие</button>
              </Link>
            </div>
          </div>
          <div className="items">
            <div className="item">
              <div className="item-text">
                <h2>Кубок страны/5 этап</h2>
                <p>
                  Этап пройдет <span>с 6 по 20 сентября 2020.</span> Не упустите
                  шанс зарегестрироваться на отборочный этап уже сегодня!
                </p>
              </div>
              <img src={carousel_img} alt="img" />
              <Link to={"/participate"}>
                <button className="item-btn">Принять участие</button>
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
              <Link to={"/participate"}>
                <button className="item-btn">Принять участие</button>
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
              <Link to={"/participate"}>
                <button className="item-btn">Принять участие</button>
              </Link>{" "}
            </div>
          </div>
        </div>
        <p>{event}</p>
        <Footer />
      </div>
    </>
  );
};

export default EventPage;
