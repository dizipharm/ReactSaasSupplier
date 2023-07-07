import React from 'react'
import Header from '../Header'
import Sidebar from '../Shared/Sidebar'
import Productscreen from './Productscreen'

const Product = () => {
  return (
    <div>
      <Header/>
      <div style={{display:"flex", gap:"10px"}}>
        <Sidebar/>
      <div>
    
     <Productscreen/>
      </div>
      </div>
     
      
    </div>
  )
}

export default Product
