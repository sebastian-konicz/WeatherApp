import React from "react";

class Footer extends React.Component {
    render() {
        return <footer className="container footer">
            <h3> Dane pogodowe pochodzą z: </h3>
            <img src="images/logo_OpenWeatherMap_orange.svg"></img>
        </footer>
    }
}

export {Footer}