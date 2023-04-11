import React, { useState } from 'react'
import Layout1 from '../adminpages/layout/Layout1'
import { BACkEND_URL } from '../../config/config';
import axios from 'axios';
import { ToastContainer,toast } from 'react-toastify';
const Createposts = () => {
    const[title,setTitle]=useState("");
    const[image,setImage]=useState(null);
    const[id,setId]=useState("");
    const[body,setBody]=useState("");

    const submitpost = async() => {
        if(title == "" && image == "" && id == "" && body == ""){
            toast.error("Please fill out all fields")
        } else {
            const formData = new FormData();
            formData.append('Title', title);
            formData.append('image', image);
            formData.append('Id', id);
            formData.append('Body', body);
            const res = await axios.post(`${BACkEND_URL}/posts`, formData , {
            headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(function(response){
            if(response.status === 200){
              
                toast.success("Post Created")
                console.log(response)
            }
            else{
                console.log(response)
            }
        })
    }
        
    }
  return (
    <>
      <Layout1>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col'>

           
        <div className='container-fluid login-form-admin bg-light'>
           <div className='row'>
              <div className='col'>
              <h1>Creating New Posts</h1>
                 <form className='form' enctype="multipart/form-data" method="post">
                  <div className='form-group'>
                     <label className='mt-2'>Title</label>
                    <input type='text' onChange={(e)=>setTitle(e.target.value)} className='form-control'></input>
                    <label className='mt-3'>Image Upload</label>
                    <input type='file' onChange={(e)=>setImage(e.target.files[0])} className='form-control'></input>
                    <label className='mt-3'>Id For post</label>
                    <input type='text' onChange={(e)=>setId(e.target.value)} className='form-control'></input>
                    <label className='mt-3'>Body</label>
                    <textarea type="text" onChange={(e)=>setBody(e.target.value)} className='form-control'></textarea>
                    <button type="button" className='btn btn-primary mt-3 mb-3 w-100' onClick={submitpost}>Submit Data</button>
                    <ToastContainer position="top-center" />
                    </div>
                 </form>
              </div>
           </div>
        </div>
        </div>
          </div>
        </div>
      </Layout1>
    </>
  )
}

export default Createposts
