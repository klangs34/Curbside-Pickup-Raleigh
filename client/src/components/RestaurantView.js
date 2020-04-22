import React from "react";
// import MapView from "./MapView";
// import API from "../utils/API";

// class RestaurantList extends React.Component {
// state = {
//   search: "",
//   lat: 35.7796,
//   lng: -78.6382,
//   restaurants: [],
// };
const RestaurantView = () => {
  return (
    <div>
      <div className="h1">Restaurant Lists</div>
      {/* <MapView
      lat={this.state.lat}
      lng={this.state.lng}
      restaurants={this.state.restaurants}
    /> */}
      <div className="card-body">
        <h5 className="card-title">{/* {restaurant.name} */}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Type:
          {/* {restaurant.category} */}
        </li>
        <li className="list-group-item">
          Order by:
          {/* {restaurant.order}   */}
        </li>
        <li className="list-group-item">
          Menu:
          {/* {restaurant.web_url} */}
        </li>
        <li>Hours</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          menu:
          {/* {restaurant.web_url} */}
        </a>
      </div>
    </div>
  );
};

export default RestaurantView;
