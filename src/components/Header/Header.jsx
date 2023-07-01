import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../assets/logo.svg";
import line from "../../assets/line.png";

const Header = () => {
  return (
    <>
      <img src={line} alt="img" />
      <header>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <p>ФЕДЕРАЦИЯ ГОЛЬФА УЗБЕКИСТАНА</p>
        </div>
        <nav className="nav">
          <ul className="nav-ul">
            <Link to="/about" className="nav-ul-li">
              О нас
            </Link>
            <Link to="/golfist" className="nav-ul-li">
              Гольфисты Узбекистана
            </Link>
            <Link to="/info" className="nav-ul-li">
              Информация о гольфе
            </Link>
            <Link to="/document" className="nav-ul-li">
              Документы
            </Link>
            <Link to="/gallery" className="nav-ul-li">
              Галерея
            </Link>
            <Link to="/event" className="nav-ul-li">
              События
            </Link>
            <Link to="/login" className="nav-ul-li-icon">
              <i className="fa-solid fa-user"></i>
              <p className="nav-ul-li">Войти в аккаунт</p>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
