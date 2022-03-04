import React from "react";

function AzureServiceCard({imgsrc,p,a},){
    return(
        <div className="service-container">
            <div className="service"></div>
            <img src={imgsrc} alt=""/>
            <p>{p}</p>
            <a>{a}</a>
            
        </div>

    )
}

export default AzureServiceCard;