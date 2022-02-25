import React,{useState} from "react";
import nba from "../assets/nba.png";
import mondelez from "../assets/mondelez.jpg";
import PepsiCo from "../assets/PepsiCo.png";
import nhs from "../assets/nhs.png";
import Bosch from "../assets/Bosch.png";
import ge from "../assets/ge.png";
import football from "../assets/football.webp";



  function AzureInnovation(){
    
    return(
        <div className="azureinnovation">

         <div><h2>Find out how these customers are innovating with Azure</h2></div>
         <div className="button-img">
         <button className="button-img1"> <img width="80rem" src={nba} alt=""/> </button>
         <button  className="button-img2"><img width="100rem" src={mondelez} alt=""/></button>
         <button className="button-img3"><img width="100rem" src={PepsiCo} alt=""/></button>
         <button className="button-img4"><img width="100rem" src={nhs} alt=""/></button>
         <button className="button-img5"><img width="100rem" src={Bosch} alt=""/></button>
         <button className="button-img5"><img width="70rem" src={ge} alt=""/></button>
         </div>
         <div className="azureinnovation-img">
             <div className="azureinnovation-text">
                 <div className="inno-info">
                 <p>To bring fans deeper into the game,NBA CourtOptix uses Azure</p>
                 <p>machine learning and AI solution to provide on-screen analysis</p>
                 of every shot,pass and play.

                 <h5>Case study</h5>
                 </div>
             </div>


         </div>

        

        </div>
        
    )
}

export default AzureInnovation;