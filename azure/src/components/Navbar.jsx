import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";

import { Micro } from "../assets/Images/index";
import Explore from "./Explore";
import Products from "./Products";
import Pricing from "./Pricing";
import Partners from "./Partners";
import "../styles/Navbar.css";
import Solution from "./Solution";
import Resources from "./Resources";
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
              <button onClick={() => handleDropdownClick("products")}>Products</button>
              <div
                className="dropdown-content"
                style={{ width: "80vw", display: activeDropdown === "products" ? "block" : "none" }}
              >
                <Products />
              </div>
              <button onClick={() => handleDropdownClick("solution")}>Solution</button>
              <div className="dropdown-content" style={{ display: activeDropdown === "solution" ? "block" : "none" }}>
                <Solution />
              </div>

              <button onClick={() => handleDropdownClick("pricing")}>Pricing</button>
              <div className="dropdown-content" style={{ display: activeDropdown === "pricing" ? "block" : "none" }}>
                <Pricing />
              </div>
              <button onClick={() => handleDropdownClick("partners")}>Partners</button>
              <div className="dropdown-content" style={{ display: activeDropdown === "partners" ? "block" : "none" }}>
                <Partners />
              </div>
              <button onClick={() => handleDropdownClick("resources")}>Resources</button>
              <div className="dropdown-content" style={{ display: activeDropdown === "resources" ? "block" : "none" }}>
                <Resources />
              </div>
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
