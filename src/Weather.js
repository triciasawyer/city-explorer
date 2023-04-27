import React from 'react';



class Weather extends React.Component {

    render() {
        return (
            <>
                <div id='weather-content'>
                    <h3>Weather:</h3>
                    {this.props.weather.map((day, index) => (
                        // <WeatherDate key={index} day={day} />
                    ))}

                </div>
            </>
        )
    }
}




export default Weather;