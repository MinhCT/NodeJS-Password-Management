var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/password_management_db";

MongoClient.connect(url, {useNewUrlParser: true}, function (err, db) {
    if (err) throw err;
    var dbo = db.db("password_management_db");
    dbo.createCollection("users", function (err, res) {
        if (err) throw err;
        console.log("'users' table created!");
        db.close();
    });
})