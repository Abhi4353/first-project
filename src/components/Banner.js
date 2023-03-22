import React from 'react'
import Home from '../pages/Home'
import { Link } from 'react-router-dom'


const Banner = () => {
  return (
    <>
     <div className='container-fluid color-bg-div'>
    
        <div className='container'>
          <div className='row home-body'>
          <div className='col-5'>
             <div className='container-fluid body-content'>
               <h2>Everything you need to buy, all in one place</h2>
               <p>What will you do if you suddenly realize that there is no milk or bread in the fridge? Or, what if you just feel like
                 having a burger but are too lazy to go out? The best option available with you is ordering the items ‘online’. </p>
                <Link to="/product"><button type="button" className='btn btn-light '>Check Out Products</button></Link>
          
             </div>

          </div>
         
          </div>
        </div>
        </div>
        </>
  )
}

export default Banner
