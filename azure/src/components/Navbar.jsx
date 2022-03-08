import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";

import { Micro } from "../assets/Images/index";
import Explore from "./Explore";
// import Products from "./Products";
import "../styles/Navbar.css";
function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState("");
  const handleDropdownClick = (name) => {
    console.log(name, activeDropdown);
    if (activeDropdown === name) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(name);
    }
  };
  // console.log(activeDropdown,);
  return (
    <header>
      <div className="head">
        <div className="nav">
          <ul className="left-side">
            <li>
              <a href="https://microsoft.com">
                <img src={Micro} alt="azureIcon" />
              </a>
            </li>
            <li>
              <a href="">
                <b>Azure</b>
              </a>
            </li>
            <div className="navbar-option">
              <button onClick={() => handleDropdownClick("explore")}>Explore</button>
              <div className="dropdown-content" style={{ display: activeDropdown === "explore" ? "block" : "none" }}>
                <Explore />
              </div>
              {/* <button onClick={() => handleDropdownClick("products")}>Products</button>
              <div className="dropdown-content" style={{width:"80vw", display: activeDropdown === "products" ? "block" : "none" }}>
                <Products /> 
              </div> */}
              <label>
                <select>
                  <option value="Solutions">Solutions</option>
                </select>
              </label>
              <label>
                <select>
                  <option value="Pricing">Pricing</option>
                </select>
              </label>
              <label>
                <select>
                  <option value="Partners">Partners</option>
                </select>
              </label>
              <label>
                <select>
                  <option value="Resources">Resources</option>
                </select>
              </label>
            </div>

            <button className="btn">Free account</button>
          </ul>
        </div>
        <div>
          <ul className="right-side">
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
