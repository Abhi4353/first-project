import React from 'react'
import "../../Admin.css"
import { Link } from 'react-router-dom'
const Sidebar = () => {
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
               <Link to="/adminproducts">Products</Link>
             </li>
             
          </ul>
       </nav>
    </div>
  )
}

export default Sidebar
