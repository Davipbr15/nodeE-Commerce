const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./routes/user');


//middleWare

app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL).then(()=>console.log("Banco Conectado.")).catch(err=>console.log("Error", err));


app.get("/", (req,res)=>{
    res.send("Sample Page <br>Go to /products");
})

app.use("/api", userRoute);

app.listen(3001, () => {

    console.log("Server is running at 3001");

})

