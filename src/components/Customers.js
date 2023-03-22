import React from 'react'
import { Link } from 'react-router-dom'

const Customers = () => {
  return (
    <div className='container-fluid bg-light '>
      <div className='row customer-component'>
         <div className='col-3'>
           <Link to="www.flipkart.com"><h2>Flipkart</h2></Link>
         </div>
         <div className='col-3'>
         <Link><h2>Amazon</h2></Link>
         </div>
         <div className='col-3'>
         <Link><h2>Myntra</h2></Link>
         </div>
         <div className='col-3'>
         <Link><h2>Snapdeal</h2></Link>
         </div>
      </div>
    </div>
  )
}

export default Customers
