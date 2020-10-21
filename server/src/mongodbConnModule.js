var mongoose = require('mongoose');

module.exports.connect = function() {
	mongoose.connect('mongodb+srv://Shimimaru:Shimimaru22@cluster0.ktmc8.mongodb.net/<AutDatabase>?retryWrites=true&w=majority');
	var db = mongoose.connection;
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
	  console.log("Connection Succeeded");
	});
	return db;
}