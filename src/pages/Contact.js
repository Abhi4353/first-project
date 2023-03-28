import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import ThemeContext from '../components/ThemeContext'
import { useContext } from 'react'
import FormData from './FormData'

const Contact = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[email,setEmail]=useState("");
  const[gender,setGender]=useState("");
  const[message,setMessage]=useState("");
  const[formData,setFormData]=useState({
    "fname":" ",
    "lname":" ",
    "email":" ",
    "gender":" ",
    "message":" "
  });
   
  const submitformdata = () => {
      setFormData({
        "fname":{fname},
    "lname":{lname},
    "email":{email},
    "gender":{gender},
    "message":{message}
      })
      
      localStorage.setItem("formData", JSON.stringify(formData));
      console.log(formData)
  }
  useEffect( () =>{
   submitformdata();
  },[])
  return (
    <Layout>
      <div className={theme}>
      <div className='container-fluid contact-component'>
      <h1>Fill This Form To Contact Us</h1>
      </div>
    <div className='container w-50 mt-5'>
       <div className='row'>
         <div className='col'>
         <form>
              <div className='form-group pb-5'>
              
                <label>First Name</label>
                <input type="text" className='form-control' onChange={(e)=>setFname(e.target.value)}></input>
                <label>Last Name</label>
                <input type="text" className='form-control' onChange={(e)=>setLname(e.target.value)}></input>
                <label>Email Id</label>
                <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}></input>
                <label>Gender</label>
                <input type="text" className='form-control' onChange={(e)=>setGender(e.target.value)}></input>
                <label>Enter Your Message Here</label>
                <textarea className='form-control' onChange={(e)=>setMessage(e.target.value)}></textarea>
                <button type='button' className='btn btn-primary mt-2' onClick={(e)=>submitformdata()}>Submit</button>
               
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
