const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('open weather')
})

app.listen(3005, () => {
    console.log("server listening on 3005.");
})