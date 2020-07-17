const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// internal imports
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.send('open weather')
// })

app.use('/', routes);

// query strings: req.query.city

app.listen(3008, () => {
    console.log("server listening on 3008.");
})