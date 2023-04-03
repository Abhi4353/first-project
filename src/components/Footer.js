import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid text-white bottom-nav-content">
     <div className='row'>
      <div className='col-4'>
        <div className='container'>
        <h2>Shop</h2>
        </div>
      </div>
      <div className='col-4'>
      <div container>
        <h3 className='mb-3'>Important Links</h3>
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Products</li>
          <li>Contact Us</li>
        </ul>
        </div>
      </div>
      <div className='col-4'>
      <div className='container'>
        <h2 className='mb-3'>Contact</h2>
        <p>Address :-Smart InfoCare Pvt Ltd Mohali Phase 10B Industrial Area Mohali</p>
        <p>Email :-SICS@gmail.com</p>
        <p>Mobile :-2287543</p>
        <p>Fax :-572892782</p>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
