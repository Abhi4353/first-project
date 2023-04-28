import React, { useContext, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ThemeContext from "../components/ThemeContext";
import { Link } from "react-router-dom";
import { BACkEND_URL } from "../config/config";

const Posts = () => {
  const [myData, setMyData] = useState([]);
  const [loader, setLoader] = useState(false);
  const[button,setButton]=useState(true)
  const [start,setStart]=useState(0);
  const[total,setTotal]=useState(6);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const getApiData = async () => {
    setLoader(true);
    const res = await axios.get(`${BACkEND_URL}/posts`);
    setButton((res.data).length)
    setMyData(res.data);
    setLoader(false);
    console.log(res.data);
  };

  const shownextvalue = () => {
    setStart(start+5)
    setTotal(total+5)
  }

  const showprevvalue = () => {
    setStart(start - 5)
    setTotal(total-5)
  }

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
                    <b>Blog Posts</b>
                  </h1>
                </div>
              </div>
            </div>
            <div className="container posts-phone-view">
              <div className="row mt-5">
                {myData.slice(start,total).map((ele, key) => (
                  <div className="col-4 posts-component">
                    <div key={key} className="container posts-col">
                      <h4>{ele?.Title}</h4>
                      <img
                        src={`${BACkEND_URL}/uploads/${ele?.image}`}
                        alt="Post Image"
                      ></img>
                      <p>
                        {ele?.Body.slice(0, 20)}
                        <Link className="rem" to={`/singlepost/${ele?._id}`}>
                          <button
                            type="button"
                            className="btn btn-sm btn-primary m-2"
                          >
                            Read More
                          </button>
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row ">
              <div className="container button-prev-next">
              {start > 0 ?<button type="button" className="btn btn-secondary w-25" onClick={showprevvalue}>Previous</button> : ""} 
              {total <= button ?<button type="button" className="btn btn-primary w-25" onClick={shownextvalue}>Next</button> : ""}     
              </div>
            </div>
            
           
           </div>
          </div>
        </>
      )}
    </Layout>
  );
};

export default Posts;
