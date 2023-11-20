const express = require("express");
const products = require("./schema_model");
require("./cofig");
const port = process.env.PORT|8000;
const app = express();

app.use(express.json());
app.post("/list",async(req,resp) => {
    let data = new products(req.body);
    let result = await data.save();
 console.log(result);
 resp.send(req.body);         
})
app.listen(port,()=>{
    console.log(`I am listening the port Number ${port}`)
})