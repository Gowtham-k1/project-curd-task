import react, { useState ,useEffect } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
export default function Update(){

    let {id}=useParams();
    const[empname,setempname]=useState('')
    const[desination,setdesination]=useState('')
    const[email,setemail]=useState('')
    const[mobile,setmobile]=useState('')
    const[gender,setgender]=useState('')
    const[salary,setsalary]=useState('')
    const[address,setaddress]=useState('')
    const[pincode,setpincode]=useState('')

    useEffect(()=>{
       console.warn(id);
       fetch('http://localhost:3002/getemp/'+id)
       .then((res)=>res.json())
       .then((response)=>{
           setempname(response[0].empname)
           setdesination(response[0].desination)
           setemail(response[0].email)
           setmobile(response[0].mobile)
           setgender(response[0].gender)
           setsalary(response[0].salary)
           setaddress(response[0].address)
           setpincode(response[0].pincode)
       })
      
    },[])
        
    const updatedata= async(e)=>{
        console.log(updatedata,"data")
          e.preventDefault();
          let str=new FormData(e.target)
          let con={Headers:{'enctype':'multipart/form-data'}}
          await axios.post('http://localhost:3002/update',str,con)
          .then(function(res){
              if(res){
                  alert('updated')
                  window.location.reload()
              }
              else if(res){
                alert("error")
              }
              else{
                 alert('not updated')
                 window.location.reload()
              }
          })
          .catch(function(error){
               alert('error')
               window.location.reload();

          })

    }
    
     return(<>


     <div className='container bg-warning'>
        <div className='row'>
            <div className='col-lg-3'>

            </div>
            <div className='col-lg-5'>
                <form onSubmit={updatedata}>
                    <table className='table table-bordered'>
                         <thead>
                            <tr>
                                <th colSpan={2} className="text-center"> UPDATE EMPLOYEE DETAILS</th>
                            </tr>
                         </thead>
                         <tbody>
                            <tr>
                            <input type="hidden" name="id" id="id" value={id}/>
                                <td><lebel>empname</lebel></td>
                                <td><input type="text" id='empname' name='empname' className='form-control' value={empname} onChange={(e)=>setempname(e.target.value)}></input></td>
                            </tr>
                            <tr>
                                <td><lebel>desination</lebel></td>
                                <td><input type="text" id='desination' name='desination' className='form-control' value={desination} onChange={(e)=>setdesination(e.target.value)}></input></td>
                            </tr>
                            <tr>
                                <td><lebel>email</lebel></td>
                                <td><input type="email" id='email' name='email' className='form-control' value={email} onChange={(e)=>setemail(e.target.value)}></input></td>
                            </tr>
                            <tr>
                                <td><lebel>mobile</lebel></td>
                                <td><input type="text" id='mobile' name='mobile' className='form-control' value={mobile} onChange={(e)=>setmobile(e.target.value)}></input></td>
                            </tr>
                            <tr>
                                <td><lebel>gender</lebel></td>
                                <td><input type='radio' name='gender' id='gender' value={gender} onChange={(e)=>setgender(e.target.value)}/>male
                                <input type='radio' name='gender' id='gender' value={gender} onChange={(e)=>setgender(e.target.value)}/>female</td>
                            </tr>
                          
                            <tr>
                                <td><lebel>salary</lebel></td>
                                <td><input type="number" id='salary' name='salary' className='form-control' value={salary} onChange={(e)=>setsalary(e.target.value)}></input></td>
                            </tr>
                            <tr>
                                <td><lebel>address</lebel></td>
                                <td><input type="text" id='address' name='address' className='form-control' value={address} onChange={(e)=>setaddress(e.target.value)}></input></td>
                            </tr>
                             <tr>
                                <td><lebel>pincode</lebel></td>
                                <td><input type="text" id='pincode' name='pincode' className='form-control' value={pincode} onChange={(e)=>setpincode(e.target.value)}></input></td>
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
     
     
     
     
     
     
     
     
     
     
     
     
     
     </>)
}