import React, { useEffect, useState } from 'react'
import { ToastContainer,toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { BACkEND_URL } from '../config/config'
import axios from 'axios'



const Adminlogin = () => {
const[email,setEmail] =useState("");
const[password,setPassword] =useState("");
const navigate = useNavigate();
const token = localStorage.getItem("token")
useEffect(()=>{
    // console.log(token)
     if(token !== null){
      navigate("/admindashboard")
     }

//  console.log("yess")
},[])
const checklogin = async() =>{
   const res = await axios.post(`${BACkEND_URL}/admin`, {
    Email : email,
    Password: password
   })
   .then(function(response){
    if(response.data == true){
      localStorage.setItem("token", 1)
        toast.success("Welcome to Admin Dashboard")
        navigate('/admindashboard')
    }
    else{
        toast.error("Username Or Password Not Correct")
    }
   })
     
}


  return (
    <>
      <div className='container-fluid login-form'>
    <div className='row'>
       <div className='col'>
         <div className='container bg-light login-form-body'>
         <form>
             <div className='form-group'>
           <h1 className='text-center'>Admin Login</h1>
           <label>Email Id</label>
           <input type="text" className='form-control' onChange={(e)=>setEmail(e.target.value)}></input>
           <label>Password</label>
           <input type="password" className='form-control' onChange={(e)=>setPassword(e.target.value)}></input>
           <button type="button" className='btn btn-primary mt-3 mb-3 w-100' onClick={()=>checklogin()}>Login</button>
           {/* <input type="submit" value="Forget password" className='mt-3'></input> */}
           {/* <p>{check==true ?"Please enter correct Email Id or Password" : ""}</p> */}
          
           <ToastContainer position='top-center'/>
           </div>
         </form>
         </div>
       </div>
    </div>
 </div>
    </>
  )
}

export default Adminlogin
