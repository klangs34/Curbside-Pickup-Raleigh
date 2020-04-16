import React from "react";
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Filter from "./Filter";
import MapView from "./MapView";

class Home extends React.Component {
  state = {
    search: "",
    restaurants: [],
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

        <div className="card  m-2">
          <div className="card-header justify-content-center">
            <SearchBar
              search={this.state.search}
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
          <div className="card-body m-2">
            <div>
              <Filter />
            </div>
            <div className="align-content-stretch flex-wrap">
              <MapView />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">

          {searchValue &&
              restaurants
                .filter((restaurant) => restaurant.name.first === searchValue)
                .map((closestRestaurants) => (
                  <EmployeeCard
                    key={closestRestaurants.id.value}
                    employee={closestRestaurants}
                  />
                ))}
            {!searchValue &&
              restaurants
                .slice(0, 1)
                .map((restaurant) => (
                  <EmployeeCard key={restaurant.id.value} restaurant={restaurant} />
                ))}







          {
                  restaurants
                    .slice(0, 5)
                    .map((employee) => (
                      <RestaurantCard
                        key={employee.id.value}
                        employee={employee}
                      />
                    ));
                }
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
