import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CreateAccount from "./components/CreateAccount";
import Signin from "./components/SignIn";
import RestaurantProfile from "./components/RestaurantProfile";
import RestaurantView from "./components/RestaurantView";
import FooterSpacer from './components/FooterSpacer';
import { withRouter } from 'react-router-dom';

function App(props) {
  const [isLogged, setIsLogged] = useState(false);
  const setIsLoggedToTrue = () => {
    setIsLogged(true);
  };

  const setIsLoggedToFalse = () => {
    setIsLogged(false);
  };

  const [restaurant, setRestaurant] = useState(null);

  return (
    <div>
      <Navbar isLogged={isLogged} setIsLoggedToFalse={setIsLoggedToFalse} {...props} />
      <FooterSpacer />
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => (
            <Home setRestaurant={setRestaurant} {...props} />
          )}
        />
        <Route
          exact
          path="/create-account"
          component={(props) => (
            <CreateAccount setIsLoggedToTrue={setIsLoggedToTrue} {...props} />
          )}
        />
        <Route
          exact
          path="/sign-in"
          component={(props) => (
            <Signin setIsLoggedToTrue={setIsLoggedToTrue} {...props} />
          )}
        />
        <Route
          exact
          path="/restaurant-profile"
          component={() => <RestaurantProfile isLogged={isLogged} />}
        />
        <Route
          path="/restaurant-view"
          component={(props) => (
            <RestaurantView restaurant={restaurant} {...props} />
          )}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default withRouter(App);
