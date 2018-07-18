import React from "react";
import {Line} from 'react-chartjs-2';

class Forecast extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            temperature: "",
            dates: "",
            chartData: {
                labels:[],
                datasets: [{
                    label: 'Temperatura',
                    data:[25.67, 26.39, 21.18, 20.2, 19.34, 19.15, 21.44, 24.58, 23.15, 24.49, 22.58, 20, 19.08, 17.27, 19.64, 23.39, 25.18, 24.62, 22.31, 20.33, 17.1, 14.91, 18.56, 21.35, 22.53, 22.35, 20.27, 17.24, 17.31, 17.35, 19.86, 21.96, 22.72, 23.56, 21.3, 17.29, 15.06, 14.05, 20.14, 22.5]
                }],
            }
        }
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.forecast.list[0].dt_txt)
        let dateArray = []
        for (let i = 0 ; i < nextProps.forecast.list.length ; i++){
            dateArray.push(nextProps.forecast.list[i].dt_txt)
        }

        let temperatureArray = []
        for (let i = 0; i < nextProps.forecast.list.length; i++){
            temperatureArray.push(nextProps.forecast.list[i].main.temp)
        }

        this.setState({
            temperature: temperatureArray,
            dates: dateArray,
        })


        this.setState(prevState => ({
            chartData: {
            ...prevState.chartData,
            labels: dateArray,
            datasets: [ {label: 'lalalal', data: temperatureArray }]
            }
        }))
        //
        // console.log(temperatureArray)
        // this.setState( prevState => ({
        //     chartData: {
        //         ...prevState.chartData,
        //        datasets: [...datasets, {label: 'lalalal', data: temperatureArray }]
        //     }
        // }))





    }


    render() {
        console.log('state w renderze', this.state)
        console.log(this.state.temperature)
        console.log(this.state.chartData)
        return <section className="container forecast">
            <h2>Prognoza 24 h</h2>
            <Line
                data={this.state.chartData}
                options={{
                    // maintainAspectRatio: false
                }}
            />
        </section>
    }
}

export {Forecast}