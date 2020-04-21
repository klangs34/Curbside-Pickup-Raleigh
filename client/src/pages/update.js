import React, { useRef } from "react";
import API from "../utils/API";

function Update() {
  const validCategories = ["Food", "Alcohol", "Food and Alcohol"];
  const orderMethods = [""];
  const restaurantRef = useRef();
  const addressRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();
  const phoneRef = useRef();
  const hoursRef = useRef();
  const openRef = useRef();
  const closeRef = useRef();
  const urlRef = useRef();
  const orderRef = useRef();
  const catRef = useRef();
  const infoRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const place = `${addressRef.current.value}+${cityRef.current.value}+${zipRef.current.value}`;
    API.findLocation(place).then((data) => {
      const restaurant = {
        name: restaurantRef.current.value,
        address: [
          {
            lat: data.data.results[0].geometry.location.lat,
            lng: data.data.results[0].geometry.location.lng,
            street: addressRef.current.value,
            city: cityRef.current.value,
            zip: zipRef.current.value,
            phone: phoneRef.current.value,
            web_url: urlRef.current.value,
          },
        ],
        hours: [
          {
            days: hoursRef.current.value,
            open: openRef.current.value,
            close: closeRef.current.value,
          },
        ],
        order: orderRef.current.value,
        category: catRef.current.value,
      };

      API.saveRestaurant(restaurant).then((res) => {
        res.json(restaurant);
      });
    });
  };

  return (
    <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
      <input required ref={restaurantRef} placeholder="Restaurant Name" />
      <input required ref={addressRef} placeholder="Street Address" />
      <input required ref={cityRef} placeholder="City" defaultValue="Raleigh" />
      <input ref={zipRef} placeholder="ZIP code" />
      <input ref={phoneRef} placeholder="Phone Number" />
      <input required ref={hoursRef} placeholder="Store Hours" />
      <input required ref={openRef} placeholder="Opening Time" />
      <input required ref={closeRef} placeholder="Closing Time" />
      <input ref={urlRef} placeholder="Store Website" />
      <input required ref={catRef} placeholder="Category" />
      <input required ref={orderRef} placeholder="Order Methods" />
      <textarea ref={infoRef} placeholder="additional info" />
      <button className="btn btn-success mt-3 mb-5" type="submit">
        Update Data
      </button>
    </form>
  );
}
