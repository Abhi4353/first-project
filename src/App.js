import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Singleproduct from "./pages/Singleproduct";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Layout from "./layout/Layout";
import Layout2 from "./layout/Layout2";
import ThemeProvider from "./components/ThemeProvider";
import FormData from "./pages/FormData";

function App() {
  return (
    <>
    <ThemeProvider>
      <Router>
        
          <Routes>
            <Route path="/" element={<Layout2 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<Singleproduct />} />
            <Route exact path="/contactdata" element={<FormData />}/>
          </Routes>
        
      </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
