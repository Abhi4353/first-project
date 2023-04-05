import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="container-fluid text-white bottom-nav-content">
     <div className='row'>
      <div className='col-4'>
        <div className='container'>
        <h2>Himalayan Store</h2>
        </div>
      </div>
      <div className='col-4'>
      <div className='container-fluid'>
        <h3 className='mb-3'>Important Links</h3>
        <ul>
          <Link to="/home"><li>Home</li></Link>
          <Link to="/about"><li>About US</li></Link>
          <Link to="/product"><li>Products</li></Link>
          <Link to="/contact"><li>Contact Us</li></Link>
        </ul>
        </div>
      </div>
      <div className='col-4'>
      <div className='container'>
        <h2 className='mb-3'>Contact</h2>
        <p>Address :-Himalayan Mega Mart Near Government College Road Bilaspur HP</p>
        <p>Email :-Himalayanmart@gmail.com</p>
        <p>Mobile :-2287543</p>
        <p>Fax :-572892782</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
