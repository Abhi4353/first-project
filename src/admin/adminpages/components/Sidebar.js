import React from 'react'
import "../../Admin.css"
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { Navigate } from 'react-router-dom'
const Sidebar = () => {

  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("token")
    toast.success("Logout successfull")
     navigate('/admin')
   }
  return (
    <div className='container-fluid sidebar-dashboard w-auto h-auto'>
       <nav className='navbar navbar-dashboard'>
          <ul className='nav-item'>
             <li>
               <Link to="/registeredusers">Users</Link>
             </li>
             <li>
               <Link to="/userregistration">Users Registration</Link>
             </li>
             <li>
               <Link to="/contactformcheck">Manage Contact Data</Link>
             </li>
             <li>
               <Link to="/createposts">Create Posts</Link>
             </li>
             <li>
               <Link to="/admincomments">Comments</Link>
             </li>
             <li>
               <Link to="/adminproducts">Products</Link>
             </li>
             <li>
               <Link to="/adminproducts">Products</Link>
             </li>
             <li>
               <Link to="/adminproducts">Products</Link>
             </li>
             <li>
               <Link to="/adminproducts">Products</Link>
             </li>
             <li>
               <Link to="/adminproducts">Products</Link>
             </li>
             <li>
               <Link to="/adminproducts">Products</Link>
             </li>
             <li>
             <p className="dropdown-item"  style={{cursor:"pointer"}} onClick={logout}>Logout</p>
             </li>
             <ToastContainer position='top-center'/>
          </ul>
       </nav>
    </div>
  )
}

export default Sidebar
