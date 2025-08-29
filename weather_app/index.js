//api keys : 92880c87a47e26070ee61fab595ada1c
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const url = "https://api.openweathermap.org/data/2.5/weather?q=meknes&appid=92880c87a47e26070ee61fab595ada1c"
let stored_data;
fetch(url)
	.then(mahdi => mahdi.json())
	.then(data => {
		stored_data = data;
		const city = stored_data.name;
		const temp = stored_data.main.temp - 273.15;
		const weather = stored_data.weather[0].description;

   	 	console.log(`City: ${city}`);
    	console.log(`Temp: ${temp.toFixed(1)}°C`);
    	console.log(`Weather: ${weather}`);
	})
	.catch(error => console.log("Error:", err));
