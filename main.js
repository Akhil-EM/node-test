const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.json({status:"success",message:"node application working fine"})
})



app.listen(3000,()=>console.log("node serving on 3000"));