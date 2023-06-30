import React from "react";
import Header from "../../components/Header/Header";
import "./Document.scss";
import document from "../../assets/document.svg";
import document1 from "../../assets/document1.svg";
import document2 from "../../assets/document2.svg";
import doc from "../../assets/doc.svg";
import Footer from "../../components/Footer/Footer";

const Document = () => {
  return (
    <>
      <div className="document">
        <Header />
        <h1>Документ</h1>
        <p className="glavniy">{"Главный  > Документ"}</p>
        <div className="about-golf"></div>

        <div className="document-content">
          <div className="document-posts">
            <div className="document-post">
              <img src={document} alt="img" />
              <p>
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев
              </p>
              <i className="fa-regular fa-circle-down"></i>
            </div>
            <hr />

            <div className="document-post">
              <img src={document1} alt="img" />
              <p>
                При создании генератора мы использовали небезизвестный
                универсальный код речей
              </p>
              <i className="fa-regular fa-circle-down"></i>
            </div>
            <hr />

            <div className="document-post">
              <img src={document} alt="img" />
              <p>
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев
              </p>
              <i className="fa-regular fa-circle-down"></i>
            </div>
            <hr />

            <div className="document-post">
              <img src={document2} alt="img" />
              <p>
                Текст генерируется абзацами случайным образом от двух до десяти
                предложений в абзаце
              </p>
              <i className="fa-regular fa-circle-down"></i>
            </div>
            <hr />

            <div className="document-post">
              <img src={document1} alt="img" />
              <p>
                При создании генератора мы использовали небезизвестный
                универсальный код речей
              </p>
              <i className="fa-regular fa-circle-down"></i>
            </div>
            <hr />

            <div className="document-post">
              <img src={document2} alt="img" />
              <p>
                Текст генерируется абзацами случайным образом от двух до десяти
                предложений в абзаце
              </p>
              <i className="fa-regular fa-circle-down"></i>
            </div>
            <hr />

            <div className="document-post">
              <img src={document} alt="img" />
              <p>
                Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
                сгенерировать несколько абзацев{" "}
              </p>
              <i className="fa-regular fa-circle-down"></i>
            </div>
            <hr />
          </div>

          <div className="quest">
            <img src={doc} alt="img" />
            <h2 className="quest-h2">
              Возникли вопросы по документам? Заполните форму ниже.
            </h2>

            <div className="quest-inputs">
              <div className="quest-input">
                <label>Имя</label>
                <input type="text" name="text" placeholder="Вячеслав" />
              </div>
              <div className="quest-input">
                <label>Email</label>
                <input
                  type="text"
                  name="text"
                  placeholder="slava92@gmail.com"
                />
              </div>
              <div className="quest-input-message">
                <label>Сообщение</label>
                <input type="text" name="text" className="quest-message" />
              </div>
            </div>
            <div className="quest-button">
              <button className="quest-btn">Отправить запрос</button>
            </div>
          </div>
        </div>
      </div>
      <Footer/>

    </>
  );
};

export default Document;
