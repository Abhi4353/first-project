import React, { Children } from 'react'
import Layout from '../layout/Layout';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from '../components/ThemeContext';
import { useContext } from 'react';
import { BACkEND_URL } from '../config/config';
import { useParams } from 'react-router-dom';

const Product = () => {
    const [myData, setMyData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState();
     const [count , setCount] =useState(0)
     const [price, setPrice] =useState(3);
     const [filter2,setFilter2]=useState();
     const[cartItems, setCartItems]=useState([]);
     const[showbutton,setshowbutton]=useState(true);
     const { theme, toggleTheme } = useContext(ThemeContext);
     const { Category } = useParams();
 
  
    const getApiData = async () => {
      setLoader(true);
      const res = await axios.get(`${BACkEND_URL}/getproducts`);
      setMyData(res.data);
      
      setLoader(false);
    };

    //  Logic for Products to be added in cart
    const navigate = useNavigate()
    const addtoCart = ()=>{
  navigate("/payment");
     }
     const deletefromCart =()=>{
      if(count<=0){
        setCount(0)
      }
      else{
        setCount(count -1)
      }
    }


      const getCategoryData = async(value) => {
        setLoader(true);
        if(value === 'all'){
          getApiData();
          // const res = await axios.get(`${BACkEND_URL}/getproducts`);
          // setMyData(res.data)
        }
        else{
          const res = await axios.get(`${BACkEND_URL}/productbycategory?Category=${value}`)
          console.log(res.data)
          setMyData(res.data)
          setLoader(false)
        }
      }
         

      const getdatabyprice = async(value) => {
        setLoader(true)
        const res =await axios.get(`${BACkEND_URL}/getproducts`)
        if(value == '0-1000'){
          setMyData(res.data.filter((ele)=> ele.Price <= 1000))
          setLoader(false);
        }
        else if(value == '1000-10000'){
          setMyData(res.data.filter((ele)=>ele.Price >= 1000 && ele.Price < 10000))
          setLoader(false);
        } 
        else if(value == '10000-100000'){
          setMyData(res.data.filter((ele)=>ele.Price >= 10000 && ele.Price < 100000))
          setLoader(false);
        } 
        else if(value == '100000-1000000'){
          setMyData(res.data.filter((ele)=>ele.Price >= 100000 && ele.Price <= 1000000))
          setLoader(false);
        }
      }
    

      useEffect(()=>{
       getApiData();
       deletefromCart();
      },[])
   
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
                <h1><b>Products</b></h1>
              </div>

              {/* <div className="col-4">
                <h3>Filter By Category</h3>

                <select onChange={(e) => setFilter(e.target.value)}>
                  <option value={""}>Select Category</option>
                  <option value="all">All Products</option>
                  {category?.map((ele, key) => (
                    <option value={ele}>{ele}</option>
                  ))}
                </select>
              </div> */}
                
              {/* <div className="col-4">
               <h3>Fiter By Price</h3>
               <select onChange={(e)=>setFilter2(e.target.value)}>
                <option value={""}>Select Price...</option>
                <option value="50">$0-$50</option>
                <option value="100">$0-$100</option>
                <option value="500">$0-$500</option>
                <option value="1000">$0-$1000</option>
               </select>
              </div> */}
            </div>
          </div>
          

          <div className="container-fluid">
            <div className="row">
              <div className='col-2 product-sidebar'>
                <div className='container-fluid pro-side-head'>
                  <div className='row'>
                    <div className='col'>
                    <h5>Fiter By Category</h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'> 
                      <button type="button" className='btn' onClick={(e)=>getCategoryData(e.target.value)} value="all">All Products</button><br/>
                      <button type='button' className='btn' onClick={(e)=>getCategoryData(e.target.value)} value="Man">Men</button><br/>
                      <button type='button' className='btn' onClick={(e)=>getCategoryData(e.target.value)} value="Women">Women</button><br/>
                      <button type='button' className='btn' onClick={(e)=>getCategoryData(e.target.value)} value="Electronics">Electronics</button><br/>
                    </div>
                  </div>
                  <div className='row'> 
                    <div className='col'>
                        <h5>Filter By Price</h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col'>
                       <button type='button' className='btn' onClick={(e)=>getdatabyprice(e.target.value)} value="0-1000">0-1000</button><br/>
                       <button type='button' className='btn' onClick={(e)=>getdatabyprice(e.target.value)} value="1000-10000">1000-10000</button><br/>
                       <button type='button' className='btn' onClick={(e)=>getdatabyprice(e.target.value)} value="10000-100000">10000-100000</button><br/>
                       <button type='button' className='btn' onClick={(e)=>getdatabyprice(e.target.value)} value="100000-1000000">100000-1000000</button><br/>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-10'>
                <div className='container-fluid product-component'>
                  <div className='row'>

                  
              {myData?.map((ele, key) => (
                <div className="col-4 pro_col">
                  <div key={key} className="products">
                    <Link className="rem" to={`/singleproduct/${ele?._id}`}>
                      <div className="pro-img">
                        {/* {" "} */}
                        <img src={`${BACkEND_URL}/uploads/${ele?.image}`} className="w-25"></img>
                      </div>
                    </Link>

                    <h3>{ele?.Title}</h3>

                    <p>Price:-${ele?.Price}</p>
                    {/* <p>
                      <b>Category : {ele?.Category}</b>
                    </p> */}
                    <button type="button" className="btn btn-success mb-4" onClick={addtoCart}>
                      Buy Now
                    </button>
                    {/* <button type="button" className="btn btn-danger mb-4" onClick={()=>deletefromCart()}>Remove</button> */}
                  </div>
                </div>
              ))}
              {/* <div className='container text-center'>
                {showbutton ? <button type="button" className='btn btn-primary' onClick={updateprice}>Access More</button> : ""}
              </div> */}
              </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </>
      )}
   
    </Layout>
  )
}

export default Product
