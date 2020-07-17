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
        weather: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        lon: data.coord.lon,
        lat: data.coord.lat,
	}
	return response;
	// return data;
}

module.exports = sortData;