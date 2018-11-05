import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Explore from "./pages/explore";
import Destinations from "./pages/destinations";
import Booking from "./pages/booking";
import MyAccount from "./pages/my-account";
import Search from "./pages/search";
import Login from "./pages/login";
import CreateAccount from "./pages/create-account";

import ErrorPage from "./pages/error-page";

// import Footer from "./components/organisms/global/footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path="/" component={Explore} exact />
            <Route path="/explore" component={Explore} />
            <Route path="/destinations" component={Destinations} />
            <Route path="/booking" component={Booking} />
            <Route path="/my-account" component={MyAccount} />
            <Route path="/search" component={Search} />
            <Route path="/login" component={Login} />
            <Route path="/create-account" component={CreateAccount} />
            <Route component={ErrorPage} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
