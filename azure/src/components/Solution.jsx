import React from "react";

import "../styles/Solution.css";

function Solution(){
    return(
<div className="solution-container">
    <div className="sub-container">
    {/* <div className="solution-text">
        <ul className="style-button">
<li><button className="button-a">Use cases</button></li>
<li><button className="button-b">Industry solutions</button></li>
<li><button className="button-c">Organisation type</button></li>
<li><button className="button-d">Resources</button></li></ul>
 </div> */}
 <div className="use-case">
     <h2><b>Use cases</b></h2>
     <h4>Application development</h4>
     <p>Build,manage and continuously deliver cloud apps<br></br>-with any platform or language </p><br></br>
 
     <h4>Data and analytics</h4>
     <p>Gather,store,process,analyse and visualise data of <br></br>any variety,volume or velocity</p><br></br>
     
     <h4>Security and governance</h4>
     <p>Help protect data,apps and infrastructure with<br></br> trusted security service</p>
     </div>
     <div className="ai">
         <h4>AI</h4>
         <p>Analyse Images,comprehend speech and make<br></br> predictions using data</p>
         <h4>Hybrid cloud and infrastructure</h4>
         <p>Bring the agility and innovation of the cloud to your<br></br> on-premises workloads </p>
         </div>
         <div className="cloud">
         <h4>Cloud migration and modernisation</h4><br></br>
         <p>Simplify and accerlate your migration and <br></br>modernisation with guidance,tools and resources </p>
         <h4>Internet of Things</h4>
         <p>Connect,monitor,and control devices with secure,<br></br>scalable,and open edge-to-cloud solution</p>
     </div>
     <div>
         
     </div>
 </div>
</div>

    )
}

export default Solution; 