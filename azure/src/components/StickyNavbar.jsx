import React from "react";
import '../styles/StickyNavbar.css';

const StickyNavbar = ({children}) => {
  window.addEventListener('scroll', () => {
    let navbar = document.getElementById('nav');
    if ( window.pageYOffset  > 795){
      navbar.classList.add('navbar-show');
    } else {
      navbar.classList.remove('navbar-show');
    }
  });

  return (
    <div class="navbar" id="nav">{children}</div>
  )
};

export default StickyNavbar;