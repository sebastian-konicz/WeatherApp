import React from "react";

class Weather extends React.Component {
    render() {
        return <section className="container weather">
            <h1>Warunki pogodowe</h1>
            <h1>{this.props.conditions.base}</h1>
        </section>
    }
}

export {Weather}