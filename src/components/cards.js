import React, { Component, Fragment } from "react";

class Cards extends Component {
  render() {
    return (
      <NavLink className="card" to="">
        <div className="card-img-wrapper">
          <img
            className="card-img"
            src="https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/NLTjHTkUl/videoblocks-aerial-view-taal-volcano-on-luzon-island-north-of-manila-in-philippines-volcano-with-a-crater-on-an-island-in-the-middle-of-a-lake-luzon-philippines-4k-video-travel-concept-aerial-video-aerial_sbu5gyqxb_thumbnail-full01.png"
            alt="Card image"
            style={{ border-bottom - left - radius: 0; border-bottom-right-radius: 0;}}
        />
          <span style={{ position: absolute; top: 0px; left: 0; height: 28 %; width: 100 %; padding: 8px 12px; background: -webkit - linear - gradient(top, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0)); background: linear - gradient(to bottom, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0));}}>
            <i className="fas fa-map-marker-alt" /> Tagaytay
          </span>
          <span
            className="badge badge-primary"
            style="position: absolute; bottom: 8px; left: 12px;"
          >
            54% OFF
          </span>
        </div>
        <div className="card-body">
          <p className="card-title">Full-Day Panoramic Tagaytay Ridge Tour</p>
          <ul className="card-details list-inline">
            <li className="list-inline-item">
              <span>
                <i className="fas fa-star" /> 4.4
              </span>
              (18 reviews)
            </li>
            <li className="list-inline-item" />
            <li className="list-inline-item">4,708 Booked</li>
          </ul>
          <p className="card-old-price">P 5390</p>
          <p className="card-new-price">P 2500</p>
          <p className="card-availability">Available Today</p>
        </div>
      </NavLink>
    );
  }
}

export default Cards;
