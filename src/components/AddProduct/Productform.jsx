import React, { useState, ChangeEvent, useEffect } from 'react';
import { Form, Button, FormSelect } from 'react-bootstrap';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { getElementGroupList, getMaterialsList, getStructuralList } from '../Services/materialService';

 

const Productform = () => {

 

  const [formData, setFormData] = useState({

  

    // Initialize state for the form data you want to send in the request

 

    // Example:

 

productName: '',
productDescription: '',
sku: '',
materialspecification:'',
price:'',
stock:'',
units:''

 

 

  });

 

 

 
  const [materialSpecList, setMaterialSpecList] = useState([]);
 

  const handleFormSubmit = (event) => {

 

    event.preventDefault();

 
    // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint

 

    // const apiEndpoint = 'https://example.com/api/endpoint';

 

    const apiEndpoint = 'http://localhost:8082/api/product';

  

     // Make the POST request

 

    axios.post(apiEndpoint, formData)

 

      .then((response) => {

 

        // Handle the response data here if needed

 

        console.log('Response:', response.data);

 

      })

 

      .catch((error) => {

 

        // Handle any errors that occurred during the request

 

        console.error('Error:', error);

 

      });

 

  };

 

 

 

 

  const handleInputChange = (event) => {

 

    const { name, value } = event.target;

 

    setFormData({

 

      ...formData,

 

      [name]: value,

 

    });

 

  };

 


const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    setProductImage(file || null);
  };

useEffect(() => {
    getMaterialsList()
    .then((res) => {
      setMaterialSpecList(res.data);
      // console.log(res.data);
      // console.log(materialSpecList);
    })
    .catch((err) => {
      console.log(err);
    });
  })


 

  return (

 

<form onSubmit={handleFormSubmit} style={{display:"flex", flexDirection:"column", gap:"20px", justifyItems:"center", zIndex:"2px" }}>

 

      {/* Add your form fields here */}

 

<input type="text" name="productName" value={formData.productName} onChange={handleInputChange} placeholder="ProductName" />

 

<input type="text" name="productDescription" value={formData.productDescription} onChange={handleInputChange} placeholder="Product Description" />

 

<input type="text" name="sku" value={formData.message} onChange={handleInputChange} placeholder="sku"></input>

 

<input type="number" name="price" value={formData.price} onChange={handleInputChange} placeholder="price"></input>

 

{/* <input type="text" name="stock" value={formData.stock} onChange={handleInputChange} placeholder="stock"></input> */}

<select
value={formData.stock} onChange={handleInputChange}>
<option disabled>Stock Update</option>
<option>In stock</option>
<option>Out of stock</option>
</select>
 

<select onChange={handleInputChange}
value={formData.materialspecification}>
<option disabled>Select the Material</option>
        {materialSpecList.map((material, index) => (
<option key={index + 1} value={material['material_specification']+ ';' + (index+1)}>{material['material_specification']}</option>
                  ))}
</select>

 

<select onChange={handleInputChange}
value={formData.units}>
<option >Select the Unit</option>
<option value="1">Euro</option>
<option value="2">Pound</option>
<option value="3">Dollar</option>
</select>

 

<button type="submit">Submit</button>

 

</form>

 

  );

 

};

 

 

 

 

export default Productform;