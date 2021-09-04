const express = require ('express');
const app =  express();
const path = require('path');
const port = 3000;


const staticpath = path.join(__dirname,"website");
// const templatepath = path.join(__dirname,"../Templates")
app.use(express.static(staticpath));

// app.set('view engine', 'hbs');
// app.set('views',templatepath)

// app.get("",(req,res)=>{
//     res.render('index',{
//         personname:'Masab',
//     });
// })

app.get("/",(req,res)=>{
   res.send("welcome to home page of my practice site");
})


app.get("/about",(req,res)=>{
    res.send("welcome to about page of my practice site");
})

app.get('*',(req,res)=>{
  res.send("404 error occur");
})

app.listen(3000,(req,res)=>{
    console.log(`app is listening ${port}`)
})