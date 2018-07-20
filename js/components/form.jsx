import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: 'Miasto',
            country: 'Kraj'
        };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (typeof this.props.formDataWeather === 'function' && typeof this.props.formDataForecast === 'function'){
            this.props.formDataWeather(this.state.city, this.state.country);
            this.props.formDataForecast(this.state.city, this.state.country);
        }
    }

    handleGeolocation = (event) => {
        event.preventDefault();
        if (typeof this.props.formDataGeolocation === 'function'){
            this.props.formDataGeolocation();
            console.log("działa")
        }
    }

    handleCity = (event) => {
        this.setState({
            city: event.target.value
        });
    };
    handleCountry = (event) => {
        this.setState({
            country: event.target.value
        });
    };

    render() {
        return (
            <section className="container form">
                <form>
                    <label className="visuallyhidden">
                        Miasto
                    </label>
                    <input className="form-control col-6"
                           type="text"
                           value={this.state.city}
                           onChange={this.handleCity}
                    />
                    <label className="visuallyhidden">
                        Kraj:
                    </label>
                    <input className="form-control col-6"
                           type="text"
                           value={this.state.country}
                           onChange={this.handleCountry}
                    />
                    <button className="form-button col-12" value="Submit" onClick={this.handleSubmit}>
                        Sprawdź <i className="fas fa-search"></i></button>
                    <button className="form-button col-12" value="Submit" onClick={this.handleGeolocation}>
                        Geolokalizacja <i className="fas fa-map-marker-alt"></i></button>
                </form>
            </section>
        )
    }
}

export {Form}

