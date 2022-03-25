import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscSearch } from "react-icons/vsc";
import { Micro } from "../assets/Images/index";
import Explore from "./Explore";

// import Products from "./Products";
import Pricing from "./Pricing";
import Partners from "./Partners";

import Solution from "./Solution";
import Resources from "./Resources";

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
              <a href="" className="azure">
                <b>Azure</b>
              </a>
            </li>
            <div className="navbar-option">
              <button className="navbtn" onClick={() => handleDropdownClick("explore")}>
                Explore <RiArrowDropDownLine />
              </button>
              <div className="dropdown-content" style={{ display: activeDropdown === "explore" ? "block" : "none" }}>
                <Explore />
              </div>
              <button className="navbtn" onClick={() => handleDropdownClick("products")}>
                Products
                <RiArrowDropDownLine />
              </button>
              <div
                className="dropdown-info"
                style={{ width: "80vw", display: activeDropdown === "products" ? "block" : "none" }}
              >
                {/* <Products />  */}
              </div>
              <button className="navbtn" onClick={() => handleDropdownClick("solution")}>
                Solution
                <RiArrowDropDownLine />
              </button>
              <div className="dropdown-content" style={{ display: activeDropdown === "solution" ? "block" : "none" }}>
                <Solution />
              </div>

              <button className="navbtn" onClick={() => handleDropdownClick("pricing")}>
                Pricing
                <RiArrowDropDownLine />
              </button>
              <div className="dropdown-content" style={{ display: activeDropdown === "pricing" ? "block" : "none" }}>
                <Pricing />
              </div>
              <button className="navbtn" onClick={() => handleDropdownClick("partners")}>
                Partners
                <RiArrowDropDownLine />
              </button>
              <div className="dropdown-content" style={{ display: activeDropdown === "partners" ? "block" : "none" }}>
                <Partners />
              </div>
              <button className="navbtn" onClick={() => handleDropdownClick("resources")}>
                Resources
                <RiArrowDropDownLine />
              </button>
              <div className="dropdown-content" style={{ display: activeDropdown === "resources" ? "block" : "none" }}>
                <Resources />
              </div>
            </div>

            <button className="btn">Free account</button>
          </ul>
        </div>
        <div>
          <ul className="right-side">
            {/* <button className="btn-b" placeholder="search">
              Search
              <VscSearch />
            </button> */}
            <div className="input-btn">
              <input type="" placeholder="search" name=""></input>
              <VscSearch />
            </div>

            {/* <form>
  <input type="text" placeholder="search" name="search"></input>
   <button type="submit" className="btn-b"></button> 
</form>  */}

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
