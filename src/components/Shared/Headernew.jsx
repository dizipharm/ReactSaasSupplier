import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import{ Navbar, Container, Nav} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import Imagenew from './../../assets/Images/logo.png'
import './Headernew.css'
import Dropdown from 'react-bootstrap/Dropdown';

const Headernew = ({signOut}) => {
  // const { adminId } = useParams();
  return (
    <Navbar  style={{background:"white", color:"#ffa500"}}>
        <Container>
          <LinkContainer to={`/dashboard`}>
          <Navbar.Brand >
          <img
              src={Imagenew}
              width="150"
              height="40"
              className=""
              alt="React Bootstrap logo"
             
            />
          </Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto ">
            <div className='header'>
          <LinkContainer to='/alert&notifications'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Alert & Notifications</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/smartanalytics'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Smart Analytics</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/ratings'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Ratings</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/settings'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Settings</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/supportcare'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Support Care</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/t&t'>
            <Nav.Link><i className='fas fa-user'></i>Track & Trace</Nav.Link>
            </LinkContainer>
            </div>
            
          </Nav>
         
          <Dropdown >
      <Dropdown.Toggle  id="dropdown-basic" >
       Profile
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ width:"10%"}} >
        <Dropdown.Item href="#/action-1" >User</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
        </Container>
       
      </Navbar>
  )
}

export default Headernew