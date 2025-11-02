import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
let gioApi = "http://api.openweathermap.org/geo/1.0/direct?q=";
const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;
let weatherApi = "https://api.openweathermap.org/data/2.5/weather?"


export default function SearchBox({ updateResult }) {
    let [filteredData, setFilteredData] = useState({
        city: "Delhi",
        feels_like: 25.49,
        humidity: 78,
        pressure: 1008,
        temp: 24.91,
        temp_max: 24.91,
        temp_min: 24.91
    });
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let getWeatherInfo = async () => {
        try {
            let data = await fetch(`${gioApi}${city}&limit=1&appid=${weatherApiKey}`);
            data = await data.json();
            let lg = data[0].lon;
            let lat = data[0].lat;
            console.log(data);
            let weatherData = await fetch(`${weatherApi}lat=${lat}&lon=${lg}&appid=${weatherApiKey}&units=metric`);
            weatherData = await weatherData.json();
            let result = {
                city: city,
                feels_like: weatherData.main.feels_like,
                humidity: weatherData.main.humidity,
                pressure: weatherData.main.pressure,
                temp: weatherData.main.temp,
                temp_max: weatherData.main.temp_max,
                temp_min: weatherData.main.temp_min
            }
            // console.log(result);
            setFilteredData(result);
            console.log(result);
            return result
        } catch (err) {
            throw err;
        }

    }
    let handleEvent = (event) => {
        setCity(event.target.value);
    }
    let handleSubmit = async (event) => {
        try {
            setError(false);
            event.preventDefault();
            console.log(city);
            let updated = await getWeatherInfo();
            updateResult(updated);


        } catch (err) {
            setError(true);
        }

    }
    return (
        <>
            <div className='SearchBox'>
                <h3>Search City</h3>
                <form onSubmit={handleSubmit} >
                    <TextField id="outlined-basic" label="Outlined" onChange={handleEvent} variant="outlined" required />
                    <Button variant="contained" color="secondary" size='large' type='submit' style={{ margin: "10px" }}>Search </Button>
                    {error && <p>No Such Place</p>}
                </form>
            </div>
        </>
    );
}