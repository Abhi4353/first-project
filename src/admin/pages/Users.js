import React, { useState, useEffect } from "react";
import { BACkEND_URL } from "../../config/config";
import axios from "axios";
import Layout1 from "../adminpages/layout/Layout1";
import "../Admin.css";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  // const[userStatus,setUserStatus] = useState("");
  const getregisteredusers = async () => {
    const res = await axios.get(`${BACkEND_URL}/users`);
    setUsers(res.data.filter((ele) => ele.status === true) );
    console.log(
      "res",
      res.data.filter((ele) => ele.status === true)
    );
  };
  const deleteuserstatus = () => {};
  const adduserstatus = () => {};
  useEffect(() => {
    getregisteredusers();
    deleteuserstatus();
    adduserstatus();
  }, []);
  const getCheckedStatus = (ele) => {
    return ele;
  };
  const [sta, setSta] = useState({});
  const onChangeHandleChecked = async (e, id) => {
    getCheckedStatus(e);
    const res = await axios.post(`${BACkEND_URL}/status?id=${id}`, {
      active: e.target.checked,
    });
    setSta(e.target.checked);
  };
  return (
    <>
      <Layout1>
        <div className="container-fluid">
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
                    <th>Status</th>
                  </tr>
                </thead>
                 
                <tbody>

                      {users.length !== 0 && users.map((ele, key) => (
                        <tr key={key}>
                          <td>{ele.FirstName}</td>
                          <td>{ele.LastName}</td>
                          <td>{ele.Email}</td>
                          <td>{ele.Password}</td>
                          <td><Link to={`${BACkEND_URL}/uploads/${ele.image}`} target="_blank"><img src={`${BACkEND_URL}/uploads/${ele.image}`}></img></Link></td>

                          <td>
                            <div class="custom-control custom-switch">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                // checked={ele.Active}
                                onChange={(e) =>
                                  onChangeHandleChecked(e, ele._id)
                                }
                                {...(ele.Active ? { checked: true } : {})}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                </tbody>

                  
              </table>

              {users.length === 0 ?<p className="text-center"> no data found !</p> :""}
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default Users;
