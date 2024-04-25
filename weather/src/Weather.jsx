import React, { useState } from "react";

const api = {
    key: "fc1148177582bc5b713b49b574e5c162",
    base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = evt => {
        if (evt.key === "Enter") {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(res => res.json())
                .then(result => {
                    setWeather(result);
                    setQuery('');
                    console.log(result);
                });
        }
    };

    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year}`;
    };

    return (
        <div className="   h-screen ">
            <h1 span className=" text-align-center mb-4 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-5xl dark:text-white"> <span className="underline underline-offset-3 decoration-8 decoration-blue-400 dark:decoration-blue-600"> Weather Forcast </span> </h1>
            <main className="p-4">
                <div className="search-box mb-4">
                    <input
                        type="text"
                        className="search-bar p-2 rounded border"
                        placeholder="Enter the City"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        onKeyPress={search}
                    />
                </div>
                
                {weather.name && (
                    <div className="max-w-md bg-white rounded shadow-md p-4">
                        <div className="location-box text-center mb-2">
                            <div className="location">
                               City :  {weather.name}   {weather.sys.country}
                                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
                               
                            </div>
                            <div className="date">
                                {dateBuilder(new Date())}
                                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
                            </div>
                        </div>
                        <div className="weather-box text-center">
                            <div className="temp mb-2">
                                Temperature: {weather.main.temp}°C
                                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
                            </div>
                            <div className="wind-speed mb-2">
                                Wind Speed: NW {weather.wind.speed} km/h
                                <hr class="h-px my-2 bg-gray-200 border-0 "></hr>
                            </div>
                            <div className="humidity">
                                Humidity: {weather.main.humidity} %
                                
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>





    );
};

export default Weather;
