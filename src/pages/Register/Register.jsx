import React from "react";
import "./Register.scss";
import logo from "../../assets/logo.svg";
import line from "../../assets/line.png";
import { Link } from "react-router-dom";
import register_img from "../../assets/player.png";
import player from "../../assets/player_text.png";

const Register = () => {
  return (
    <>
      <div className="register-page">
        <img src={line} alt="img" />
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <p>ФЕДЕРАЦИЯ ГОЛЬФА УЗБЕКИСТАНА</p>
        </div>

        <div className="register">
          <div className="register-content">
            <div className="register-images">
              <img src={player} alt="img" />
              <img className="player" src={register_img} alt="img" />
            </div>

            <div className="register-text">
              <h2>Добро пожаловать на сайт Федерации Гольфа Узбекистана</h2>
              <p>
                Заполните поля ниже для регистрации в системе Федерации Гольфа
                Узбекистана
              </p>
              <div className="register-input">
                <label>ФИО</label>
                <input type="text" name="text" placeholder="Слава Марлоу" />
              </div>
              <div className="register-input">
                <label>Номер телефона</label>
                <input
                  type="text"
                  name="text"
                  placeholder="+998 90 938 43 54"
                />
              </div>
              <div className="register-input">
                <label>Email</label>
                <input
                  type="text"
                  name="text"
                  placeholder="slava92@gmail.com"
                />
              </div>
              <div className="register-input">
                <label>Дата рождения</label>
                <select name="#" id="#">
                  <option></option>
                  <option>blablabla</option>
                  <option>blablabla</option>
                </select>
              </div>
              <div className="register-input">
                <label>HCP</label>
                <input type="text" name="text" />
              </div>
              <div className="register-input">
                <label>Пароль</label>
                <input type="password" name="text" placeholder="•••••••••••" />
              </div>
              <div className="register-input">
                <label>Повторите пароль</label>
                <input type="password" name="text" placeholder="•••••••••••" />
              </div>
              <button className="register-btn">Зарегестироваться</button>

              <div className="link">
                <Link to={"/login"}>
                  Есть аккаунт? <span> Войдите в аккаунт</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src={line} alt="img" className="mt-[120px]" />
      </div>
    </>
  );
};

export default Register;
