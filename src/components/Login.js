import React, { useEffect } from 'react'
import data from '../pages/Checking.json'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[check,setCheck]=useState(false);
    const navigate = useNavigate();
    //  console.log(data)
    const checklogin = () => {
        
        //  console.log(email==data.email , password==data.password)
      if(email==data.email && password==data.password)
      {
        navigate('/home');
      }
      else{
        toast.error("Wrong Credentials")
        console.log(toast)
        
      }
    }
    // const navigate = useNavigate();
    // useEffect(()=>{
    //     navigate('/home', { check: true });
    // })
  return (
    <div className='container-fluid login-form'>
    <div className='row'>
       <div className='col'>
         <div className='container bg-light login-form-body'>
         <form>
             <div className='form-group'>
           <h1 className='text-center'>Login Form</h1>
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
  )
}

export default Login
