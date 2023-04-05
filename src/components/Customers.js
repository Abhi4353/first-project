import React from 'react'
import { Link } from 'react-router-dom'

const Customers = () => {
  return (
    <div className='container-fluid'>
      <div className='row customer-component'>
         <div className='col-3'>
           <Link to="https://www.flipkart.com/" target='_blank'>Flipkart</Link>
         </div>
         <div className='col-3'>
         <Link to="https://www.amazon.in/" target='_blank'>Amazon</Link>
         </div>
         <div className='col-3'>
         <Link to="https://www.myntra.com/" target='_blank'>Myntra</Link>
         </div>
         <div className='col-3'>
         <Link to="https://www.snapdeal.com/" target='_blank'>Snapdeal</Link>
         </div>
      </div>
    </div>
  )
}

export default Customers
