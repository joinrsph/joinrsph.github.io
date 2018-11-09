import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

class SearchPage extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-light navbar-expand fixed-top">
          <NavLink className="close" to="">
            &times;
          </NavLink>
        </nav>
        <div className="container">
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Search by city or attraction"
            />
          </div>

          <div className="d-flex align-items-start align-items-center justify-content-between">
            <span>Search History</span>
            <NavLink to="">Clear History</NavLink>
          </div>
          <ul className="list-unstyled">
            <li>
              <NavLink to="">Subic</NavLink>
            </li>
            <li>
              <NavLink to="">Vietnam</NavLink>
            </li>
            <li>
              <NavLink to="">Vietnam City Tour</NavLink>
            </li>
          </ul>
          <hr />
          <div className="d-flex align-items-start align-items-center justify-content-between">
            <span>Popular Destination</span>
            <NavLink to="">All Destination</NavLink>
          </div>

          <ul className="list-inline">
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                HongKong
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Singapore
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Tokyo
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Osaka
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Kyoto
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Seoul
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Taipei
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Bangkok
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Chiang Mai
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Phuket
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Bali
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Sydney
              </NavLink>
            </li>
          </ul>

          <div className="d-flex align-items-start align-items-center justify-content-between">
            <span>Popular Activities</span>
          </div>

          <ul className="list-inline">
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Hong Kong Disneyland Park Ticket
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Universal Studios Japan Day E-Ticket
              </NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink className="btn btn-outline-dark" to="">
                Tokyo Disneyland or DisneySea Ticket Day Pass (Direct Entry at
                Disney)
              </NavLink>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default SearchPage;
