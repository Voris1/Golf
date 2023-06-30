import React from 'react';
import './Golfist_user.scss'
import golfist1 from "../../assets/golfist_img.png";
import golfist2 from "../../assets/golfist_img1.png";
import golfist3 from "../../assets/golfist_img2.png";
import golfist4 from "../../assets/golfist_img3.png";
import golfist5 from "../../assets/golfist_img4.png";

const Golfist_user = () => {
    return (
        <>
            <div className="golfists">
          <div className="golfist-cards">
            <div className="golfist-card">
              <img src={golfist1} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist2} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist3} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist4} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist5} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
          </div>
          <div className="golfist-cards">
            <div className="golfist-card">
              <img src={golfist4} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist5} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist2} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist1} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist3} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
          </div>
          <div className="golfist-cards">
            <div className="golfist-card">
              <img src={golfist2} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist4} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist1} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist5} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
            <div className="golfist-card">
              <img src={golfist3} alt="img" />
              <h2>Taxirov Dilshod</h2>
              <p>HCP:6 | UGF ID: 00005365</p>
            </div>
          </div>
          <div className="golfist-button">
            <button className="golfist-btn">Показать еще</button>
          </div>
        </div>
        </>
    );
};

export default Golfist_user;