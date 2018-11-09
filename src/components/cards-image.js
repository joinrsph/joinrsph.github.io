import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class CardImage extends Component {
  render() {
    return (
      <NavLink className="card" to={this.props.CardUrl}>
        <div className="card-img-wrapper">
          <img
            className="card-img"
            src={this.props.CardImgSrc}
            alt={this.props.CardImgAltText}
          />
          <div className="card-img-overlay d-flex align-items-end">
            <div className="card-bg-bottom">
              <p className="card-title">{this.props.CardTitle}</p>
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default CardImage;
