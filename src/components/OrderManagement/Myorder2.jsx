import React from 'react'
import Header from '../Header'
import Sidebar from '../Shared/Sidebar'
import Myorders from './Myorders'

const Myorder2 = () => {
  return (
    <div>
     
      <div style={{display:"flex", gap:"10px"}}>
       
      <div>
      <h2> My Orders</h2>
     <Myorders/>
      </div>
      </div>
     
      
    </div>
  )
}

export default Myorder2
