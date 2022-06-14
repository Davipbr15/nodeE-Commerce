const express = require("express");
const app = express();

const bodyParser = require('body-parser');

//middleWare

app.use(bodyParser.json());


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

