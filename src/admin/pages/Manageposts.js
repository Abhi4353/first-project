import React, { useState, useEffect } from "react";
import Layout1 from "../adminpages/layout/Layout1";
import { BACkEND_URL } from "../../config/config";
import axios from "axios";
import { Link } from "react-router-dom";
const Manageposts = () => {
  const [posts, setPosts] = useState([]);
  const[count,setCount]=useState(0);
  const[start,setStart]=useState(0);
  const[total,setTotal]=useState(5);
  // const[startbutton,setstartbutton]=useState(false);
  const getpostsdata = async () => {
    const res = await axios.get(`${BACkEND_URL}/posts`);
    setCount(res.data.length)
    setPosts(res.data);
    // console.log(res);
  };

  useEffect(() => {
    getpostsdata();
  }, []);


  const onhandelDelte = async (id) => {
    const res = await axios.post(`${BACkEND_URL}/deletepost?id=${id}`);
    getpostsdata();
  };

  const checkpreviousdata = () => {
    if(start === 0){
      setStart(0)
      setTotal(5)
    }
    else{
      setStart(start-5)
      setTotal(total-5)
    }
   
  }

  const checknextdata = () => {
    if(total > count){
      setStart(start)
      setTotal(total)
    }
    else{
      setStart(start+5)
      setTotal(total+5)
    }
  }



  return (
    <Layout1>
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <table className="table table-bordered users-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Id</th>
                  <th>Body</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {posts.slice(start,total).map((ele, key) => (
                  <tr key={key}>
                    <td>{ele.Title}</td>
                    <td>
                      <Link
                        to={`${BACkEND_URL}/uploads/${ele?.image}`}
                        target="_blank"
                      >
                        <img src={`${BACkEND_URL}/uploads/${ele?.image}`}></img>
                      </Link>
                    </td>
                    <td>{ele.Id}</td>
                    <td>{ele.Body}</td>
                    <td className="action-button">
                     <Link to={`/updatepost/${ele?._id}`}> <button
                        className="btn btn-success"
                        
                      >
                        Edit
                      </button></Link>
                      <button
                        className="btn btn-danger"
                        onClick={() => onhandelDelte(ele._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row button-prev-next">
          {start >= 5 ? <button className="btn btn-secondary w-25" type="button" onClick={checkpreviousdata}>Previous</button> : ""}
          {count >= 6 && total < count ? <button className="btn btn-success  w-25" type="button" onClick={checknextdata}>Next</button> : ""}
        </div>
      </div>
    </Layout1>
  );
};

export default Manageposts;
