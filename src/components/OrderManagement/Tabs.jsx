import React, { useState, useEffect } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';

function Orders() {
  // State to store the fetched data
  const [data, setData] = useState([]);
  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);
  // State to store the selected order's products
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    fetch('https://n4dwstzali.execute-api.eu-west-2.amazonaws.com/prod/basket')
      .then((response) => response.json())
      .then((responseData) => {
        setData(responseData.body);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Function to handle the "View" button click and show the modal
  const handleViewClick = (products) => {
    setSelectedProducts(products);
    setShowModal(true);
  };

  const handlePublishToggle = (productId) => {
    // Find the product by ID in the data state
    const productToUpdate = data.find((product) => product.id === productId);

    // Toggle the publish status
    const updatedProduct = { ...productToUpdate, publish: !productToUpdate.publish };

    // Send a POST request to the second API (https://product2/prod) to update the publish status
    fetch(`https://n4dwstzali.execute-api.eu-west-2.amazonaws.com/prod/basket/ad35f812-9c79-46a7-9ec3-eff7d11b2023`, {
      method: 'PUT',
      // mode:'no-cors',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    
    })
 
    
   
      // .then((response) => response.json())
      .then((data) => {
        console.log('Data updated successfully:', data);
        // Reload the page after the data is updated
        window.location.reload();
      })
     
            .then((updatedData) => {
        // Update the product list with the updated data
        
        const updatedProducts = data.map((product) =>
          product.id === productId ? updatedData : product
        );
      
        setData(updatedProducts);
      
      
      })
    
      .catch((error) => console.error('Error updating data:', error));
     
   
  };

  // Render the data in a table format
  return (
    <div style={{width:"1050px"}}>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date of order</th>
            <th>Order ID</th>
            <th>Order placed by</th>
            <th>Status</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order) => (
            <tr key={order.id}>
              <td>{order.createdDate}</td>
              <td>{order.id}</td>
              <td>
                <div>{order.userName}<br/>
               Contact Number :  {order.contactNumber}</div></td>
              <td>{order.status ? 'Not Confirmed' : 'Confirmed'}</td>
              <td>{order.address}</td>
              <td>
                <div style={{display:"flex", gap:"2px", maxWidth:"300px"}}>
                <Button variant="primary" onClick={() => handleViewClick(order.items)}>
                  View
                </Button>
                <Button variant="" 
                 onClick={() => handlePublishToggle(order.id)}>
                  Accept
                </Button>
                <Button variant="danger"
                 >
                  Reject
                </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal to display products */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Order Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Material Specification</th>
              </tr>
            </thead>
            <tbody>
              {selectedProducts.map((item) => (
                <tr >
                  <td>{item.productName}</td>
                  <td>{item.quantity}</td>
                  <td>{item.price}</td>
                  <td>{item.materialSpecification.name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Orders;
