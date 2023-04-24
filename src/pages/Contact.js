import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import ThemeContext from '../components/ThemeContext'
import { useContext } from 'react'
import axios from 'axios'
import { BACkEND_URL } from '../config/config'
import {toast } from 'react-toastify'

const Contact = () => {
  const { theme} = useContext(ThemeContext);
  const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[email,setEmail]=useState("");
  const[gender,setGender]=useState("");
  const[message,setMessage]=useState("");

 


  const addformdata = async ()=> { 
    if(
      fname == "" && 
      lname == "" && 
      email == "" && 
      gender == "" && 
      message == "" 
    ) {
      toast.error("please fill out all the fields");
    }
    else{
  const res = await axios.post(`${BACkEND_URL}/contact`, {
     Firstname : fname,
     Lastname : lname,
     EmailId : email,
     Gender : gender,
     Message : message,
  })
  .then(function(response) {
    if(response.status === 200){
      toast.success("Thanks for contacting us")
    }
    // console.log(response.status)
    
  })
  .catch(function(error){
    // console.log(error.response.error)
    toast.error("Something went wrong")
  })
} }

  return (
    <Layout>
      <div className={theme}>
      <div className='container-fluid contact-component'>
      <h1>Fill This Form To Contact Us</h1>
      </div>
    <div className='container w-50 mt-5'>
       <div className='row'>
         <div className='col'>
         <form >
              <div className='form-group pb-5'>
              
                <label>First Name</label>
                <input type="text" className='form-control' onChange={(e)=>setFname(e.target.value)}></input><br></br>
                <label>Last Name</label>
                <input type="text" className='form-control' onChange={(e)=>setLname(e.target.value)}></input><br></br>
                <label>Email Id</label>
                <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}></input><br></br>
                <label>Gender</label>
                <input type="text" className='form-control' onChange={(e)=>setGender(e.target.value)}></input><br></br>
                <label>Enter Your Message Here</label>
                <textarea className='form-control' onChange={(e)=>setMessage(e.target.value)}></textarea><br></br>
                <button type='button' className='btn btn-primary mt-2' onClick={addformdata} >Submit</button>

              </div>
              </form>
         </div>
       </div>
    </div>
    
    </div>
    </Layout>
  )
}

export default Contact
