import React from "react";

import Nba from "../../../assets/Nba.png";
import Mondelez from "../../../assets/Mondelez.jpg";
import PepsiCo from "../../../assets/PepsiCo.png";
import Nhs from "../../../assets/Nhs.png";
import Bosch from "../../../assets/Bosch.png";
import Ge from "../../../assets/Ge.png";
import "./style.css";

function AzureInnovation() {
  return (
    <div className="azureinnovation">
      <div className="azureinnovation-heading">
        <h2>Find out how these customers are innovating with Azure</h2>
      </div>
      <div className="button-img">
        <button className="button-img1">
          {" "}
          <img width="80rem" src={Nba} alt="" />{" "}
        </button>
        <button className="button-img2">
          <img width="100rem" src={Mondelez} alt="" />
        </button>
        <button className="button-img3">
          <img width="100rem" src={PepsiCo} alt="" />
        </button>
        <button className="button-img4">
          <img width="100rem" src={Nhs} alt="" />
        </button>
        <button className="button-img5">
          <img width="100rem" src={Bosch} alt="" />
        </button>
        <button className="button-img5">
          <img width="70rem" src={Ge} alt="" />
        </button>
      </div>
      <div className="azureinnovation-img">
        <div className="azureinnovation-text">
          <div className="inno-info">
            <p>To bring fans deeper into the game,NBA CourtOptix uses Azure</p>
            <p>machine learning and AI solution to provide on-screen analysis</p>
            of every shot,pass and play.
            <h5>Case study</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AzureInnovation;
