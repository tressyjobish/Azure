import React from "react";

import '../styles/Pricing.css';

function Pricing(){
return(
    <div className="pricing-container">
        <div className="pricing-info">
            <h5>How to buy</h5>
            <h4>Azure pricing</h4>
            <p>Get the best value at every stage of your cloud journey</p><br></br>

            <h5>Free Azure services</h5>
            <p>See which service offer free monthly amounts</p><br></br>

            <h5>Pay as you go</h5>
            <p>Only pay for what you use,plus get free services</p><br></br>

            <h5>Flexible purchase options</h5>
            <p>Find the option that works best for you </p><br></br>
            <h5>Azure benefits and incentives</h5>
            <p>Explore special offers,benefit and incentives</p>
        </div>
        <div className="pricing-row">
            <p>Pricing tools and resources</p><br></br>
            <h4>Pricing calculator</h4>
            <p>Estimate the costs for Azure products and services</p><br></br>
            <h4>TCO calculator</h4>
            <p>Estimate your total cost of ownership and cost saving</p><br></br>
            <h4>Optimise your cost </h4>
            <p>Learn how to MainPage and optimise your cloud spend</p><br></br>
            <h4>Cloud economics</h4>
            <p>Understand the value and economics of moving to Azure</p>


        </div>
    </div>
)
}

export default Pricing;