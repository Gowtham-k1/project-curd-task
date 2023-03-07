import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Dash(){
   const[user,setuser]=useState([])

   useEffect(()=>{
           fetch('http://localhost:3002/getdata')
           .then((res)=>res.json())
           .then(data=>setuser(data))
   },[])
     

      return(<>

      <div className="container-fluid bg-warning">
        <div className="row">
            <div className="col-lg-12">
           
                <h1 className="text-center">EMPLOYEE INFORMATION</h1>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>empname</th>
                            <th>desination</th>
                            <th>email</th>
                            <th>gender</th>
                            <th>mobile</th>
                            <th>salary</th>
                            <th>address</th>
                            <th>pincode</th>
                        </tr>
                    </thead>
                    <tbody>
                          { 
                          user.map((value,index)=>(
                              <tr>
                                <td>{value.id}</td>
                                <td>{value.empname}</td>
                                <td>{value.desination}</td>
                                <td>{value.email}</td>
                                <td>{value.gender}</td>
                                <td>{value.mobile}</td>
                                <td>{value.salary}</td>
                                <td>{value.address}</td>
                                <td>{value.pincode}</td>

                              </tr>
                          ))
                            
                          }
                    </tbody>
                    
                </table>

            </div>

        </div>

      </div>
      <Link to='/delete' className='btn bg-success text-white'>deactive</Link>
      <Link to='/' className="btn bg-primary text-white">back</Link>
      
      
      
      
      
      
      
      
      
      </>)
}