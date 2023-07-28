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
      <ul >
        <li>
		<Link to={`/dashboard`}>
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
                <Link to={`/dashboard/products`} >All Products</Link>
              </li>
              <li>
                <Link to={`/dashboard/addproduct`}>Add Product</Link>
              </li>
              <li>
                <Link to={`/dashboard/upload`}>Upload </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
		<Link to={`/dashboard/ordermanagement`}>
          <button
            className={`menu ${activeMenu === 'ordermanagement' ? 'active' : ''}`}
            onClick={() => handleMenuClick('ordermanagement')}
          >
		Order Management
            
          </button>
		  </Link>
        </li>
        
        {/* <li>
          <button
            className={`menu ${activeMenu === 'orders' ? 'active' : ''}`}
            onClick={() => handleMenuClick('orders')}
          >
            Order Management
          </button>
          {activeMenu === 'orders' && (
            <ul className="submenu">
              <li>
                <Link to={`/dashboard/myorders`}>My Orders</Link>
              </li>
              <li>
                <a href="#">New Orders</a>
              </li>
              <li>
                <a href="#">Accepted Orders</a>
              </li>
			   <li>
                <a href="#">Rejected Orders</a>
              </li>
            </ul>
          )}
        </li> */}
		<li>
		<Link to={`/dashboard/location`}>
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Manage Location
            
          </button>
		  </Link>
        </li>
		<li>
		<Link to="/dashboard/trackandtrace">
          <button
            className={`menu ${activeMenu === 'trackandtrace' ? 'active' : ''}`}
            onClick={() => handleMenuClick('trackandtrace')}
          >
			Track & Trace Shipment
            
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/dashboard/smartanalytics">
          <button
            className={`menu ${activeMenu === 'smartanalytics' ? 'active' : ''}`}
            onClick={() => handleMenuClick('smartanalytics')}
          >
			Smart Analytics
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/dashboard/productenquiries">
          <button
            className={`menu ${activeMenu === 'productenquiries' ? 'active' : ''}`}
            onClick={() => handleMenuClick('productenquiries')}
          >
			Product Enquiries
            
          </button>
		  </Link>
        </li>
    		<li>
		<Link to="/dashboard/admin">
          <button
            className={`menu ${activeMenu === 'admin' ? 'active' : ''}`}
            onClick={() => handleMenuClick('admin')}
          >
			Admin
            
          </button>
		  </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
