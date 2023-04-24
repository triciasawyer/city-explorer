import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityData: {},
      error: false,
      errorMessage: '',
      locationLat: '',
      locationLon: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.city);

    try {
      console.log('It is submitted')

      let url = (`https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_KEY_LOCATION}&q=${this.state.city}&format=json`);
      console.log(url)
      let cityInfo = await axios.get(url);
      console.log('cityInfo:', cityInfo.data[0]);


      let locationLat = cityInfo.data[0].lat;
      let locationLon = cityInfo.data[0].lon;

      this.setState({
        cityName: cityInfo.data[0],
        error: false,
        locationLat: locationLat,
        locationLon: locationLon
      });
    }
    catch (error) {
      console.log('error', error);
      this.setState({
        error: true,
        errorMessage: `an error occured: ${error.response.status}`,
      });
    }
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
        <h1>Data locations API</h1>

        {this.state.error ? (
          <p>{this.state.errorMessage}</p>
        ) : (
          <ul>{ }</ul>
        )}
        <form onSubmit={this.handleSubmit}>
          <label>
            Pick a City:
            <input type='text' onChange={this.handleCityInput} />
          </label>
          <button type='submit'>Explore!</button>
        </form>
      </>
    );
  }
}



export default App;
