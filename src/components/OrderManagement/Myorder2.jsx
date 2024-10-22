import React from "react";
import Header from "../Header";
import Sidebar from "../Shared/Sidebar";
import Myorders from "./Myorders";
import Orders from "./Tabs";

const Myorder2 = () => {
  return (
    <div>
      <div style={{zoom:'0.8' }}>
        <h2> Order Management</h2>
        <Orders />
      </div>
    </div>
  );
};

export default Myorder2;
