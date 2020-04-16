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

    const restaurants = await Axios.get("/get-restaurants");
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

  return (
    <div id="map">
    </div>
  )
}