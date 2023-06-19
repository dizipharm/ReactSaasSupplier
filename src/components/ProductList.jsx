import React, { useState, useEffect } from "react";

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
<div>
{tenantData.map((tenant) => (
<div key={tenant.schema_name}>
<h3>{`Products for ${tenant.schema_name}`}</h3>
{productData[tenant.schema_name] ? (
<ul>
{productData[tenant.schema_name].map((product) => (
<li key={product.Cement}>{product.name}</li>
))}
</ul>
) : (
<p>Loading products...</p>
)}
</div>
))}
</div>
);
}

export default ProductList;