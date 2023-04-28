import React from 'react';
import './App.css'


class Movies extends React.Component {
    render() {
      let movies = this.props.movies.map((movie, index) => {
        return <img src={movie.imageUrl} alt={movie.title}  key={index} />;
      });
      return <div>{movies}</div>;
    }
  }
  
  export default Movies;