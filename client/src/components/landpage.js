import react from 'react'
import axios from 'axios'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';

export default function User(){
      const insertdata=(e)=>{
            e.preventDefault();
            var add=new FormData(e.target)
            var add2={Headers:{'enctype':"multipart/form-data"}}
            axios.post('http://localhost:3002/insert',add,add2)
            .then(function(response){
                   if(response){
                        alert('your data inserted')
                        window.location.reload();
                   }
                   else{
                    alert(' not inserted')
                    window.location.reload(); 
                   }
            })
            .catch(function(error){
                 if(error){
                      alert('error')
                      window.location.reload(); 
                 }
            })
      }
     
     return(<>


     <div className='container bg-warning'>
        <div className='row'>
            <div className='col-lg-3'>

            </div>
            <div className='col-lg-5'>
                <form onSubmit={insertdata}>
                    <table className='table table-bordered'>
                         <thead>
                            <tr>
                                <th colSpan={2} className="text-center">EMPLOYEE DETAILS</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr>
                                <td><lebel>empname</lebel></td>
                                <td><input type="text" id='empname' name='empname' className='form-control'></input></td>
                            </tr>
                            <tr>
                                <td><lebel>desination</lebel></td>
                                <td><input type="text" id='desination' name='desination' className='form-control'></input></td>
                            </tr>
                            <tr>
                                <td><lebel>email</lebel></td>
                                <td><input type="email" id='email' name='email' className='form-control'></input></td>
                            </tr>
                            <tr>
                                <td><lebel>mobile</lebel></td>
                                <td><input type="text" id='mobile' name='mobile' className='form-control'></input></td>
                            </tr>
                            <tr>
                                <td><lebel>gender</lebel></td>
                                <td><input type='radio' name='gender' id='gender' value='male'/>male
                                <input type='radio' name='gender' id='gender' value='female'/>female</td>
                            </tr>
                          
                            <tr>
                                <td><lebel>salary</lebel></td>
                                <td><input type="number" id='salary' name='salary' className='form-control'></input></td>
                            </tr>
                            <tr>
                                <td><lebel>address</lebel></td>
                                <td><input type="text" id='address' name='address' className='form-control'></input></td>
                            </tr>
                             <tr>
                                <td><lebel>pincode</lebel></td>
                                <td><input type="text" id='pincode' name='pincode' className='form-control'></input></td>
                            </tr>
                            <tr>
                                <td colSpan={2} className='text-center'>
                                    <button type='submit' value='submit' className='btn bg-primary' >submit</button>
                                </td>
                            </tr>
                         </tbody>

                    </table>
                </form>

            </div>

        </div>

     </div>
     <Link to='/dashboard' className='btn bg-success text-white'>empdetails</Link>
   
     
     
     
     
     
     
     
     
     
     
     
     
     </>)
}