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
                    <button className="form-button col-12" value="Submit" onClick={this.handleSubmit}>Sprawdź</button>
                </form>
            </section>
        )
    }
}

export {Form}

