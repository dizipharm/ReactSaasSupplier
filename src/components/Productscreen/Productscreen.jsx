import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import Imagenew from "../../assets/Images/938.jpg"


const Productscreen = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://ce7ilz7f17.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`);
        setProduct(response.data.body)
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`https://ce7ilz7f17.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`);
      navigate("/products"); // Redirect to product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <Container fluid>
      <Row>
        <Col md={4}>
        <Image  src={`${product.imageUrl}/${product.image}`} fluid/>
        </Col>
        <Col md={4}>
            <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h3>{product.name}</h3>
                </ListGroup.Item>
                {/* <ListGroup.Item>
                    <Rating value={product.rating} 
                    text={`${product.numReviews} reviews`} />
                </ListGroup.Item> */}
                                <ListGroup.Item>
                   MaterialSpecifications: {product.materialSpecification}
                </ListGroup.Item>
                <ListGroup.Item>
                   Description: {product.description}
                </ListGroup.Item>
                <ListGroup.Item>
                   Sku: {product.sku}
                </ListGroup.Item>
                <ListGroup.Item>
                   Units: {product.units}
                </ListGroup.Item>
                <ListGroup.Item>
                Publish: {product.publish ? 'Published' : 'Unpublished'}
                </ListGroup.Item>
            </ListGroup>
            
             </Col>
             <Col md={2}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Price:
                                 </Col>
                                <Col>
                                <strong>£{product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col>
                                Status:
                                 </Col>
                                <Col>
                               {/* {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'} */}
                              {product.stock}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ display:"flex", flexFlow:"column", gap:"5px"}}>
                          
                          <Link  to={`/editproduct/${product.id}`}>  <Button  type='button' >
                                Edit
                            </Button>
                            </Link>
                            <Button variant="danger" type='button' onClick={handleDelete} >
                                Delete
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
             
             </Col>
      </Row>
    </Container>
     
          </div>
  );
};

export default Productscreen;
