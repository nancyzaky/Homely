import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ChairThree from "./ChairThree";

import BedModel from "./Bed";
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Sofas from "./Sofas";
import Sofa from "./Sofa";
import Cart from "./Cart";
function App() {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const changeUser = (name) => {
    setUser(name);
  };
  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d);
        setUser(d.name);
        setUserId(d.id);
        setFavorites(d.favorites);
      });
  }, [setUser]);
  return (
    <>
      <Router>
        <Nav user={user} changeUser={changeUser} />
        <Switch>
          <Route exact path="/">
            <ChairThree />
            <BedModel />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <LogIn changeUser={changeUser} />
          </Route>
          <Route exact path="/sofa">
            <Sofas />
          </Route>
          <Route exact path="/sofa/:id">
            <Sofa userId={userId} favorites={favorites} />
          </Route>
          <Route>
            <Cart userId={userId} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
