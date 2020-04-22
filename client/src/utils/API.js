import axios from "axios";
import { GOOGLE_API_KEY } from "./keys";

export default {
  findLocation: function (address) {
    return axios.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?query=${address}&key=${GOOGLE_API_KEY}`
    );
  },
  getRestaurants: function () {
    return axios.get("/api/get-restaurants");
  },
  saveRestaurant: function (restaurantData) {
    return axios.post("/api/restaurant/", restaurantData);
  },
  updateRestaurant: function (restaurantData, id) {
    return axios.put(`/api/restaurant/${id}`, restaurantData);
  },
};
