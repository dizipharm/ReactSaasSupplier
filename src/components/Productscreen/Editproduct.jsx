import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Define your initial state with empty values.
  const [values, setValues] = useState({
    name: '',
    materialSpecification: '',
    price: '',
    units: '',
    description: '',
    stock: '',
    sku: ''
  });

  useEffect(() => {
    // Fetch the product data by ID when the component mounts.
    axios.get(`https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`)
      .then((res) => {
        const productData = res.data.body;
        setValues({
          name: productData.name,
          materialSpecification: productData.materialSpecification,
          price: productData.price,
          units: productData.units,
          description: productData.description,
          stock: productData.stock,
          sku: productData.sku
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  // Handle form submission to update the product.
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a PUT request to update the product.
      await axios.put(`https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`, values, {
        headers: {
          "Content-Type": "application/json"
        }
      });

      // Redirect to the products page after a successful update.
      navigate('/products');
    } catch (err) {
      console.log(err);
    }
  };

  // Handle input field changes.
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  return (
    <div style={{ width: '50%', height: "screen" }}>
      <div className="flex flex-col md:flex-row md:pl-12 gap-4">
        <div className="md:w-1/2 pl-20 bg-gray-100 rounded-sm">
          <h2>Edit Product</h2>
          <div>
            <form onSubmit={handleSubmit} className="">
              {/* Render input fields for each property */}
              {/* Add 'name' attributes to each input field */}
              <div className="form-group flex flex-col font-sans gap-4">
                <div className="form-group flex flex-col gap-4">
                  <label className="text-xl" id="productname">Product Name</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                    id="productname"
                    name="name" // Add 'name' attribute
                    value={values.name}
                    onChange={handleInputChange}
                  />
                </div>
                {/* Repeat the same structure for other input fields */}
                {/* ... */}
                <button
                  type="submit"
                  className="w-20 h-8 bg-[#17b1b1] border-[#17b1b1]"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
