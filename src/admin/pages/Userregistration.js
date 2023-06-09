import React, { useState } from 'react'
import { ToastContainer,toast } from 'react-toastify';
import Layout1 from '../adminpages/layout/Layout1';
import { BACkEND_URL } from '../../config/config';
import axios from 'axios';
import { useEffect } from 'react';

const Userregistration = () => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[cPassword,setCPassword] = useState("");
    const[image,setImage]=useState(null)
    const checklogin = async () => {
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
            const data = await axios
              .post(`${BACkEND_URL}/signup`, {
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
                if (response.status === 200) {
                  toast.success("Registered Successfully");
                //   console.log("Data Inserted");
                }
              })
              .catch(function (error) {
                console.log("error", error);
                if (error.response.status === 409) {
                  toast.error("Email Already Exist");
                }
              });
          
          } else {
            toast.warning("Password And Confirm password not same");
          }
        }
      };
      // 
  return (
    <Layout1>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="container-fluid bg-light login-form-admin">
            <form enctype="multipart/form-data">
              <div className="form-group">
                <h1 className="text-center p-3">Register New User</h1>
                <label>First Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setFirstName(e.target.value)}
                ></input>
                <label>Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setLastName(e.target.value)}
                ></input>
                <label>Pic</label>
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImage(e.target.files[0])}
                ></input>
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setCPassword(e.target.value)}
                ></input>
                <button
                  type="button"
                  className="btn btn-primary mt-3 mb-3 w-100"
                  onClick={() => checklogin()}
                >
                  Register
                </button>
                 {/* <p>Already Have Account<Link to="/">Login</Link></p>  */}
                {/* <input type="submit" value="Forget password" className='mt-3'></input> */}
                {/* <p>{check==true ?"Please enter correct Email Id or Password" : ""}</p> */}
                <ToastContainer position="top-center" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </Layout1>
  )
}

export default Userregistration
