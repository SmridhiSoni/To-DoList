const express = require('express');
const bodyParser =require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

let newitems=[];

app.get('/',(req,res)=>{

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
let today  = new Date();
let day = today.toLocaleDateString("en-US", options);
  res.render("list",{ofDay:day,newListItems:newitems});
});


app.post('/',(req,res)=>{
    let newItem = req.body.newItem;
    newitems.push(newItem);
    res.redirect('/');
})

app.get('/delete-task/',function(req,res){
  console.log(req.query);
  var d1=req.query.data1;
  var indexx=newitems.findIndex(i=> i==d1);
  console.log(indexx);
  if(indexx!=-1){
    newitems.splice(indexx,1);
  }
  res.redirect('/');
  
})
app.listen(3000,()=>console.log("port is running at server 3000"));