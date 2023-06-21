import React, { useState, useEffect } from "react";
import { Card, Container, Row,Col } from "react-bootstrap";
import Imagenew from "./../assets/Images/938.jpg"
function ProductList() {
const [tenantData, setTenantData] = useState([]);
const [productData, setProductData] = useState({});

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
<div style={{ paddingLeft:"12px"}}>
{tenantData.map((tenant) => (
<div key={tenant.schema_name}>

{productData[tenant.schema_name] ? (
<Row style={{}}>
{productData[tenant.schema_name].map((product) => (
<Col key={product.Cement} sm={12} md={6} lg={4} xl={3}>
<Card className='my-3 p-5 rounded'>
    <Card.Img src={Imagenew} />
    <Card.Body>
        <Card.Title as='div' >
<strong style={{ textTransform:"capitalize"}}>{product.name}</strong><br/>
<h6 style={{ textTransform:"capitalize"}}>Product from:{tenant.schema_name}</h6>
        </Card.Title>
    </Card.Body>
</Card>
</Col>

))}
</Row>
) : (
<p>Loading products...</p>
)}
</div>
))}
</div>
);
}

export default ProductList;