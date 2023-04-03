import React, {useState, useEffect}from 'react'
import { BACkEND_URL } from '../../config/config';
import axios from 'axios';
import Layout1 from '../adminpages/layout/Layout1';
import "../Admin.css"

const Users = () => {
    const[users,setUsers]=useState([]);
    

    const getregisteredusers = async() => {
      const res = await axios.get(`${BACkEND_URL}/users`)
      setUsers(res.data);
      console.log(res.data);
    }

    useEffect(()=>{
        getregisteredusers()
    },[])
  return (
    <>
    <Layout1>
        <div className='container-fluid'>
            <div className='row'>
               <div className='col'>
                  <table className='table table-bordered users-table'>
                    <thead>
                    <tr>
                      <th>FirstName</th>
                      <th>LastName</th>
                      <th>Email Id</th>
                      <th>Password</th>
                      <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((ele, key)=> (
                      <tr key={key}>
                        <td>{ele.FirstName}</td>
                        <td>{ele.LastName}</td>
                        <td>{ele.Email}</td>
                        <td>{ele.Password}</td>
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

export default Users
