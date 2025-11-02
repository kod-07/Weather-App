import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react";
import "./Weather.css"
export default function Weather() {
    let [weatherInfo,setWeatherInfo] = useState({
        city: "Delhi",
        feels_like: 25.49,
        humidity: 78,
        pressure: 1008,
        temp: 24.91,
        temp_max: 24.91,
        temp_min: 24.91
    });
    let updateResult= (result)=>{
        setWeatherInfo(result);
    }
    return (
        <div className="WeatherApp">
            <h2>Weather App by PK</h2>
            <SearchBox updateResult={updateResult}/>
            <InfoBox result={weatherInfo}/>
        </div>
    );
}