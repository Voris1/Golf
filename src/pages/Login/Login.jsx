import React from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import line from "../../assets/line.png";
import register_img from "../../assets/regitr.svg";

const Login = () => {
  return (
    <>
      <div className="login">
        <div className="register-page">
          <img src={line} alt="" />
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <p>ФЕДЕРАЦИЯ ГОЛЬФА УЗБЕКИСТАНА</p>
          </div>

          <div className="register">
            <div className="register-content">
              <img src={register_img} alt="img" />

              <div className="register-text">
                <h2>Добро пожаловать на сайт Федерации Гольфа Узбекистана</h2>
                <p>
                  Используйте свой электронный адрес, чтобы войти в
                  аккаунт/зарегестироваться.
                </p>

                <div className="register-input">
                  <label>Email</label>
                  <input
                    type="text"
                    name="text"
                    placeholder="slava92@gmail.com"
                    minLength={3}
                  />
                </div>

                <div className="register-input">
                  <label>Пароль</label>
                  <input type="password" name="text" minLength={3} required 
                  placeholder="•••••••••••"/>
                </div>

                <button className="register-btn">
                  <Link to={"/"}>Войти</Link>{" "}
                </button>

                <div className="link">
                  <Link to={"/register"}>
                    Есть аккаунт? <span> Войдите в аккаунт</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src={line} alt="img" className="mt-[120px]" />
      </div>
    </>
  );
};

export default Login;