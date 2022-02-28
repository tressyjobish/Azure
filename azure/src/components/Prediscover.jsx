import React from "react";
import{FcVideoFile} from "react-icons/fc";

function Prediscover(){
    return(
        <div className="prediscover-container">
            <div className="prediscover-img">
                < div className="prediscover-info">
                    <h2>Inspired by his aunt with motor neuron disease,Julius<br></br> 
                    Sweetland created the OptiKey controlled by eye <br></br>movement-using source and Azure</h2>
               <div><button className="button-video"><FcVideoFile/>Watch the story(1:59)</button>
                 <h5>Check out more inventor stories</h5></div>
                </div>
            </div>
        </div>
    )
}

export default Prediscover;