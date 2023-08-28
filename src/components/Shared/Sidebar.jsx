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
		<Link to={` `}>
          <button
            className={`menu ${activeMenu === 'dashboard' ? 'active' : ''}`}
            onClick={() => handleMenuClick('dashboard')}
          >
			Dashboard
            
          </button>
		  </Link>
        </li>
        <li>
		<Link to={`/products`}>
          <button
            className={`menu ${activeMenu === 'products' ? 'active' : ''}`}
            onClick={() => handleMenuClick('products')}
          >
		Products
            
          </button>
		  </Link>
        </li>

        <li>
		<Link to={`/ordermanagement`}>
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
                <Link to={` /myorders`}>My Orders</Link>
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
		<Link to={`/location`}>
          <button
            className={`menu ${activeMenu === 'manage' ? 'active' : ''}`}
            onClick={() => handleMenuClick('manage')}
          >
			Manage Location
            
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/shipments">
          <button
            className={`menu ${activeMenu === 'shipments' ? 'active' : ''}`}
            onClick={() => handleMenuClick('shipments')}
          >
	Shipments
            
          </button>
		  </Link>
        </li>
	
        <li>
		<Link to="/smartcontract">
          <button
            className={`menu ${activeMenu === 'smartcontract' ? 'active' : ''}`}
            onClick={() => handleMenuClick('smartcontract')}
          >
			Smart Contracts
          </button>
		  </Link>
        </li>
        <li>
		<Link to="/reports">
          <button
            className={`menu ${activeMenu === 'reports' ? 'active' : ''}`}
            onClick={() => handleMenuClick('reports')}
          >
		Reports
            
          </button>
		  </Link>
        </li>
    		<li>
		<Link to="/admin">
          <button
            className={`menu ${activeMenu === 'admin' ? 'active' : ''}`}
            onClick={() => handleMenuClick('admin')}
          >
			Admin
            
          </button>
		  </Link>
        </li>

        <li>
          <button
            className={`menu ${activeMenu === 'prdmgt' ? 'active' : ''}`}
            onClick={() => handleMenuClick('prdmgt')}
          >
            Product Management
          </button>
          {activeMenu === 'prdmgt' && (
            <ul className="submenu">
              <li>
                <Link to={`/addproduct`} >Single Items</Link>
              </li>
              <li>
                <Link to={`/upload`}>Bulk Upload</Link>
              </li>
              <li>
                <Link to={`/updateepd`}>Update EPD </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
