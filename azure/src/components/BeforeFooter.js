import React from "react";
import { Pricing,Icon,Book } from "../assets/Images/index";

import "../Styles/BeforeFooter.css";
function BeforeFooter() {
  return (
    <div className="beforefooter-container">
      <div className="beforefooter-cards">
      <div className="beforefooter-card1">
        <img src={Pricing}alt=""/>
        <h2>Start building on Azure free</h2>
        <p>
          Get popular services free for 12 months and 25+ other service free always-plus $200 credit to use in your first 30
          days
        </p>
      </div>

      <div className="beforefooter-card2">
        <img src={Icon} alt="" />
        <h2>Contact an Azure sales specialist</h2>
        <p>
          Get the answers you need-from how to get started to questions about your unique scenario- by talking to an Azure
          sales specialist
        </p>
      </div>
      <div className="beforefooter-card3">
        <img src={Book} alt="" />
        <h2>New to Azure?Microsoft Learn at your own pace</h2>
        <p>Learn the basics of cloud computing and Azure with self-paced modules on Microsoft Learn</p>
      </div>
      </div>
    </div>
  );
}

export default BeforeFooter;
