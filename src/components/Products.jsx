import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import { Button } from 'react-bootstrap';
import Sidebar from './Shared/Sidebar';

const Products = () => {
    const { adminId } = useParams();
  

    return (
      <>
      <Header/>
      <div>
        <div style={{ display:"flex",gap:"10px"}}>
        
        <div>
        <Sidebar />
        </div>
        <div>
        <ProductList/>
        </div>
       
       
        </div>
       
        {/* Additional dashboard content */}
       
      </div>
     
      </>
    );
  };


export default Products
