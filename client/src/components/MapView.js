// import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { GOOGLE_API_KEY } from "../utils/keys";


// .then((restaurants) => {
// function to replace center if user enters an address, code originally had initialCenter as the variable
//test this in react-practice folder

import React, { useEffect, useState } from "react";
import Axios from "axios";

async function Map() {
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const coordinates = { lat: position.coords.latitude, lng: position.coords.longitude };
        initMap(coordinates)
      });
    }
  });

  const initMap = (coordinates) => {
    const map = new google.maps.Map(document.getElementById("map"), { zoom: 10, center: { lat: coordinates.lat, lng: coordinates.lng } });

    const restaurants = Axios.get("/get-restaurants");
    const restNearby = restaurants.data.filter(restaurant => {
      return distance(coordinates.lat, coordinates.lng, restaurant.address.lat, restaurant.address.lng) <= 10;
    });
    const markers = [];

    restNearby.forEach(rest => {
      const position = { lat: rest.address.lat, lng: rest.address.lng };
      const marker = new google.maps.Marker({ position: position, map: map, label: rest._id });
      markers.push(marker);

      const infoWincontent = document.createElement("div");
      const line1 = document.createElement("p");
      const line2 = document.createElement("p");
      const link = document.createElement("a");
      line1.textContent = `${rest.name}: ${rest.address.street}, ${rest.address.city} ${rest.address.zip}`;
      line2.textContent = `Phone: ${rest.address.phone}`;
      link.href = rest.address.web_url;
      link.textContent = rest.address.web_url;

      infoWincontent.appendChild(line1);
      infoWincontent.appendChild(line2);

      const infowin = new google.maps.InfoWindow({ content: infoWincontent });

      marker.addListener("click", () => {
        infowin.open(map, marker);
      });
    })
  }

  const distance = (lat1, lng1, lat2, lng2) => {
    const R = 3958;
    const rLat1 = toRadians(lat1);
    const rLat2 = toRadians(lat2);
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rLat1) * Math.cos(rLat2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return c * R;
  }

  const toRadians = theta => {
    return theta * Math.PI / 180;
  }

}






class MapView extends React.Component {
  // console.log(retaurants)
  // displayMarkers = () => {
  //   this.props.restaurants.map((restaurant) => (
  //     <Marker
  //       key={restaurant.name.value}
  //       restaurant={restaurant}
  //       center={{
  //         lat: parseFloat(restaurant.contact.lat),
  //         lng: parseFloat(restaurant.contact.lng),
  //       }}
  //     />
  //   ));
  // };

  //   return this.state.stores.map((store, index) => {
  //     return (
  //       <Marker
  //         key={index}
  //         id={index}
  //         position={{
  //           lat: store.latitude,
  //           lng: store.longitude,
  //         }}
  //         //  onClick={() => console.log("You clicked me!")}
  //       />
  //     );
  //   });
  // };

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
        zoom={10}
        style={mapStyles}
        // initialCenter={{ lat: 35.7796, lng: -78.6382 }}
        // bounds={bounds}

        initialCenter={{ lat: this.props.lat, lng: this.props.lng }}
      >
        {this.props.restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id.value}
            restaurant={restaurant}
            center={{
              lat: parseFloat(restaurant.contact.lat),
              lng: parseFloat(restaurant.contact.lng),
            }}
          />
        ))}

        {/* {this.displayMarkers()} */}
      </Map>
    );
  }
}
// });

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
})(MapView);
