import React from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import MapView from "./MapView";
import API from "../utils/API";

class Home extends React.Component {
  state = {
    search: "",
    lat: 35.7796,
    lng: -78.6382,
    restaurants: [],
  };

  //need a search function for data entered into the form field

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // this.searchGiphy(this.state.search);
    API.findLocation(this.state.search).then((data) => {
      this.setState({
        lat: data.data.results[0].geometry.location.lat,
        lng: data.data.results[0].geometry.location.lng,
      });
      API.getRestaurants().then((response) => {
        this.filterRest(response.data);
      }).catch(err => console.log(err));
    }).catch(err => console.log(err));
  };

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        API.getRestaurants().then((data) => {
          console.log(data);
          this.filterRest(data.data)
        }).catch(err => console.log(err));
      }, () => {
        API.getRestaurants().then(data => {
          this.filterRest(data.data);
        }).catch(err => console.log(err));
      });
    }
  };

  filterRest = restaurants => {
    this.setState({
      restaurants: restaurants.filter((rest) => {
        return (
          this.distance(
            parseFloat(this.state.lat),
            parseFloat(this.state.lng),
            parseFloat(rest.contact.lat),
            parseFloat(rest.contact.lng)
          ) <= 10
        );
      }),
    });
  }

  distance = (lat1, lng1, lat2, lng2) => {
    const R = 3958;
    const rLat1 = this.toRadians(lat1);
    const rLat2 = this.toRadians(lat2);
    const dLat = this.toRadians(lat2 - lat1);
    const dLng = this.toRadians(lng2 - lng1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(rLat1) *
      Math.cos(rLat2) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    console.log(c * R);

    return c * R;
  };

  toRadians = (theta) => {
    return (theta * Math.PI) / 180;
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid bg-info">
          <div className="container">
            <h1 className="display-4 text-center">
              Restaurant Pick-up Raleigh Area
            </h1>
            <p className="lead  text-center">
              An up-to-date database of restaurants offering to-go and delivery
              while under Stay At Home.
            </p>
          </div>
        </div>

        <div className="card m-2">
          <div className="card-header justify-content-center">
            <SearchBar
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>
        <div className="row">
          {/* <div className="col-sm-6">
            <RestaurantCard
              // key={this.state.restaurants.id.value}
              restaurants={this.state.restaurants}
            />
            {/* {searchValue &&
              restaurants
                .filter((restaurant) => restaurant.name.first === searchValue)
                .map((closestRestaurants) => (
                  <RestaurantCard
                    key={closestRestaurants.id.value}
                    restaurant={closestRestaurants}
                  />
                ))}
            {!searchValue &&
              restaurants
                .slice(0, 5)
                .map((restaurant) => (
                  <RestaurantCard key={restaurant.id.value} restaurant={restaurant} />
                ))} */}
          </div>
          <div className="card-body m-2">
            <div>
              <Filter />
            </div>
            <div className="align-content-stretch flex-wrap">
              <MapView
                lat={this.state.lat}
                lng={this.state.lng}
                restaurants={this.state.restaurants}
              />
            </div>
          </div>
        </div>
    );
  }
}

export default Home;
