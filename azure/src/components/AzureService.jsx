import React from "react";
import Card from "./Card";
import {Lin,Azure,Functions,Vilo,appService,Featured }from "../assets/Images/index";

import "../styles/AzureService.css";

function AzureService({ paragraph, heading, cardStyle,imgStyle }) {
  return (
    <div className="section">
      <div className="section-heading">
        <h2>Start putting your ideas into action with Azure products and services</h2>
      </div>
      <div className="section-first">
      <div className="section-text">
        <ul>
          <li>
            <button className="service-btn">
              <h3>Popular</h3>
            </button>
          </li>

          <li>
            <button className="service-btn">
              <h3>Al + machine learing</h3>
            </button>{" "}
          </li>
          <li>
            <button className="service-btn">
              <h3>Compute</h3>
            </button>{" "}
          </li>
          <li>
            <button className="service-btn">
              {" "}
              <h3>Containers</h3>
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="service-btn">
              <h3>Hybrid + multicloud</h3>
            </button>{" "}
          </li>
          <li>
            {" "}
            <button className="service-btn">
              <h3>Internet of Things(loT)</h3>
            </button>{" "}
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
      <div className="main-card">
      <div className="card-section">
      
        
        <Card
              imgsrc={Lin}
              imgStyle={{width:"1rem",height:"2rem"}}
              cardStyle={{ width: "16rem",height:"15rem",fontSize:"15px"}}
              heading="Azure Container Apps"
              paragraph="Build and deploy modern apps using serverless containers"/>
              
            
            <Card 
            imgsrc={Azure}
            imgStyle={{width:"2rem",height:"2rem"}}
            cardStyle={{width:"16rem",height:"15rem",fontSize:"15px"}}
             paragraph="Build and operate live games using a single platform" 
             heading="Azure PlayFab" />
             </div>
             <div>
            <Card 
            imgsrc={Functions}
            imgStyle={{width:"1rem",height:"2rem"}} 
            cardStyle={{width:"16rem",height:"15rem",fontSize:"15px"}}
            paragraph="Trigger app with serverless computing"
             heading="Azure Functions" />

<Card 
            imgsrc={Vilo}
            imgStyle={{width:"2rem",height:"2rem"}} 
            cardStyle={{width:"16rem",height:"15rem",fontSize:"15px"}}
            paragraph="Trigger app with serverless computing"
             heading="Azure Functions" />
             </div>
             <div>
            <Card 
            imgsrc={appService}
            imgStyle={{width:"3rem",height:"2rem"}} 
            cardStyle={{width:"16rem",height:"15rem",fontSize:"15px"}}
            paragraph="Trigger app with serverless computing"
             heading="Azure Functions" />

<Card 
            imgsrc={Functions}
            imgStyle={{width:"1rem",height:"2rem"}} 
            cardStyle={{width:"16rem",height:"15rem",fontSize:"15px"}}
            paragraph="Trigger app with serverless computing"
             heading="Azure Functions" />
             </div>

        </div>
<div className="azure-portal">
  <img src={Featured}/>
</div> 
      
      </div>
    </div>
  );
}

export default AzureService;
