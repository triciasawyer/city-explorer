import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Coordinates from './Coordinates';
import CitySearch from './CitySearch';
import Map from './Map';
import Weather from './Weather.js';
// import Movie from './Movie.js';
import axios from 'axios';



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            cityData: [],
            error: false,
            errorMessage: '',
            locationLat: '',
            locationLon: '',
            locationMap: '',
            displayMap: false,
            weatherData: [],
            // date: [],
            // forecast: [],
        };
    }


    handleCityInput = (event) => {
        this.setState({
            city: event.target.value,
        });
    };

    displayCoordinates = async () => {
        // console.log("proof we made it ");
        let url = (`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY_LOCATION}&q=${this.state.city}&format=json`);

        try {
            let cityInfo = await axios.get(url);
            let locationLat = cityInfo.data[0].lat;
            let locationLon = cityInfo.data[0].lon;


            this.setState({
                cityName: cityInfo.data[0],
                error: false,
                locationLat: locationLat,
                locationLon: locationLon,
                displayMap: true,
            });
            this.displayWeather(cityInfo.data[0].lat, cityInfo.data[0].lon);
        } catch (error) {
            this.setState({
                displayError: true,
                displayMap: false,
                errorMessage: error.response.status + ': ' + error.response.data.error,
            });
        }
    };

    displayWeather = async (lat, lon) => {
        //url to server
        let weatherResponse = await axios.get(`${process.env.REACT_APP_SERVER}/weather?`,
            {
                params: {
                    latitude: lat,
                    longitude: lon,
                    searchQuery: this.state.city
                }
            });
        this.setState({
            weatherData: weatherResponse.data,
        });

        //add render below for the weather.
    };




    render() {
        // console.log('HHHHHHWORKS',this.state.weatherData);

        return (
            <>
                <Container fluid>
                    <Row>
                        <Col>
                            <CitySearch
                                handleCityInput={this.handleCityInput}
                                displayCoordinates={this.displayCoordinates}
                                errorOccured={this.state.error}
                                errorMessage={this.state.errorMessage}
                            />
                        </Col>
                    </Row>

                    {this.state.displayMap && (
                        <>
                            <Row>
                                <Col>
                                    <Coordinates
                                        city={this.state.city}
                                        lat={this.state.locationLat}
                                        lon={this.state.locationLon}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Map
                                        img_url={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY_LOCATION}&center=${this.state.locationLat},${this.state.locationLon}&zoom=12`}
                                        city={this.state.city} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Weather
                                        weatherData={this.state.weatherData}
                                        // forecast={this.state.forecast}
                                    />
                                </Col>
                            </Row>
                        </>
                    )}
                </Container>
            </>
        );
    }
}

export default Main;