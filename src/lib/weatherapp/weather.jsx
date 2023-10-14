import React, { useState } from 'react'
import './weather.css';
import search_icon from '../assets/search.png';
import rainy_icon from '../assets/rain.png';
import cloudy_icon from '../assets/cloud.png';
import drizle_icon from '../assets/drizzle.png';
import humitity_icon from '../assets/humidity.png';
import snow_icon from '../assets/snow.png';
import sunny_icon from '../assets/clear.png';
import wind_icon from '../assets/wind.png';


 export const Weather = () => {
  let api="4a2be77834cda55e83cdb2e16407b10e";
  const [wicon,setwicon]=useState(cloudy_icon);
  const search=async ()=>{
    const element=document.getElementsByClassName("cityInput");
    if (element[0].value===""){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api}`;
    let response= await fetch(url);
    let data= await response.json();
    const humidity=document.getElementsByClassName("humidity-percent");
    const wind = document.getElementsByClassName("wind-rate");
    const  temperature=document.getElementsByClassName("weather-temp");
    const location=document.getElementsByClassName("location");
    humidity[0].innerHTML=data.main.humidity;
    wind[0].innerHTML=data.wind.speed;
    temperature[0].innerHTML=data.main.temp;
    location[0].innerHTML=data.name;
    if(data.weather[0].icon==="01d" || data.weather[0]==="01n"){
      setwicon(sunny_icon);
    }
    else if(data.weather[0].icon==="02d" || data.weather[0]==="02n"){
      setwicon(cloudy_icon);
    }
    else if(data.weather[0].icon==="03d" || data.weather[0]==="03n"){
      setwicon(drizle_icon);
    }
    else if(data.weather[0].icon==="04d" || data.weather[0]==="04n"){
      setwicon(drizle_icon);
    }
    else if(data.weather[0].icon==="09d" || data.weather[0]==="09n"){
      setwicon(rainy_icon);
    }
    else if(data.weather[0].icon==="10d" || data.weather[0]==="10n"){
      setwicon(rainy_icon);
    }
    else if(data.weather[0].icon==="13d" || data.weather[0]==="13n"){
      setwicon(snow_icon);
    }
    else{
      setwicon(sunny_icon)
    }





  }
  return (
    <div className='container'>
        <div className='top-bar'>
            <input type="text" className="cityInput" placeholder='Search' />
            <div className='search-icon'onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className='weather-image'>
              <img src={wicon} alt="" />
            </div>
        <div className='weather-temp'>42℃</div>
        <div className="location">London</div>
        <div className="data-container">
          <div className="element">
            <img src={humitity_icon} alt="" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src={wind_icon} alt="" />
            <div className="data">
              <div className="wind-rate">18 km/h</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
  )
}

