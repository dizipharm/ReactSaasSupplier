import React from 'react'
import Header from '../Header'
import Sidebar from '../Shared/Sidebar'
import Location2 from './Location2'

const Location = () => {
  return (
    <div>
     
      <div style={{display:"flex", gap:"10px", zoom:'0.8'}}>
       
      <div>
      <h2> Manage Location</h2>
      <br/>
     <Location2/>
      </div>
      </div>
     
      
    </div>
  )
}

export default Location
