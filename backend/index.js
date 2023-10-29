const express = require("express");
const app = express();
require("dotenv").config();

const router = require('./src/routes/router');

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/api", router);

const port = process.env.PORT || 3000;

app.listen(port, function(){
    console.log(`listening on port ${port}`);
})