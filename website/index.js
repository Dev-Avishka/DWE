const apiKey = 'YOUR_API_KEY';

const city = document.getElementById('city');
const date = document.getElementById('date');
const icon = document.getElementById('icon');
const description = document.getElementById('description');
const temp = document.getElementById('temp');
const feelsLike = document.getElementById('feels-like');

function getWeather() {
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
		.then(response => response.json())
		.then(data => {
			city.textContent = `${data.name}, ${data.sys.country}`;
			date.textContent = new Date().toLocaleDateString();
			icon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
			description.textContent = data.weather[0].description;
			temp.textContent = `${data.main.temp}°C`;
			feelsLike.textContent = `Feels like ${data.main.feels_like}°C`;
		})
		.catch(error => console.error(error));
}

getWeather();
