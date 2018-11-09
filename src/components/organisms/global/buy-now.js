import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class BuyNow extends Component {
  render() {
    return (
      <footer className="footer fixed-bottom">
        <NavLink className="btn btn-link" to="">
          <i className="far fa-heart" />
        </NavLink>
        <NavLink className="btn btn-primary" to="">
          Add to Cart
        </NavLink>
        <NavLink className="btn btn-primary" to="">
          Buy Now
        </NavLink>
      </footer>
    );
  }
}

export default BuyNow;
