import React,{useState,useEffect} from 'react';
import axios from 'axios';

const Showweather = ({country}) => {
    const [weatherData,setWeatherData] = useState([])
    const api_key = process.env.REACT_APP_APIKEY
  
    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
          .then(response => {
              setWeatherData(response.data.current)
              console.log(response.data)
          })
      },[])
    
    return (
        <>
            <h2>Weather in {country.capital}</h2>
            <p>Temperature: {weatherData.temperature} Celcius</p>
            <p><img src={weatherData.weather_icons}/></p>
            <p>Wind: {weatherData.wind_speed} mph direction {weatherData.wind_dir}</p>   
        </>
    )
}

export default Showweather;