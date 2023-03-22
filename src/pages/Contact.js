import React from 'react'
import Layout from '../layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className='container-fluid contact-component'>
      <h1>Fill This Form To Contact Us</h1>
      </div>
    <div className='container w-50 mt-5'>
       <div className='row'>
         <div className='col'>
            <form>
              <div className='form-group pb-5'>
                <label>First Name</label>
                <input type="text" className='form-control'></input>
                <label>Last Name</label>
                <input type="text" className='form-control'></input>
                <label>Email Id</label>
                <input type="email" className="form-control"></input>
                <label>Gender&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type="radio"/>Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="radio"/>Female<br/><br/><br/>
                <label>Enter Your Message Here</label>
                <textarea className='form-control'></textarea>
                <button type='button' className='btn btn-primary mt-2'>Submit</button>
              </div>
            </form>
         </div>
       </div>
    </div>
    <div>
      nothing
    </div>
    </Layout>
  )
}

export default Contact
