import React from "react";
import SearchBar from "./SearchBar";
import CategoriesDropdown from "./CategoriesDropdown";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <a href="#" className="logo">
          udemy
        </a>

        <CategoriesDropdown />

        <SearchBar />

        <div className="header-actions">
          <a href="#" className="business-link">
            Udemy Business
          </a>
          <a href="#" className="teach-link">
            Teach on Udemy
          </a>
          <a href="#" className="cart-link">
            <i className="fas fa-shopping-cart"></i>
          </a>
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
          <button className="language-btn">
            <i className="fas fa-globe"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
