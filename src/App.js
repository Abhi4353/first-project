import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Singleproduct from "./pages/Singleproduct";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout2 from "./layout/Layout2";
import ThemeProvider from "./components/ThemeProvider";
import FormData from "./pages/FormData";
import Posts from "./pages/Posts";
import Singleposts from "./pages/Singleposts";
import Registration from "./components/Registration";
import Adminlogin from "./admin/Adminlogin";
import Dashboard from "./admin/adminpages/Dashboard";
import Addproducts from "./admin/pages/Addproducts";
import Users from "./admin/pages/Users";
import Userregistration from "./admin/pages/Userregistration";
import ContactData from "./admin/pages/ContactData";
import Createposts from "./admin/pages/Createposts";
import Comments from "./admin/pages/Comments";
import Privateroutes from "./Privateroutes";
import Privateloginroute from "./Privateloginroute";
import Manageusers from "./admin/pages/Manageusers";
import Manageproducts from "./admin/pages/Manageproducts";
import Manageposts from "./admin/pages/Manageposts";
import Updatepost from "./admin/pages/Updatepost";
import Payment from "./pages/Payment";
import Updateproducts from "./admin/pages/Updateproducts";

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout2 />} />
            <Route exact path="/register" element={<Registration />} />
              <Route path="/admin" element={<Adminlogin />} />
              <Route path="/" element={<Privateroutes />}>
              <Route path="/admindashboard" element={<Dashboard />} />
              <Route path="/adminproducts" element={<Addproducts />} />
              <Route path="/registeredusers" element={<Users />} />
              <Route path="/userregistration" element={<Userregistration />} />
              <Route path="/contactformcheck" element={<ContactData />} />
              <Route path="/createposts" element={<Createposts />} />
              <Route path="/admincomments" element={<Comments />} />
              <Route path="/manageusers" element={<Manageusers />}/>
              <Route path="/manageproducts" element={<Manageproducts />}/>
              <Route path="/manageposts" element={<Manageposts/>}/>
              <Route path="/updatepost/:_id" element={<Updatepost />}/>
              <Route path="/updateproduct/:_id" element={<Updateproducts />}/>
            </Route>
            <Route path="/" element={<Privateloginroute/>}>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:_id" element={<Singleproduct />} />
            <Route exact path="/contactdata" element={<FormData />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/singlepost/:_id" element={<Singleposts />} />
            <Route exact path="/payment" element={<Payment />} />
           </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
