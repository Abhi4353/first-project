import React from 'react'
import Layout1 from '../adminpages/layout/Layout1'
import { useParams} from 'react-router-dom'
import { useEffect,useState } from 'react';
import axios from 'axios';
import { BACkEND_URL } from '../../config/config';
import "../Admin.css";
import { Link } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';

const Updatepost = () => {
    const[data,setData]=useState([]);
    const[title,setTitle] = useState("");
    const[Id,setId]=useState("");
    const[body,setBody]=useState("");
    const {_id} = useParams();

    const getsinglepost = async() => {
        const res = await axios.get(`${BACkEND_URL}/singlepost?id=${_id}`)
        setData(res.data)
        console.log(data)
    }

    useEffect(()=>{
        getsinglepost();
    },[_id])


    const updatepostdata = async(id) => {
     const res = await axios.post(`${BACkEND_URL}/updateposts?id=${_id}`, {
        Title : title,
        Id : Id,
        Body : body
     })
     toast.success("Post Updated Successfully");
     console.log("updated")
    }
    
    // useEffect(()=>{
    //     updatepostdata();
    // },[])


  return (
   <>
   <Layout1>
   <div className='container-fluid'>
          <div className='row'>
            <div className='col'>
     <div className='container login-form-admin bg-light'>
        <div className='row'>
            <div className='col'>
            <h1>Update Post Details</h1>
              <form className='form'>
                <div className='form-group update-image'>
                  <label>Title</label>
                  <input type='text' className='form-control' defaultValue={data.Title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <label>Id</label>
                <input type='text' className='form-control' defaultValue={data.Id} onChange={(e)=>setId(e.target.value)}></input>
                  <label>Image</label><br/>
                  <Link to={`${BACkEND_URL}/uploads/${data.image}`} target="_blank"><img src={`${BACkEND_URL}/uploads/${data.image}`} className='w-50 h-50'></img></Link><br/>
                  <label>Body</label>
                  <textarea type='text' className='form-control h-75' defaultValue={data.Body} onChange={(e)=>setBody(e.target.value)}></textarea>
                  <button type='button' className='btn btn-primary mt-2' onClick={updatepostdata}>Update</button>
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

export default Updatepost
