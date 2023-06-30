import React from "react";
import "./Participate.scss";
import Header from "../../components/Header/Header";
import partic_img from "../../assets/single_img.png";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import flag from "../../assets/flag.png";
import carousel_img from "../../assets/carousel_img.png";
import carousel_img1 from "../../assets/carousel_img1.png";
import carousel_img2 from "../../assets/carousel_img2.png";
import flag2 from "../../assets/flag2.png";


const Participate = () => {
  return (
    <>
      <div className="partic">
        <Header />

        <div className="partic-glavniy">
          <Link to="/past">
            {"Главный  >  Ближайшие События  >  “Кубок страны/5 этап"}
          </Link>
        </div>

        <div className="partic-post">
          <div className="partic-text">
            <h2>Кубок страны/5 этап</h2>
            <div>
              Этап пройдет с 6 по 20 сентября 2020. Не упустите шанс
              зарегестрироваться на отборочный этап уже сегодня!
              <p> с 6 по 20 сентября 2020. </p>
              <button className="partic-btn"><a href="#aplicate"> Принять участие</a></button>
            </div>
          </div>
          <img src={partic_img} alt="img" />
        </div>

        <div className="partic-post-div">
          <p className="partic-post-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях.
          </p>
          <p className="partic-post-text">
            При создании генератора мы использовали небезизвестный универсальный
            код речей. Текст генерируется абзацами случайным образом от двух до
            десяти предложений в абзаце, что позволяет сделать текст более
            привлекательным и живым для визуально-слухового восприятия.
          </p>
          <p className="partic-post-text">
            По своей сути рыбатекст является альтернативой традиционному lorem
            ipsum, который вызывает у некторых людей недоумение при попытках
            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
            русском языке наполнит любой макет непонятным смыслом и придаст
            неповторимый колорит советских времен.
          </p>
          <p className="partic-post-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях.
          </p>

          <div className="partic-post-icons">
            <h4 className="partic-post-h4">Поделитесь этой статьей:</h4>
            <div className="partic-icon">
              <i className="fa-brands fa-facebook icon"></i>
              <i className="fa-brands fa-instagram icon"></i>
              <i className="fa-brands fa-telegram icon"></i>
            </div>
          </div>
        </div>

        <div className="partic-aplicate" id="aplicate">
          <img className="flag" src={flag} alt="img" />

          <div className="aplicate-text">
            <h2>Подать заявку на участие</h2>
            <p>
              Этап пройдет с 6 по 20 сентября 2020. Не упустите шанс
              зарегестрироваться на отборочный этап уже сегодня!
            </p>
          </div>

          <div className="aplicate-inputs-div">
      <img className="flag-2" src={flag2} alt="img" />

            <div className="aplicate-inputs">
              <div className="aplicate-input">
                <label>ФИО</label>
                <input
                  type="text"
                  name="text"
                  placeholder="Ким Вячеслав Андреевич"
                />
              </div>
              <div className="aplicate-input">
                <label>HCP</label>
                <input
                  type="phone"
                  name="phone"
                  placeholder="+998 90 938 43 54"
                />
              </div>
              <div className="aplicate-input">
                <label>Пол</label>
                <select className="w-[200px]" name="a" id="a">
                  <option value="#"></option>
                  <option value="#">Мужской</option>
                  <option value="#">Женский</option>
                  <option value="#">Не указан</option>
                </select>
              </div>
            </div>
            <div className="aplicate-inputs">
              <div className="aplicate-input">
                <label>Дата рождения</label>
                <select>
                  <option value="#"></option>
                  <option value="#">blablablabla</option>
                  <option value="#">blablablabla</option>
                  <option value="#">blablablabla</option>
                </select>
              </div>
              <div className="aplicate-input">
                <label>Гражданство</label>
                <input
                  type="text"
                  name="text"
                  placeholder="Ким Вячеслав Андреевич"
                />
              </div>
              <div className="aplicate-input">
                <label>UGF IF (опционально)</label>
                <input type="text" name="text" />
              </div>
            </div>
          </div>
          <button className="aplicate-btn">Отправить запрос</button>
        </div>

        <div className="single-footer-posts">
          <h2 className="ml-[50px]">Другие ближайшие события</h2>
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
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default Participate;
