import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CardHorizontal extends Component {
  render() {
    return (
      <NavLink className="card" to={this.props.CardUrl}>
        <div className="card-img-wrapper">
          <img
            className="card-img"
            src={this.props.CardImgSrc}
            alt={this.props.CardImgAltText}
            width={100}
          />
          <div className="card-bg-top">
            <i className="fas fa-map-marker-alt" />
            {this.props.CardLocation}
          </div>
          <div className="card-bg-bottom">
            <span className="badge badge-primary">54% OFF</span>
          </div>
        </div>
        <div className="card-body">
          <p className="card-title">Full-Day Panoramic Tagaytay Ridge Tour</p>
          {/* <ul className="card-details list-inline">
                <li className="list-inline-item">
                  <span>
                    <i className="fas fa-star" /> 4.4
                  </span>
                  (18 reviews)
                </li>
                <li className="list-inline-item" />
                <li className="list-inline-item">4,708 Booked</li>
              </ul> */}
          <p className="card-old-price">P 5390</p>
          <p className="card-new-price">P 2500</p>
          <p className="card-availability">Available Today</p>
        </div>
      </NavLink>
    );
  }
}

export default CardHorizontal;
