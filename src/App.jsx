import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Addproduct from "./components/AddProduct/Addproduct";
import Myorder2 from "./components/OrderManagement/Myorder2";
import Location from "./components/Locations/Location";
import Product from "./components/Productscreen/Product";
import Layouts from "./components/Shared/Layouts";
import Upload from "./components/AddProduct/Upload";
import {Amplify,Auth} from "aws-amplify"
import awsconfig from "./aws-exports";
import {Authenticator, withAuthenticator} from "@aws-amplify/ui-react"
import Editproduct from "./components/Productscreen/Editproduct";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);
Auth.configure(awsconfig);


const App = () => {
  return (
    <>
     <div>
    <Authenticator>
      {({ signOut, user }) => (
        <main>


      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<Layouts signOut={signOut}  />} >
            <Route index element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="addproduct" element={<Addproduct />} />
            <Route path="upload" element={<Upload />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="editproduct/:id" element={<Editproduct />} />
            <Route path="ordermanagement" element={<Myorder2 />} />
            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </Router>
{/* <div style={{display:"flex"}}>
<h1>Hello {user.username}</h1>
<button onClick={signOut}>signout</button>
</div> */}
    
      </main>
      )}
   
     
      </Authenticator>
      </div>
    </>
  );
};

export default withAuthenticator(App);
