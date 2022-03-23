import React from "react";
import "../styles/Explore.css";

function Explore() {
  return (
    <div className="explore">
      <div className="explore-text">
        <div>
          <h4>Explore Azure</h4>
        </div>
        <div>
          <h3>Get to know Azure</h3>
        </div>
        <div>
          <p>
            Discover secure,future-ready cloud solutions-on-premises,<br></br>hybid,multicloud or at the edge
          </p>
        </div>
        <div>
          <h3>Global infrastructure</h3>
          <p>
            Learn about sustainable,trusted cloud infrastructure with more
            <br></br>regions than any other provider
          </p>
        </div>
        <div>
          <h3>Cloud economics</h3>
          <p>
            Build your business case for the cloud with key financial and <br></br>
            technical guidance from Azure
          </p>
        </div>
      </div>
      <div className="explore-coloum">
        <div className="explore-row">
          <h3>Customer enablement</h3>
          <p>
            Plan a clear path forward for your cloud journey with proven<br></br> tools,guidance and resource
          </p>
          <div>
            <h3>Customer Stories</h3>
            <p>
              See example of innovation from successful companies of all sizes<br></br>
              and from all indus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
