import React from "react";
import MapView from "./MapView";

const RestaurantView = ({ restaurant }) => {
  console.log(restaurant.lat);
  return (
    <div>
      {restaurant ? (
        <div>
          <div className="card m-2"></div>
          <div className="card-header justify-content-center">
            <div className="h1">{restaurant.name}</div>
            <div className="card-body">
              <div
                id="map-container-google"
                className="map-container"
                style={{ height: "400px", width: "100%", position: "relative" }}
              >
                <MapView
                  lat={restaurant.contact.lat}
                  lng={restaurant.contact.lng}
                  restaurants={[restaurant]}
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">{restaurant.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Type:
              {restaurant.category}
            </li>
            <li className="list-group-item">
              Order by:
              {restaurant.order}
            </li>
            <li className="list-group-item">
              Menu: {restaurant.contact.web_url}
            </li>
            <li>Hours</li>
          </ul>
          <div className="card-body">
            <a
              href={restaurant.contact.web_url}
              target="_blank"
              className="card-link"
            >
              menu:
            </a>
          </div>
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default RestaurantView;
