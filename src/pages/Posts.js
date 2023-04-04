import React, { useContext, useEffect, useState } from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import ThemeContext from "../components/ThemeContext";
import { Link } from "react-router-dom";
import { BACkEND_URL } from "../config/config";

const Posts = () => {
    const[myData,setMyData]=useState([]);
    const[loader,setLoader]=useState(false);
    const{theme,toggleTheme}=useContext(ThemeContext);

    const getApiData = async () =>{
      setLoader(true);
     const res = await axios.get(`${BACkEND_URL}/posts`);
    //  console.log(res)
     setMyData(res.data);
     setLoader(false);
    //  console.log(myData);
    }
    useEffect(()=>{
        getApiData();
    }, []);
  return <Layout>
    
    {loader ? (
    <div className="loading-spinner"></div>
    ) : (
      <>
      <div className={theme}>
    <div className="container-fluid text-center p-5 product-component2">
      <div className="row">
        <div className="col">
          <h1><b>Blog Posts</b></h1> 
        </div>
      </div>
    </div>
    <div className="container">
     <div className="row mt-5">
      {myData.map((ele, key)=>(
        <div className="col-4 posts-component">
          <div key={key} className="container posts-col">
            <h4>{ele?.Title}</h4>
            {/* <Link className="rem" to={`/singleposts/${ele?.id}`}> */}
            <h1>{ele?.Id}</h1>
            {/* </Link> */}
          </div>
        </div>
      ))}
     </div>
    </div>
    </div>
    </>
    )}
    
  </Layout>;
};

export default Posts;
