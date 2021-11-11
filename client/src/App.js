import Nav from "./Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ChairThree from "./ChairThree";
import Success from "./Success";
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
  const [count, setCount] = useState(0);
  const changeUser = (name) => {
    setUser(name);
  };
  const changeCount = (items) => {
    console.log(items);
    let tots = 0;
    items.forEach((item) => {
      tots += item.quantity;
    });
    setCount(tots);
  };
  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((d) => {
        if (d.id > 0) {
          console.log(d);
          setUser(d.name);
          setUserId(d.id);
          setFavorites(d.favorites);
          let allItemsCount = 0;
          fetch(`/carts/${d.id}`)
            .then((resp) => resp.json())
            .then((d) => {
              if (d.length === 0) {
                setCount(0);
              } else {
                d.forEach((cart) => {
                  allItemsCount += parseInt(cart.quantity);
                });
                setCount(allItemsCount);
              }
            });
        }
      });
  }, [setUser]);
  return (
    <>
      <Router>
        <Nav user={user} changeUser={changeUser} count={count} />
        <Switch>
          <Route exact path="/">
            {/* <ChairThree />
            <BedModel /> */}
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
            <Sofa
              userId={userId}
              favorites={favorites}
              changeCount={changeCount}
            />
          </Route>
          <Route exact path="/cart">
            <Cart userId={userId} changeCount={changeCount} />
          </Route>
          <Route exact path="/success">
            <Success />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
