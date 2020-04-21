import React, { useRef, useState } from "react";
import API from "../utils/API";

function Update() {
  const validCategories = ["Food", "Alcohol", "Food and Alcohol"];
  const orderMethods = ["online", "phone"];
  const validHourCounts = [1, 2, 3, 4, 5, 6, 7];
  const [hourSlots, setHourSlots] = useState(0);
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
  const [times, setTimes] = useState({
    hours: [],
    open: [],
    close: [],
    currentSlot: 0
  });
  const [restName, setRestName] = useState("");
  const [category, setCategory] = useState("");
  const [order, setOrder] = useState("");
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

  const handleContactInputChange = e => {
    const { name, value } = e.target;

    setContact({ ...contact, [name]: value });
  }

  const handleHourSlots = e => {
    const { value } = e.target;

    setHourSlots(value);

    const array = [];

    for (var i = 0; i < hourSlots; i++) {
      array.push("");
    }

    setTimes({ ...times, hours: array, open: array, close: array });
  }

  const handleTimesInputChange = e => {
    const { name, value, index } = e.target;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const place = `${addressRef.current.value}+${cityRef.current.value}+${zipRef.current.value}`;
    API.findLocation(place).then((data) => {
      const restaurant = {
        name: restaurantRef.current.value,
        contact: {
          lat: data.data.results[0].geometry.location.lat,
          lng: data.data.results[0].geometry.location.lng,
          street: addressRef.current.value,
          city: cityRef.current.value,
          zip: zipRef.current.value,
          phone: phoneRef.current.value,
          web_url: urlRef.current.value,
        },
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
      <div className="row">
        <input className="col m-3" required ref={restaurantRef} placeholder="Restaurant Name" />
        <input className="col m-3" ref={phoneRef} placeholder="Phone Number" />
      </div>
      <div className="row">
        <input className="col m-3" required ref={addressRef} placeholder="Street Address" />
        <input className="col m-3" required ref={cityRef} placeholder="City" defaultValue="Raleigh" />
        <input className="col m-3" ref={zipRef} placeholder="ZIP code" />
      </div>
      {hoursLength ? (
        <div className="row">
          <div className="col">How many time slots are needed</div>
          {validHourCounts.map(count)}
        </div>
      ) : ()}
      <div className="row">
        <input className="col m-3" required ref={hoursRef} placeholder="Store Hours" />
        <input className="col m-3" required ref={openRef} placeholder="Opening Time" />
        <input className="col m-3" required ref={closeRef} placeholder="Closing Time" />
      </div>
      <div className="row">
        <input className="col m-3" ref={urlRef} placeholder="Store Website" />
        <input className="col m-3" required ref={catRef} placeholder="Category" />
        <input className="col m-3" required ref={orderRef} placeholder="Order Methods" />
      </div>
      <div className="row">
        <textarea className="col m-3" ref={infoRef} placeholder="additional info" />
        <button className="btn btn-success mt-3 mb-5 col" type="submit">
          Update Data
      </button>
      </div>
    </form>
  );
}

export default Update;