import React from "react";

class Filter extends React.Component {
  state = {
    isOpen: false,
    filter: "",
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  render() {
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
    return (
      <div className="dropdown" onClick={this.toggleOpen}>
        <button
          className="btn btn-primary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Filter for category
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
          <a
            // onCLick={handleFilter}
            // value={props.search} need it to get this.props
            name="filter"
            className="dropdown-item"
            href="#"
          >
            Food
          </a>
          <a
            // onCLick={handleFilter}
            // value={props.search}
            name="filter"
            className="dropdown-item"
            href="#"
          >
            Alcohol
          </a>
          <a
            name="filter"
            className="dropdown-item"
            href="#"
          >
            Food and Alcohol
          </a>
        </div>
      </div>
    );
  }
}

export default Filter;
