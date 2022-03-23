import React, { useEffect } from "react";
import { Micro } from "../assets/Images/index";
import "../styles/StickyNavbar.css";

const StickyNavbar = ({ children }) => {
  const addRemoveNavbar = () => {
    let navbar = document.getElementById("nav");
    if (window.pageYOffset > 795) {
      navbar.classList.add("navbar-show");
    } else {
      navbar.classList.remove("navbar-show");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      addRemoveNavbar();
    });
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("scroll", () => {
        addRemoveNavbar();
      });
    };
  });

  return (
    <div className="navbar" id="nav">
      <div className="azure-logo-wrapper">
        <a href="https://microsoft.com">
          <img className="azure-logo-wrapper-image" src={Micro} alt="azureIcon" />
        </a>
        <b>Azure</b>
      </div>
      <button className="azure-btn">Free account</button>
    </div>
  );
};

export default StickyNavbar;
