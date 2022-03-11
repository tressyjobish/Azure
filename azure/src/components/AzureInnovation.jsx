import React, {useState} from "react";
import Mondele from "./Mondele";
import Pepsi from "./Pepsi";
import Nh from "./Nh";
import Nbas from "./Nbas";

import { Nba, Mondelez, Pepsico, Nhs, Bosch, Ge } from "../assets/Images/index";
import "../styles/AzureInnovation.css";

function AzureInnovation() {

  const [activeDropButton, setActiveDropButton] = useState("mondele");
  const handleDropdownClick = (name) => {
    console.log(name, activeDropButton);
    if (activeDropButton === name) {
      setActiveDropButton("");
    } else {
      setActiveDropButton(name);
    }
  };
  return (
    <div className="azureinnovation">
      <div className="azureinnovation-heading">
        <h2>Find out how these customers are innovating with Azure</h2>
      </div>
      <div div className="button-img">
      {/* <button className="button-img1">
          {" "}
          <img width="80rem" src={Nba} alt="" />{" "}
        </button>  */}
        <button className="button-img1"onClick={() => handleDropdownClick("mondele")}> <img width="90rem" src={Nba} alt="" />{" "}{" "}
        </button>
             

      <button className="button-img2"onClick={() => handleDropdownClick("mondele")}> <img width="100rem" src={Mondelez} alt="" />{" "}
        </button>
             


              <button className="button-img3"onClick={() => handleDropdownClick("pepsico")}>  <img width="100rem" src={Pepsico} alt="" />{" "}
        </button>
              
     
              
              <button className="button-img4"onClick={() => handleDropdownClick("Nhs")}> <img width="100rem" src={Nhs} alt="" /> {" "}
        </button>
             
               
              <button className="button-img5"onClick={() => handleDropdownClick("Bosch")}>  <img width="100rem" src={Bosch} alt="" />{" "}
        </button>
              
               
              <button className="button-img6"onClick={() => handleDropdownClick("Ge")} ><img width="70rem" src={Ge} alt="" />{" "}
        </button>
              
           
        
        
       </div>
      <div className="azureinnovation-img">
        {/* <div className="azureinnovation-text">
          <div className="inno-info">
            <p>To bring fans deeper into the game,NBA CourtOptix uses Azure</p>
            <p>machine learning and AI solution to provide on-screen analysis</p>
            of every shot,pass and play.
            <h5>Case study</h5>
          </div>
        </div> */}
        <div className="dropdown-cont" style={{ display: activeDropButton === "Ge" ? "block" : "none" }}>
                <Nbas /></div>
        <div className="dropdown-cont" style={{ display: activeDropButton === "Ge" ? "block" : "none" }}>
                <Pepsi />
              </div>
              <div className="dropdown-cont" style={{ display: activeDropButton === "Bosch" ? "block" : "none" }}>
                <Pepsi />
              </div>
              <div className="dropdown-cont" style={{ display: activeDropButton === "Nhs" ? "block" : "none" }}>
                <Nh />
              </div>
              <div className="dropdown-cont" style={{ display: activeDropButton === "pepsico" ? "block" : "none" }}>
                <Pepsi />
              </div>
              <div className="dropdown-cont" style={{ display: activeDropButton === "mondele" ? "block" : "none" }}>
                <Mondele />
              </div>
      </div>
      
    </div>
  );
}

export default AzureInnovation;
