import React from "react";
import "../styles/AzureService.css";

function AzureService({ paragraph, heading, cardStyle }) {
  return (
    <div className="section">
      <div className="section-heading">
        <h2>Start putting your ideas into action with Azure products and services</h2>
      </div>
      <div className="section-text">
        <ul>
          <li>
            <button className="service-btn">
              <h3>Popular</h3>
            </button>
          </li>

          <li>
            <button>
              <h3>Al + machine learing</h3>
            </button>{" "}
          </li>
          <li>
            <button>
              <h3>Compute</h3>
            </button>{" "}
          </li>
          <li>
            <button>
              {" "}
              <h3>Containers</h3>
            </button>{" "}
          </li>
          <li>
            {" "}
            <button>
              <h3>Hybrid + multicloud</h3>
            </button>{" "}
          </li>
          <li>
            {" "}
            <button>
              <h3>Internet of Things(loT)</h3>
            </button>{" "}
          </li>
        </ul>
        <li>
          <button>
            <h3 className="section-bottom">
              See all products(200+1)<span>></span>
            </h3>
          </button>
        </li>{" "}
      </div>
    </div>
  );
}

export default AzureService;
