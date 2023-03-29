import React, {useEffect, useState} from "react";
import Layout from "../layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const Singleposts = () => {
    const[loader, setLoader]=useState(false);
    const[myData, setMyData]=useState([]);
    const {id} = useParams();

    const getApiData = async () => {
        setLoader(true);
        const res = await axios.get(`https://gorest.co.in/public/v2/posts/${id}`)
        setMyData(res.data)
        setLoader(false)
        console.log(res);
    }
    useEffect(() =>{
        getApiData();
    }, [])
  return (
   
      <Layout>
        {loader ? (
          <div className="loading-spinner"></div>  
        ) : (
            <>
            <div className="container-fluid text-center p-2 product-component2">
                <h1 className="text-center m-5">Single Post</h1></div>
                 <div className="container-fluid mt-5 w-50">
                 <div className="row single-post">
                <div className="col">
                    <h1>{myData.title}</h1>
                    <p className="mt-5">{myData.body}</p>
                    <h2 className="text-center mt-5 bg-secondary">{myData.user_id}</h2>
                </div> 
                </div>
                </div>
               <div className="container-fluid text-center">
                <div className="row mt-5 product-component2">
                  <h1>Let Us Check The Comments on That Page</h1>
                </div>
               </div>
               <div className="container w-50">
                 <div className="row">
                  <form>
                     <div className="form-group post-form">
                       <label className="form-label"><p>Enter Your Comment Here And Submit</p></label>
                       <textarea className="form-control"></textarea>
                       <button type="button" className="btn btn-primary mt-3">Submit</button>
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
            </>
        )}
      </Layout>
    
  );
};

export default Singleposts;
