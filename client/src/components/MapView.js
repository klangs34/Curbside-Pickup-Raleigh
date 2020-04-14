import React from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

// function to replace center if user enters an address, code originally had initialCenter as the variable
//test this in react-practice folder

function MapView() {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              center={{ lat: 35.7796, lng: -78.6382}}
            />
        );
      }
}

export default MapView;

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(MapContainer);