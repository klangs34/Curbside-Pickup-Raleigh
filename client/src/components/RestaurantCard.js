import React from "react";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function RestaurantCard() {
  return (
    <div className="card" style={{width: "18rem"}}>
      <img
        src="https://s.hdnux.com/photos/01/11/15/51/19192385/3/gallery_xlarge.jpg"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">Name of Restaurant</h5>
        <p className="card-text">Description?</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Category:</li>
        <li className="list-group-item">How to order:</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          menu link
        </a>
        <br />
        <a href="#" className="btn btn-primary">
          View Restaurant Details
        </a>
      </div>
    </div>
  );
}

export default RestaurantCard;
