import React, { useState, ChangeEvent } from 'react';
import { Form, Button, FormSelect } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Productform: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState<File | null>(null);
  const [category, setCategory] = useState('');
  const [dimensions, setDimensions] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [gtin, setGtin] = useState('');

  const navigate = useNavigate();
  const { adminId } = useParams();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', productName);
      formData.append('price', productPrice);
      if (productImage) {
        formData.append('image', productImage);
      }
      formData.append('category', category);
      formData.append('dimensions', dimensions);
      formData.append('weight', weight);
      formData.append('description', description);
      formData.append('gtin', gtin);

      const apiUrl = `http://${adminId}.aidiz.co.uk:8080/Product/`;

      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setCategory('');
      setDescription('');
      setDimensions('');
      setGtin('');
      setProductName('');
      setWeight('');
      navigate(`/products/${adminId}`);
     

      console.log(response.data);
      // Handle success, e.g., show a success message or redirect to another page
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message
    }
    
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setProductImage(file || null);
  };

  return (
    <Form onSubmit={handleFormSubmit} style={{display:"flex", flexDirection:"column", gap:"20px", justifyItems:"center", paddingLeft:"10px"}}>
      <Form.Group controlId="productName" style={{display:"flex", gap:"10px"}}>
        <Form.Label> Name</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>

      <Form.Group controlId="productCategory" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Material Specifications</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>


      <Form.Group controlId="productImage" style={{display:"flex", gap:"10px"}}>
        <Form.Label> Image</Form.Label>
        <Form.Control type="file"
        style={{width:"30%"}}
         onChange={handleImageChange} />
      </Form.Group>

      <Form.Group controlId="productDescription" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>

      <Form.Group controlId="productPrice" style={{display:"flex", gap:"10px"}}>
        <Form.Label> Price</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>

      <Form.Group controlId="productGtin" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Units</Form.Label>
        <Form.Select style={{width:"30%"}}>
        <option >Select the Unit</option>
        <option value="1">Euro</option>
        <option value="2">Pound</option>
        <option value="3">Dollar</option>

        </Form.Select>
      </Form.Group>
     

      <Form.Group controlId="productDimensions" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Dimensions</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={dimensions}
          onChange={(e) => setDimensions(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>

     

      <Form.Group controlId="productWeight" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Weight</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>
    

    

      <Form.Group controlId="productGtin" style={{display:"flex", gap:"10px"}}>
        <Form.Label>SKU</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={gtin}
          onChange={(e) => setGtin(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>

      <Form.Group controlId="productGtin" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={gtin}
          onChange={(e) => setGtin(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>
      <Form.Group controlId="productGtin" style={{display:"flex", gap:"10px"}}>
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="text"
          placeholder=""
          value={gtin}
          onChange={(e) => setGtin(e.target.value)}
          style={{width:"30%"}}
        />
      </Form.Group>
    
      
      

   

      <Button variant="primary" type="submit" style={{width:"10%", justifyContent:"center"}}>
        Add Product
      </Button>
    </Form>
  );
};

export default Productform;
