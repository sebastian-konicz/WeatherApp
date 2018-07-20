import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './components/header.jsx'
import {Form} from './components/form.jsx'
import {Weather} from './components/weather.jsx'
import {Forecast} from './components/forecast.jsx'
import {Footer} from './components/footer.jsx'

require('../scss/main.scss')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: "",
            forecast: "",
            city: "",
            latitude: "",
            longitude: "",
            error: "",
        }
    }

    getDataFromFormWeather = (city, country) => {
        const API_KEY = "1e70ccc58de72099cfb3f9ed17c63422"
        const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&lang=pl&APPID=${API_KEY}`

        fetch(urlWeather)
            .then(resp => resp.json())
            .then(response => {
                console.log('Prognoza pogody:', response);
                this.setState({
                    weather: response,
                    city: city
                })
            });
    }

    getDataFromFormForecast = (city, country) => {
        const API_KEY = "1e70ccc58de72099cfb3f9ed17c63422"
        const urlForcast = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&lang=pl&APPID=${API_KEY} `

        fetch(urlForcast)
            .then(resp => resp.json())
            .then(response => {
                console.log('Prognoza na 5 dni:', response);
                this.setState({
                    forecast: response,
                })
            });
    }

    getWeather = (latitude, longitude) => {
        const API_KEY = "1e70ccc58de72099cfb3f9ed17c63422"
        const urlWeather = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=pl&APPID=${API_KEY}`
        console.log(API_KEY)
        fetch(urlWeather)
            .then(resp => resp.json())
            .then(response => {
                console.log('Prognoza pogodyyyy:', response);
                this.setState({
                    weather: response,
                    city: response.name,
                })
        });
    }


    getForecast = (latitude, longitude) => {
        const API_KEY = "1e70ccc58de72099cfb3f9ed17c63422"
        const urlForecast = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&lang=pl&APPID=${API_KEY}`
        console.log(API_KEY)
        fetch(urlForecast)
            .then(resp => resp.json())
            .then(response => {
                console.log('Prognoza pogody:', response);
                this.setState({
                    forecast: response,
                })
            });
    }

    getGeolocationData = () => {
        console.log("działa")
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position.coords.latitude)
                console.log(position.coords.longitude)

                this.getWeather(position.coords.latitude, position.coords.longitude);
                this.getForecast(position.coords.latitude, position.coords.longitude);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
        )

    }

    render() {
        return <div>
            <Header/>
            <Form formDataWeather={this.getDataFromFormWeather} formDataForecast={this.getDataFromFormForecast} formDataGeolocation={this.getGeolocationData}/>
            <Weather weather={this.state.weather} city={this.state.city}/>
            <Forecast forecast={this.state.forecast} city={this.state.city}/>
            <Footer/>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});