import React, { useState, ChangeEvent } from 'react';
import { Form, Button, FormSelect } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Location2 = () => {
  return (
    <div>
       <Form style={{display:"flex", flexDirection:"column", gap:"20px", justifyItems:"center", paddingLeft:"10px"}}>
      <Form.Group controlId="productName" style={{display:"flex", gap:"10px"}}>
        <Form.Label> Main Contact</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
         
          style={{width:"50%"}}
        />
      </Form.Group>

      <Form.Group controlId="productCategory" style={{display:"flex", gap:"10px"}}>
        <Form.Label> Address-Number or Name</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
        
          style={{width:"50%"}}
        />
      </Form.Group>


     

      <Form.Group controlId="productDescription" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Postcode</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
      
          style={{width:"50%"}}
        />
      </Form.Group>

      <Form.Group controlId="productPrice" style={{display:"flex", gap:"10px"}}>
        <Form.Label> City</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
     
          style={{width:"50%"}}
        />
      </Form.Group>

     
     

      <Form.Group controlId="productDimensions" style={{display:"flex", gap:"10px"}}>
        <Form.Label>State</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
         
          style={{width:"50%"}}
        />
      </Form.Group>

     

      <Form.Group controlId="productWeight" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
        
          style={{width:"50%"}}
        />
      </Form.Group>
    

    

      <Form.Group controlId="productGtin" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Telephone</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
        
          style={{width:"50%"}}
        />
      </Form.Group>

      <Form.Group controlId="productGtin" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
       
          style={{width:"50%"}}
        />
      </Form.Group>
   
      <div style={{ display:"flex", gap:"10px"}}>
      <Button variant="primary" type="submit" style={{width:"50%", justifyContent:"center"}}>
       Save
      </Button>
      <Button variant="warning" style={{width:"50%", justifyContent:"center"}}>
      Edit
      </Button>
      </div>

    
    </Form>
    </div>
  )
}

export default Location2
