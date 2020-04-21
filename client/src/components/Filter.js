import React from "react";

class Filter extends React.Component {
  state = {
    isOpen: false,
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
          Filter for type
        </button>
        <div className={menuClass} aria-labelledby="dropdownMenuButton">
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
}

export default Filter;
