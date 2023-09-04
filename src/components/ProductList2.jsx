import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';
import { Card, Container, Row,Col, Button,Form, Carousel, Table,  FloatingLabel } from "react-bootstrap";
import Imagenew from "./../assets/Images/938.jpg"
import './CSS/product.css' 

const ProductList2 = () => {

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState('asc'); 

  const navigate = useNavigate()

  useEffect(() => {

    async function fetchData() {

      try {

        const response = await axios.get('https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product');

        //setData(response.data);

        // console.log(response.data.body);

        setData(response.data.body);

      } catch (error) {

        console.error(error);

      }

    }

 

    fetchData();

  }, []);

  useEffect(() => {
    const sortedData = [...data].sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

    setData(sortedData);
  }, [sortOrder]);

  const handleDelete = async (id) => {
    //https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/{id}
    try {
      await axios.delete(`https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`);
      window.location.reload(); // Redirect to product list after deletion
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handlePublishToggle = (productId) => {
    // Find the product by ID in the data state
    const productToUpdate = data.find((product) => product.id === productId);

    // Toggle the publish status
    const updatedProduct = { ...productToUpdate, publish: !productToUpdate.publish };

    // Send a POST request to the second API (https://product2/prod) to update the publish status
    fetch(`https://hf06lm5qnk.execute-api.eu-west-2.amazonaws.com/prod/market/`, {
      method: 'POST',
      mode:'no-cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    
    })
 
    
   
      // .then((response) => response.json())
      .then((data) => {
        console.log('Data updated successfully:', data);
        // Reload the page after the data is updated
        window.location.reload();
      })
     
            .then((updatedData) => {
        // Update the product list with the updated data
        
        const updatedProducts = data.map((product) =>
          product.id === productId ? updatedData : product
        );
      
        setData(updatedProducts);
      
      
      })
    
      .catch((error) => console.error('Error updating data:', error));
     
   
  };

 


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
            <InputGroup className="mb-3"  style={{width:"40%"}} >
          <InputGroup.Text style={{background:"#80ced6"}}>Search Products</InputGroup.Text>
          <Form.Control aria-label="Search..." 
           placeholder="Search..."
           value={searchQuery}
          
           onChange={(e) => setSearchQuery(e.target.value)}/>
        </InputGroup>
        <div style={{display:'flex', gap:'3px'}}>
        <Button>
    <Link  style={{color:'white',textDecoration:'none'}}>LM-PM
    </Link>
    </Button>
    <Button>
    <Link  style={{color:'white',textDecoration:'none'}}>CO2
    </Link>
    </Button>
   
   
        <Button>
    <Link  style={{color:'white',textDecoration:'none'}}>Promotions
    </Link>
    </Button>
   
        <FloatingLabel controlId="floatingSelect" label="Sort">
        <Form.Select
          aria-label="Floating label select example"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Low to High Price</option>
          <option value="desc">High to Low Price</option>
          <option value="asc">Low to High EPD</option>
          <option value="desc">High to Low EPD</option>
          <option value="asc">Low to High Promotion</option>
          <option value="desc">High to Low Promotion</option>
        </Form.Select>
      </FloatingLabel>
    <Button>
    <Link to="/addproduct" style={{color:'white',textDecoration:'none'}}>Add new product
    </Link>
    </Button>
   
    </div>
        </div>

      <h1>Latest Products </h1>
      <div style={{width:"1050px"}}>
      <Table >
      <thead>
        <tr>
          <th> Image</th>
          <th>Name</th>
          <th>Product Info</th>
          <th>EPD</th>
          <th>Price</th>
          <th>Publish</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {data
      .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) )
      .map((product) => (
          <tr key={product.id}>
            <td>
              <img src={Imagenew} style={{ maxWidth: '100px' }} />
            </td>
            <td>{product.name}</td>
            <td><span style={{color:'#4682b4',fontWeight:'bold'}}>Description</span>:{product.description}
            <br></br>
            <span style={{color:'#006a4e',fontWeight:'bold'}}>Units</span>:{product.units}
            <br>
            </br>
            <span style={{color:'#c80815',fontWeight:'bold'}}>SKU</span>:{product.sku}
            </td>
            <td>Co2</td>
            <td>£{product.price}</td>
            <td className={product.publish === 'False' ? 'red-text' : 'green-text'}>
                {product.publish ? 'True' : 'False'}
              </td>
            <td >
              <div style={{display:"flex", gap:"2px", maxWidth:"100px"}}>
            <Link to={`/product/${product.id}`}>
            <Button>View</Button>
            </Link>
            <Link to={`/editproduct/${product.id}`}>
            <Button variant='secondary'>Edit</Button>
            </Link>
            <Button variant='danger' onClick={() => handleDelete(product.id)}>Delete</Button>
            <Button
                onClick={() => handlePublishToggle(product.id)}
              >
                {product.publish ? 'Unpublish' : 'Publish'}
              </Button>

            </div>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
    </div>
    </>

  );

};

 

export default ProductList2;