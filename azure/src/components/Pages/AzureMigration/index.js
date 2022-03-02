import React from "react";
import backGround from "../../../assets/backGround.webp";
import "./style.css";

function AzureMigration() {
  return (
    <div className="azuremigration">
      <img src={backGround} />
      <div className="azuremigration-text">
        <div className="migration-text">
          <h2>
            Accelerate your migration and <br></br>modernisation with Azure
          </h2>
        </div>
        <div>
          <button className="migration-btn">Explore help and tools</button>
        </div>
      </div>
    </div>
  );
}

export default AzureMigration;
