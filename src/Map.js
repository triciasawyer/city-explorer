import React from 'react';
import Image from 'react-bootstrap/Image';


class Map extends React.Component {
  render() {
    return(
      <Image classname='map-img' src={this.props.img_url} alt={this.props.city} title={this.props.city} rounded fluid style={{ width: '30rem' }}/>
    )
  }
}

export default Map;