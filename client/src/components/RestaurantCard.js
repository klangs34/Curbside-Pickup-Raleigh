import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function RestaurantCard({ restaurant }) {
  console.log(restaurant);
  return (
    <div class="col mb-4">
      <div className="card h-100">
        <img
          src="https://s.hdnux.com/photos/01/11/15/51/19192385/3/gallery_xlarge.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{restaurant.name}</h5>
          <p className="card-text">Description?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Type: {restaurant.category}</li>
          <li className="list-group-item">To order: {restaurant.order}</li>
          <li className="list-group-item">Menu: {restaurant.web_url}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            menu: {restaurant.web_url}
          </a>
        </div>
        <div class="card-footer">
          <a href="{restaurant.web_url}" className="btn btn-primary">
            View Restaurant Details
          </a>
        </div>
      </div>
    </div>
  );
}

export default RestaurantCard;
