import React from "react";

//fix this to have import

function SearchBar(props) {
  return (
    <form>
      <div className="form-inline justify-content-center">
        <label htmlFor="search">Enter Address:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control mb-2 mx-sm-2"
          placeholder="Street, City, State"
          id="search"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
