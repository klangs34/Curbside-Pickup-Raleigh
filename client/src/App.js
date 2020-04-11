import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Signup from './components/Signup';
import Signin from './components/SignIn';
import MyProfile from './components/MyProfile';
import NotFound from './components/NotFound';

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const setIsLoggedToTrue = () => {
    setIsLogged(true);
  }

  const setIsLoggedToFalse = () => {
    setIsLogged(false);
  }

  return (
    <div>
      <Navbar isLogged={isLogged} setIsLoggedToFalse={setIsLoggedToFalse} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/sign-up" component={() => <Signup setIsLoggedToTrue={setIsLoggedToTrue} />} />
        <Route exact path="/sign-in" component={() => <Signin setIsLoggedToTrue={setIsLoggedToTrue} />} />
        <Route exact path="/my-profile" component={() => <MyProfile isLogged={isLogged} />} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
