import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import { Button } from 'react-bootstrap';

const Products = () => {
    const { adminId } = useParams();
  

    return (
      <>
      <Header/>
      <div>
        <div style={{ display:"flex", justifyContent:"space-between", padding:"2px"}}>
        <h2>Products</h2>
        <Link to={`/addproduct/${adminId}`}>
        <Button style={{ justifyContent:"end"}}>Add Product</Button>
        </Link>
        </div>
       
        {/* Additional dashboard content */}
        <ProductList/>
      </div>
     
      </>
    );
  };


export default Products
