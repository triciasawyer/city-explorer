import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './App.css'

class CitySearch extends Component {

    handleCitySubmit = async (event) => {
        event.preventDefault();
        this.props.displayCoordinates();
    };



    render() {
        return (
            <Form className='form' onSubmit={this.handleCitySubmit}>
                <label className='form-label'>
                    Search a location:
                    <input className="srch-input" type='text' onChange={this.props.handleCityInput} />
                </label>
                <Button className="explore-btn" type='submit'>Explore!</Button>
            </Form>
        );
    }
}


export default CitySearch;