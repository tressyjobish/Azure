import React from "react";

import "../styles/Card.css";

function Card({ imgsrc, heading, paragraph, cardStyle, imgStyle,headingStyle }) {
  return (
    <div className="card-container">
      <div className="card" style={cardStyle}>
        <img src={imgsrc} alt="" style={imgStyle} />
        <div className="style-info" style={headingStyle}>
          <h3>{heading} </h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
