import React from "react";
import MapView from "./MapView";

const RestaurantView = ({ restaurant }) => {
  console.log(restaurant);
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
            <h2 className="card-title">{restaurant.name}</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              Website:{" "}
              <a
                href={restaurant.contact.web_url}
                target="_blank"
                className="card-link"
              >
                {restaurant.contact.web_url}
              </a>
            </li>
            <li className="list-group-item">Type: {restaurant.category}</li>
            <li className="list-group-item">
              How to Order:{" "}
              {restaurant.order === "Phone" ? (
                <p>By Phone @ {restaurant.contact.phone}</p>
              ) : (
                <a
                  href={restaurant.contact.online}
                  target="_blank"
                  className="card-link"
                >
                  {restaurant.order}
                </a>
              )}
            </li>
            <li className="list-group-item">
              {restaurant.contact.instagram ? (
                <div>
                  Menu updates on Instagram:{" "}
                  <a
                    href={restaurant.contact.instagram}
                    target="_blank"
                    className="card-link"
                  >
                    https://www.instagram.com/{restaurant.contact.instagram} "
                  </a>
                </div>
              ) : (
                <div>
                  Menu Online:{" "}
                  <a
                    href={restaurant.contact.menu_url}
                    target="_blank"
                    className="card-link"
                  >
                    {restaurant.contact.menu_url}
                  </a>
                </div>
              )}
            </li>
            <li className="list-group-item">
              Current Hours:
              {restaurant.hours.map(
                (hour) => (
                  console.log(hour),
                  (
                    <p>
                      {hour.days}: {hour.open} to {hour.close}
                    </p>
                  )
                )
              )}
            </li>
          </ul>
          {/* <div className="card-body">
            {restaurant.contact.instagram ? (
              <div>
                Menu updates on Instagram:{" "}
                <a
                  href={restaurant.contact.instagram}
                  target="_blank"
                  className="card-link"
                >
                  https://www.instagram.com/{restaurant.contact.instagram} "
                </a>
              </div>
            ) : (
              <div>
                Menu Online:{" "}
                <a
                  href={restaurant.contact.menu_url}
                  target="_blank"
                  className="card-link"
                >
                  {restaurant.contact.menu_url}
                </a>
              </div>
            )}
          </div> */}
        </div>
      ) : (
        <div>Loading....</div>
      )}
    </div>
  );
};

export default RestaurantView;
