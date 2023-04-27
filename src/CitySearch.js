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
                    Search for location:
                    <input type='text' onChange={this.props.handleCityInput} />
                </label>
                <Button type='submit'>Explore!</Button>
            </Form>
        );
    }
}


export default CitySearch;