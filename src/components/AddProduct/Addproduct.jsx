import React from 'react'
import Header from '../Header'
import Productform from './Productform'
import Sidebar from '../Shared/Sidebar'

const Addproduct = () => {
  return (
    <div>
      <Header/>
      <div style={{display:"flex", gap:"10px"}}>
        <Sidebar/>
      <div>
      <h2> Add Product</h2>
     <Productform/>
      </div>
      </div>
     
      
    </div>
  )
}

export default Addproduct
