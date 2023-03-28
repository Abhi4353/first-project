import React, { useState } from 'react'
import Layout from '../layout/Layout'
import ThemeContext from '../components/ThemeContext'
import { useContext } from 'react'

const Contact = () => {
  const { theme} = useContext(ThemeContext);
  const[fname,setFname]=useState("");
  const[lname,setLname]=useState("");
  const[email,setEmail]=useState("");
  const[gender,setGender]=useState("");
  const[message,setMessage]=useState("");
  // const[count]=useState(0);
  const[formData,setFormData]=useState({
    id:"",
    firstname:" ",
    lastname:" ",
    email:" ",
    gender:" ",
    message:" "
  });
  const [data,setData] = useState([
    {firstname:"Abhishek",lastname:"Sharma",email:"as2271614@gmail.com",gender:"Male", message:"Message to be displayed" },
    {firstname:"Rishav",lastname:"Kumar",email:"rishavkumar2018@gmail.com",gender:"Male", message:"Rishav Kumar" },
    {firstname:"Ajay",lastname:"Sharma",email:"badshorockstar@gmail.com",gender:"Male", message:"Ajay Sharma" },
    {firstname:"Vijay",lastname:"Kumar",email:"Vijaymanu@gmail.com",gender:"Male", message:"Vijay Kumar" },
])

  // const submitformdata = () => {
  //   setFormData({
  //   firstname:{fname},
  //   lastname:{lname},
  //   email:{email},
  //   gender:{gender},
  //   message:{message}
  //     })
      
  // }
  const addformdata =event=> {
  event.preventDefault();
  setFormData({
    firstname:{fname},
    lastname:{lname},
    email:{email},
    gender:{gender},
    message:{message}
      })
      setData([data.concat(formData)])
      console.log(data)
  }
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
