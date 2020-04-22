import React from "react";
import Hours from "./Hours";
import { Link } from "react-router-dom";

const RestaurantProfile = ({ isLogged }) => {
  return (
    <div className="container">
      {isLogged ? (
        <form>
          <div className="form-group name">
            <label htmlFor="examphtmlFeFormControlInput1">
              Restaurant Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          {/* fix formatting and classNames later  */}
          {/* street, city, zip, (plug in to convert to lat and lon in db)  */}
          <div className="form-group contact">
            <label htmlFor="examphtmlFeFormControlInput1">
              Contact Information
            </label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Street"
            />
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                />
              </div>
              <div className="col">
                <input type="text" className="form-control" placeholder="Zip" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
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
                  placeholder="Instagram"
                />
              </div>
            </div>
          </div>
          <label htmlFor="examphtmlFeFormControlInput1">Hours</label>
          {/* add loop or checkbox to add another Hours if needed */}
          <Hours />
          <div className="form-group category">
            <label htmlFor="exampleFormControlSelect2">
              What does your restaurant offer?
            </label>
            <select className="form-control" id="exampleFormControlSelect2">
              <option>Food</option>
              <option>Food and Alcohol</option>
              <option>Alcohol</option>
            </select>
          </div>
          <div className="form-group order-option">
            <label htmlFor="exampleFormControlSelect1">
              Best way for people to order
            </label>
            <select className="form-control" id="exampleFormControlSelect1">
              <option>Phone</option>
              <option>Online</option>
            </select>
          </div>
          <div className="form-group menu">
            <label htmlFor="examphtmlFeFormControlInput1">Menu Location</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Menu url"
            />
          </div>
        </form>
      ) : (
        <p> You have been logged out</p>
        // not sure what to do here, need to show anything?
        // <Link to="/sign-in">Login again</Link> 
        //would like this link to redirect, not just show a link
        // <Link to={{
        //   pathname: '/',
        //   state: {
        //     // fromNotifications: true
        //   }
        // }}>Tyler McGinnis</Link>
      )}
    </div>
  );
};

export default RestaurantProfile;
