import React, {useEffect, useState}from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../../Admin.css"
import { BACkEND_URL } from '../../../config/config'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import Popup from 'reactjs-popup'

const Header = () => {
  const[admin,setAdmin]=useState([]);
  // const[users,setUsers]=useState();
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
  localStorage.removeItem("token")
  toast.success("Logout successfull")
   navigate('/admin')
 }


  return (
    <div className='container-fluid header-admin p-0'>
<div className="row">
  <div className="col-6 navbar-header mt-1">
    <Link className="navbar-brand" to="/admindashboard">Dashboard</Link>
  </div>
  <div className='col-4 mt-1 navbar-header'>
  <Popup trigger={<i className="fa fa-user-plus"></i>} position="bottom center">
    <div className='conatiner pop-up-header bg-light'>
      <div className='row'>
        <div className='col'>
           <h3>These are new request</h3>

        </div>
      </div>
    </div></Popup>

  </div>
  <div className='col-2 d-flex p-0'>
  <div className='dropdown navbar-border d-flex align-items-center'>
  <button className="btn dropdown-toggle text-light navbar-id-part d-flex align-items-center" type="button" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
       {admin.map((ele ,key)=>(
        <div key={key} className='text-light'><i className='fa fa-solid fa-user'></i>&nbsp;&nbsp;&nbsp;{ele.Name}</div>
        ))}
      </button> 
      <div className="dropdown-menu" aria-labelledby="navbarDropdown" >
        <Link className="dropdown-item text-dark" to="#">Profile</Link>
        <Link className="dropdown-item text-dark" to="#">Update Profile</Link>
        <div className="dropdown-divider"></div>
        <p className="dropdown-item text-dark"  style={{cursor:"pointer"}} onClick={logout}>Logout</p>
      </div>  
  </div>
  <ToastContainer position='top-center'/>
</div>
</div>
  </div>
  )
}

export default Header
