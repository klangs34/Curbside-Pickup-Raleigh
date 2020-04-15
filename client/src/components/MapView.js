import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

// function to replace center if user enters an address, code originally had initialCenter as the variable
//test this in react-practice folder
const mapStyles = {
  width: "100%",
  height: "100%",
};

class MapView extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        center={{ lat: 35.7796, lng: -78.6382 }}
      >
        <Marker position={{ lat: 35.7796, lng: -78.6382 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyD8fLnwSiZVqLnnhdDVCUPL8Bfh-Vz9i_0",
})(MapView);
