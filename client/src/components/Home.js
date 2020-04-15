import React from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import MapView from "./MapView";

class Home extends React.Component {
  state = {
    search: "",
    results: [],
  };

  //need a search function for data entered into the form field

  handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    // this.searchGiphy(this.state.search);
  };

  render() {
    return (
      <>
        <div className="container">
          <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container">
              <h1 class="display-4 text-center">
                Restaurant Pick-up Raleigh Area
              </h1>
              <p class="lead  text-center">
                An up-to-date database of restaurants offering to-go and
                delivery while under Stay At Home.
              </p>
            </div>
          </div>
          <SearchBar
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <Filter />
          <MapView />
          <RestaurantCard />
        </div>
      </>
    );
  }
}

export default Home;
