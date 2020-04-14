import React from "react";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function RestaurantCard() {
  return (
    <div class="card" style={{width: "18rem"}}>
      <img
        src="https://s.hdnux.com/photos/01/11/15/51/19192385/3/gallery_xlarge.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Name of Restaurant</h5>
        <p class="card-text">Description?</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Category:</li>
        <li class="list-group-item">How to order:</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">
          menu link
        </a>
        <br />
        <a href="#" class="btn btn-primary">
          View Restaurant Details
        </a>
      </div>
    </div>
  );
}

export default RestaurantCard;
