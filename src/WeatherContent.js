import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css'

class WeatherContent extends React.Component {

    render() {

        return (
            <>
                <Card id='forecast-card'>
                    <Card.Body className='card-body'>
                        <Card.Text className='card-date'>Date: {this.props.day.date}</Card.Text>
                        <Card.Text className='card-forecast'>Forecast: {this.props.day.forecast}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }

}

export default WeatherContent;