import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css'

class WeatherContent extends React.Component {

    render() {

        return (
            <>
                <Card id='forecast-card'>
                    <Card.Title>Expected Weather: </Card.Title>
                    <Card.Body>
                        <Card.Text>Date: {this.props.day.date}</Card.Text>
                        <Card.Text>Forecast: {this.props.day.forecast}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }

}

export default WeatherContent;