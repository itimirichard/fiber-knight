import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop";
import Header from "./components/header";
import SignInAndSignUp from "./pages/signin-and-signup";
import { auth } from "firebase";

const App = () => {
  const [state, setState] = useState({ currentUser: null });

  useEffect(() => {
    const unsubscribeFromAuth = auth().onAuthStateChanged(user => {
      setState({ currentUser: user });
    });

    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
    <div>
      <Header currentUser={state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
};

export default App;
