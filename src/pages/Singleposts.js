import React, { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const Singleposts = () => {
  const [loader, setLoader] = useState(false);
  const [myData, setMyData] = useState([]);
  const [myComment, setMyComment] = useState([]);
  const [createcomment, setcreatecomment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const { id } = useParams();

  const getApiData = async () => {
    setLoader(true);
    const res = await axios.get(`https://gorest.co.in/public/v2/posts/${id}`);
    setMyData(res.data);
    setLoader(false);
    // console.log(res);   
  };

  const getcommentdata = async () => {
    const ab = await axios.get("https://gorest.co.in/public/v2/comments",{
    
    headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        Authorization:
          "Bearer fbbab4a41bb1edcf1de34b3bf5d0b0a5f0ad46f3137f186f189871b50f6a2717",
      }},
    );
    setMyComment(ab.data);
     console.log("askask", ab.data)
  };
  useEffect(() => {
    getApiData();
    getcommentdata();
  }, []);
  const post = {
    id: "",
    post_id: "",
    name: name,
    email: email,
    body: comment,
  };
  const addcomment = async () => {
    const res = await axios.post("https://gorest.co.in/public/v2/posts/285/comments", post, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
          Authorization:
            "Bearer fbbab4a41bb1edcf1de34b3bf5d0b0a5f0ad46f3137f186f189871b50f6a2717",
        },
      })
      .then((res) => res.json());
      getcommentdata();
      console.log(res.data);
    
  };
  return (
    <Layout>
      {loader ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
          <div className="container-fluid text-center p-2 product-component2">
            <h1 className="text-center m-5">Single Post</h1>
          </div>
          <div className="container-fluid mt-5 w-50">
            <div className="row single-post">
              <div className="col">
                <h1>{myData.title}</h1>
                <p className="mt-5">{myData.body}</p>
                <h2 className="text-center mt-5 bg-secondary">
                  {myData.user_id}
                </h2>
              </div>
            </div>
          </div>
          <div className="container-fluid text-center">
            <div className="row ">
              <div className="mt-5 product-component2">
              <h1>Let Us Check The Comments on That Post</h1>
              </div>
            </div>
          </div>
          <div className="container w-50">
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
                </div>
              </form>
            </div>
          </div>
          <div className="container-fluid mt-5 product-component2">
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
          </div>
        </>
      )}
    </Layout>
  );
};

export default Singleposts;
