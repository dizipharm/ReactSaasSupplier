import React from 'react'
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProductList from './ProductList';

const Products = () => {
    const { adminId } = useParams();
  

    return (
      <>
      <Header/>
      <div>
        <h2>Products</h2>
        {/* Additional dashboard content */}
        <ProductList/>
      </div>
     
      </>
    );
  };


export default Products
