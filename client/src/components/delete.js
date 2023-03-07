import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default function Del(){
   const[data,setdata]=useState([])

   useEffect(()=>{
           setinfo();
   },[])
     
   const setinfo=()=>{
            axios.post('http://localhost:3002/getdelete')
            .then(function(response){
                    setdata(response.data)
            }
            )}
     const deletedata=(e)=>{
        let add={id:e}
        let add2={Headers:{'enctype':"multipart/form-data"}}

        axios.post('http://localhost:3002/delete',add,add2)
        .then(function(response){
                if(response){
                      alert('deleted')
                      window.location.reload()
                }
                else{
                    alert(' not deleted')
                    window.location.reload()
                }
        })
        .catch(function(error){
             if(error){
                  alert('error')
                  window.location.reload()
             }
        })

     }


      return(<>

      <div className="container-fluid  bg-warning">
        <div className="row">
            <div className="col-lg-12">
                <h1 className="text-center">DEACTIVE ACCOUNTS</h1>
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
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                          { 
                          data.map((value,index)=>(
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
                                <td><button className="btn bg-primary" onClick={()=>deletedata(value.id)}>delete</button></td>
                                 <td><Link to={'/update/'+value.id}><button className="btn bg-primary" >update</button></Link></td>
                              </tr>
                          ))
                            
                          }
                    </tbody>
                    
                </table>

            </div>

        </div>

      </div>
      <Link to='/dashboard' className="btn bg-primary text-white">back</Link>
      
      
      
      
      
      
      
      
      
      </>)
}