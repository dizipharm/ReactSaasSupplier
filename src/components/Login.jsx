import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Form, Button, Card } from 'react-bootstrap';
import './CSS/login.css'

const Login = () => {
  const [adminId, setAdminId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      // Construct the API URL based on the admin ID
      const apiUrl = `http://${adminId}.aidiz.co.uk:8080/rest-auth/login/`;
      //http://tenant2.aidiz.co.uk:8080/rest-auth/login/
      // Make the API request
      const response = await axios.post(apiUrl, {
        username,
        password
      });
      
      // Handle the response
       // Do something with the response data
      
      // Clear the form fields
      setAdminId('');
      setUsername('');
      setPassword('');
      if (response.status === 200) {
        // Redirect to the respective admin's dashboard
        navigate(`/dashboard`);
      } else {
        setErrorMessage('Invalid username or password. Please try again.');
      }
      
    } catch (error) {
      setErrorMessage('Login failed. Please try again.'); // Update error message state
      }
  };

  return (
    <Card className='card' style={{backgroundColor:"rgb(84, 125, 139)"}}>
    <div className='login'>
         <Form>
        <Form.Group controlId="adminId">
          <Form.Label>Admin ID:</Form.Label>
          <Form.Control
            type="text"
            value={adminId}
            onChange={e => setAdminId(e.target.value)}
         className='input'
         />
        </Form.Group>

        <Form.Group controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <br/>

        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>
      </Form>
    </div>
    </Card>
  );
};

export default Login;
