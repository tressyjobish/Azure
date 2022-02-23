import React from "react";
import { VscSearch } from "react-icons/vsc";
import virtualMachine from "../assets/virtualMachine.png";
import azureVirtual from "../assets/azureVirtual.png";
import azureSql from "../assets/azureSql.jpg";

function Products(){
    return(
        <div className="products">
            <div className="products-text">
                <div>
            <button className="product-btn"><VscSearch />
            Search all products
            </button>

            
            <div>
            <h5>Results will display instanly</h5>
            

            </div>
            <div className="feature">
                <div>
            
            
            <h4>Featured</h4>
            <ul>
                <li>  Al+ Machine Learning</li>
                <li>Analytics</li>
                <li>Compute</li>
                <li>Containers</li>
                <li>Databases</li>
                <li>DevOps</li>
                <li>Developer Tools</li>
                <li>Hybrid + multicloud</li>
                <li>Identity</li>
                <li>Integration</li>
                <li>Internet of Things</li>
                <li>Management and Governane</li>
                <li>Media</li>
                <li>Migration</li>
                <li>Mixed Reality</li>
                <li>Mobile</li>
                <li>Networking</li>
                <li>Security</li>
                <li>Storage</li>
                <li>Web</li>
                <li>Windows Virtual Desktop</li>
                </ul>
                </div>
                </div>
                </div>
                </div>
                <div className="pro-row">
                    <div className="pro-coloum">
                  <h3>Featured</h3>
                  <div>
                      <h3>Explore Some of the popular Azure products</h3>
                  </div>
                  <div className="Pro-card">
                  <img src={virtualMachine} alt="" />
                  <h3>Virtual Machines</h3>
                  <p>Provision Windows and Linus Virtual</p>
                  Machines in seconds</div>
                  <div className="pro-card2">
                      <img src={azureVirtual} alt=""/>
                      <h3>Azure Virtual Desktop</h3>
                      <p>Enable a secure,remote desktop</p>
                      experience from anywhere
                  </div>
                  <div className="pro-card3">
                      <img src={azureSql} alt=""/>
                      <h3>Azure Sql</h3>
                      <p>Managed,always up-to-date SQL</p>
                      instance in the cloud
                  </div>
                  <div>
                      

                  </div>

                    </div>
                    
                </div>
                </div>
            
          

        
        
        
    )
       
}
export default Products;