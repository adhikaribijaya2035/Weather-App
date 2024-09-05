import { useState } from "react";
import "./App.css";

const WeatherApp = () => {

const [weather, setWeather] = useState("");
const[location, setLocation] = useState("");
const apikey="43a4aa37b51d7919ee81f0f1cd3f6000"


const fetchWeather = async (city)=>{

  try{
 const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${"43a4aa37b51d7919ee81f0f1cd3f6000"}&units=metric`);
 

 if(!response.ok){
  throw new Error("Can't Found Location");
 }

 const data = await response.json();
 setWeather(data);
} catch (error) {
console.log(error)
setWeather(null)
}
}

const handleInputChange = (event) => {
setLocation(event.target.value);
}


const handleLocationChange = () =>{
  if(location.trim !== ""){
    fetchWeather(location);
  }
}

return(
  <div className="container">
    <h1>Weather App</h1>
<input
type="text"
placeholder="Enter Your Location"
value={location}
onChange={handleInputChange}
/>

<button onClick={handleLocationChange}>Get Weather</button>
{weather ? (
  <div>
    <h2>Weather in {weather.name}</h2>
    <p>Temperature: {weather.main.temp} °C</p>
    <p>weather: {weather.weather[0].description}</p>
  </div>

) : (
  <p>No Weather data available</p>
)

}

  </div>
)





};
export default WeatherApp;
