const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const app = express()
const port = process.env.PORT

// Connect database
mongoose.connect(process.env.MONGOURI).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err.message);
})

app.get("/",(req,res)=>{
    res.status(200).json({
        msg:"I am fine"
    })
})

app.listen(port, ()=>{
    console.log(` Server is listening to ${port}` );
})
