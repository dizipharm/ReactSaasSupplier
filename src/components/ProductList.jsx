import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { Card, Container, Row,Col, Button,Form, Carousel } from "react-bootstrap";
import Imagenew from "./../assets/Images/938.jpg"



const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { adminId } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get((`http://${adminId}.aidiz.co.uk:8080/Product/`));
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
            <InputGroup className="mb-3" >
          <InputGroup.Text style={{background:"#80ced6"}}>Search Products</InputGroup.Text>
          <Form.Control aria-label="Search..." 
           placeholder="Search..."
           value={searchQuery}
           onChange={(e) => setSearchQuery(e.target.value)}/>
        </InputGroup>
        
        </div>

      <h1>Latest Products </h1>
      <Row>
        {products.filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) ).map((product) => (
           <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
           <Card className='my-3 p-5 rounded'>
             <Card.Img src={Imagenew} />
             <Card.Body>
               <Card.Title as='div'>

                <Link to={`/product/${adminId}/${product.id}`}>
               <strong style={{ textTransform: "capitalize" }}>{product.name}</strong>
               </Link>
               </Card.Title>
             </Card.Body>
           </Card>
         </Col>
        ))}
      </Row>
    </div>
    </>
  );
};

export default ProductList;
