import React from "react";
import { Card } from "react-bootstrap";


class Coordinates extends React.Component {
    render() {
        return (
            <>
                <Card className="location-cards" id='location'>
                    <Card.Body className='card-body'>
                        <Card.Title> Welcome to {this.props.city} !</Card.Title>
                        <Card.Text className='card-text'>Latitude: {this.props.lat}<br></br>Longitude: {this.props.lon}</Card.Text>
                    </Card.Body>
                </Card>
            </>
        );
    }
}

export default Coordinates;