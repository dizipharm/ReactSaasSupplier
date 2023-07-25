import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Addproduct from "./components/AddProduct/Addproduct";
import Productscreen from "./components/Productscreen/Productscreen";
import Myorder2 from "./components/OrderManagement/Myorder2";
import Location from "./components/Locations/Location";
import Product from "./components/Productscreen/Product";
import Layouts from "./components/Shared/Layouts";
import Upload from "./components/AddProduct/Upload";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Layouts />}>
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="addproduct" element={<Addproduct />} />
            <Route path="upload" element={<Upload />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="ordermanagement" element={<Myorder2 />} />
            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
