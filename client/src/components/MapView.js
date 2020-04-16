import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GOOGLE_API_KEY } from "../utils/keys"

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
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {this.props.restaurants.map(rest => (
          <Marker position={{
            lat: parseFloat(rest.address.lat),
            lng: parseFloat(rest.address.lng)
          }} />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapView);
