const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const bodyParser= require('body-parser')
const app = express();

// Create express
const port = 3000;
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}))

// parse application/json
app.use(bodyParser.json())

// Configuring the database
const dbConfig = require('./config/db.js');
const mongoose = require('mongoose');


MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)

	app.get("/", (req, res) => {
		res.send("I am here waiting for you to buid me.");
	});
	require('./app/routes')(app, {});
	app.listen(port, () => {
		console.log("Server listening on port " + port);
	});
        
})

 



