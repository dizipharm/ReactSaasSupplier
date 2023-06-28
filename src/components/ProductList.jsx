import React, { useState, useEffect } from "react";
import { Card, Container, Row,Col, Button,Form, Carousel } from "react-bootstrap";
import Imagenew from "./../assets/Images/938.jpg"
import { Link, useParams } from 'react-router-dom';
import InputGroup from 'react-bootstrap/InputGroup';


function ProductList() {
const [tenantData, setTenantData] = useState([]);
const [productData, setProductData] = useState({});
const [searchQuery, setSearchQuery] = useState("");
const { adminId } = useParams();

useEffect(() => {
// Fetch the main API to get the tenant data
fetch("http://aidiz.co.uk:8080/create_tenant/")
.then((response) => response.json())
.then((data) => {
setTenantData(data);
})
.catch((error) => {
console.error("Error fetching tenant data:", error);
});
}, []);

useEffect(() => {
// Fetch product data for each tenant
tenantData.forEach((tenant) => {
fetch(`http://${tenant.schema_name}.aidiz.co.uk:8080/Product/`)
//http://${tenant.schema_name}.aidiz.co.uk:8080/Product/
.then((response) => response.json())
.then((data) => {
setProductData((prevProductData) => ({
...prevProductData,
[tenant.schema_name]: data,
}));
})
.catch((error) => {
console.error(`Error fetching product data for ${tenant.schema_name}:`, error);
});
});
}, [tenantData]);

return (
<div style={{ padding:"12px"}}>

    <div style={{display:"flex", gap:"10px", justifyContent:"space-between"}}>
        
    {/* <input
        type="text"
        placeholder="Search products"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      /> */}
        <InputGroup className="mb-3" style={{width:"50%"}}>
      <InputGroup.Text style={{background:"#80ced6"}}>Search Products</InputGroup.Text>
      <Form.Control aria-label="Search..." 
       placeholder="Search..."
       value={searchQuery}
       onChange={(e) => setSearchQuery(e.target.value)}/>
    </InputGroup>
      <Link to={`/addproduct/${adminId}`}>
        <Button style={{ justifyContent:"end"}}>Add Product</Button>
        </Link>
    </div>
   
    <h2>Latest Product</h2>

{tenantData.map((tenant) => (
<div key={tenant.schema_name}>

{productData[tenant.schema_name] ? (
  <>
  <div>
   
  </div>
  <Row style={{}}>
        {productData[tenant.schema_name].filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          tenant.schema_name.toLowerCase().includes(searchQuery.toLowerCase())
        ).map((product) => (
          <Col key={product.Cement} sm={12} md={6} lg={4} xl={3}>
            <Card className='my-3 p-5 rounded'>
              <Card.Img src={Imagenew} />
              <Card.Body>
                <Card.Title as='div'>
                <Link to={`/product/${product.name}/${tenant.schema_name}`}><strong style={{ textTransform: "capitalize" }}>{product.name}</strong>
                </Link>
                <br />
                  <h6 style={{ textTransform: "capitalize" }}>Product from:{tenant.schema_name}</h6>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>

        ))}
      </Row></>
) : (
<p>Loading products...</p>
)}
</div>
))}
</div>
);
}

export default ProductList;