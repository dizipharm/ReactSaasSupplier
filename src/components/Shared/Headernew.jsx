import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import{ Navbar, Container, Nav} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';
import Imagenew from './../../assets/Images/logo.png'


const Headernew = ({signOut}) => {
  const { adminId } = useParams();
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
          <Nav className="ml-auto">
          {/* <LinkContainer to='/cart'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer> */}
            <LinkContainer to={`/dashboard/products`}>
            <Nav.Link><i className='fas fa-user'></i>Products</Nav.Link>
            </LinkContainer>
            <button onClick={signOut}>Sign Out</button>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Headernew