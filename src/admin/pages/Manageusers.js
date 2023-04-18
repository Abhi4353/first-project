import React, { useState, useEffect } from "react";
import { BACkEND_URL } from "../../config/config";
import axios from "axios";
import Layout1 from "../adminpages/layout/Layout1";
import "../Admin.css";
import { Link } from "react-router-dom";

const Manageusers = () => {
    const [users, setUsers] = useState([]);
    const[count,setCount]=useState(0);
  const[start,setStart]=useState(0);
  const[total,setTotal]=useState(5);
    // const[userStatus,setUserStatus] = useState("");
    const getregisteredusers = async () => {
      const res = await axios.get(`${BACkEND_URL}/users`);
      setCount(res.data.length)
      setUsers(res.data.filter((ele) => ele.status === false));
      console.log(res.data);
    };
    const deleteuserstatus = () => {};
    const adduserstatus = () => {};
    useEffect(() => {
      getregisteredusers();
      deleteuserstatus();
      adduserstatus();
    }, []);

    const onAccept = async (id) => {
      const res = await axios.post(`${BACkEND_URL}/active?id=${id}`, {
        status: true,
      });
      getregisteredusers()
  
    };
    const onhandelDelte = async (id) => {
        const res = await axios.post(`${BACkEND_URL}/deleteuser?id=${id}`);
        getregisteredusers()
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
    <>
      <Layout1>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-bordered users-table">
                <thead>
                  <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email Id</th>
                    <th>Password</th>
                    <th>Image</th>
                    <th>Change Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.slice(start,total).map((ele, key) => (
                    <tr key={key}>
                      <td>{ele.FirstName}</td>
                      <td>{ele.LastName}</td>
                      <td>{ele.Email}</td>
                      <td><Link to={`${BACkEND_URL}/uploads/${ele.image}`} target="_blank"><img src={`${BACkEND_URL}/uploads/${ele.image}`}></img></Link></td>
                      <td>{ele.Password}</td>
                      <td>
                        <button className="btn btn-success" onClick={()=>onAccept(ele._id)}>Accept</button>&nbsp;
                        <button className="btn btn-danger" onClick={()=>onhandelDelte(ele._id)}>Decline</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row button-prev-next">
          {start >= 5 ? <button className="btn btn-secondary w-25" type="button" onClick={checkpreviousdata}>Previous</button> : ""}
          {count>6 && total <= count ? <button className="btn btn-success  w-25" type="button" onClick={checknextdata}>Next</button> : ""}
        </div>
        </div>
      </Layout1>
    </>
  )
}

export default Manageusers
