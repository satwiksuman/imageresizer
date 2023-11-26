const express=require('express');
const fs=require('fs');
const path=require('path');
const router=require('./routes/route')
const app=express();

let dir='public/uploads';
if(!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

app.use(express.static('public'));
app.use(express.json());


app.use('/',router);
const port=process.env.PORT || 3000;
const start=()=>{
    app.listen(port,()=>{
       console.log(`Server started on port ${port}`);
    })
}
start();