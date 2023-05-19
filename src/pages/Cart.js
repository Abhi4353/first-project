import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { BACkEND_URL } from "../config/config";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../components/ThemeContext";

const Cart = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);
  const [total, setTotal] = useState();
  const [count, setCount] = useState();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getcartdata = async () => {
    const res = await axios.get(`${BACkEND_URL}/getCarts?status=true`)
   .then((res)=>{
    console.log("res",res)
   setData(res.data.data)
   setTotal(res.data.total)
  })
    
  };

  const purchaseitem = (_id) => {
    navigate("/payment");
  };

  const removefromcart = async (e, id) => {
    const res = await axios.post(`${BACkEND_URL}/cartitems?id=${id}`, {
      status: false,
    });
    getcartdata();
  };

  useEffect(() => {
    getcartdata();

  }, []);
  return (
    <>
      <Layout>
      <div className={theme}>
        <div className="container-fluid text-center p-5 product-component2">
          <div className="row">
            <div className="col">
              <h1>
                <b>Cart Items</b>
              </h1>
            </div>
          </div>
        </div>
   
              {data.map((ele, key) => (
                <div className="container">
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                      <div className="set-columns-margin"> 
                        <div className="container-fluid">
                          <div className="row">
                          <div className="Cart-data-show" key={key}>
                            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                              <div className="inside-cart-container">
                                <img
                                  src={`${BACkEND_URL}/uploads/${ele.image}`}
                                />
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                              <div className="inside-cart-container-text">
                                <p>{ele.Title}</p>
                                <h5>Price:-&nbsp;Rs&nbsp;{ele.Price}</h5>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2">
                              <div className="inside-cart-container-quantity">
                                <p>Quantity :-5</p>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                              <div className="inside-cart-container-buttons">
                                <button
                                  type="button"
                                  className="btn btn-success"
                                  onClick={(e) => purchaseitem(e, ele._id)}
                                >
                                  Buy Now
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  onClick={(e) => removefromcart(e, ele._id)}
                                >
                                  Remove From Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        <div></div>
                      </div>
                      </div>
                  
                  </div>
                </div>
              ))}
           
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="Cart-data-show2">
                <div className="container-fluid">
                  <div className="row">
                    <div className="set-columns-margin2">
                    <div className="col-sm-6 col-md-8 col-lg-8 col-xl-8">
                      <div className="grand-total-container">
                        <h1>Number Of Products :-&nbsp;&nbsp;{data.length}</h1>
                        <h1>Grand Total :-&nbsp;&nbsp;{total}</h1>
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                      <div className="buy-all-container">
                        <button
                          type="button"
                          className="btn btn-success"
                          onClick={(e) => purchaseitem(e)}
                        >
                          Buy All Products
                        </button>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
      </Layout>
    </>
  );
};

export default Cart;
