import React, { useState } from "react";
import Card from "./Card";
import CardItems from "../Constants/AzureService";
import { Lin, Azure, Functions, Vilo, appService, Featured } from "../assets/Images/index";

import "../styles/AzureService.css";

function AzureService({ paragraph, heading, cardStyle, imgStyle }) {
  const [state, setState] = useState("popular");

  const handleDropdownClick = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="section">
      <div className="section-heading">
        <h2>Start putting your ideas into action with Azure products and services</h2>
      </div>
      <div className="section-first">
        <div className="section-text">
          <ul>
            <li>
              <button className="popular" value="popular" onClick={handleDropdownClick}>
                {" "}
                Popular
              </button>
              <button className="popular" value="ai" onClick={handleDropdownClick}>
                {" "}
                Al + machine learning
              </button>
              <button className="popular" value="Compute" onClick={handleDropdownClick}>
                {" "}
                Compute
              </button>
              <button className="popular" value="Containers" onClick={handleDropdownClick}>
                {" "}
                Containers
              </button>
              <button className="popular" value="Hybridmulticloud" onClick={handleDropdownClick}>
                {" "}
                Hybrid + multicloud
              </button>

              <button className="popular" value="Internet"onClick={handleDropdownClick}>
                {" "}
                Internet of Things(Iot)
              </button>
              <button className="service-btn" onClick={handleDropdownClick}>
                {" "}
                See all products(200+1)<span></span>
              </button>
            </li>
          </ul>
        </div>

        <div className="main-card">
          <div className="card-section">
            {CardItems[state].map((CardItem, index) => {
              console.log(CardItem);
              return (
                <div key={CardItem.id}>
                  <Card
                    imgsrc={CardItem.imgsrc}
                    imgStyle={{ width: "2rem", height: "2rem" }}
                    cardStyle={{ width: "16rem", height: "18rem", fontSize: "15px",padding:"2rem" }}
                    heading={CardItem.heading}
                    paragraph={CardItem.paragraph}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="azure-portal">
          <img src={Featured} />
          <h5>
            View Azure Portal<br></br>Screnshot in fullscreen
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AzureService;
