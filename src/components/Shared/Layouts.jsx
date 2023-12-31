import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Headernew from './Headernew';
import './../CSS/layout.css';

const Layouts = ({ signOut, children }) => {
  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: '9' }}>
        <Headernew signOut={signOut} />
        {children}
      </div>

      <div style={{ display: 'flex', marginTop: '50px', gap: '10px' }}>
        <div style={{ width: '20%', height: '100vh' }}>
          <Sidebar />
        </div>
        <div style={{ flex: 1, overflow: 'auto', marginTop: '20px', width: 'screen' }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layouts;
