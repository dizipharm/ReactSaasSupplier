import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Addproduct from './components/AddProduct/Addproduct'



const App = () => {

 
 
  return (
   <>


  <Router>
    
    <Routes>
      

   <Route  path='/' element={<Login />} />
   <Route path='/dashboard/:adminId' element={<Dashboard />} />
   <Route path='/products/:adminId' element={<Products />} />
   <Route path='/addproduct/:adminId' element={<Addproduct/>}/>
  
   </Routes>
   
     
      </Router>
   </>
  )
}

export default App
