import React from "react";

import "../styles/Card.css";

function Card({ imgsrc, heading, paragraph, cardStyle }) {
  return (
    <div className="card-container">
      <div className="card" style={cardStyle}>
        <img src={imgsrc} alt="" />
        <div>
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
