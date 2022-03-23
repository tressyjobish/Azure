import React from "react";
import { VscSearch } from "react-icons/vsc";

import { VirtualMachine, AzureVirtual, AzureSql, AzureCosmosDB } from "../assets/Images/index";

import "../styles/Products.css";
function Products() {
  return (
    <div className="products">
      <div className="products-text">
        <div>
          <button className="product-btn">
            <VscSearch />
            Search all products
          </button>

          <div>
            <h5>Results will display instanly</h5>
          </div>
          <div className="feature">
            <h4>Featured</h4>
            <ul>
              <li> Al+ Machine Learning</li>
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
        <div className="pro-coloum">
      
      <h3>Featured</h3>
      <div>
        <h3>Explore Some of the popular Azure products</h3>
      
      <div className="production-cards">
        <div className="production-container">
          <div className="card-colum">
          <div className="Pro-card1  ">
            <img src={VirtualMachine} alt="" />
            <h3>Virtual Machines</h3>
            <br></br>
            <p>Provision Windows and Linus Virtual</p>
            Machines in seconds
          </div>
          <div className="pro-card1 ">
            <img src={AzureVirtual} alt="" />
            <h3>Azure Virtual Desktop</h3>
            <br></br>
            <p>Enable a secure,remote desktop</p>
            experience from anywhere
          </div>
          <div className="pro-card1  ">
            <img src={AzureSql} alt="" />
            <h3>Azure Sql</h3>
            <br></br>
            <p>Managed,always up-to-date SQL</p>
            instance in the cloud
          </div>
          <div className="pro-card1 ">
            <img src={AzureCosmosDB} alt="" />
            <h3>Azure Cosmos DB</h3>
            <br></br>
            <p>Fast NoSQL database with open</p>
            APIs for any scale
          </div>
        </div>
        </div>
        </div>
      </div>
        <div className="production-container2">
          <div className="pro-card5">
            {/* <img src={appService} alt="" />
            <h3>App Service</h3>
            Quickly create powerful cloud apps<br></br>
            for web and mobile */}
          </div>
        </div>
      </div>
    
      </div>
      <div className="pro-row">
       
      </div>
    </div>
  );
}
export default Products;
