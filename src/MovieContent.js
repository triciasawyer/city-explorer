import React from 'react';
import { Card } from 'react-bootstrap'
import './App.css'


class MovieContent extends React.Component {

  render() {
    console.log("NNNNN", this.props.date.imageUrl);
    let imageUrl;
    if (this.props.date.imageUrl === 'https://image.tmdb.org/t/p/w500null') {
      console.log("nully null null");
      imageUrl = `https://placehold.co/600x400`;
    } else {
      imageUrl = this.props.date.imageUrl;
    }


    return (
      <>
        <Card id="movie-card" >
          <Card.Body>
          <Card.Title> Title: {this.props.date.title}</Card.Title>
            <Card.Img src={imageUrl} alt={this.props.date.title}/>
            <Card.Text> Date Of Release: {this.props.date.release_date} </Card.Text>
            <Card.Text> Overview: {this.props.date.overview}</Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default MovieContent;