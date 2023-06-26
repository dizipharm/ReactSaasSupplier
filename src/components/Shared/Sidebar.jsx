import React, { useState } from 'react';
import './Sidebar.css';
import { Link, useParams } from 'react-router-dom';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { adminId } = useParams();

  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <div className="sidenav">
      <ul>
        <li>
		<Link to={`/dashboard/${adminId}`}>
          <button
            className={`menu ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuClick('dashboard')}
          >
			Dashboard
            
          </button>
		  </Link>
        </li>
        <li>
          <button
            className={`menu ${activeMenu === 'products' ? 'active' : ''}`}
            onClick={() => handleMenuClick('products')}
          >
            Products
          </button>
          {activeMenu === 'products' && (
            <ul className="submenu">
              <li>
                <Link to={`/products/${adminId}`} >All Products</Link>
              </li>
              <li>
                <Link to={`/addproduct/${adminId}`}>Add Product</Link>
              </li>
            
            </ul>
          )}
        </li>
        <li>
          <button
            className={`menu ${activeMenu === 'orders' ? 'active' : ''}`}
            onClick={() => handleMenuClick('orders')}
          >
            Orders
          </button>
          {activeMenu === 'orders' && (
            <ul className="submenu">
              <li>
                <a href="#">All Orders</a>
              </li>
              <li>
                <a href="#">Pending Orders</a>
              </li>
              <li>
                <a href="#">Completed Orders</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
