import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import {
  getElementGroupList,
  getMaterialsList,
  getStructuralList,
} from "../Services/materialService";

const Productform = () => {
  const [name, setName] = useState("");
  const [materialSpecification, setMaterialSpecification] = useState("");
  const [units, setUnits] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [sku, setSku] = useState("");
  const [image, setImage] = useState(null);
  const [materialSpecList, setMaterialSpecList] = useState([]);
  // const [message, setMessage] = useState("");
  // const [attachment, setAttachment] = useState(null);

  // const handleAttachmentChange = (event) => {
  //   const file = event.target.files[0];
  //   setAttachment(file);
  // };

  useEffect(() => {
    getMaterialsList()
      .then((res) => {
        setMaterialSpecList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Empty dependency array
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleMaterialSpecificationChange = (event) => {
    setMaterialSpecification(event.target.value);
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };
  const handledescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handlepriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleskuChange = (event) => {
    setSku(event.target.value);
  };

  const handleunitsChange = (event) => {
    setUnits(event.target.value);
  };

  const handlestockNumberChange = (event) => {
    setStock(event.target.value);
  };

  // const handleMessageChange = (event) => {
  //   setMessage(event.target.value);
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const materialSpecIndex = materialSpecList.findIndex(
      (material) => material.material_specification === materialSpecification
    );

    // Submit form data to backend API
    const data = {
      name,
      units,
      stock,
      materialSpecification: {
        name: materialSpecification, // Send the name
        index: materialSpecIndex+1,    // Send the index
      },
      price,
      description,
      sku,
      image,
    };

    const response = await fetch(
      "https://ce7ilz7f17.execute-api.eu-west-2.amazonaws.com/prod/product",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
console.log(data)
    if (response) {
      alert("Product added successfully!");
      // Clear form input fields and reload captcha
      setName("");
      setUnits("");
      setStock("");
      // setMessage("");
      setMaterialSpecification("");
      setPrice("");
      setDescription("");
      setSku("");
      setImage("");
    } else {
      alert("Unable to add the product, Please try again later.");
      // Reload captcha
    }
  };



  return (
    <div style={{ width: "50%", height: "100vh" }}>
    <div className="flex flex-col md:flex-row md:pl-12 gap-4">
      <div className="md:w-1/2 pl-20 bg-gray-100 rounded-sm">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="form-group flex flex-col gap-4">
              <div className="form-group flex flex-col gap-4">
                <label className="text-xl">Product Name</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                  style={{ width: "100%", height: "40px" }}
                  value={name}
                  onChange={handleNameChange}
                />
              </div>
  
              <div className="form-group flex flex-col gap-4">
                <label>Material specifications</label>
                <select
                  onChange={handleMaterialSpecificationChange}
                  value={materialSpecification}
                  style={{
                    width: "100%",
                    height: "40px",
                    padding: "8px", // Add padding to make the select field consistent
                    border: "1px solid #ccc", // Add border for consistency
                    borderRadius: "4px", // Add border radius
                  }}
                >
                  <option>Select the Material</option>
                  {materialSpecList.map((material, index) => (
                    <option
                      key={index }
                      value={material[index]}
                    >
                      {material["material_specification"]}
                    </option>
                  ))}
                </select>
              </div>
  
              <div className="form-group flex flex-col gap-4">
                <label>Add Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control w-2/3"
                  style={{ width: "100%", height: "40px" }}
                  onChange={handleImageChange}
                />
              </div>
  
              {/* <div className="form-group flex flex-col gap-4">
                <label>Units</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                  style={{ width: "100%", height: "40px" }}
                  value={units}
                  onChange={handleunitsChange}
                />
              </div> */}
  
              <div className="form-group flex flex-col gap-4">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                  style={{ width: "100%", height: "40px" }}
                  value={description}
                  onChange={handledescriptionChange}
                />
              </div>
  
              <div className="form-group flex flex-col gap-4">
                <label>Price</label>
                <input
                  type="number"
                  className="form-control w-2/3"
                  style={{ width: "100%", height: "40px" }}
                  value={price}
                  onChange={handlepriceChange}
                />
              </div>
  
              <div className="form-group flex flex-col gap-4">
                <label>Stock</label>
                <input
                 type="number"
                  className="form-control w-2/3"
                  style={{ width: "100%", height: "40px" }}
                  value={stock}
                  onChange={handlestockNumberChange}
                />
              </div>
  
              <div className="form-group flex flex-col gap-4">
                <label>SKU</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                  style={{ width: "100%", height: "40px" }}
                  value={sku}
                  onChange={handleskuChange}
                />
              </div>
  
              <button
                type="submit"
                className=" "
                style={{ width: "100%", marginTop: "10px", height: "40px" }}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default Productform;
