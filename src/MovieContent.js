import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css'


class MovieContent extends React.Component {

  render() {

    return (
      <>
        <Card id="movie-card" >
          <Card.Body>
          <Card.Title>Title: {this.props.day.title}</Card.Title>
            <Card.Img src={this.props.day.image_url} />
            <Card.Text>Date Of Release: {this.props.day.release_date} </Card.Text>
            <Card.Text>Overview: {this.props.day.overview}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default MovieContent;