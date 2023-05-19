import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import { ToastContainer, toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { BACkEND_URL } from "../config/config";
import axios from "axios";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [count, setCount] = useState();
  const [data,setData]=useState([]);
  const navigate = useNavigate();
  const logout = () => {
    toast.success("Logout successfull");
    localStorage.removeItem("tokenforlogin");
    localStorage.removeItem("token");
    navigate("/");
  };

  const handlecartitem = () => {
    navigate("/cartitems");
  };
  
  const getapidata = async () => {
    const res = await axios.get(`${BACkEND_URL}/getproducts`);
    setCount(res.data.filter((ele) => ele.status === true).length);
  };
  const getuserdata = async() => {
   const res = await axios.get(`${BACkEND_URL}/singleuserdata?id=${localStorage.getItem("token")}`)
   setData(res.data)
  }
  useEffect(() => {
    getapidata();
    getuserdata();
  }, []);
  return (
    <>
      <div className={theme}>
        <nav className="navbar navbar-expand-lg ">
          <div className="container navbar-item-gap">
            <div className="row">
              <div className="col">
                <Link
                  className="navbar-brand"
                  to="/home"
                  style={{ color: "#43c9be" }}
                >
                  {" "}
                  <b>Himalayan Store</b>{" "}
                </Link>
              </div>
              <div className="col">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="true"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
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
                    <li className="nav-item">
                      <button type="button" className="btn btn-primary btn-sm disabled">Welcome {data.FirstName}</button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col">
                <div className="header-right-content">
                  <button
                    className="btn btn-secondary m-3"
                    type="button"
                    onClick={toggleTheme}
                  >
                    Dark Mode
                  </button>
                  <button
                    className="btn btn-light m-3"
                    type="button"
                    onClick={logout}
                  >
                    Logout
                  </button>
                  <i className="fa fa-cart-plus" onClick={handlecartitem}></i>
                  <p style={{ color: "red" }}>{count}</p>
                </div>
              </div>
              <ToastContainer position="top-center" />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
