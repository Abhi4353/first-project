import React, { useEffect, useState } from 'react'
import { BACkEND_URL } from '../../config/config';
import "../Admin.css"
import axios from 'axios';
import Layout1 from '../adminpages/layout/Layout1';

const ContactData = () => {
  const[contactData,setcontactData]= useState([]);
  
  const showcontactusdata = async() => {
    const res = await axios.get(`${BACkEND_URL}/contact`)
    setcontactData(res.data)
  }


  useEffect(()=>{
    showcontactusdata();
  })
  return (
    <Layout1>
    <div className='container-fluid'>
        <div className='row'>
           <div className='col'>
              <table className='table table-bordered users-table'>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email Id</th>
                        <th>Gender</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    {contactData.map((ele,key)=>(
                      <tr key={key}>
                        <td>{ele.Firstname}</td>
                        <td>{ele.Lastname}</td>
                        <td>{ele.EmailId}</td>
                        <td>{ele.Gender}</td>
                        <td>{ele.Message}</td>
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

export default ContactData
