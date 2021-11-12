import react from "react";
import Footer from "./Footer";
import Display from './Display'
import { useState } from "react/cjs/react.development";

function App() {
    const [city, SetCity] = useState('');
    const [weather, SetWeather] = useState({});

    const API_KEY = '6936a062aba84239e40dc5dcf0a4a8a3';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    function fetchApi(event) {
        
        fetch(url)
            .then(res => res.json())
            .then(result => {
                SetWeather(result);
                SetCity('');
                console.log(weather.name);
            })
        event.preventDefault();
    }

    return(
        <div>
            <div className='search-page'>
                <div className='input-container'>
                    <div className='search-page-heading'>
                        <h1>Weather <span>Forecast</span> </h1>
                    </div>
                    <div className='search-page-input'>
                        <form onSubmit={fetchApi}>
                            <input onChange={(event)=> {SetCity(event.target.value)}} type='text' placeholder='City Name' name='cityName' value={city} autoComplete='off' />
                            <button type='submit' className='btn btn-secondary btn-lg'>Search</button>
                        </form>
                    </div>
                </div>
            </div>

            {(typeof weather.main != 'undefined') ? (<Display
                city = {weather.name}
                country = {weather.sys.country}
                temp = {weather.main.temp}
                weatherCondition = {weather.weather[0].main}
                minTemp = {weather.main.temp_min}
                maxTemp = {weather.main.temp_max}
                humidity = {weather.main.humidity}
                pressure = {weather.main.pressure}
                feelsLike = {weather.main.feels_like}
                windSpeed = {weather.wind.speed}
                imageLink = {`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            />) : ('') }
        
            <Footer />
        </div>
    );

    
}

export default App;