import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import azureIcon from "../assets/microsofticon.svg";



function Navbar() {

  
  
  return (
   
  
  
      <header>
          <div className="head">
          <div className="nav">
         <ul>
          <li>
            <a href="https://microsoft.com">
              <img src={azureIcon} alt="azureIcon" />
            </a>
          </li>
          <li>
            <a href="">
              <b>Azure</b>
            </a>
          </li>
          <li className="explr">
            <a href="">
              Explore
              <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="">
              Products
              <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="">
              Solutions
              <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="">
              Pricing
              <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="">
              Partners
              <RiArrowDropDownLine />
            </a>
          </li>
          <li>
            <a href="">
              Resources
              <RiArrowDropDownLine />
            </a>
          </li>

          <button className="btn">Free account</button>
          </ul>
           </div>  

          <div className="nava">
              <ul>
          <button className="btn-b">
            Search
            <VscSearch />
          </button>
          <li>
            <a href="">Docs</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Contact Sales</a>
          </li>
          <li>
            <a href="">Sign In</a>
          </li>
        </ul>
        </div>
          </div>
          
         
          </header>
          
          

   
  );
}

export default Navbar;
