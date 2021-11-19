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
import Look from "./Look";
import Favs from "./Favs";
import SubCart from "./SubCart";
import Favorite from "./Favorite";
import Review from "./Review";
import MostLoved from "./MostLoved";

import { AnimatePresence } from "framer-motion";

function App() {
  const [user, setUser] = useState("");
  const [userId, setUserId] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [items, setItems] = useState([]);
  const [subMenu, setSubMenu] = useState(false);
  const closeSub = () => {
    setSubMenu(false);
  };
  let count = 0;
  items.forEach((item) => {
    count += item.quantity;
  });
  const changeUser = (name) => {
    setUser(name);
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
              setItems(d);
            });
        }
      });
  }, [user]);

  return (
    <>
      <Router>
        <Nav
          user={user}
          changeUser={changeUser}
          setItems={setItems}
          count={count}
          subMenu={subMenu}
          setSubMenu={setSubMenu}
          closeSub={closeSub}
        />
        <Switch>
          <Route
            render={({ location }) => (
              <AnimatePresence exitBeforeEnter>
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/">
                    <ChairThree />
                    <Home />
                    {/* <Favs /> */}
                    <Review />
                  </Route>

                  <Route exact path="/favorite">
                    <Favorite setItems={setItems} items={items} />
                  </Route>
                  <Route exact path="/signup">
                    <SignUp />
                  </Route>
                  <Route exact path="/login">
                    <LogIn changeUser={changeUser} />
                  </Route>
                  <Route exact path="/item/:cat">
                    <Sofas />
                  </Route>
                  <Route exact path="/product/:id">
                    <Sofa
                      userId={userId}
                      favorites={favorites}
                      setItems={setItems}
                      items={items}
                    />
                  </Route>
                  <Route exact path="/cart">
                    <Cart userId={userId} items={items} setItems={setItems} />
                  </Route>
                  <Route exact path="/success">
                    <Success />
                  </Route>
                  <Route exact path="/look/:id">
                    <Look />
                  </Route>
                  <Route path="/bestsellers">
                    <MostLoved />
                  </Route>
                </Switch>
              </AnimatePresence>
            )}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
