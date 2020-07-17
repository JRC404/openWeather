// functions
const weather = require('../lib/weather');

exports.getIndex = async (req, res) => {
    let { city, country } = req.query
    let data = await weather(city, country);
    console.log(data)
    res.send(data);
}

exports.postIndex = async (req, res) => {
    let { city, country } = req.query
    let data = await weather(city, country);
    res.send(data);
}