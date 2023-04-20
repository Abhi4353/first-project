import React from "react";
import { Link } from "react-router-dom";
import Layout1 from "./layout/Layout1";
import "../Admin.css";
import { useState } from "react";
import { BACkEND_URL } from "../../config/config";
import axios from "axios";
import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement
);

const Dashboard = () => {
  const [count, setCount] = useState();
  const [requests, setRequests] = useState();
  const [posts, setPosts] = useState();
  const [users, setUsers] = useState([]);
  const [price, setPrice] = useState([]);
  const [name, setName] = useState([]);
  const [date, setDate] = useState([]);
  const [year, setYear] = useState([]);
  const [button, setButton] = useState(true);

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Users registration Month",
      },
    },
  };

  // Logic for getting users data to show counting of users , users requests and posts.
  const getusersinfo = async () => {
    const res = await axios.get(`${BACkEND_URL}/users`);
    setCount(res.data.filter((ele) => ele.status === true).length);
    setRequests(res.data.filter((ele) => ele.status === false).length);
  };

  const getpostsdata = async () => {
    const res = await axios.get(`${BACkEND_URL}/posts`);
    setPosts(res.data.length);
  };

  // Logic to set data in the line chart

  const getproducts = async () => {
    const res = await axios
      .get(`${BACkEND_URL}/getproducts`)
      .then((response) => {
        setUsers(response.data.map((ele) => ele.Title));
        setPrice(response.data.map((ele) => ele.Price));
      });
  };
  // console.log(users);

  let data = {
    labels: users,
    datasets: [
      {
        label: "Price of Different Products",
        data: price,
        backgroundColor: "red",
        borderColor: "yellow",
      },
    ],
  };

  // Logic for putting users data into a line chart
  const getusers = async () => {
    const res = await axios.get(`${BACkEND_URL}/users`).then((response) => {
      setName(response.data.map((ele) => ele.FirstName));
      setDate(response.data.map((ele) => new Date(ele.createdAt).getMonth()));
      setYear(
        response.data.map((ele) => new Date(ele.createdAt).getUTCFullYear())
      );
    });
  };
  let data2 = {
    labels: name,
    datasets: [
      {
        label: "users registration",
        data: date,
        backgroundColor: "yellow",
        borderColor: "red",
      },
    ],
  };
  let data3 = {
    labels: name,
    datasets: [
      {
        label: "users registration",
        data: year,
        backgroundColor: "yellow",
        borderColor: "red",
      },
    ],
  };

  const setbuttondata = () => {
    setButton(false);
  };

  const setyearbutton = () => {
    setButton(true);
  };

  useEffect(() => {
    getpostsdata();
    getusersinfo();
    getproducts();
    getusers();
  }, []);

  return (
    <>
      <Layout1>
        <div className="container-fluid">
          <h1 className="bg-light text-secondary">Admin Dashboard</h1>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col ">
              <div className="container users-chart">
                <div className="row users-chart-head">
                  <h1>Users Requests</h1>
                </div>
                <div className="row users-chart-bottom">
                  <Link to="/manageusers">{requests}</Link>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="container admin-users-represent">
                <div className="row admin-users-head">
                  <h1>Registered Users</h1>
                </div>
                <div className="row admin-users-bottom">
                  <Link to="/registeredusers">{count}</Link>
                </div>
              </div>
            </div>
            <div className="col ">
              <div className="container users-chart">
                <div className="row users-chart-head">
                  <h1>Posts Created</h1>
                </div>
                <div className="row users-chart-bottom">
                  <Link to="/manageposts">{posts}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="container-fluid">
              <div className="row">
                <div className="col dashboard-user-chart1">
                  <Line data={data}></Line>
                </div>
                <div className="col dashboard-user-chart2">
                  {button ? (
                    <Bar options={options} data={data2} />
                  ) : (
                    <Bar options={options} data={data3} />
                  )}
                  {button ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={setbuttondata}
                    >
                      By Year
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={setyearbutton}
                    >
                      By Month
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
};

export default Dashboard;
