import React from "react";
import { VscAzure } from "react-icons/vsc";

import "../styles/Banner.css";
function Banner() {
  return (
    <div className="banner">
      <div className="text">
        <div className="pre-heading1">
          <h2>INVENT WITH PURPOSE</h2>
          <br></br>
        </div>
        <div className="pre-heading2">
          <h1>Azure.The innovate-</h1>
          <br></br>
        </div>
        <div className="pre-heading2">
          <h1>anywhere,create-</h1>
          <br></br>
        </div>
        <div className="pre-heading2">
          <h1>anything cloud.</h1>
          <br></br>
        </div>
        <div className="pre-para">
          <p>
            Build on your terms using Azure plus your favorite open-source and community-driven<br></br>
            tools and frameworks.Start with an Azure free account,12 months of popular services
            <br></br>free,and a $200 credit
          </p>
          <br></br>
        </div>
        <div>
          <button className="btn2">Try Azure for free</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
