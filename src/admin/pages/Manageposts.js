import React, { useState,useEffect } from 'react'
import Layout1 from '../adminpages/layout/Layout1'
import { BACkEND_URL } from '../../config/config';
import axios from 'axios';
const Manageposts = () => {
   const[posts,setPosts] = useState([]);
    
   const getpostsdata = async() => {
    const res = await axios.get(`${BACkEND_URL}/posts`)
    setPosts(res.data);
    console.log(posts)
   }

  useEffect(()=> {
    getpostsdata();
  }, [])


   const onhandelinfo = () => {

   }

   const onhandelDelte = async (id) => {
    const res = await axios.post(`${BACkEND_URL}/deleteuser?id=${id}`);
    getpostsdata();
  };
  return (
    <Layout1>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <table className='table table-bordered users-table'>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Id</th>
                  <th>Body</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((ele,key)=>(
                  
                    <tr key={key}>
                      <td>{ele.Title}</td> 
                      <td>{ele.image}</td>
                      <td>{ele.Id}</td>
                      <td>{ele.Body}</td>
                      <td>
                      <button className="btn btn-success" onClick={()=>onhandelinfo(ele._id)}>View</button>
                      <button className="btn btn-danger" onClick={()=>onhandelDelte(ele._id)}>Delete</button>
                      </td>
                    </tr>
                     
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout1>
  )
}

export default Manageposts
