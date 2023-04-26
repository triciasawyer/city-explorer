import React from 'react';
import axios from 'axios';
import './App.css';
import { Button, Card, Form } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: [],
      error: false,
      errorMessage: '',
      locationLat: '',
      locationLon: '',
      locationMap: ''
    };
  }

  handleCitySubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.city);

    try {
      console.log('It is submitted')

      let url = (`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY_LOCATION}&q=${this.state.city}&format=json`);
      console.log(url)
      let cityInfo = await axios.get(url);
      console.log('cityInfo:', cityInfo.data[0]);

      let locationMap = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY_LOCATION}&center=${cityInfo.data[0].lat},${cityInfo.data[0].lon}&zoom=12`


      let locationLat = cityInfo.data[0].lat;
      let locationLon = cityInfo.data[0].lon;

      this.setState({
        cityName: cityInfo.data[0],
        error: false,
        locationLat: locationLat,
        locationLon: locationLon,
        locationMap: locationMap,
      });
    }
    catch (error) {
      console.log('error', error);
      this.setState({
        error: true,
        locationMap: false,
        errorMessage: `Uh oh, an error occured! ${error.response.status}`,
      });
    }
    // this.getWeather();
  };



  handleCityInput = (event) => {
    this.setState({
      city: event.target.value,
    });
  };


  render() {

    console.log(this.state.city, this.state.locationLat, this.state.locationLon);

    return (
      <>
        <header>
          <h1>Data locations API</h1>
        </header>
        {this.state.error ? (
          <p>{this.state.errorMessage}</p>
        ) : (
          <ul>{this.state.cityData}</ul>
        )}
        <Form className='form' onSubmit={this.handleCitySubmit}>
          <label className='form-label'>
            Search for location:
            <input type='text' onChange={this.handleCityInput} />
          </label>
          <Button type='submit'>Explore!</Button>
        </Form>


        <Card className="location-cards" id='location'>
          <Card.Body className='card-body'>
            <Card.Title> Welcome to {this.state.city} !</Card.Title>
            <Card.Text className='card-text'>
              Latitude: {this.state.locationLat}<br></br>Longitude: {this.state.locationLon}
            </Card.Text>
            <Card.Img
              className="cardImage"
              variant="bottom"
              src={this.state.locationMap}
              style={{ width: '35rem' }}/>
          </Card.Body>
        </Card>
      </>

    );
  }
}



export default App;
