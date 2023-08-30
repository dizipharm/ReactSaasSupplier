import React, { useState, useEffect } from "react";
import axios from "axios";

const Editproduct = ({ id }) => {
  const [product, setProduct] = useState({});
  const [formData, setFormData] = useState({
    // Initialize with default values or empty strings
    name: "",
    price: "",
    // ...other fields
  });
  useEffect(() => {
    // Fetch product data using the API endpoint
    axios
      .get(`https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`)
      .then((response) => {
        setProduct(response.data.body);
        setFormData(response.data.body); // Set form data with fetched values
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send PUT request with updated data

    axios
      .put(`https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`, formData)

      .then((response) => {
        console.log("Product updated successfully:", response.data.body);

        // Handle success, e.g., show a success message or redirect
      })

      .catch((error) => {
        console.error("Error updating product:", error);

        // Handle error, e.g., display error message to the user
      });
  };

  return (
    <div>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>

        {/* Add other fields here */}

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Editproduct;
