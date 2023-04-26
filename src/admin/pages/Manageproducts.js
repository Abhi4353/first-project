import React, { useEffect, useState } from "react";
import Layout1 from "../adminpages/layout/Layout1";
import { BACkEND_URL } from "../../config/config";
import axios from "axios";
import { Link } from "react-router-dom";
const Manageproducts = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const [total, setTotal] = useState(5);
  const getProducts = async () => {
    const res = await axios.get(`${BACkEND_URL}/getproducts`);
    setCount(res.data.length);
    setProducts(res.data);
    // console.log(products);
  };

  const checkpreviousdata = () => {
    if (start === 0) {
      setStart(0);
      setTotal(5);
    } else {
      setStart(start - 5);
      setTotal(total - 5);
    }
  };

  const checknextdata = () => {
    if (total > count) {
      setStart(start);
      setTotal(total);
    } else {
      setStart(start + 5);
      setTotal(total + 5);
    }
  };

  const deleteproduct = async(id) => {
    const res = await axios.post(`${BACkEND_URL}/deleteproduct?id=${id}`)
    getProducts();
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Layout1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-bordered users-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.slice(start, total).map((ele, key) => (
                  <tr key={key}>
                    <td>{ele.Title}</td>
                    <td>{ele.Price}</td>
                    <td>{ele.Category}</td>
                    <td>{ele.Description}</td>
                    <td>
                      <Link
                        to={`${BACkEND_URL}/uploads/${ele.image}`}
                        target="_blank"
                      >
                        <img src={`${BACkEND_URL}/uploads/${ele.image}`}></img>
                      </Link>
                    </td>
                    <td className="action-button">
                      <Link to={`/updateproduct/${ele._id}`}> <button  className="btn btn-success">Edit</button></Link>
                     
                      <button type="button" className="btn btn-danger" onClick={()=>deleteproduct(ele._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row button-prev-next">
          {start >= 5 ? (
            <button
              className="btn btn-secondary w-25"
              type="button"
              onClick={checkpreviousdata}
            >
              Previous
            </button>
          ) : (
            ""
          )}
          {total <= count ? (
            <button
              className="btn btn-success  w-25"
              type="button"
              onClick={checknextdata}
            >
              Next
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout1>
  );
};

export default Manageproducts;
