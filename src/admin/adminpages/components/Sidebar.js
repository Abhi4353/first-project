import React from 'react'
import "../../Admin.css"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
import admin from '../../../images/admin.jpg'
const Sidebar = () => {

  const navigate = useNavigate();
  // const logout = () =>{
  //   localStorage.removeItem("token")
  //   toast.success("Logout successfull")
  //    navigate('/admin')
  //  }
  return (
    <div className='container-fluid sidebar-dashboard'>
      <div className='row user-sidebar-content'>
        <div className='col-4'>
        <img src={admin} alt='adminpic'></img>
        </div>
        <div className='col-8'>
        <h1>Admin</h1>
        </div>
      </div>
      <div className='row'>
       <nav className='navbar navbar-dashboard'>
          <ul className='nav-item'>
             <li>
               <Link to="/registeredusers">Users</Link>
             </li>
             <li>
               <Link to="/manageusers">New User Request</Link>
             </li>
             <li>
               <Link to="/userregistration">Users Registration</Link>
             </li>
             <li>
               <Link to="/createposts">Create Posts</Link>
             </li>
             <li>
               <Link to="/manageposts">Manage Posts</Link>
             </li>
             <li>
               <Link to="/admincomments">Manage Comments</Link>
             </li>
             <li>
               <Link to="/contactformcheck">Manage Contact Us Data</Link>
             </li>
             <li>
               <Link to="/adminproducts">Create Products</Link>
             </li>
             <li>
               <Link to="/manageproducts">Manage Products</Link>
             </li>
             <li>
               <Link to="#">Empty</Link>
             </li>
             <li>
               <Link to="#">Empty</Link>
             </li>
             
             <ToastContainer position='top-center'/>
          </ul>
       </nav>
       </div>
    </div>
  )
}

export default Sidebar
