import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Editproduct = () => {
const {id} = useParams();
const[values,setValues] = useState({
  name:'',
  materialSpecification:'',
  price:'',
  units:'',
  description:'',
  stock:'',
  sku:''
})
useEffect(()=> {
  axios.get(`https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`)
  .then(res =>{
    setValues({...values, name:res.data.body.name, 
      materialSpecification:res.data.body.materialSpecification,
      price:res.data.body.price,
      units:res.data.body.units,
      description:res.data.body.description,
      stock:res.data.body.stock,
      sku:res.data.body.sku
    })
  }
   )
  .catch(err => console.log(err))
})

const navigate = useNavigate()

const handleSubmit =(e) => {
  e.preventDefault();
  fetch(`https://s9ohghbzh7.execute-api.eu-west-2.amazonaws.com/prod/product/${id}`,values, {
    method:'PUT',
    mode: "no-cors",
    headers:{
      'Content-Type': 'application/json',
    }
  })
  .then(res => {
    navigate('/products')
  })
  .catch(err => console.log(err))
}

  return (
    <div style={{ width:'50%', height:"screen"}}>
     
    <div className=" flex flex-col md:flex-row  md:pl-12 gap-4">
      <div className=" md:w-1/2 pl-20  bg-gray-100 rounded-sm">
        <h2>Edit Product</h2>
        <div>
          <form
            onSubmit={handleSubmit}
            className=" "
            
          >
            <div className="form-group flex flex-col font-sans gap-4">
              <div className=" form-group flex flex-col gap-4">
                <label className=" text-xl  "> Product Name</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                 
                   value={values.name}
                   onChange={(e) => 
                    {
                      console.log('Name field changed:', e.target.value);
                      setValues({...values, name:e.target.value})}}
                   
                />
              </div>
              <div className="form-group  flex flex-col gap-4">
                <label>Material specifications</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                
                  value={values.materialSpecification}
                  onChange={e => setValues({...values, materialSpecification:e.target.value})}
                   
                />
              </div>
              <div className="form-group flex flex-col gap-4">
                <label>units</label>
                <input
                  type="units"
                  className="form-control w-2/3"
               
                  value={values.units}
                  onChange={e => setValues({...values, units:e.target.value})}
                   
                />
              </div>
              <div className="form-group flex flex-col gap-4">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                
                   value={values.description}
                   onChange={e => setValues({...values, description:e.target.value})}
                    
                />
              </div>
              <div className="form-group flex flex-col gap-4">
                <label>price</label>
                <input
                  type="text"
                  className="form-control w-2/3"
               
                   value={values.price}
                   onChange={e => setValues({...values, price:e.target.value})}
                   
                />
              </div>
              <div className="form-group flex flex-col gap-4">
                <label>Stock</label>
                <input
                  type="text"
                  className="form-control w-2/3"
                
                   value={values.stock}
                   onChange={e => setValues({...values, stock:e.target.value})}
                   
                />
              </div>
              <div className="form-group flex flex-col gap-4">
                <label>sku</label>
                <input
                  type="text"
                  className="form-control w-2/3"
              
                  value={values.sku}
                  onChange={e => setValues({...values, sku:e.target.value})}
                   
                />
              </div>
              {/* <div className="form-group flex flex-col gap-4">
                <label>Description</label>
                <textarea
                  className="form-control w-2/3"
                
                  value={message}
                  onChange={handleMessageChange}
                   
                  
                />
              </div> */}
         
            
             
            
              <button
                type="submit"
            
                className=" w-20 h-8 bg-[#17b1b1] border-[#17b1b1]"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
     
    </div>
   
  </div>
  );
};

export default Editproduct;
