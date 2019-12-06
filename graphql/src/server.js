const express = require("express")

const app = express

app.lister(4000, ()=>{
    console.log("server is running on 4000")
})