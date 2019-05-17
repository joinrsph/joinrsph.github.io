import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";

import Footer from "../components/organisms/global/footer";

// import LogoImg from "../_assets/img/LOGO_Joiners-Colored.svg";

import CardsVertical from "../components/cards-vertical";
import CardsHorizontal from "../components/cards-horizontal";
import CardsImage from "../components/cards-image";

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <header className="fixed-top">
          <nav className="navbar navbar-light navbar-expand">
            <div className="form-icon ">
              <input
                className="form-control"
                id="legal-business-name"
                name="legal-business-name"
                type="search"
                placeholder="Where are you going?"
              />
              <span className="form-control-icon">
                <i className="fas fa-search" />
              </span>
            </div>
          </nav>

          <div className="filterbar">
            <NavLink className="btn btn-primary btn-sm mr-1" to="/destination">
              Date
            </NavLink>
            <NavLink className="btn btn-primary btn-sm mr-1" to="/destination">
              Guest
            </NavLink>
            <NavLink className="btn btn-primary btn-sm mr-1" to="/destination">
              Filter
            </NavLink>
          </div>
        </header>

        <main className="container-fluid">
          <div className="heading">
            <h1 className="heading-title h3">Recent</h1>
          </div>
          <div className="row card-scrollable" id="style-1">
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsVertical
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <div className="spacer" />
          </div>
          <div className="heading d-flex align-items-baseline justify-content-between">
            <h1 className="heading-title h3">Popular</h1>
            <NavLink to="/destinations">See More</NavLink>
          </div>
          <div className="row card-scrollable" id="style-2">
            <CardsImage
              CardUrl="/destination-details"
              CardImgSrc="https://www.asabbatical.com/sites/default/files/field/image/palawan_beach_resort.jpg"
              CardTitle="Palawan"
            />
            <CardsImage
              CardUrl="/destination-details"
              CardImgSrc="https://i.pinimg.com/originals/f0/68/08/f0680848a4b3af852010fd40d2b87c98.jpg"
              CardTitle="Cebu"
            />
            <CardsImage
              CardUrl="/destination-details"
              CardImgSrc="data:image/jpeg;base64,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"
              CardTitle="Cordilleras"
            />
            <CardsImage
              CardUrl="/destination-details"
              CardImgSrc="https://steemitimages.com/0x0/https://s24.postimg.org/wa8gnxwp1/20170104_062711.jpg"
              CardTitle="Ilocos"
            />
            <CardsImage
              CardUrl="/destination-details"
              CardImgSrc="https://reversedelay.files.wordpress.com/2015/12/legazpi-mayon-volcano-albay-gulf.jpg?w=840"
              CardTitle="Bicol"
            />
            <CardsImage
              CardUrl="/destination-details"
              CardImgSrc="https://pbs.twimg.com/media/BU5ZBtOCYAAyCdX.jpg"
              CardTitle="Surigao"
            />
            <div className="spacer" />
          </div>
          <div className="heading">
            <h1 className="heading-title h3">Recomended</h1>
          </div>
          <div className="row">
            <ul className="nav nav-tabs nav-tabs-responsive">
              <li className="nav-item">
                <NavLink className="nav-link active" data-toggle="tabs" to="">
                  All
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" data-toggle="tabs" to="">
                  Attractions &amp; Shows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" data-toggle="tabs" to="">
                  Tours &amp; Sightseeing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" data-toggle="tabs" to="">
                  Activities &amp; Experiences
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" data-toggle="tabs" to="">
                  Transport &amp; Wifi
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="card-columns card-responsive">
            <CardsHorizontal
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsHorizontal
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsHorizontal
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsHorizontal
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
            <CardsHorizontal
              CardUrl="/details"
              CardImgSrc="https://dummyimage.com/800x800/dddddd/fafafa"
            />
          </div>
        </main>
        <Footer />
      </Fragment>
    );
  }
}

export default HomePage;
