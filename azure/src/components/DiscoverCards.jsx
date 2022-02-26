import React from "react";
import dot from "../assets/dot.webp";
import linuxazure from "../assets/linuxazure.webp";
import resources from "../assets/resources.webp";

function DiscoverCards(prop){
    return(
        <div>
        <div className="discover-container">
            <h2>Discover what is happening on Azure</h2>
            <div className="discover-card">
                <div className="discover-info">
                    
                <img src="https://azurecomcdn.azureedge.net/cvt-b25e2f3ec9c26362149a7eee6f74a05256aebbf9fc0478ff53685ffa53bf98b1/images/page/home/news/open-source-day-596w.webp"/>
                 <h5>EVENT:AZURE OPEN SOURCE DAY</h5>
                 <p>Learn how Microsoft works with the<br></br> open-source community to develop<br></br> new technologies- watch live or on<br></br>demand.</p>
                 </div>
                 <div className="discover-info">
                     <img src={dot}/>
                     <h5> BIRTHDAY,.NET</h5>
                     <p>Join us to celebrate 20 years of<br></br> innovation on the cross-platform,<br></br>
                         open-sourse.NET dev platform.
                     </p>
                 </div>
                 <div className="discovers-info2">
                   <div className="discovers-text">
                         <h3>Learn how to simplify and Accelerate open-source solution on Linux with Azure</h3>
                     </div> 
                 </div>
                 </div>
                
                 <div className="discover-row">
                 <div className="discover-rowcard">
                <img src={resources}/>
                </div>
                </div>
                 

            </div>
        </div>
    )
}
export default DiscoverCards;