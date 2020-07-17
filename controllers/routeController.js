// functions
const weather = require('../lib/weather');

exports.getIndex = async (req, res) => {
    let city = "Manchester"
    let data = await weather(city);
    console.log(data)
    res.send('hello')
}