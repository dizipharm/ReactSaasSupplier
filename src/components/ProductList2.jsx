import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { Card, Container, Row,Col, Button,Form, Carousel, Table,  FloatingLabel } from "react-bootstrap";
import Imagenew from "./../assets/Images/938.jpg"



const ProductList2 = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { adminId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(("https://1dd91932-6f58-48e7-83be-bb5085b0f9a3.mock.pstmn.io/products"));
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
    <div style={{ padding:"12px"}}>

    <div style={{display:"flex", gap:"10px", justifyContent:"space-between"}}>
        
        {/* <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          /> */}
            <InputGroup className="mb-3"  style={{width:"50%"}} >
          <InputGroup.Text style={{background:"#80ced6"}}>Search Products</InputGroup.Text>
          <Form.Control aria-label="Search..." 
           placeholder="Search..."
           value={searchQuery}
          
           onChange={(e) => setSearchQuery(e.target.value)}/>
        </InputGroup>
        <div style={{display:'flex', gap:'2px'}}>
        <FloatingLabel controlId="floatingSelect" label="Sort by">
      <Form.Select aria-label="Floating label select example">
        <option>Price</option>
        <option value="1">Low to High</option>
        <option value="2">High to Low</option>
        {/* <option value="3">Three</option> */}
      </Form.Select>
    </FloatingLabel>

    <Button>
    <Link to="/addproduct" style={{color:'white',textDecoration:'none'}}>Add new product
    </Link>
    </Button>
   
    </div>
        </div>

      <h1>Latest Products </h1>
      <Table >
      <thead>
        <tr>
          <th> Image</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) ).map((product) => (
          <tr key={product.id}>
            <td>
              <img src={Imagenew} style={{ maxWidth: '100px' }} />
            </td>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td></td>
            
            <td >
              <div style={{display:"flex", gap:"2px", maxWidth:"100px"}}>
            <Link to={`/product/${product.id}`}>
            <Button>View</Button>
            </Link>
            <Button variant='secondary'>Edit</Button>
            <Button variant='danger'>Delete</Button>
            </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </>
  );
};

export default ProductList2;
