import React from 'react'
import {LinkContainer} from 'react-router-bootstrap'
import{ Navbar, Container, Nav} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom';

const Headernew = () => {
  const { adminId } = useParams();
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <LinkContainer to={`/dashboard`}>
          <Navbar.Brand >Saas Application</Navbar.Brand>
          </LinkContainer>
          <Nav className="ml-auto">
          <LinkContainer to='/cart'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to={`/dashboard/products`}>
            <Nav.Link><i className='fas fa-user'></i>Products</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Headernew