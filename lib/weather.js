const fetch = require('node-fetch')

const getWeather = async(city, country) => { 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env.APPID}`;   
    let data = await fetch(url) 
    let jsonData = await data.json() 
    console.log(jsonData)
    return jsonData;
};

const sortData = async (city, country) => {
	let data = await getWeather(city, country);
	let response = {
        name: data.name,
        country: data.sys.country,
		temp: data.main.temp,
		humidity: data.main.humidity
	}
	return response;
	// return data;
}

module.exports = sortData;