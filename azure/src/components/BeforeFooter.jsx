import React from "react"
import pricing from "../assets/pricing.svg";
import icon from "../assets/icon.svg";
function BeforeFooter(){
    return(
        <div className="beforefooter-container">

            <div className="beforefooter-card">
                <div className="beforefooter-card1">
                <img src={pricing}/>
                <h2>Start building on Azure free</h2>
                <p>Get popular services free for 12 months and 25+ other service free always-plus $200 credit to use in your first 30 days</p>
                </div>
                </div>
                <div>
                <div className="beforefooter-card2">
                    <img src={icon}/>
                    <h2>Contact an Azure sales specialist</h2>
                    <p>Get the answers you need-from how to get started to questions about your unique scenario- by talking to an Azure sales specialist</p>

                </div>


            </div>

        </div>
    )
}


export default BeforeFooter;