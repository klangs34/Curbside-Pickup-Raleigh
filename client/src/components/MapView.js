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
        center={{ lat: this.props.lat, lng: this.props.lng }}
      >
        <Marker
          position={{ lat: this.props.lat, lng: this.props.lng }}
          icon={{
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
          }}
          // onClick={this.setState({
          //   // selectedPlace: props.restaurant,
          //   // activeMarker: marker,
          //   showingInfoWindow: true,
          // })}
        />
        {/* <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <h3>Your Location</h3>
          </div>
        </InfoWindow> */}
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
            <h3>{this.state.selectedPlace.name}</h3>
            <p>{this.state.selectedPlace.category}</p>
            <a href="/restaurant-view">View Restaurant</a>
            {/* How direct to RestaurantView card?  */}
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
