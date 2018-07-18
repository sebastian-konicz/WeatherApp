import React from "react";

class Weather extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            weatherId: "",
            weatherDescription: "",

            temperature: "",
            pressure: "",

            clouds: "",
            humidity: "",

            windSpeed: "",
            windDirection: "",

            sunrise: "",
            sunset: "",
        }
    }

    componentWillReceiveProps(nextProps){
        const conditions = nextProps.weather
        this.setState({

            weatherId:          conditions.weather[0].id,
            weatherDescription: conditions.weather[0].description,

            temperature:        Math.floor(Number(conditions.main.temp)),
            pressure:           Math.floor(Number(conditions.main.pressure)),

            clouds:             Math.floor(Number(conditions.clouds.all)),
            humidity:           Math.floor(Number(conditions.main.humidity)),

            windSpeed:          Math.floor(Number(conditions.wind.speed)),
            windDirection:      Math.floor(Number(conditions.wind.deg)),

            sunrise:            conditions.sys.sunrise,
            sunset:             conditions.sys.sunset,
        })
    }

    render() {
        // Setting the visibility of the section
        let isVisible = "visuallyhidden"
        if(this.state.weatherId !== ""){
            isVisible = "visible"
        }



        //Setting time of sunset
        let sunriseDate = new Date(this.state.sunrise*1000)
        let sunriseHour = sunriseDate.getHours()
        if (sunriseHour < 10){
            sunriseHour = "0" + sunriseHour
        }
        let sunriseMinutes = sunriseDate.getMinutes()
        if (sunriseMinutes < 10){
            sunriseMinutes = "0" + sunriseMinutes
        }

        //Setting time of sunrise
        let sunsetDate = new Date(this.state.sunset*1000)
        let sunsetHour = sunsetDate.getHours()
        if (sunsetHour < 10){
            sunsetHour = "0" + sunsetHour
        }
        let sunsetMinutes = sunsetDate.getMinutes()
        if (sunsetMinutes < 10){
            sunsetMinutes = "0" + sunsetMinutes
        }

        return <section className={`container weather ${isVisible}`}>
            <div className="weather-description">
                <div className="row">
                    <h2>{this.props.city.toUpperCase()}</h2>
                </div>
                <div className="row">
                    <h3>{this.state.weatherDescription}</h3>
                </div>
                <div className="row">
                    <i className={`wi wi-owm-${this.state.weatherId}`}></i>
                </div>
            </div>
            <div className="weather-details">
                <div className="weather-details-container">
                    <div className="weather-details-row">
                        <div className="weather-details-row-item">
                            <p>Temperatura</p>
                            <i className="wi wi-thermometer"></i>
                            <span>{this.state.temperature}&deg;C</span>
                        </div>
                        <div className="weather-details-row-item">
                            <p>Ciśnienie</p>
                            <i className="wi wi-barometer"></i>
                            <span>{this.state.pressure} hPa</span>
                        </div>
                    </div>
                    <div className="weather-details-row">
                        <div className="weather-details-row-item">
                            <p>Zachmurzenie</p>
                            <i className="wi wi-cloudy"></i>
                            <span>{this.state.clouds}%</span>
                        </div>
                        <div className="weather-details-row-item">
                            <p>Wilgotność</p>
                            <i className="wi wi-humidity"></i>
                            <span>{this.state.humidity}%</span>
                        </div>
                    </div>
                    <div className="weather-details-row">
                        <div className="weather-details-row-item">
                            <p>Prędkość wiatru</p>
                            <i className="wi wi-strong-wind"></i>
                            <span>{this.state.windSpeed} m/s</span>
                        </div>
                        <div className="weather-details-row-item">
                            <p>Kierunek wiatru</p>
                            <i className="wi wi-wind  towards-0-deg"></i>
                            <span>{this.state.windDirection}&deg;</span>
                        </div>
                    </div>
                    <div className="weather-details-row">
                        <div className="weather-details-row-item">
                            <p>Wschód słońca</p>
                            <i className="wi wi-sunrise"></i>
                            <span>{sunriseHour}:{sunriseMinutes}</span>
                        </div>
                        <div className="weather-details-row-item">
                            <p>Zachód słońca</p>
                            <i className="wi wi-sunset"></i>
                            <span>{sunsetHour}:{sunsetMinutes}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    }
}

export {Weather}