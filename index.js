const express = require("express")
const bodyParser = require('body-parser')
const app =express()
const port = 5000;
require('./utils/db')

//Middle wares
app.use(bodyParser.json());

//Routes
const productsRouter = require("./routes/products");

app.use("/api",productsRouter)
app.get('/',(req,res)=>{res.send("I am Subhan");})
app.get('/Welcome',(req,res)=>{res.send("Welcome Subhan");})

app.listen(port,()=>{console.log(`Server is listening on port ${port}`);})