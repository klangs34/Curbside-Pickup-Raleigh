import React from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Signup from './components/Signup';
import Signin from './components/SignIn';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/sign-up" component={Signup} />
        <Route exact path="/sign-in" component={Signin} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
