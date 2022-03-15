import React from "react";
import Card from "./Card";
import CardItems from "../Constants/AzureService";
import {Lin,Azure,Functions,Vilo,appService,Featured }from "../assets/Images/index";


import "../styles/AzureService.css";

function AzureService({ paragraph, heading, cardStyle, imgStyle }) {
  // // const handleClick = (e) => {
  // //   <card />;
  // };
  return (
    <div className="section">
      <div className="section-heading">
        <h2>Start putting your ideas into action with Azure products and services</h2>
      </div>
      <div className="section-first">
        <div className="section-text">
          <ul>
            <li>
              {/* <button type="button" onClick={handleClick} className="popular">
                Popular
              </button>
              <button type="button" onClick={handleClick} className="popular">
                Al+ machine learning
              </button>  */}
              <button type="button" className="popular">
                Compute
              </button>
              <button type="button" className="popular">
                Containers
              </button>
              <button type="button" className="popular">
                Hybrid + multicloud
              </button>

              <button type="button" className="popular">
                Internet of Things(loT)
              </button>
            </li>
          </ul>
          <li>
            <button className="service-btn">
              <h3 className="section-bottom">
                See all products(200+1)<span>></span>
              </h3>
            </button>
          </li>{" "}
        </div>
        <div>{ }</div>
        <div className="main-card">
          <div className="card-section">
            {CardItems.key2.map((CardItem) => {
              return (
                <div key={CardItem}>
                  <Card
                    imgsrc={CardItem.imgsrc}
                    imgStyle={{ width: "2rem", height: "2rem" }}
                    cardStyle={{ width: "16rem", height: "15rem", fontSize: "15px" }}
                    heading={CardItem.heading}
                    paragraph={CardItem.paragraph}
                  />
                </div>
              );
            })}
          </div>
          {/* <Card
              imgsrc={Lin}
              imgStyle={{ width: "1rem", height: "2rem" }}
              cardStyle={{ width: "16rem", height: "15rem", fontSize: "15px" }}
              heading="Azure Container Apps"
              paragraph="Build and deploy modern apps using serverless containers"
            />

            <Card
              imgsrc={Azure}
              imgStyle={{ width: "2rem", height: "2rem" }}
              cardStyle={{ width: "16rem", height: "15rem", fontSize: "15px" }}
              paragraph="Build and operate live games using a single platform"
              heading="Azure PlayFab"
            />
          </div>
          <div className="card-sect">
            <Card
              imgsrc={Functions}
              imgStyle={{ width: "1rem", height: "2rem" }}
              cardStyle={{ width: "16rem", height: "15rem", fontSize: "15px" }}
              paragraph="Trigger app with serverless computing"
              heading="Azure Functions"
            />

            <Card
              imgsrc={Vilo}
              imgStyle={{ width: "2rem", height: "2rem" }}
              cardStyle={{ width: "16rem", height: "15rem", fontSize: "15px" }}
              paragraph="Trigger app with serverless computing"
              heading="Azure Functions"
            /> */}

          {/* <div className="card-sec">
            <Card
              imgsrc={appService}
              imgStyle={{ width: "3rem", height: "2rem" }}
              cardStyle={{ width: "16rem", height: "15rem", fontSize: "15px" }}
              paragraph="Trigger app with serverless computing"
              heading="Azure Functions"
            />

            <Card
              imgsrc={Functions}
              imgStyle={{ width: "1rem", height: "2rem" }}
              cardStyle={{ width: "16rem", height: "15rem", fontSize: "15px" }}
              paragraph="Trigger app with serverless computing"
              heading="Azure Functions"
            />
          </div> */}
        </div>
        <div className="azure-portal">
          <img src={Featured} />
          <h5>
            View Azure Portal<br></br>Scrennshot in fullscreen
          </h5>
        </div>
      </div>
    </div>
  );
}

export default AzureService;
