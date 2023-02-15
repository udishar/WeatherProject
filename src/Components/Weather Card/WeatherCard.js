import React, { useState, useEffect } from "react";
import SearchBar from "../Searchbar/searchbar";
import styles from "./weatherCard.module.css";

function WeatherCard() {
  const myAPIKey = "702dccc574de6b4ea7d742193662144b";
  const cities = ["Ropar", "Mohali", "Chandigarh", "Khanna","Gharuan","Jaipur","Udaipur", "Pilani","Jaisalmer","Panipat","Chennai","Bengaluru"];
  const [weatherData, setWeatherData] = useState([]);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = [];
      for (const city of cities) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPIKey}`
        );
        const cityData = await response.json();
        data.push(cityData);
      }
      setWeatherData(data);
    };
    fetchWeatherData();
  }, []);

  function HandleSearch(data) {
    setSearchData(data);
  }

  const filteredData = searchData
    ? weatherData.filter((data) => data.name.includes(searchData))
    : [];

  return (
    <div className={styles.MainContainer}>
      <SearchBar HandleSearch={HandleSearch} />
      {filteredData.map((data, index) => (
        <div key={index} className={styles.WeatherCardContainer}>
          <h2>{data.name}</h2>
          <p>Weather type - {data.weather[0].description}</p>
          <p>Temperature - {data.main.temp}</p>
          <p>Humidity - {data.main.humidity}</p>
        </div>
      ))}
    </div>
  );
}

export default WeatherCard;