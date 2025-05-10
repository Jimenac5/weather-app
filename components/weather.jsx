import React, {useState} from 'react';
import './Weather.css';
import axios from 'axios';


export default function Weather() {
const [city, setCity]= useState();
const [weather, setWeather] = useState();
const handleCityChange = (event) => {
setCity(event.target.value)
}
const fetchWeather = async () => {
try {
const response = await axios.get
(
'https://api.openweathermap.org/data/2.5/weather?q=Bronx&appid=67915d2ac8c30433c58b391d362781f6&units=imperial'
);
setWeather(response);
}
catch (error){console.log("Error fetching weather data", error);
}
}
const handleClick = () => {
fetchWeather();
}
return (
<div className='weather'>
<div className="search-bar">
<input type="text" placeholder='Enter city Name' value={city} onChange={handleCityChange}/>
<img src="" alt="" />
</div>
<button onClick={handleClick}>Get Weather</button>
{weather && (<>
<div className='weather-info'>
<h3>{weather.data.name}</h3>
<p> The temp is {weather.data.main.temp}</p>
<p>{weather.data.weather[0].description}</p>


</div>
</>)}
</div>
)


}
