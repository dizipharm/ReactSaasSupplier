import React from 'react';
import { Nav, Accordion } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css'; // Import your custom styling

const Sidebar = () => {
  const { adminId } = useParams();

  return (
    <Nav className="sidebar" style={{ background: "#75a3a3", height: "100vh" }}>
      <Accordion className="sidebar-accordion">
        {/* Main menu */}
        <Accordion.Item eventKey="0">
			
          <Accordion.Header>Main Menu</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to={`/dashboard/${adminId}`} activeClassName="active" className="sidebar-link">
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to="/profile" activeClassName="active" className="sidebar-link">
                Profile
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
        {/* Submenu */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Products</Accordion.Header>
          <Accordion.Body>
            <Nav className="flex-column">
              <Nav.Link as={Link} to={`/products/${adminId}`} activeClassName="active" className="sidebar-link">
              View Products
              </Nav.Link>
              <Nav.Link as={Link} to={`/addproduct/${adminId}`} activeClassName="active" className="sidebar-link">
                Add Product
              </Nav.Link>
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Nav>
  );
};

export default Sidebar;
