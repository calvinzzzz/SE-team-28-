app.PORT(process.env.PORT || 5000);
var express = require('express');
var app = express();

var http = require('http');
var server = http.Server(app);

app.use('/', express.static(__dirname + '/se-web-search'));

server.listen(PORT, function(){
    console.log('Search server running');
})
/*var pass = process.env.PASS;
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://admin:${pass}@ds064299.mlab.com:64299/db1'
var conn = function(url){
    return new Promise((resolve,reject)=>{
        MongoClient.connect(url, {useNewUrlParser: true}, function(err, db){
            if(err) reject(err);
            else resolve(db);
        })
    })
}
var toArray = function(data){
    return new Promise((resolve,reject)=>{
        data.toArray((err,res)=>{
            if(err)reject(err)
            else resolve(res);
        })
    })
}*/

/*pp.get("/",async (req,res)=>{
    try {
        var con = await conn(url);
        var db = con.db('db1');
        var col = db.collection('test');
        var data = await toArray(col.find({}));
        res.json(data);
    }catch (err){
        console.log(err)
        res.send(500);
    }
    
})*/



/*app.get("/",async (req,res)=>{
    res.send()
})

app.listen(process.env.PORT || 3000)*/