import React, { useEffect } from "react";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BACkEND_URL } from "../config/config";
import axios from "axios";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [image, setImage] = useState(null);
  const[verify,setVerify] = useState(false);
  const[button,setButton]=useState(false);
  const[verifyemail,setVerifyemail]=useState(false)
  const[emailbox,setEmailbox]=useState(true)
  const[fname,setFname]=useState(true)
  const[lname,setLname]=useState(true);
  const[pic,setPic]=useState(true);
  const[useremail,setUseremail]=useState(true)
  const[pass,setPass]=useState(true)
  const[cpass,setCpass]=useState(true)
  const[register,setRegister]=useState(false)
  const[activebutton,setActivebutton]=useState(true)
  const[verifyform,setVerifyform]=useState(false)
  const[box,setBox]=useState(false);
  const[vbutton,setVButton]=useState(false);
  const[phone,setPhone]=useState();
  const[otp,setOtp]=useState();
  const number = `+91${phone}`
  const navigate = useNavigate();



  const checklogin = async() => {
    if (
      firstName == "" &&
      lastName == "" &&
      image == null &&
      email == "" &&
      password == "" &&
      cPassword == ""
    ) {
      toast.error("Please fill out all the fields");
    } else {
      if (password == cPassword) {
        const res = await axios.post(`${BACkEND_URL}/signup`, {
            FirstName: firstName,
            LastName: lastName,
            image: image,
            Email: email,
            Password: password,
            ConfirmPassword: cPassword,
          }, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
           })
         
          .then(function (response) {
            console.log(response.status)
            if (response.status === 200) {
              // toast.success("Registered Successfully");
              window.alert("Registered Successfully")
              navigate('/')
              console.log("Data Inserted");
            }
          })
          .catch(function (error) {
            console.log("error", error);
            if (error.response.status === 409) {
              toast.error("Email Already Exist");
            }
          });
          console.log(res)
      } else {
        toast.warning("Password And Confirm password not same");
      }
    }
  };

   
  
  
  
  
  
  const changeverifystate = ()=> {
    setVerify(true);
   }
   
   const verifybutton = () => {
    setButton(true);
   } 

   const verifyotpemail = () => {
    setVerify(false);
    setButton(false);
    setVerifyemail(false);
    setEmailbox(false)
   }




   const setforotp = () => {
    if (
      firstName == "" &&
      lastName == "" &&
      image == null &&
      email == "" &&
      password == "" &&
      cPassword == ""
    ) {
      toast.error("Please fill out all the fields");
    } else {
      if (password == cPassword) {
    setFname(false)
    setLname(false)
    setPic(false)
    setUseremail(false)
    setPass(false)
    setCpass(false)
    setActivebutton(false)
    setVerifyform(true)
  }else {
    toast.warning("Password And Confirm password not same");
  }
}

}





const generateotp = async() => {
  setBox(true)
  setVButton(true)
  const res = await axios.post(`${BACkEND_URL}/sendOtp`,{
      phone : number,
  })
}

const verifyotp = async() => {
  setBox(false)
  setVButton(false)
  const res = await axios.post(`${BACkEND_URL}/verify`,{
      otp : otp,
      phone : number,
  })
  .then((res)=>{
  if(res.status === 200 ) {
    setRegister(true)
      toast.success("Otp verified click on register button")
  } else if(res.status === 404){
      window.alert("Enter otp is incorrect verify again")
  }
  })
}

  // const navigate = useNavigate();
  // useEffect(()=>{
  //     navigate('/home', { check: true });
  // })
  return (
    <div className="container-fluid login-form">
      <div className="row">
        <div className="col">
          <div className="container-fluid bg-light login-form-body">
            <form enctype="multipart/form-data">
              <div className="form-group">
                <h1 className="text-center">Registration Form</h1>
                {fname ? <><label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                ></input></> : ""}
                {lname ? <><label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                ></input></> : ""}
                {pic ? <><label>Pic</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImage(e.target.files[0])}
                ></input></> : ""}
                {useremail ? <><label>Email</label>
                {emailbox ? <><input
                  type="text"
                  className="form-control"
                  onBlur={()=>{if(email.includes('@gmail.com')){setVerifyemail(true)}
                else{
                  setVerifyemail(false)
                }
                }}
                  onChange={(e) => setEmail(e.target.value)}
                ></input></> : <div className="container-fluid text-danger"><p>Email is verified</p></div>}
                {verifyemail ? <><button type="button" className="btn-sm btn-primary"  onClick={changeverifystate}>Verify Email</button><br/></> : ""}
                {verify ? <input type="text" className="form-control" placeholder="Enter Otp" onChange={verifybutton}></input> : ""}
                {button ? <><button type="button" className="btn-sm btn-primary" onClick={verifyotpemail}>Verify otp</button><br/></> : ""}</> : ""}
                {pass ? <><label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                ></input></> : ""}
                {cpass ? <><label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setCPassword(e.target.value)}
                ></input></> : ""}
                {activebutton ? <button type="button" className="btn btn-primary mt-3 mb-3 w-100" onClick={() => setforotp()}>Register</button> : ""}

                {verifyform ? <><div className="container-fluid login-form-body">
                  <div className="form-group">
                    <p className="text-danger">Please Verify Phone Number to Continue</p>
                    <label>Enter Phone Number</label>
                        <input type='text' className='form-control' onChange={(e)=>setPhone(e.target.value)}></input>
                        <button type='button' className='btn btn-primary m-3' onClick={generateotp}>Generate Otp</button>
                        {box ? <><input type='text' className='form-control' placeholder='Enter otp' onChange={(e)=>setOtp(e.target.value)}></input></> : ""}
                        {vbutton ? <button type='button' className='btn btn-primary m-3' onClick={verifyotp}>Verify Otp</button> : ""}
                  </div>
                  </div></> : ""}



                {register ? <button
                  type="button"
                  className="btn btn-primary mt-3 mb-3 w-100"
                  onClick={() => checklogin()}
                >
                  Register
                </button> : ""}
               
                <p>
                  Already Have Account<Link to="/">Login</Link>
                </p>
                {/* <input type="submit" value="Forget password" className='mt-3'></input> */}
                {/* <p>{check==true ?"Please enter correct Email Id or Password" : ""}</p> */}
           
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
