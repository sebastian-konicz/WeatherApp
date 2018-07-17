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
            conditions: ""
        }
    }

    getDataFromForm = (city, country) => {
        const API_KEY = "1e70ccc58de72099cfb3f9ed17c63422"
        const urlWeather = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&lang=pl&APPID=${API_KEY}`
        const urlForcast = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=metric&lang=pl&APPID=${API_KEY} `


        fetch(urlWeather)
            .then(resp => resp.json())
            .then(response => {
                console.log('Dane:', response);
                this.setState({
                    conditions: response
                })
            });
    }

    render() {
        return <div>
            <Header/>
            <Form formData={this.getDataFromForm}/>
            <Weather conditions={this.state.conditions}/>
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