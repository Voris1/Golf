import React from "react";
import "./Footer.scss";
import logo from "../../assets/footer_logo.svg";
import { Link } from "react-router-dom";
import line from "../../assets/line.png";

const Footer = () => {
  return (
    <>
      <footer>
        <img src={line} alt="img" />
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
            <div className="footer-logo-text">
              <p>a+998 97 733 30 06</p>
              <p>
                <a href="mailto:rugrid91@gmail.com"> rugrid91@gmail.com</a>
              </p>
              <div className="footer-logo-icon">
                <i className="fa-brands fa-facebook icon"></i>
                <i className="fa-brands fa-instagram icon"></i>
                <i className="fa-brands fa-telegram icon"></i>
              </div>
            </div>
          </div>

          <div className="footer-text">
            <div className="footer-txt">
              <ul>
                <Link to="/">
                  <li>Главный</li>
                </Link>
                <Link to="/about">
                  <li>О нас</li>
                </Link>
                <Link to="/event">
                  <li>События</li>
                </Link>
                <Link to="/golfist">
                  <li>Гольфисты</li>
                </Link>
              </ul>
            </div>
            <div className="footer-txt">
              <ul>
                <Link to="/info">
                  <li>Информация о гольфе</li>
                </Link>
                <Link to="/gallery">
                  <li>Галерея</li>
                </Link>
                <Link to="/oferta">
                  <li>Публичная оферта</li>
                </Link>
                <Link to={'/politik'}>
                  <li>Политика конфедециальности</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="select">
            Русский<i className="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <hr />
        <p className="hr-p">
          © 2020. Uzbekistan Golf Federation. All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
