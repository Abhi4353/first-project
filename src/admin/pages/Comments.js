import React, { useEffect, useState } from 'react'
import Layout1 from '../adminpages/layout/Layout1'
import axios from 'axios';
import { BACkEND_URL } from '../../config/config';

const Comments = () => {
    const [comments,setComments] = useState([]);

    const getcomments = async() => {
     const res = await axios.get(`${BACkEND_URL}/comments`)
     setComments(res.data)
     console.log(res.data)
    }
    useEffect(()=>{
        getcomments();
    })
  return (
    <>
      <Layout1>
      <div className='container-fluid'>
            <div className='row'>
               <div className='col'>
                  <table className='table table-bordered users-table'>
                    <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email Id</th>
                      <th>Comment</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {comments.map((ele, key)=> (
                      <tr key={key}>
                        <td>{ele.Name}</td>
                        <td>{ele.Email}</td>
                        <td>{ele.Comment}</td>
                      </tr>
                    ))}
                    </tbody>
                  </table>
               </div>
            </div>
        </div>
      </Layout1>
    </>
  )
}

export default Comments
