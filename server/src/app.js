const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

const mongodb_conn_module = require('./mongodbConnModule');
var db = mongodb_conn_module.connect();

var Post = require("../models/post");
var Evidence = require("../models/evidence");
var Login = require("../models/login");

app.get('/evidences', (req, res) => {
	Evidence.find({}, 'author title journal year volume number pages month cred', function (error, evidences) {
		if (error) { console.error(error); }
		res.send({
			  evidences: evidences
		  })
	  }).sort({_id:-1})
  })

app.get('/login', (req, res) => {
	Login.find({}, 'username password', function (error, login) {
		if (error) { console.error(error); }
		res.send({
			  login: login
		  })
	  }).sort({_id:-1})
})

app.post('/add_evidence', (req, res) => {
	var db = req.db;
	var author = req.body.author;
	var title = req.body.title;
	var journal = req.body.journal;
	var year = req.body.year;
	var volume = req.body.volume;
	var number = req.body.number;
	var pages = req.body.pages;
	var month = req.body.month;
	var cred = req.body.cred;
	var new_evidence = new Evidence({
		author: author,
  		title: title,
  		journal: journal,
  		year: year,
  		volume: volume,
  		number: number,
  		pages: pages,
  		month: month,
  		cred : cred
	})

	new_evidence.save(function (error) {
		if (error) {
			console.log(error)
		}
		res.send({
			success: true
		})
	})
})

app.put('/posts/:id', (req, res) => {
	var db = req.db;
	Evidence.findById(req.params.id, 'author title journal year volume number pages month cred', function (error, evidence) {
	  if (error) { console.error(error); }
	  evidence.author = req.body.author
	  evidence.title = req.body.title
	  evidence.journal = req.body.journal
	  evidence.year = req.body.year
	  evidence.volume = req.body.volume
	  evidence.number = req.body.number
	  evidence.pages = req.body.pages
	  evidence.month = req.body.month
	  evidence.cred = req.body.cred
	  evidence.save(function (error) {
			if (error) {
				console.log(error)
			}
			res.send({
				success: true
			})
		})
	})
})

app.delete('/posts/:id', (req, res) => {
	var db = req.db;
	Evidence.remove({
		_id: req.params.id
	}, function(err, post){
		if (err)
			res.send(err)
		res.send({
			success: true
		})
	})
})

app.get('/post/:id', (req, res) => {
	var db = req.db;
	Evidence.findById(req.params.id, 'author title journal year volume number pages month cred', function (error, post) {
	  if (error) { console.error(error); }
	  res.send(post)
	})
})

app.listen(process.env.PORT || 8081)
