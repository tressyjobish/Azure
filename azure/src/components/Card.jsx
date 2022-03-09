import React from "react";

import "../styles/Card.css";

function Card({ imgsrc, heading, paragraph, cardStyle,imgStyle }) {
  return (
    <div className="card-container">
      <div className="card" style={cardStyle}>
        <img src={imgsrc} alt="" style={imgStyle}/>
        <div>
          <h3>{heading} </h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
