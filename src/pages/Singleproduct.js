import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../components/ThemeContext";
import { BACkEND_URL } from "../config/config";
import {toast } from 'react-toastify'

const Singleproduct = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [loader, setLoader] = useState(false);

  const { _id } = useParams();
  const navigate = useNavigate()

  // const [data, setData] = useState();
  const [mydata, setMydata] = useState();

  const getSingleData = async () => {
    setLoader(true);
    const res = await axios.get(`${BACkEND_URL}/singleproduct?id=${_id}`);
    setMydata(res.data);
    console.log(res.data);
    setLoader(false);
  };
  
  const purchaseitem = (_id) => {
    navigate("/payment");
  };
  const additemtoCart = async(e, id)=>{
    const res = await axios.post(`${BACkEND_URL}/cartitems?id=${id}`,{
     status: "true",
    })
    getSingleData();
    toast.success("product added to cart");
 }

  useEffect(() => {
    getSingleData();
  }, []);
  // console.log(mydata);

  const addtoCart = () => {};

  return (
    <Layout>
      <>
        {loader ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <div className={theme}>
              <div className="container-fluid text-center p-2 product-component2">
                <h1 className="text-center m-5">{mydata?.Title}</h1>
              </div>
              <div className="container p-5">
                <div className="row">
                  <div className="col-6 single-product-img">
                    <img
                      className="img-fluid bg-light"
                      src={`${BACkEND_URL}/uploads/${mydata?.image}`}
                    />
                  </div>
                  <div className="col-6 single-product-statement">
                    <h1>{mydata?.Title}</h1>
                    <p>Description : {mydata?.Description}</p>
                    <h3>Price: {mydata?.Price}</h3>
                    <div className="single-product-button">
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={(e) => purchaseitem(e, mydata._id)}
                      >
                        Buy Now
                      </button>

                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={(e)=>additemtoCart(e, mydata._id)}
                      >
                        Add to Cart
                      </button>
                      {/* <button type="button" className="btn btn-danger">Remove</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    </Layout>
  );
};

export default Singleproduct;
