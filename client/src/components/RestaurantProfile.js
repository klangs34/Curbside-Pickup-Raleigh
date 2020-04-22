import React, { useState, useEffect } from "react";
import Hours from "./Hours";
import API from "../utils/API";
import { Link } from "react-router-dom";
import axios from "axios";


const RestaurantProfile = ({ isLogged }) => {

  const [restarauntData, setRestarauntData] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("id");
    axios
      .get(`/api/get-restaurant/${id}`)
      .then((response) => setRestarauntData(response.data));
  }, []);

  console.log(restarauntData); 
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
  const [contact, setContact] = useState({
    lat: 0.0,
    lng: 0.0,
    street: "",
    city: "",
    zip: "",
    phone: "",
    instagram: "",
    web_url: "",
    online: "",
    menu_url: "",
  });

  const [hours, setHours] = useState([{
    days: "daily",
    open: 8,
    close: 22
  }]);

  const handleContactInputChange = e => {
    const { id, value } = e.target;
    console.log(contact);

    setContact({ ...contact, [id]: value });
  }

  const handleNameInputChange = e => {
    const { value } = e.target;

    console.log(name);

    setName(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const place = `${contact.street}+${contact.city}+${contact.zip}`;
    API.findLocation(place).then((data) => {
      const restaurant = {
        name: name,
        contact: {
          lat: data.data.results[0].geometry.location.lat,
          lng: data.data.results[0].geometry.location.lng,
          ...contact
        },
        hours: hours,
        order: order,
        category: category,
      };

      //get restaurant id
      const id = localStorage.getItem("id"); 
      API.saveRestaurant(restaurant, id).then((res) => {
        res.json(restaurant);
      });
    });
  };

  return (
    <div className="container">
      {isLogged ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group name">
            <label htmlFor="name">
              Restaurant Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Restaurant Name"
              value={name}
              onChange={handleNameInputChange}
              id="name"
            />
          </div>
          {/* fix formatting and classNames later  */}
          {/* street, city, zip, (plug in to convert to lat and lon in db)  */}
          <div className="form-group contact">
            <label htmlFor="street">
              Contact Information
            </label>
            <input
              type="text"
              className="form-control"
              value={contact.street}
              onChange={handleContactInputChange}
              id="street"
              placeholder="Street"
            />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  value={contact.city}
                  onChange={handleContactInputChange}
                  placeholder="City"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  value={contact.zip}
                  onChange={handleContactInputChange}
                  placeholder="Zip"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={contact.phone}
                  onChange={handleContactInputChange}
                  placeholder="Phone"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="web_url"
                  value={contact.web_url}
                  onChange={handleContactInputChange}
                  placeholder="Website"
                />
              </div>
            </div>
          </div>
          <div className="form-group social">
            <label htmlFor="examphtmlFeFormControlInput1">Social Media</label>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  id="instagram"
                  value={contact.instagram}
                  onChange={handleContactInputChange}
                  placeholder="Instagram"
                />
              </div>
            </div>
          </div>
          <label htmlFor="examphtmlFeFormControlInput1">Hours</label>
          {/* add loop or checkbox to add another Hours if needed */}
          <Hours />
          <div className="form-group category">
            <label htmlFor="category">
              What does your restaurant offer?
            </label>
            <select className="form-control" id="category" value={category} onChange={e => { console.log(category); setCategory(e.target.value) }} >
              <option>Food</option>
              <option>Food and Alcohol</option>
              <option>Alcohol</option>
            </select>
          </div>
          <div className="form-group order-option">
            <label htmlFor="order">
              Best way for people to order
            </label>
            <select className="form-control" id="order" value={order} onChange={e => { console.log(order); setOrder(e.target.value) }} >
              <option>Phone</option>
              <option>Online</option>
            </select>
          </div>
          <div className="form-group menu">
            <label htmlFor="examphtmlFeFormControlInput1">Menu Location</label>
            <input
              type="text"
              className="form-control"
              id="menu_url"
              value={contact.menu_url}
              onChange={handleContactInputChange}
              placeholder="Menu url"
            />
          </div>
          <button className="btn btn-success" type="submit">Submit</button>
        </form>
      ) : (
          <p> You have been logged out</p>
          // not sure what to do here, need to show anything?
          // <Link to="/sign-in">Login</Link>
        )}
    </div>
  );
};

export default RestaurantProfile;
