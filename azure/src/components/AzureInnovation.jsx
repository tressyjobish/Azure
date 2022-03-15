import React, { useState } from "react";
import Mondele from "./Mondele";
import Pepsi from "./Pepsi";
import Nh from "./Nh";
import Nbas from "./Nbas";
import Nhss from "./Nhss";
import Bosh from "./Bosh";
import GG from "./GG";

import { Nba, Mondelez, Pepsico, Nhs, Bosch, Ge, Bas } from "../assets/Images/index";
import "../styles/AzureInnovation.css";

function AzureInnovation() {
  const [activeButton, setActiveButton] = useState("nbas");
  const handleDropdownClick = (name) => {
    console.log(name, activeButton);
    if (activeButton === name) {
      setActiveButton("");
    } else {
      setActiveButton(name);
    }
  };
  return (
    <div className="azureinnovation">
      <div className="azureinnovation-heading">
        <h2>Find out how these customers are innovating with Azure</h2>
      </div>
      <div div className="button-img">
        <button className="button-img1" onClick={() => handleDropdownClick("nbas")}>
          {" "}
          <img width="90rem" src={Nba} alt="" />{" "}
        </button>

        <button className="button-img2" onClick={() => handleDropdownClick("mondele")}>
          {" "}
          <img width="100rem" src={Mondelez} alt="" />{" "}
        </button>

        <button className="button-img3" onClick={() => handleDropdownClick("pep")}>
          {" "}
          <img width="100rem" src={Pepsico} alt="" />{" "}
        </button>

        <button className="button-img4" onClick={() => handleDropdownClick("nhss")}>
          {" "}
          <img width="100rem" src={Nhs} alt="" />{" "}
        </button>

        <button className="button-img5" onClick={() => handleDropdownClick("Bosh")}>
          {" "}
          <img width="100rem" src={Bosch} alt="" />{" "}
        </button>

        <button className="button-img6" onClick={() => handleDropdownClick("gg")}>
          <img width="70rem" src={Ge} alt="" />{" "}
        </button>
      </div>
      <div className="azureinnovation-img">
        <div className="dropdown-cont" style={{ display: activeButton === "nbas" ? "block" : "none" }}>
          <Nbas />
        </div>
        <div className="dropdown-cont" style={{ display: activeButton === "nhss" ? "block" : "none" }}>
          <Nhss />
        </div>
        <div className="dropdown-cont" style={{ display: activeButton === "Bosh" ? "block" : "none" }}>
          <Bosh />
        </div>
        <div className="dropdown-cont" style={{ display: activeButton === "nhs" ? "block" : "none" }}>
          <Nhss />
        </div>
        <div className="dropdown-cont" style={{ display: activeButton === "pep" ? "block" : "none" }}>
          <Pepsi />
        </div>
        <div className="dropdown-cont" style={{ display: activeButton === "gg" ? "block" : "none" }}>
          <GG />
        </div>
        <div className="dropdown-cont" style={{ display: activeButton === "mondele" ? "block" : "none" }}>
          <Mondele />
        </div>
      </div>
    </div>
  );
}

export default AzureInnovation;
