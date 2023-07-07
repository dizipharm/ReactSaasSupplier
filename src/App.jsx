import React from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Products from './components/Products'
import Addproduct from './components/AddProduct/Addproduct'
import Productscreen from './components/Productscreen/Productscreen'
import Myorder2 from './components/OrderManagement/Myorder2'
import Location from './components/Locations/Location'
import Product from './components/Productscreen/Product'



const App = () => {

 
 
  return (
   <>


  <Router>
    
    <Routes>
      

   <Route  path='/' element={<Login />} />
   <Route path='/dashboard/:adminId' element={<Dashboard />} />
   <Route path='/products/:adminId' element={<Products />} />
   <Route path='/addproduct/:adminId' element={<Addproduct/>}/>
   <Route path='/product/:adminId/:id' element={<Product/>}/>
   <Route  path='/:adminId/myorders' element={<Myorder2 />} />
   <Route  path='/:adminId/location' element={<Location />} />
   </Routes>
   
     
      </Router>
   </>
  )
}

export default App
