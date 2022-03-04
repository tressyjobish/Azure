import React from "react";
import "../Styles/Card.css";

function Card({ imgsrc, heading, p }) {
  return (
    <div className="card-container">
      <div className="card">
        <img src={imgsrc} alt="" />
        <h3>{heading}</h3>
        <p>{p}</p>
      </div>
    </div>
  );
}

export default Card;
