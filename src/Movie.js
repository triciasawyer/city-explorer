import React from 'react';
import MovieContent from './MovieContent.js'
import './App.css'


class Movie extends React.Component {

    render() {
        // console.log('MOVIE JSSS', this.props.movieData);
        return (
            <>
                <h3>Movies: </h3>
                {
                    this.props.movieData.map((date, index) => {
                        return <MovieContent key={index} date={date}/>;
                    })
                }
            </>
        )
    }
}

export default Movie;