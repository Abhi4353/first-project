import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BACkEND_URL } from "../config/config";
import { ToastContainer,toast } from "react-toastify";

const Singleposts = () => {
  const [loader, setLoader] = useState(false);
  const [myData, setMyData] = useState([]);
  const [myComment, setMyComment] = useState([]);
  const [createcomment, setcreatecomment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const { _id} = useParams();
  const getApiData = async () => {
    setLoader(true);
    const res = await axios.get(`${BACkEND_URL}/singlepost?id=${_id}`);
    setMyData(res.data);
    setLoader(false);
    console.log(res.data);   
  };

  
  useEffect(() => {
    getApiData();
  }, [_id]);
  const addcomment = async () => {
    const res = await axios.post(`${BACkEND_URL}/comments`, {
      Name : name,
      Email : email,
      Comment : comment
    })
    toast.success("Thanks for your comment")
  };
  return (
    <Layout>
      {loader ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <div className="container-fluid text-center p-2 product-component2">
            <h1 className="text-center m-5">{myData.Title}</h1>
          </div>
          <div className="container-fluid mt-5">
            <div className="row single-post">
              <div className="col-6">
               <img src={`${BACkEND_URL}/uploads/${myData?.image}`}></img>
              </div>
              <div className="col-6">
                <h1>{myData.Title}</h1>
                <p className="mt-5">{myData.Body}</p>
                <h2 className="text-center mt-5 bg-secondary">
                  {myData.Id}
                </h2>
              </div>
            </div>
          </div>
          <div className="container-fluid text-center">
            <div className="row ">
              <div className="mt-5 product-component2">
              <h1>Let Us Comments on That Post</h1>
              </div>
            </div>
          </div>
          <div className="container w-50 mb-5">
            <div className="row">
              <form>
                <div className="form-group post-form">
                  <label className="form-label">
                    <p>Enter Your Name</p>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                  <label className="form-label">
                    <p>Enter Your Email Id</p>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                  ></input>
                  <label className="form-label">
                    <p>Enter Your Comment Here And Submit</p>
                  </label>
                  <textarea
                    className="form-control"
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                  <button
                    type="button"
                    className="btn btn-primary mt-3"
                    onClick={addcomment}
                  >
                    Submit
                  </button>
                  <ToastContainer position="top-center" />
                </div>
              </form>
            </div>
          </div>
          {/* <div className="container-fluid mt-5 product-component2">
            <div className="row">
              <div className="col">
                <h1>Old Comments</h1>
              </div>
            </div>
          </div>
          <div className="container w-50">
            <div className="row">
              {myComment.map((ele, key) => (
                <div className="col-12">
                  <div key={key} className="container comment-element">
                    <label>NAme Of Person:</label> {ele.name}
                    <br />
                    <label>Email Of Person:</label> {ele.email}
                    <br />
                    <label>Comment:</label> {ele.body}
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </>
      )}
    </Layout>
  );
};

export default Singleposts;
