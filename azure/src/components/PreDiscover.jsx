import React from "react";
import { FcVideoFile } from "react-icons/fc";

import "../styles/PreDiscover.css";
function PreDiscover() {
  return (
    <div className="prediscover-container">
      <div className="prediscover-img">
        <div className="prediscover-info">
          <h2>
            See how game developers at Rare use Azure PlayFab to<br></br>
            dynamically scale and seamlessly migrate palyers through <br></br>movement-using source and Azure
          </h2>
          <div className="button-heading">
            <button className="button-video">
              <FcVideoFile />
              Watch the story(1:59)
            </button>
            <h5>Check out more inventor stories</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PreDiscover;
