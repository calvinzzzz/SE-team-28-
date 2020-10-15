var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();


app.get("/", (req, res) => {
    res.send("Hello world!");
})

app.listen(HTTP_PORT);``