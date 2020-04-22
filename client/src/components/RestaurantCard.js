import React from "react";
import { withRouter } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function RestaurantCard(props) {
  const handleClick = (restaurant) => {
    console.log("yay");
    props.setRestaurant(restaurant);
    props.history.push("/restaurant-view");
  };

  console.log(props);
  return (
    <div class="col mb-4">
      <div className="card h-100">
        <img
          src="https://s.hdnux.com/photos/01/11/15/51/19192385/3/gallery_xlarge.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          {/* <h5 className="card-title">{restaurant.name}</h5> */}
          <p className="card-text">Description?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Type: {props.restaurant.category}</li>
          <li className="list-group-item">
            Order by: {props.restaurant.order}
          </li>
          <li className="list-group-item">Menu: {props.restaurant.web_url}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            menu:
          </a>
        </div>
        <div class="card-footer">
          <button
            href="/restaurant-view"
            onClick={() => handleClick(props.restaurant)}
            className="btn btn-primary"
          >
            View Restaurant Details
          </button>

          {/* How direct to RestaurantView card?  */}
        </div>
      </div>
    </div>
  );
}

export default withRouter(RestaurantCard);
