import React from "react";

function Filter() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filter for type
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Food
        </a>
        <a className="dropdown-item" href="#">
          Alcohol
        </a>
        <a className="dropdown-item" href="#">
          Food and alcohol
        </a>
      </div>
    </div>
  );
}

export default Filter;
