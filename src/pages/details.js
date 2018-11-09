import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import BuyNow from "../components/organisms/global/buy-now";

class DetailsPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          <NavLink to="">
            <i className="fas fa-chevron-left" />
            Back
          </NavLink>
        </nav>
        <div className="jumbotron mb-0" />
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h4">
              Full-Day Panoramic Tagaytay Ridge Tour
            </h1>
            <hr className="dashed" />
            <ul>
              <li>999L+ Booked</li>
              <li>Available Today</li>
              <li>Instant Confirmation</li>
            </ul>
            <hr className="dashed" />
            <ul>
              <li>No Cancelation</li>
              <li>Show Mobile or Printed Voucher</li>
              <li>Open Date Ticket</li>
              <li>Enter Directly with Voucher</li>
            </ul>
          </div>
        </div>

        <ul className="nav nav-tabs nav-tabs-responsive">
          <li className="nav-item">
            <NavLink className="nav-link active" data-toggle="tabs" to="">
              Reviews
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="tabs" to="">
              Package Options
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="tabs" to="">
              What to Expect
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="tabs" to="">
              Activity Information
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="tabs" to="">
              How to Use
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="tabs" to="">
              Cancelation Policiy
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" data-toggle="tabs" to="">
              FAQs
            </NavLink>
          </li>
        </ul>

        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h5">Reviews</h1>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h5">Package Options</h1>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h5">What to Expect</h1>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h5">Activity Information</h1>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h5">How to Use</h1>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h5">Cancelation Policiy</h1>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-body">
            <h1 className="card-title h5">FAQs</h1>
          </div>
        </div>
        <BuyNow />
      </Fragment>
    );
  }
}

export default DetailsPage;
