import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className={theme}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <Link
              className="navbar-brand"
              to="/home"
              style={{ color: "#43c9be" }}
            >
              {" "}
              <b>Himalayan Store</b>{" "}
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    Posts
                  </Link>
                </li>
              </ul>
            </div>
            <i className="fa fa-cart-plus"></i>
            <button
              className="btn btn-secondary m-3"
              type="button"
              onClick={toggleTheme}
            >
              Dark Mode
            </button>
            {/* <button className="btn btn-light m-3" type="button">Light Mode</button> */}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
