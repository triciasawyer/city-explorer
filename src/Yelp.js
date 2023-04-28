import React from 'react';
import YelpContent from './YelpContent.js'
import './App.css'

class Yelp extends React.Component {

    render() {
        return (
            <>
                <div id='food'>
                    {this.props.yelp.map((day, index) => (
                        <YelpContent key={index} day={day} />
                    ))
                    }
                </div>
            </>
        )
    }
}


export default Yelp;