import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button, Container } from 'react-bootstrap'
import Imagenew from "../../assets/Images/938.jpg"


const Productscreen = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const {adminId} = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://1dd91932-6f58-48e7-83be-bb5085b0f9a3.mock.pstmn.io/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
     <Container fluid>
      <Row>
        <Col md={4}>
        <Image src={Imagenew} fluid/>
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
                   Description: {product.description}
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
                                <strong>Rs.{product.price}</strong>
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
                               In Stock
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className='btn-block' type='button' >
                                Add To Cart
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