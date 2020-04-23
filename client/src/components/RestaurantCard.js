import React from "react";
import { withRouter } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function RestaurantCard(props) {
  const handleClick = (restaurant) => {
    props.setRestaurant(restaurant);
    props.history.push("/restaurant-view");
  };

  console.log(props);
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <img
          src="https://s.hdnux.com/photos/01/11/15/51/19192385/3/gallery_xlarge.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body text-center">
          <h3 className="card-title">{props.restaurant.name}</h3>

          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <strong>Category: </strong> {props.restaurant.category}
            </li>
            <li className="list-group-item">
              <strong>Order: </strong> {props.restaurant.order}
            </li>
            <li className="list-group-item">
              <strong>Website: </strong>
              <a
                href={props.restaurant.contact.web_url}
                target="_blank"
                className="card-link"
              >
                {props.restaurant.contact.web_url}
              </a>
            </li>
          </ul>
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
