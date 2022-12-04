import React from "react";
//import React, { useState } from "react";
import "./App.css";
//import axios from "axios";

export default function Weather(props) {
  let tempHigh = `Temperature is 89℉`;
  let tempLow = `Temperature is 20℉`;
  let city = "Raleigh";
  function handleClick(event) {
    event.preventDefault();
    alert("I am functioning!");
  }
  return (
    <div className="SearchBox">
      <form>
        <input type="search" placeholder="Search city..."></input>
        <button type="submit" onClick={handleClick}>
          Search
        </button>
      </form>
      <div className="row">
        <div className="col-12">
          <ul>
            <li>Today's Weather for {city} </li>
            <li>{tempHigh}</li>
            <li>{tempLow}</li>
            <li>Image</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

//export default function App() {
// let [city, setCity] = useState("");
//let [data, setData] = useState(false);
//let [weather, setWeather] = useState({});

// function showWeather(response) {
//setData(true);
// setWeather({
//temperature: response.data.main.temp,
//wind: response.data.wind.speed,
// humidity: response.data.main.humidity,
// description: response.data.weather[0].description,
// });
//}

//function handleSubmit(event) {
// event.preventDefault();
//  let apiKey = "21f347fd627fde024ba524524a760ab9";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather/?q=${city}&appid=${apiKey}&units=metric`;
// axios.get(apiUrl).then(showWeather);
//}

//function updateCity(event) {
// setCity(event.target.value);
// }

//let form = (
//<div className="card-body">
// <form onSubmit={handleSubmit}>
//  <input
// className="form-control me-2"
// type="search"
// placeholder="Search city..."
// onChange={updateCity}
// />
//<button type="submit">Search</button>
// </form>
// </div>
//  );

//if (data) {
//return (
//<div>
//{form}
//  <li>Temperature: {Math.round(weather.temperature)}℃</li>
//<li>Description: {weather.description} </li>
//<li>Wind: {weather.wind} </li>
//<li>insert image link </li>
// </ul>
// </div>
// );
// } else {
// return (
// <div className="App">
//  <div className="card" style="width: 50rem;">
// {form}
// <div className="container information">
//<div className="row">
// <div className="col-12">
// <p>Today</p>
//<ul>
//<li className="high">High</li>
//<li className="low">Low</li>
//</ul>
//</div>
//</div>
//</div>
//</div>
//</div>
//);
//}
//}
