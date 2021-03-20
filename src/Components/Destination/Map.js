import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
        style={{height: '300px', width:'300px'}}
      >
        <AnyReactComponent
          lat={30.955413}
          lng={30.337844}
          text={'Google Map'}
        />
      </GoogleMapReact>
    );
  }
}
Map.defaultProps = {
  center: {lat: 30.95, lng: 30.33},
  zoom: 11
};

export default Map;