import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import cloudIcon from './assets/cloudicon.png';
import humidityicon from './assets/humidityicon.png';
import windspeedicon from './assets/windspeed.png';
import sun from './assets/sun.png'
import fewcloud from './assets/fewcloud.png'
import scatteredcloud from './assets/scatteredcloud.png'
import rainshower from './assets/rainshower.png'
import rain from './assets/rain.png'

function Weather() {

    let api_Key = "940b051c804467044018548afa0218a6";
    const [wicon, setWicon] = useState(cloudIcon)

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_Key}`

        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value===""}&units=Metric&appid=${api_Key}`;

        // let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value===""}&units=Metric&appid=${api_Key}`

        let response = await fetch(url);
        let data = await response.json();
        console.log(data, "svjagkjasfajksfjkags");
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temprature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = Math.floor(data.wind.speed) + " " + "Km/hr";
        temprature[0].innerHTML = Math.floor(data.main.temp) + "°C";
        location[0].innerHTML = data.name;

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
            setWicon(sun);
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
            setWicon(fewcloud);
        } else if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
            setWicon(scatteredcloud);
        } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
            setWicon(rainshower);
        } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
            setWicon(rain);
        }
        else {
            setWicon(cloudIcon)
        }
    }

    return (
        <div>
            <div className="wrapper">
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
                <div><span className="dot"></span></div>
            </div>
            <div className='container'>
            <div className='heading text-center text-white mb-3 fw-bold'>
                <h2>Weather Forecast</h2>
            </div>
                <div className='top-bar d-flex justify-content-center align-items-center gap-4'>
                    <input type='text' className='cityInput' placeholder='Search' />
                    <i onClick={() => { search() }} className="fa search-icon fa-search fa-2x" aria-hidden="true"></i>
                </div>
                <div className='weather-image mt-3'>
                    <img src={wicon} alt='cloudy-image' />
                </div>
                <div className='weather-temp text-center text-white my-3 display-1 fw-bold'>
                    24°C
                </div>
                <div className='weather-location text-center text-white my-1 display-6 fw-bolder'>
                    London
                </div>
                <div className='data-contanier'>
                    <div className='element my-4 gap-3'>
                        <img src={humidityicon} alt='' />
                        <div className='data'>
                            <div className='humidity-percent'>
                                64%
                            </div>
                            <div className='text'>
                                Humidity
                            </div>
                        </div>
                    </div>
                    <div className='element my-4 gap-3'>
                        <img src={windspeedicon} alt='' />
                        <div className='data'>
                            <div className='wind-rate'>
                                18km/hr
                            </div>
                            <div className='text'>
                                Wind Speed
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
