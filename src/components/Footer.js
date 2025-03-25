import React, { useState, useEffect } from "react";
import "../App.css"
function Footer() {
  const [weather, setWeather] = useState("Fetching weather...");

  useEffect(() => {
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeather(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          setWeather("Location access denied");
        }
      );
    } else {
      setWeather("Geolocation not supported");
    }
  }, []);


  const fetchWeather = async (lat, lon) => {
    const API_KEY = "272ee931680a57b63ba073c8b2e947ca"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.weather && data.weather.length > 0) {
        setWeather(data.weather[0].main); 
      } else {
        setWeather("Weather data unavailable");
      }
    } catch (error) {
      console.error("Error fetching weather:", error);
      setWeather("Failed to fetch weather");
    }
  };

  return (
    <footer className="footer-container">

      
      <p>Weather: {weather}</p>
    </footer>
  );
}

export default Footer;
