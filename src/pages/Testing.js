import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { BACkEND_URL } from '../config/config';
import { useParams } from 'react-router-dom';

const Testing = () => {
    const[box,setBox]=useState(false);
    const[button,setButton]=useState(false);
    const[phone,setPhone]=useState();
    const[otp,setOtp]=useState();
    // const{phone} = useParams();
    const number = `+91${phone}`
    const generateotp = async() => {
        setBox(true)
        setButton(true)
        const res = await axios.post(`${BACkEND_URL}/sendOtp`,{
            phone : number,
        })
    }

    const verifyotp = async() => {
        setBox(false)
        setButton(false)
        const res = await axios.post(`${BACkEND_URL}/verify`,{
            otp : otp,
            phone : number,
        })
        .then((res)=>{
        if(res.status === 200 ) {
            window.alert("Done")
        }else if(res.status === 404){
            window.alert("not matched")

        }
        })
        console.log(res)

        
    }

  return (
    <div className='container w-25'>
      <div className='row'>
        <div className='col'>
           <div className='form-group'>
             <label>Enter Phone Number</label>
             <input type='text' className='form-control' onChange={(e)=>setPhone(e.target.value)}></input>
             <button type='button' className='btn btn-primary m-3' onClick={generateotp}>Generate Otp</button>
             {box ? <><input type='text' className='form-control' placeholder='Enter otp' onChange={(e)=>setOtp(e.target.value)}></input></> : ""}
             {button ? <button type='button' className='btn btn-primary m-3' onClick={verifyotp}>Verify Otp</button> : ""}
           </div>
        </div>
      </div>
    </div>
  )
}

export default Testing
