import React from 'react'
import Layout from '../layout/Layout';
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThemeContext from '../components/ThemeContext';
import { useContext } from 'react';

const Product = () => {
    const [myData, setMyData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [category, setCategory] = useState([]);
    const [filter, setFilter] = useState();
     const [count , setCount] =useState(0)
     const [price, setPrice] =useState([]);
     const [filter2,setFilter2]=useState();
     const[cartItems, setCartItems]=useState([]);
  
    const getApiData = async () => {
      setLoader(true);
      const res = await axios.get("https://fakestoreapi.com/products");
      setMyData(res.data);
      
      setLoader(false);
    };
    const getApiCategory = async () => {
      const cat = await axios.get("https://fakestoreapi.com/products/categories");
      setCategory(cat.data);
    };
    useEffect(() => {
      getApiData();
      getApiCategory();
    }, []);
  

    // Filter Products by Category
    const getDataCategorywise = async () => {
      setLoader(true);
      if(filter=='all'){
        const res =await axios.get('https://fakestoreapi.com/products')
        setMyData(res.data)
        console.log("Data",res.data)
      }
      else{
        setFilter(filter);
      }
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${filter}`
      );
      setMyData(res.data);
      setLoader(false);
    };
  
    useEffect(() => {
      if (filter) {
        getDataCategorywise();
      }
    }, [filter]);
  


    //  Logic for Products to be added in cart
     const addtoCart = ()=>{
      setCount(count +1)
     }
     const deletefromCart =()=>{
      if(count<=0){
        setCount(0)
      }
      else{
        setCount(count -1)
      }
    }
      useEffect(()=>{
       addtoCart();
       deletefromCart();
      },[])
       
      const checkprice = async() => {
        setLoader(true)
       const abc = await axios.get('https://fakestoreapi.com/products')
       const filterData = abc.data.filter((ele)=>ele.price < filter2)
       setMyData(filterData)
       setLoader(false)
       console.log("price",filterData)
      }
    useEffect(()=>{
      if(filter2){
      checkprice();
      }},[filter2]);
      const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Layout>
    
      {loader ? (
        <div className="loading-spinner"></div>
      ) : (
        <>
        <div className={theme}>
          <div className="container-fluid text-center p-5 product-component2">
            <div className="row">
              <div className="col-4">
                <h1><b>Products</b></h1>
              </div>

              <div className="col-4">
                <h3>Filter By Category</h3>

                <select onChange={(e) => setFilter(e.target.value)}>
                  <option value={""}>Select Category</option>
                  <option value="all">All Products</option>
                  {category?.map((ele, key) => (
                    <option value={ele}>{ele}</option>
                  ))}
                </select>
              </div>

              <div className="col-4">
               <h3>Fiter By Price</h3>
               <select onChange={(e)=>setFilter2(e.target.value)}>
                <option value={""}>Select Price...</option>
                <option value="50">$0-$50</option>
                <option value="100">$0-$100</option>
                <option value="500">$0-$500</option>
                <option value="1000">$0-$1000</option>
               </select>
              </div>
            </div>
          </div>

          <div className="container-fluid product-component">
            <div className="row">
              {myData.map((ele, key) => (
                <div className="col-4 pro_col">
                  <div key={key} className="products">
                    <Link className="rem" to={`/singleproduct/${ele?.id}`}>
                      <div className="pro-img">
                        {" "}
                        <img src={ele?.image} className="w-25"></img>
                      </div>
                    </Link>

                    <h3>{ele?.title.slice(0,20)}</h3>

                    <p>Price:-${ele?.price}</p>
                    <p>
                      <b>Category : {ele?.category}</b>
                    </p>
                    <button type="button" className="btn btn-primary mb-4" onClick={()=>addtoCart()}>
                      Add to Cart
                    </button>
                    {/* <button type="button" className="btn btn-danger mb-4" onClick={()=>deletefromCart()}>Remove</button> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </>
      )}
   
    </Layout>
  )
}

export default Product
