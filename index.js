const express = require('express');
const session = require('express-session');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

// internal imports
const routes = require('./routes');

// mongoose setup
mongoose.connect(`${process.env.databaseURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));


app.use(session({secret: 'ssshhhhh'}));
app.use('/', routes);

// query strings: req.query.city

app.listen(3008, () => {
    console.log("server listening on 3008.");
})