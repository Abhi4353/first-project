import React, { useState, useEffect } from "react";
import { BACkEND_URL } from "../../config/config";
import axios from "axios";
import Layout1 from "../adminpages/layout/Layout1";
import "../Admin.css";

const Manageusers = () => {
    const [users, setUsers] = useState([]);
    // const[userStatus,setUserStatus] = useState("");
    const getregisteredusers = async () => {
      const res = await axios.get(`${BACkEND_URL}/users`);
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
                    <th>Change Status</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((ele, key) => (
                    <tr key={key}>
                      <td>{ele.FirstName}</td>
                      <td>{ele.LastName}</td>
                      <td>{ele.Email}</td>
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
        </div>
      </Layout1>
    </>
  )
}

export default Manageusers
