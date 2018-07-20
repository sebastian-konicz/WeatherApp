import React from "react";
import {Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';

class Forecast extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            visibility: "",
            chartData: {
                labels:[],
                datasets: [
                    {
                        label: 'Temperatura',
                        data:[],
                    },
                 ]
            }
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.forecast)
        let dateArray = []
        if(nextProps.forecast.list != undefined) {

            for (let i = 0 ; i < 8 ; i++){
                dateArray.push(nextProps.forecast.list[i].dt_txt.slice(11,16))
            }

            let temperatureArray = []
            for (let i = 0; i < 8; i++){
                temperatureArray.push(nextProps.forecast.list[i].main.temp)
            }

            let temperatureArrayMin = []
            for (let i = 0; i < 8; i++){
                temperatureArrayMin.push(nextProps.forecast.list[i].main.temp_min)
            }

            let temperatureArrayMax = []
            for (let i = 0; i < 8; i++){
                temperatureArrayMax.push(nextProps.forecast.list[i].main.temp_max)
            }
            this.setState({
                visibility: true
            })

            this.setState(prevState => ({
                chartData: {
                ...prevState.chartData,
                labels: dateArray,
                datasets: [ {label: 'Temperatura', data: temperatureArray }]
                }
            }))
        }
    }


    render() {
        // Setting the visibility of the section
        let isVisible = "visuallyhidden"
        if(this.state.visibility === true){
            isVisible = "visible"
        }

        return <section className={`container forecast ${isVisible}`}>
            <h2>Prognoza 24 h</h2>
            <Line
                data={this.state.chartData}
                options={{
                    legend: {
                        labels: {
                            fontColor: 'white',
                            fontSize: 20
                        }
                    },
                    layout: {
                        padding: {
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                fontSize: 20
                            }
                        }],
                        xAxes: [{
                            ticks: {
                                fontSize: 20
                            }
                        }]
                    }
                    // maintainAspectRatio: false
                }}
            />
        </section>
    }
}

export {Forecast}