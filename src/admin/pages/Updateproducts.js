import React from "react";
import Layout1 from "../adminpages/layout/Layout1";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACkEND_URL } from "../../config/config";
import "../Admin.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Updateproducts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [data, setData] = useState([]);
  const[price,setPrice]=useState("");
  const[category,setCategory]=useState()
  const { _id } = useParams();
  const getapidata = async () => {
    const res = await axios.get(`${BACkEND_URL}/singleproduct?id=${_id}`);
    setData(res.data);
  };

  const updatepostdata = async(id) => {
    const res = await axios.post(`${BACkEND_URL}/updateproduct?id=${_id}`,{
      Title:title,
      Price:price,
      Description:body
    })
    .then((res)=>{
      if(res.status === 200){
        toast.success("update successfull")
      }
    })
  };
   
  useEffect(() => {
    getapidata();
  },[_id]);
  return (
    <>
      <Layout1>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="container login-form-admin bg-light">
                <div className="row">
                  <div className="col">
                    <h1>Update Product Details</h1>
                    <form className="form">
                      <div className="form-group update-image">
                        <label>Title</label>
                        <input
                          type="text"
                          className="form-control"
                          defaultValue={data?.Title}
                          onChange={(e) => setTitle(e.target.value)}
                        ></input>

                        <label>Category</label>
                        <input type="text"
                          className="form-control"
                          value={data.Category}
                          onChange={event=>setCategory(event.target.value)}
                        ></input>
                        <label>Price</label>
                        <input type="number"
                          className="form-control"
                          defaultValue={data.Price}
                          onChange={(e) => setPrice(e.target.value)}
                        ></input>
                        <label>Image</label>
                        <br />
                        <Link
                          to={`${BACkEND_URL}/uploads/${data.image}`}
                          target="_blank"
                        >
                          <img
                            src={`${BACkEND_URL}/uploads/${data.image}`}
                          ></img>
                        </Link>
                        <br />
                        <label>Body</label>
                        <textarea
                          type="text"
                          className="form-control h-75"
                          defaultValue={data.Description}
                          onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <button
                          type="button"
                          className="btn btn-primary mt-2"
                          onClick={()=>updatepostdata(data._id)}
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default Updateproducts;
