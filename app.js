const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/password_management_db";

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

var dbo;
MongoClient.connect(url, {useNewUrlParser: true}, function (err, client) {
    if (err) throw err;
    dbo = client.db("password_management_db");
    app.listen(3000, function () {
        console.log('Listening on port 3000');
    });
});


// Endpoints will be temporary implemented below
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/users', (req, res) => {
   console.log(req.body);
   dbo.collection('users').save(req.body, (err, result) => {
       if (err) throw err;
       console.log('A new user has been saved to the database');
   })
});