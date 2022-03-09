import React from "react";
import '../styles/Resources.css';
function Resources(){
    return(
        
              <div className="resources">
      <div className="resources-text">
        <div>
          <h5>Learning</h5>
        </div>
        <div>
          <p>Get Started with Azure</p>
        </div>
        <div>
          <p>
    Training and certifiaction
          </p>
        </div>
        <div>
          <p>Customer stories</p>
          <p>
            Analyst report,while papers and e-book
          </p>
        </div>
        <div>
          <p>Cloud economics</p>
          <p>
            Learn more about cloud computing
          </p>
        </div>
      </div>
      
       < div className="resources-coloum"> 
        <div className="resources-row">
          <h5>Technical resources</h5>
          <p>
            Documentation
          </p>
          <p>Developer resources</p>
            <p>Quickstart templates
              
            </p>
          </div>
          
          
          <div className="resources-row2">
              <div><h5>Community</h5>
              <p>Developer community</p>
              <p>Students</p>
              <p>Developer stories</p></div>
              
          </div>
        </div>
      </div>
    

        

        
    )
}

export default Resources;