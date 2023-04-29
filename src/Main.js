import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Coordinates from './Coordinates';
import CitySearch from './CitySearch';
import Map from './Map';
import Weather from './Weather.js';
import Movie from './Movie.js';
// import Yelp from './Yelp.js';
import axios from 'axios';
import './App.js';



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
            movie: [],
        };
    }


    handleCityInput = (event) => {
        this.setState({
            city: event.target.value,
        });
    };

    displayCoordinates = async () => {
        // console.log("proof we made it ");
        let url = (`http://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY_LOCATION}&q=${this.state.city}&format=json`);

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
            // this.displayMovie(cityInfo.data[0].lat, cityInfo.data[0].lon);
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
    };




    displayMovie = async (lat, lon,) => {

        try {
            const movie = await axios.get(`${process.env.REACT_APP_SERVER}/movie`,
                {
                    params: {
                        latitude: lat,
                        longitude: lon,
                        searchQuery: this.state.city,
                    },
                }
            );
            this.setState({
                movie: movie.data,
            });

        } catch (error) {
            this.setState({
                displayError: true,
                displayMap: false,
                errorMessage: error.response.status + ': ' + error.response.data.error,
            });
        }
    };






    render() {

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
                            <div id='map-and-weather'>
                                <Row className='render-map'>
                                    <Col>
                                        <Map
                                            img_url={`http://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY_LOCATION}&center=${this.state.locationLat},${this.state.locationLon}&zoom=12`}
                                            city={this.state.city} />
                                    </Col>
                                </Row>
                                <Row className='render-weather'>
                                    <Col>
                                        <Weather weatherData={this.state.weatherData} />
                                    </Col>
                                </Row>
                            </div>
                            <Row>
                                <Col>
                                    <Movie movie={this.state.movie} />
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