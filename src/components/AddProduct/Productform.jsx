import React, { useState, useEffect } from "react";



const Productform = () => {
  const [name, setName] = useState("");
  const [materialSpecification, setMaterialSpecification] = useState("");
  const [units, setUnits] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [sku, setSku] = useState("");
  // const [message, setMessage] = useState("");
  // const [attachment, setAttachment] = useState(null);

  // const handleAttachmentChange = (event) => {
  //   const file = event.target.files[0];
  //   setAttachment(file);
  // };
  

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlematerialSpecificationChange = (event) => {
    setMaterialSpecification(event.target.value);
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
   
      // Submit form data to backend API
      const data = { name, units, stock,materialSpecification,price,description,sku };
      
     
      const response = await fetch(
        "https://namgyojvog.execute-api.eu-west-2.amazonaws.com/prod/product",
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
       
      } else {
        alert(
          "Unable to add the product, Please try again later."
        );
        // Reload captcha
       
      }
    
     
  }

  useEffect(() => {
   
  }, []);

  return (
    <div style={{ width:'50%', height:"screen"}}>
     
      <div className=" flex flex-col md:flex-row  md:pl-12 gap-4">
        <div className=" md:w-1/2 pl-20  bg-gray-100 rounded-sm">
          <div>
            <form
              onSubmit={handleSubmit}
              className=" "
              
            >
              <div className="form-group flex flex-col font-sans gap-4">
                <div className=" form-group flex flex-col gap-4">
                  <label className=" text-xl  ">Product Name</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                   
                    value={name}
                    onChange={handleNameChange}
                     
                  />
                </div>
                <div className="form-group  flex flex-col gap-4">
                  <label>Material specifications</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                  
                    value={materialSpecification}
                    onChange={handlematerialSpecificationChange}
                     
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>units</label>
                  <input
                    type="units"
                    className="form-control w-2/3"
                 
                    value={units}
                    onChange={handleunitsChange}
                     
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Description</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                  
                    value={description}
                    onChange={handledescriptionChange}
                      
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>price</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                 
                    value={price}
                    onChange={handlepriceChange}
                     
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>Stock</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                  
                    value={stock}
                    onChange={handlestockNumberChange}
                     
                  />
                </div>
                <div className="form-group flex flex-col gap-4">
                  <label>sku</label>
                  <input
                    type="text"
                    className="form-control w-2/3"
                
                    value={sku}
                    onChange={handleskuChange}
                     
                  />
                </div>
                {/* <div className="form-group flex flex-col gap-4">
                  <label>Description</label>
                  <textarea
                    className="form-control w-2/3"
                  
                    value={message}
                    onChange={handleMessageChange}
                     
                    
                  />
                </div> */}
           
              
               
              
                <button
                  type="submit"
                
                  className=" w-20 h-8 bg-[#17b1b1] border-[#17b1b1]"
                >
                  Send
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
