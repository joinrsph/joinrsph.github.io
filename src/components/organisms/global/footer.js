import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer fixed-bottom">
        <div className="container">
          <div className="row">
            <ul className="nav nav-pills nav-justified w-100">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <i className="nav-icon far fa-compass" />
                  <span className="nav-text">Explore</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/destinations">
                  <i className="nav-icon fas fa-map-marker-alt" />
                  <span className="nav-text">Destinations</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/booking">
                  <i className="nav-icon far fa-copy" />
                  <span className="nav-text">Booking</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/my-account">
                  <i className="nav-icon far fa-user" />
                  <span className="nav-text">My Account</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
