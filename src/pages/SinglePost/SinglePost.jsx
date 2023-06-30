import React from "react";
import "../SinglePost/SinglePost.scss";
import Header from "../../components/Header/Header";
import single_img from "../../assets/single_img.png";
import InfoPosts from "../../components/InfoPost/InfoPosts";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const SinglePost = () => {
  return (
    <>
      <div className="single-posts">
        <Header />
        <div className="single-glavniy">
          <Link to="/info">
            {
              "Главный  >  Информация о гольфе  >  “ELITSTROY CHAMPIONSHIP-2020” в Узбекистане"
            }
          </Link>
        </div>

        <div className="single-post">
          <div className="single-text">
            <h2>“ELITSTROY CHAMPIONSHIP-2020” в Узбекистане</h2>
            <div>
              Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
              сгенерировать несколько абзацев более менее осмысленного текста
              рыбы на русском языке, а начинающему оратору отточить навык
              публичных выступлений в домашних условиях.
              <p>4 мая, 2020</p>
            </div>
          </div>
          <img src={single_img} alt="img" />
        </div>
        <div className="info-text"></div>
        <div className="single-post-div">
          <p className="single-post-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях.
          </p>
          <p className="single-post-text">
            При создании генератора мы использовали небезизвестный универсальный
            код речей. Текст генерируется абзацами случайным образом от двух до
            десяти предложений в абзаце, что позволяет сделать текст более
            привлекательным и живым для визуально-слухового восприятия.
          </p>
          <p className="single-post-text">
            По своей сути рыбатекст является альтернативой традиционному lorem
            ipsum, который вызывает у некторых людей недоумение при попытках
            прочитать рыбу текст. В отличии от lorem ipsum, текст рыба на
            русском языке наполнит любой макет непонятным смыслом и придаст
            неповторимый колорит советских времен.
          </p>
          <p className="single-post-text">
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста рыбы
            на русском языке, а начинающему оратору отточить навык публичных
            выступлений в домашних условиях.
          </p>

          <div className="single-post-icons">
            <h4 className="single-post-h4">Поделитесь этой статьей:</h4>
            <div className="single-icon">
              <i className="fa-brands fa-facebook icon"></i>
              <i className="fa-brands fa-instagram icon"></i>
              <i className="fa-brands fa-telegram icon"></i>
            </div>
          </div>

          <hr />
        </div>
        <div className="single-footer-posts">
          <h2>Вам может быть интересно</h2>
          <InfoPosts />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SinglePost;
