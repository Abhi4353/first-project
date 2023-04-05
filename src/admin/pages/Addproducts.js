import React, { useState } from 'react'
import Layout1 from '../adminpages/layout/Layout1'
import { ToastContainer,toast } from 'react-toastify';

const Addproducts = () => {
  const[title,setTitle] = useState("");
  const[price,setPrice] = useState("");
  const[body,setBody] = useState("");
  const[image,setImage] = useState(null);
  const[category,setCategory]= useState("");
  return (
    <>
      <Layout1>
      <div className='container'>
           <div className='row'>
              <div className='col'>
              <h1>Adding New Product</h1>
                 <form className='form' enctype="multipart/form-data" method="post">
                  <div className='form-group'>
                     <label className='mt-2'>Title</label>
                    <input type='text' onChange={(e)=>setTitle(e.target.value)} className='form-control'></input>
                    <label className='mt-3'>Image Upload</label>
                    <input type='file' onChange={(e)=>setImage(e.target.files[0])} className='form-control'></input>
                    <label className='mt-3'>Price For product</label>
                    <input type='number' onChange={(e)=>setPrice(e.target.value)} className='form-control'></input>
                    <label className='mt-3'>Select Category</label>
                    <input type='text' onChange={(e)=>setCategory(e.target.value)} className='form-control' list="category"></input>
                    <datalist id="category">
                    <option>Man</option>
                    <option>Women</option>
                    <option>Electronics</option>
                    <option>HomeAppliances</option>
                    </datalist>
                    <label className='mt-3'>Description</label>
                    <textarea type="text" onChange={(e)=>setBody(e.target.value)} className='form-control'></textarea>
                    <button type="button" className='btn btn-primary mt-3 w-100' onClick="">Submit Data</button>
                    <ToastContainer position="top-center" />
                    </div>
                 </form>
              </div>
           </div>
        </div>
      </Layout1>
    </>
  )
}

export default Addproducts
