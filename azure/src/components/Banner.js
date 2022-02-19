import React from "react";
import HeroImage from "../assets/banner.webp"

function Banner(){
    return(

        <div>
            <section>
                <div className="heading">
                    <h3>
                        We are in this together.Explore Azure Resources and tools to help you navigate COVID-19
                    </h3>
                    <div className="hero-img">
                     <img  width="100%" height="100%"src={HeroImage}></img> 
                
                    </div>
                    

                </div>
            </section>
        </div>

    );
}
export default Banner;