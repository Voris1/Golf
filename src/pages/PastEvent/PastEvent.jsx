import React from "react";
import Header from "../../components/Header/Header";
import "./PastEvent.scss";
import past_img from "../../assets/single_img.png";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import table_img from "../../assets/table_img.svg";
import table_img1 from "../../assets/table_img1.png";
import table_img2 from "../../assets/table_img2.png";
import table_img3 from "../../assets/table_img3.png";
import table_img4 from "../../assets/table_img4.png";
import table_img5 from "../../assets/table_img5.png";
import table_img6 from "../../assets/table_img6.png";
import table_img7 from "../../assets/table_img7.png";
import table_img8 from "../../assets/table_img8.png";
import table_img9 from "../../assets/table_img.svg";
import carousel_img from "../../assets/carousel_img.png";
import carousel_img1 from "../../assets/carousel_img1.png";
import carousel_img2 from "../../assets/carousel_img2.png";
import Footer from "../../components/Footer/Footer";

const PastEvent = () => {
  return (
    <>
      <div className="past-event">
        <Header />

        <div className="past-glavniy">
          <Link to="/past">
            {"Главный  >  Прошедшие События  >  “Кубок страны/5 этап"}
          </Link>
        </div>

        <div className="past-post">
          <div className="past-text">
            <h2>Кубок страны/5 этап</h2>
            <div>
              Этап пройдет с 6 по 20 сентября 2020. Не упустите шанс
              зарегестрироваться на отборочный этап уже сегодня!
              <p> с 6 по 20 сентября 2020. </p>
              <button className="past-btn">
                <a href="#table"> Посмотреть результаты</a>
              </button>
            </div>
          </div>
          <img src={past_img} alt="img" />
        </div>

        <div className="past-post-div">
          <p className="past-post-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях.
          </p>
          <p className="past-post-text">
            При создании генератора мы использовали небезизвестный универсальный
            код речей. Текст генерируется абзацами случайным образом от двух до
            десяти предложений в абзаце, что позволяет сделать текст более
            привлекательным и живым для визуально-слухового восприятия.
          </p>
          <p className="past-post-text">
            По своей сути рыбатекст является альтернативой традиционному lorem
            ipsum, который вызывает у некторых людей недоумение при попытках
            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
            русском языке наполнит любой макет непонятным смыслом и придаст
            неповторимый колорит советских времен.
          </p>
          <p className="past-post-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях.
          </p>

          <div className="past-post-icons">
            <h4 className="past-post-h4">Поделитесь этой статьей:</h4>
            <div className="past-icon">
              <i className="fa-brands fa-facebook icon"></i>
              <i className="fa-brands fa-instagram icon"></i>
              <i className="fa-brands fa-telegram icon"></i>
            </div>
          </div>
        </div>

        <div className="tables" id="table">
          <div className="table-text">
            <h2>Подать заявку на участие</h2>
            <p>
              Этап пройдет с 6 по 20 сентября 2020. Не упустите шанс
              зарегестрироваться на отборочный этап уже сегодня!
            </p>
          </div>
          <Table className="table">
            <thead>
              <tr>
                <th>Место</th>
                <th>Участник</th>
                <th>HCP</th>
                <th>Очки</th>
                <th>1 этап</th>
                <th>2 этап</th>
                <th>3 этап</th>
                <th>4 этап</th>
                <th>5 этап</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>
              <tr>
                <td>2</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img1} alt="img" />
                  <p>Те Андрей </p>
                </td>
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>
              <tr>
                <td>3</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img2} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>
              <tr>
                <td>4</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img3} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>{" "}
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>
              <tr>
                <td>5</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img4} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>{" "}
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>
              <tr>
                <td>6</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img5} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>{" "}
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>{" "}
              <tr>
                <td>7</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img6} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>{" "}
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>{" "}
              <tr>
                <td>8</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img7} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>{" "}
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>{" "}
              <tr>
                <td>9</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img8} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>{" "}
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>{" "}
              <tr>
                <td>10</td>
                <td className="flex gap-[20px] items-center">
                  <img src={table_img9} alt="img" />
                  <p>Тахиров Дильшод </p>
                </td>
                <td>11</td>
                <td>1122</td>
                <td>124</td>
                <td>152</td>
                <td>146</td>
                <td>152</td>
                <td>130</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="past-footer-posts">
          <h2 className="ml-[50px]">Другие Прошедшие события</h2>
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
              <Link to={"/pastEvent"}>
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
              <Link to={"/pastEvent"}>
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
              <Link to={"/pastEvent"}>
                <button className="item-btn">Принять участие</button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PastEvent;
