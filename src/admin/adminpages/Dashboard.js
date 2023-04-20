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
  const [month, setMonth] = useState([]);
  const arr = [];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  // Logic for getting users data to show counting of users , users requests and posts.
  const getusersinfo = async () => {
    const res = await axios.get(`${BACkEND_URL}/users`);
    setCount(res.data.filter((ele) => ele.status === true).length);
    setRequests(res.data.filter((ele) => ele.status === false).length);
    setDate(res.data.filter((ele) => ele.status === true).map((ele)=>new Date(ele.createdAt).getMonth()));
    // setMonth(res.data.map((ele) => new Date(ele.createdAt).getMonth()));
  };
  console.log(date)
    let datamy = date;
    let one = 0,
      two = 0,
      three = 0,
      four = 0,
      five = 0,
      six = 0,
      seven = 0,
      eight = 0,
      nine = 0,
      ten = 0,
      eleven = 0,
      twelve = 0;
    for (let i = 0; i <= datamy.length; i++) {
      if (1 === datamy[i]) {
        one = one + 1;
      }
      if (2 === datamy[i]) {
        two = two + 1;
      }
      if (3 === datamy[i]) {
        three = three + 1;
      }
      if (4 === datamy[i]) {
        four = four + 1;
      }
      if (5 === datamy[i]) {
        five = five + 1;
      }
      if (6 === datamy[i]) {
        six = six + 1;
      }
      if (7 === datamy[i]) {
        seven = seven + 1;
      }
      if (8 === datamy[i]) {
        eight = eight + 1;
      }
      if (9 === datamy[i]) {
        nine = nine + 1;
      }
      if (10 === datamy[i]) {
        ten = ten + 1;
      }
      if (11 === datamy[i]) {
        eleven = eleven + 1;
      }
      if (12 === datamy[i]) {
        twelve = twelve + 1;
      }
    }
    arr.push(
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
      ten,
      eleven,
      twelve
    );
    let data2 = {
      labels: ["January","february","march","april","may","june","july","august","september","october","november","december"],
      datasets: [
        {
          label: "users registration",
          data: arr,
          backgroundColor: "yellow",
          borderColor: "red",
        },
      ],
    };
    let data3 = {
      labels: ["January","february","march","april","may","june","july","august","september","october","november","december"],
      datasets: [
        {
          label: "users registration",
          data: arr,
          backgroundColor: "yellow",
          borderColor: "red",
        },
      ],
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

  useEffect(() => {

  }, []);
  // [
  //   { name: "January", id: 1 },
  //   { name: "february", id: 2 },
  //   { name: "march", id: 3 },
  //   { name: "april", id: 4 },
  //   { name: "may", id: 5 },
  //   { name: "june", id: 6 },
  //   { name: "july", id: 7 },
  //   { name: "august", id: 8 },
  //   { name: "september", id: 9 },
  //   { name: "october", id: 10 },
  //   { name: "november", id: 11 },
  //   { name: "december", id: 12 },
  // ]
 
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
