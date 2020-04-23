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
    filter: "",
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
    API.findLocation(this.state.search)
      .then((data) => {
        this.setState({
          lat: data.data.results[0].geometry.location.lat,
          lng: data.data.results[0].geometry.location.lng,
        });
        API.getRestaurants()
          .then((response) => {
            this.filterRest(response.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };

  // handleFilter = () => {
  //   const value = target.value;
  //   this.setState({
  //     [filter]: value,
  //   });
  //   console.log("Successfilter");
  //   console.log(this.state);
  // };

  componentDidMount = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          API.getRestaurants()
            .then((data) => {
              console.log(data);
              this.filterRest(data.data);
            })
            .catch((err) => console.log(err));
        },
        () => {
          API.getRestaurants()
            .then((data) => {
              this.filterRest(data.data);
            })
            .catch((err) => console.log(err));
        }
      );
    }
  };

  filterRest = (restaurants) => {
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
  };

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

  // create a function, pass to filter.js, trigger function with onClick, test with console.log the selection, then use the argument to filter through the restaurants and save new array to state, inside return method reference new state of filtered restaurants

  render() {
    console.log(this.props);
    return (
      <div className="container">
        {/* jumbotron  */}
        <div className="jumbotron jumbotron-fluid bg-secondary">
          <div className="container">
            <h1 className="display-4 text-center">
              Restaurant Pick-up Raleigh
            </h1>
            <p className="lead  text-center">
              A database of local restaurants offering to-go and delivery
              options during Stay-At-Home.
            </p>
          </div>
        </div>

        {/* searchbar in head, map and filter in body  */}
        <div className="card m-2">
          {/* searchbar  */}
          <div className="card-header justify-content-center">
            <SearchBar
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
          {/* map  */}
          <div className="card-body">
            <div>
              <Filter
                filter={this.state.filter}
                //  getFilter={this.getFilter}
                handleFilter={this.handleFilter}
              />
            </div>
            <div
              id="map-container-google"
              className="map-container"
              style={{ height: "400px", width: "100%", position: "relative" }}
            >
              <MapView
                lat={this.state.lat}
                lng={this.state.lng}
                restaurants={this.state.restaurants}
              />
            </div>
          </div>
        </div>
        {/* restaurant cards  */}
        <div className="row">
          {/* <div className="col-sm-6"> */}
          <div className="row row-cols-md-1 row-cols-md-2 row-cols-md-3 row-cols-md-4 card-deck">
            {this.state.restaurants.slice(0, 4).map((restaurant) => (
              <RestaurantCard
                // these are the props
                // key={restaurant._id.value}
                setRestaurant={this.props.setRestaurant}
                restaurant={restaurant}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
