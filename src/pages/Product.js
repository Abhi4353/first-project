import React, { Children } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../components/ThemeContext";
import { useContext } from "react";
import { BACkEND_URL } from "../config/config";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import usePagination from "./Pagination";
import { Pagination } from "@mui/material";

const Product = () => {
  const [myData, setMyData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { Category } = useParams();
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const Data = usePagination(myData, PER_PAGE);

  const getApiData = async () => {
    setLoader(true);
    const res = await axios.get(`${BACkEND_URL}/getproducts`,{
      headers :{
        'Authorization' : `Bearer ${localStorage.getItem('tokenforlogin')}`
      }
    });
    setCount(Math.ceil(res.data.length / PER_PAGE));
    setMyData(res.data);

    setLoader(false);
  };

  const handlechange = (event, value) => {
    setPage(value);
    Data.jump(value);
  };

  //  Logic for Products to be added in cart
  const navigate = useNavigate();
  const addtoCart = (_id) => {
    navigate("/payment");
  };
  const additemtoCart = async (e, id) => {
    const res = await axios.post(`${BACkEND_URL}/cartitemsofuser?Userid=${ localStorage.getItem('token')}`, {
      productid : id
    });
    toast.success("product added to cart");
  };

  const getCategoryData = async (value) => {
    setLoader(true);
    if (value === "all") {
      getApiData();
    } else {
      const res = await axios.get(
        `${BACkEND_URL}/productbycategory?Category=${value}`
      );
      console.log(res.data);
      setMyData(res.data);
      setLoader(false);
    }
  };

  const getdatabyprice = async (value) => {
    setLoader(true);
    const res = await axios.get(`${BACkEND_URL}/getproducts`);
    if (value == "0-1000") {
      setMyData(res.data.filter((ele) => ele.Price <= 1000));
      setLoader(false);
    } else if (value == "1000-10000") {
      setMyData(
        res.data.filter((ele) => ele.Price >= 1000 && ele.Price < 10000)
      );
      setLoader(false);
    } else if (value == "10000-100000") {
      setMyData(
        res.data.filter((ele) => ele.Price >= 10000 && ele.Price < 100000)
      );
      setLoader(false);
    } else if (value == "100000-1000000") {
      setMyData(
        res.data.filter((ele) => ele.Price >= 100000 && ele.Price <= 1000000)
      );
      setLoader(false);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <Layout>
      {loader ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <div className={theme}>
            <div className="container-fluid text-center p-5 product-component2">
              <div className="row">
                <div className="col">
                  <h1>
                    <b>Products</b>
                  </h1>
                </div>
              </div>
            </div>

            <div className="container-fluid">
              <div className="row">
                <div className="col-2 product-sidebar">
                  <div className="container-fluid pro-side-head">
                    <div className="row">
                      <div className="col">
                        <h5>Fiter By Category</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getCategoryData(e.target.value)}
                          value="all"
                        >
                          All Products
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getCategoryData(e.target.value)}
                          value="Man"
                        >
                          Men
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getCategoryData(e.target.value)}
                          value="Women"
                        >
                          Women
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getCategoryData(e.target.value)}
                          value="Electronics"
                        >
                          Electronics
                        </button>
                        <br />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <h5>Filter By Price</h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getdatabyprice(e.target.value)}
                          value="0-1000"
                        >
                          0-1000
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getdatabyprice(e.target.value)}
                          value="1000-10000"
                        >
                          1000-10000
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getdatabyprice(e.target.value)}
                          value="10000-100000"
                        >
                          10000-100000
                        </button>
                        <br />
                        <button
                          type="button"
                          className="btn"
                          onClick={(e) => getdatabyprice(e.target.value)}
                          value="100000-1000000"
                        >
                          100000-1000000
                        </button>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-10 product-data">
                  <div className="container-fluid product-component6">
                    <div className="row">
                      {Data.currentData().map((ele, key) => (
                        <div className="col-4 pro_col">
                          <div key={key} className="products">
                            <Link
                              className="rem"
                              to={`/singleproduct/${ele?._id}`}
                            >
                              <div className="pro-img">
                                <img
                                  src={`${BACkEND_URL}/uploads/${ele?.image}`}
                                  className="w-25"
                                ></img>
                              </div>
                            </Link>

                            <h3>{ele?.Title}</h3>

                            <p>Price:-&nbsp;Rs&nbsp;{ele?.Price}</p>
                            <button
                              type="button"
                              className="btn btn-success mb-4"
                              onClick={(e) => additemtoCart(e, ele?._id)}
                            >
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="container button-prev-next">
                    <Pagination
                      count={count}
                      page={page}
                      variant="outlined"
                      shape="rounded"
                      onChange={handlechange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Product;
