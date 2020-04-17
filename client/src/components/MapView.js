import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GOOGLE_API_KEY } from "../utils/keys";

// function to replace center if user enters an address, code originally had initialCenter as the variable
//test this in react-practice folder

class MapView extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
    };

    // const points = [
    //   { lat: 35.0, lng: -78.0 },
    //   { lat: 35.0, lng: -79.0 },
    //   { lat: 36.0, lng: -79.0 },
    //   { lat: 36.0, lng: -78.0 },
    // ];

    // var bounds = new this.props.google.maps.LatLngBounds();
    // for (var i = 0; i < points.length; i++) {
    //   bounds.extend(points[i]);
    // }

    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        // initialCenter={{ lat: 35.7796, lng: -78.6382 }}
        // bounds={bounds}

        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {this.props.restaurants.map((rest) => (
          <Marker
            position={{
              lat: parseFloat(rest.address.lat),
              lng: parseFloat(rest.address.lng),
            }}
          />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapView);
