import React from 'react'
import "../../Admin.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
  return (
    <div className='container-fluid sidebar-dashboard w-25 h-100'>
       <nav className='navbar navbar-dashboard'>
          <ul className='nav-item'>
             <li>
               <Link to="/registeredusers">Users</Link>
             </li>
             <li>
               <Link to="/userregistration">Users Registration</Link>
             </li>
             <li>
               <Link to="/contactformcheck">Contact Form Data</Link>
             </li>
             <li>
               <Link to="/createposts">Create Posts</Link>
             </li>
             <li>
               <Link to="#">Comments</Link>
             </li>
             <li>
               <Link to="#">Products</Link>
             </li>
             
          </ul>
       </nav>
    </div>
  )
}

export default Sidebar
