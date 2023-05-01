import React from 'react';
import './App.css'
import WeatherContent from './WeatherContent.js'

class Weather extends React.Component {

    render() {
        // console.log(this.props.weatherData);
        //looping here
        return (
            <>
                <div id='weather'>
                    <h2>Expected Weather:</h2>
                    {
                        this.props.weatherData.map((date, index) => {
                          return <WeatherContent key={index} day={date} />
                      })
                    }
                </div>
            </>
        )
    }
}


export default Weather;