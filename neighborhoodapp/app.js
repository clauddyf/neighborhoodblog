var createError = require('http-errors');
var express = require('express');
var app = express();
const bodyParser = require("body-parser");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan'); //on any requests being made, it generates logs automatically
var cors = require('cors');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB =)"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/reviews", reviews);
app.use("/api/beaches", beaches);

const port = process.env.PORT || 5000;

app.listen(port, () => { console.log(`Listening on port ${port}`) });


module.exports = app;
