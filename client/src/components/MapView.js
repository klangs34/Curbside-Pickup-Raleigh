import React from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { GOOGLE_API_KEY } from "../utils/keys";

class MapView extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: { name: "" },
  };

  onMarkerClick = (props, marker, e) => {
    console.log(props);
    this.setState({
      selectedPlace: props.restaurant,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={12}
        // style={{ height: "100%", width: "100%" }}
        containerStyle={{ width: "100%" }}
        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {this.props.restaurants.map((restaurant) => (
          <Marker
            key={restaurant._id}
            restaurant={restaurant}
            position={{
              lat: parseFloat(restaurant.contact.lat),
              lng: parseFloat(restaurant.contact.lng),
            }}
            onClick={this.onMarkerClick}
          />
        ))}

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
// });

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapView);
