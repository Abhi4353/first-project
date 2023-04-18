import React, { useEffect, useState } from 'react'
import Layout1 from '../adminpages/layout/Layout1'
import axios from 'axios';
import { BACkEND_URL } from '../../config/config';

const Comments = () => {
    const [comments,setComments] = useState([]);
    const[count,setCount]=useState();
    const[start,setStart]=useState(0);
    const[total,setTotal]=useState(5);
    const getcomments = async() => {
     const res = await axios.get(`${BACkEND_URL}/comments`)
     setCount(res.data.length)
     setComments(res.data)
     console.log(res.data)
    }
    useEffect(()=>{
        getcomments();
    },[])

    const checkpreviousdata = () => {
      if(start === 0){
        setStart(0)
        setTotal(5)
      }
      else{
        setStart(start-5)
        setTotal(total-5)
      }
     
    }
  
    const checknextdata = () => {
      if(total > count){
        setStart(start)
        setTotal(total)
      }
      else{
        setStart(start+5)
        setTotal(total+5)
      }
    } 


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
                    {comments.slice(start,total).map((ele, key)=> (
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
            <div className="row button-prev-next">
                {start >= 5 ? <button className="btn btn-secondary w-25" type="button" onClick={checkpreviousdata}>Previous</button> : ""}
                {count>5 && total <= count ? <button className="btn btn-success  w-25" type="button" onClick={checknextdata}>Next</button> : ""}
        </div>
        </div>
      </Layout1>
    </>
  )
}

export default Comments
