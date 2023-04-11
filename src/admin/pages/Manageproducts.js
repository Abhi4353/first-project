import React, { useEffect, useState } from 'react'
import Layout1 from '../adminpages/layout/Layout1'
import { BACkEND_URL } from '../../config/config';
import axios from 'axios';
const Manageproducts = () => {
   const[products,setProducts] = useState([]);

  const getProducts = async() => {
  const res = await axios.get(`${BACkEND_URL}/getproducts`)
  setProducts(res.data)
  console.log(products)
  }

  useEffect(()=> {
    getProducts();
  },[])
  return (
    <Layout1>
      <div className='container-fluid'>
       <div className='row'>
         <div className='col'>
           <table className='table table-bordered users-table'>
             <thead>
              <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Description</th>
                <th>Image</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
             </thead>
             <tbody>
              {products.map((ele, key) => (
                <tr key={key}>
                   <td>{ele.Title}</td>
                   <td>{ele.Price}</td>
                   <td>{ele.Category}</td>
                   <td>{ele.Description}</td>
                   <td>{ele.image}</td>
                   <td></td>
                   <td></td>
                </tr>
              ))}
             </tbody>
           </table>
         </div>
       </div>
      </div>
    </Layout1>
  )
}

export default Manageproducts
