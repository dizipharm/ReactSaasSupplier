import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Headernew from './Headernew';
import './../CSS/layout.css';

export default function Layouts() {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex:"9" }}>
        <Headernew />
      </div>

      <div style={{ display: 'flex', marginTop: '50px' }}>
        <div style={{ width: '20%', height: '100vh', overflow: 'auto' }}>
          <Sidebar />
        </div>
        <div style={{ flex: 1, overflow: 'auto', marginTop:"20px"}}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
