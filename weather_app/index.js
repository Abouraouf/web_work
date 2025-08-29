//api keys : 92880c87a47e26070ee61fab595ada1c
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const place = document.getElementById("in");
const button = document.getElementById("enter_button");
const out = document.getElementById("out");
const temp_out = document.getElementById("temp");
const weather_out = document.getElementById("weather");
const city_out = document.getElementById("city");

function fetch_data()
{
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${place.value}&appid=92880c87a47e26070ee61fab595ada1c`
	let stored_data;
	fetch(url)
		.then(mahdi => mahdi.json())
		.then(data => {
			if (data.cod && data.cod === "404"){ //
				return; // do something later
			}
			stored_data = data;
			const city = stored_data.name;
			const temp = stored_data.main.temp - 273.15;
			const weather = stored_data.weather[0].description;

			
   	 		temp_out.innerText = temp.toFixed(1);
   	 		weather_out.innerText = weather;
			city_out.innerText = city
			console.log(`City: ${city}`);
    		console.log(`Temp: ${temp.toFixed(1)}°C`);
    		console.log(`Weather: ${weather}`);
		})
		.catch(error => console.log("Error:", err));
}

button.addEventListener("click", ()=>{
	fetch_data();

})