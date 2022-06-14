const express = require("express");

const app = express();

app.get('/', (req,res)=>{

    res.status(300).send("Products");

    

})

app.listen(3001, () => {

    console.log("Server is running at 3001");

})

