import React, {useEffect, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../Admin.css"
import { BACkEND_URL } from '../../../config/config'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';

const Header = () => {
  const[admin,setAdmin]=useState([]);
  const navigate = useNavigate();
  const getadmindata = async() =>{
    const res = await axios.get(`${BACkEND_URL}/admin`)
    setAdmin(res.data);
    console.log(res.data);
  }
  useEffect(()=>{
    getadmindata();
  },[])

 const logout = () =>{
  toast.success("Successfully Logout")

   navigate('../../admin')
 }

  return (
    <div className='container-fluid header-admin'>
    <nav className="navbar">
<div className="container-fluid">
  <div className="navbar-header">
    <Link className="navbar-brand" to="/admindashboard">Admin Dashboard</Link>
  </div>
  <ul className='nav-item dropdown navbar-border'>
  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       {admin.map((ele ,key)=>(
        <div key={key}><p key={key}>Welcome-: {ele.Email}</p></div>
        ))}
      </Link> 
      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
        <Link className="dropdown-item" to="#">Profile</Link>
        <Link className="dropdown-item" to="#">Update Profile</Link>
        <div className="dropdown-divider"></div>
        <Link className="dropdown-item"  onClick={()=>logout()}>Logout</Link>
      </div>  
  </ul>
  <ToastContainer position='top-center'/>
</div>
</nav>
  </div>
  )
}

export default Header
