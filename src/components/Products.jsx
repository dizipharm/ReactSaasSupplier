import React from 'react'
import { Link, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';
import { Button } from 'react-bootstrap';
import Sidebar from './Shared/Sidebar';
import ProductList2 from './ProductList2';

const Products = () => {
    const { adminId } = useParams();
  

    return (
      <>
    
      <div>
        <div >
        
       
        <div>
        <ProductList2/>
        </div>
       
       
        </div>
       
        {/* Additional dashboard content */}
       
      </div>
     
      </>
    );
  };


export default Products
