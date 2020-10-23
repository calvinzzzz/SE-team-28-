var express = require('express')
var app = express()
app.get("/",(req,res)=>{
    res.send("hello I am express")
})

app.listen(process.env.PORT|3000)