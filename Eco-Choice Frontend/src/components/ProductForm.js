import React, {  useReducer, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function AddProduct()

{

        const init = {
          productName: "",
          description: "",
          pricePerUnit: "",
          totalUnits: "",
          categoryId: "",
          farmerId: sessionStorage.getItem("authenticatedUser"),
          picture:""
        };

        const reducer = (state,action) =>{
                   switch(action.type)
                   {
                         case 'update':
                             return {...state,[action.fld]:action.val}
                         case 'reset':
                             return init;    
                     }
                 }
            
                 const [info,dispatch] = useReducer(reducer,init);
                 const [file,setFile] = useState();
                 const navigate =useNavigate();
              
                const [categories, setCategories] = useState([]);
                 useEffect(() => {
                    fetch("http://localhost:9090/farmer/getcategory")
                    .then(resp => resp.json())
                    .then(categories =>setCategories(categories) )
                 },[]);

                
                           const sendData = (e)=>{
        
                            e.preventDefault();
                             const reqOptions = {
                                 method:'POST',
                                 headers: {'content-type':'application/json'},
                                 body: JSON.stringify(info)
                             }
                    
                             fetch("http://localhost:9090/farmer/addproduct", reqOptions)
                            .then((resp) => {
                                 if(resp.ok)
                                     return resp.json();
                                 else
                                   throw new Error("server Error");
                            })
                            .then(obj => {
                                const fd = new FormData();
                                fd.append("file",file);
                                const reqOptions1 = {
                                    method: 'POST',
                                    
                                    body: fd
                                }
                                fetch("http://localhost:9090/farmer/uploadimage/"+obj.id,reqOptions1)
                                .then(resp => resp.json())
                                .then(obj => {
                                    if(obj)
                                    {
                                        alert("Product Added Successfully")
                                        navigate("/FarmerWelcome")
                                        // window.location.href="/Farmer"
                                    }
                                    else
                                    {
                                        alert("Product Added but Image Failed To Add");
                                        navigate("/FarmerWelcome")
                                    }
                                })
                                
                            })
                            .catch((error)=> alert("server error . Try later"))

                        }
  

  return(
        <div>
        <div>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-8 col-xl-9">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Add Product
                      </p>
              <form>
                    <div className="mb-3">
                    <label htmlFor="productName" className="form-label"> Enter Name Of Product: </label>
                    <input type="text" className="form-control" id="productName" name="productName" value={info.productName}
                    onChange={(e)=>{dispatch({type:'update',fld:'productName',val: e.target.value})}}/></div>

      <div className="mb-3">
      <label htmlFor="cat_id" className="form-label">
        Select Category:
      </label>
      <select
        className="form-control"
        id="cat_id"
        name="categoryId"
        value={info.categoryId}
        onChange={(e) => {
          dispatch({ type: "update", fld: "categoryId", val: e.target.value });
        }}
      >
        <option value="">Select a Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
                

                   <div className="mb-3">
                    <label htmlFor="description" className="form-label"> Enter Description: </label>
                    <input type="text" className="form-control" id="description" name="description" value={info.description}
                    onChange={(e)=>{dispatch({type:'update',fld:'description',val: e.target.value})}} 
                    />
                   
                </div>

                <div className="mb-3">
                    <label htmlFor="price" className="form-label"> Enter Price: </label>
                    <input type="number" className="form-control" id="price" name="pricePerUnit" value={info.pricePerUnit} 
                    onChange={(e)=>{dispatch({type:'update',fld:'pricePerUnit',val:e.target.value})}}
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="totalUnits" className="form-label"> Enter Quantity </label>
                    <input type="number" className="form-control" id="totalUnits" name="totalUnits" value={info.totalUnits} 
                    onChange={(e)=>{dispatch({type:'update',fld:'totalUnits',val:e.target.value})}}
                    />
                    
                </div>

                <div className="mb-3">
                    <label htmlFor="picture" className="form-label"> Upload Image: </label>
                    <input type="file" className="form-control" id="picture" name="picture"
                    onChange={(e) => setFile(e.target.files[0])}/>
                </div> 

                 
                <button type="submit" className="btn btn-primary mb-3" onClick={(e)=> {sendData(e)}}>Addproduct</button>
                
                <button type="reset" className="btn btn-primary  mb-3" onClick={()=> {dispatch({type:'reset'})}}>CLEAR</button>


                    </form>
                    </div>
                   </div>
                  </div>
                 </div>
                </div>
               </div>
              </div>
             </div>
             
            </div>
           
  )
}
