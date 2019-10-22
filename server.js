const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const mongo_uri = 'mongodb://localhost/myownsite';
const User = require('./model/User.js');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(mongo_uri, function(err){
    if(err){
        throw err;
    } else {
        console.log('Connected to: ' + mongo_uri);
    }
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'Express backend connected. You can now post/register User(email, password)' });
});

// POST route to register a user
app.post('/register', function(req, res, next) {
    var user = new User();
    user.email = req.body.email;
    user.password = req.body.password;

    user.save(function(err) {
        if (err) return next(err);
        res.json('Successfully register a new user');
    });
});