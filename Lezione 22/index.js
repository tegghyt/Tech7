const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.status(200);
    res.sendFile(__dirname + "/index.html")
})

app.listen(3000, ()=>{
    console.log("sto scoltando radio maria")
});