import React from "react";
import "./Partner.scss";
import hewlet from "../../assets/hewlet.svg";
import ofb from "../../assets/ofb.svg";
import orient from "../../assets/orient.svg";
import panasonic from "../../assets/panasonic.svg";
import walmart from "../../assets/walmart.svg";
import smalto from "../../assets/smalto.svg";

const Partner = () => {
  return (
    <>
      <div className="partner">
        <div className="partner-text">
          <h2>Наши партнеры</h2>
          <p>
            Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
            сгенерировать несколько абзацев более менее осмысленного текста{" "}
          </p>
        </div>
        <hr />
        <div className="brands">
          <img src={hewlet} alt="img" />
          <img src={ofb} alt="img" />
          <img src={orient} alt="img" />
          <img src={panasonic} alt="img" />
          <img src={smalto} alt="img" />
          <img src={walmart} alt="img" />
        </div>
        <hr />
        <div className="brands">
          <img src={smalto} alt="img" />
          <img src={panasonic} alt="img" />
          <img src={ofb} alt="img" />
          <img src={walmart} alt="img" />
          <img src={orient} alt="img" />
        </div>
        <hr />
      </div>
    </>
  );
};

export default Partner;
