// functions
const weather = require('../lib/weather');
const User = require('../models/user');


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

exports.getLogin = async (req, res) => {
    let { name, email} = req.query

    let user = await User.findOne({name, email});
    console.log(user);
    res.send(user)
}

exports.postSignup = async (req, res) => {
    let { name, email} = req.query
    const user = new User({
        name,
        email,
        password: 'secret'
    })
    user.save();
    res.send(user);
}