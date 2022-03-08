import React from "react";
import { Azure } from "../assets/Images/index";
import { Twitter } from "../assets/Images/index";
import { Insta } from "../assets/Images/index";
import { Linked } from "../assets/Images/index"
import { RiArrowDropDownLine } from "react-icons/ri";
import "../styles/FooterNav.css";

function FooterNav() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <button className="footer-btn">
            <img src={Azure} alt="" />
            Get the Azure mobile app
          </button>
          <img src={Twitter} alt="" />
          <img src={Insta} alt="" />
          <img src={Linked} alt="" />

          </div>
          <div className="main-column">
          <div className="column">
            <ul>
              
            <h5>Explore Azure</h5>
            
            <li>What is Azure?</li>
            <li>Get Started</li>
            <li>Global infrasture</li>
            <li>Datacentre regions</li>
            <li>Trust your cloud</li>
            <li>Customer enablement</li>
            <li>Customer Stories</li>
            </ul>
          </div>
          <div>
            <ul>
              <h5>Products and pricing</h5>
              <li>Products</li>
              <li>Pricing</li>
              <li>Free Azure Service</li>
              <li>Flexible purchase option</li>
              <li>Cloud economics</li>
              <li>Optimise your costs</li>
            </ul>
          </div>
          <div>
            <ul>
              <h5> Solution and Support</h5>
              <li>Solutions</li>
              <li>Resources for COVID-19</li>
              <li>Solution architectures</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <ul>
              <h5>Partners</h5>
              <li>Azure Marketplace</li>
              <li>Find a partner</li>
              <li>Technology partners</li>
            </ul>
          </div>
          <div>
            <ul>
              <h5>
                Resources
                </h5>
                <li>Training and certifications</li>
                <li>Documentation</li>
                <li>Updates</li>
                <li>Blog</li>
                <li>Developer Resources</li>
            <li>Students</li>
            <li>Events and webinars</li>
            <li>Analyst reports,white papers and e-books</li>
            <li>Videos</li>
            </ul>
          </div>
          <div>
            <ul>
              <h5>Cloud computing</h5>
              <li>What a machine learning?</li>
              <li>What is the cloud?</li>
              <li>What is artificial intelligence?</li>
              <li>What is PaaS?</li>
              <li>What is a container?</li>
              <li>what is DevOps?</li>
            </ul>
          </div>
          </div>
          <div className="footer-button">
          <div className="footer-info">
            <h5>Change language</h5>
            <button className="button-footer">English(India) <RiArrowDropDownLine/> </button>
          </div>
          </div>
      </div>
    </div>
  );
}
export default FooterNav;
