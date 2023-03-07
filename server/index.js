const express=require('express')
const fileupload=require('express-fileupload')
const cors=require('cors')
const bodyparser=require('body-parser')
const mysql=require('mysql')

const app=express();
app.use(cors())
app.use(fileupload())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

const con=mysql.createConnection({
        host:"localhost",
        port:"3306",
        user:"root",
        password:"Gowtham@12345",
        database:"information"
})
con.connect(function(error){
       if(error){
         console.log(error);
       }
       else{
         console.log('db connected')
       }
})
app.post('/insert',(req,res)=>{
       let {empname,desination,email,mobile,gender,salary,address,pincode}=req.body;
       let sql='insert into info(empname,desination,email,mobile,gender,salary,address,pincode)values(?,?,?,?,?,?,?,?)'

       con.query(sql,[empname,desination,email,mobile,gender,salary,address,pincode],(error,result)=>{
                  if(error){
                     res.send(error)
                  }
                  else{
                     res.send(result)
                  }
       })
})

app.get('/getdata',(req,res)=>{
      let{empname,desination,email,mobile,gender,salary,address,pincode}=req.body;
      let sql="select * from info"
      con.query(sql,[empname,desination,email,mobile,gender,salary,address,pincode],(error,result)=>{
            if(error){
                 res.send(error)
            }
            else{
                  res.send(result)
            }
      })

})
app.post("/getdelete",(req,res)=>{
       let{empname,desination,email,mobile,gender,salary,address,pincode}=req.body;
       let sql='select * from info'
       con.query(sql,[empname,desination,email,mobile,gender,salary,address,pincode],(error,result)=>{
            if(error){
                 res.send(error)
            }
            else{
                 res.send(result)
            }
       })
})
app.post('/delete',(req,res)=>{
        let id=req.body.id;
        let sql='delete from info where id=?'
        con.query(sql,[id],(error,result)=>{
               if(error){
                 res.send(error)
               }
               else{
                 res.send(result)
               }
        })
})

app.get('/getemp/:id',(req,res)=>{
    let {id}=req.params;
    let sql='select * from info where id=?'
  con.query(sql,[id],(error,result)=>{
      if(error){
         res.send(error);
      }
      else{
         res.send(result);
      }
  })
})
app.post('/update',(req,res)=>{
      let  { id,empname,desination,email,mobile,gender,salary,address,pincode}=req.body;
   
      let sql='update info set empname=?,desination=?,email=?,mobile=?,gender=?,salary=?,address=?,pincode=? where id=?'
   
      con.query(sql,[empname,desination,email,mobile,gender,salary,address,pincode,id],(error,result)=>{
           if(error){
           
             res.send(error)
           
           }
           else{

      
              res.send(result)
              
           }

      })

})
app.listen(3002)
