const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const userRoute = require('./src/routes/user');

//middleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))

mongoose.connect(process.env.DATABASE_URL).then(
()=>console.log("Banco Conectado"))
.catch(err=>console.log("Error", err), {useMongoClient: true});
mongoose.Promise = global.Promise;



const name = "55";
const email = "55@gmail";
const password = "55";
var user = {
    "name": name,
    "email": email,
    "password": password
}



app.get("/", (req,res)=>{
    res.send("Sample Page <br>Go to /products");
})

app.use("/api", userRoute);

app.listen(3001, () => {

    console.log("Server is running at 3001");

})

module.exports = mongoose;

