const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


//middleWare

app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL).then(()=>console.log("Banco Conectado.")).catch(err=>console.log("Error", err));




app.get("/", (req,res)=>{
    res.send("Sample Page <br>Go to /products");
})

app.get('/products', (req,res)=>{

    const product = {
        "id":1,
        "name":"Monitor Hazer",
        "price":159.35,
        "image":"url_image"
    }

    res.send(product);

})



app.post("/products", (req,res)=>{


    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);

})


app.listen(3001, () => {

    console.log("Server is running at 3001");

})

