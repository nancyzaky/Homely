import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Loading from "./Loading";
import { motion, AnimatePresence } from "framer-motion";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Map from "./Map";
const Cart = ({ changeCount, items, setItems }) => {
  const [user, setUser] = useState("");
  const [cart, setCart] = useState([]);
  const [val, setVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [totPrice, setTotPrice] = useState(0);
  const [showMap, setShowMap] = useState(false);
  const [address, setAddress] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [error, setError] = useState(false);
  const [logIn, setLogIn] = useState(false);
  const checkDiscount = () => {
    if (
      val === "Final-week-20" ||
      val === "Final-week-10" ||
      val === "Final-week-5"
    ) {
      setDiscountApplied(true);
      setError(false);
      // setTotPrice(totPrice - totPrice / 5);
      let result = calcTot(cart);
      if (val === "Final-week-20") {
        setTotPrice(result - result / 5);
      } else if (val === "Final-week-10") {
        setTotPrice(result - result / 10);
      } else if (val === "Final-week-5") {
        setTotPrice(result - result / 20);
      }
    } else {
      setError(true);
      let result = calcTot(cart);
      setTotPrice(result);
    }
  };
  const adjustAddress = (ad) => {
    setAddress(ad);
    console.log(address);
  };
  const hideMap = () => {
    setShowMap(false);
  };

  const deleteItem = (key) => {
    fetch(`/api/carts/${key}`, {
      method: "DELETE",
    });
    fetch(`/api/carts/${user}`)
      .then((resp) => resp.json())
      .then((d) => {
        setItems(d);
        calcTot(d);
      });
  };
  const calcTot = (arr) => {
    let tot = 0;
    console.log(arr);
    if (arr.length < 0) {
      return 0;
    } else {
      arr.forEach((item) => {
        tot += parseInt(item.product.price * item.quantity);
      });
    }
    setTotPrice(tot);
    return tot;
  };
  const handleUpdate = (value, ids) => {
    fetch(`/api/carts/${user}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: value, product_id: ids }),
    })
      .then((resp) => resp.json())
      .then((d) => {
        setItems(d);
        calcTot(d);
      });
  };
  useEffect(() => {
    setLoading(true);
    fetch(`/api/me`)
      .then((resp) => resp.json())
      .then((d) => {
        if (d) {
          setUser(d.id);
          fetch(`/api/carts/${d.id}`)
            .then((resp) => resp.json())
            .then((d) => {
              setCart(d);
              setItems(d);
              calcTot(d);
              setLoading(false);
            });
        } else {
          setLogIn(true);
          setLoading(false);
        }
      });
  }, []);

  const fetchCheckOut = () => {
    /* global Stripe */
    const key = process.env.REACT_APP_API_STRIPE;
    var stripe = Stripe(key);
    fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: items, discountApplied: val }),
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (session) {
        console.log(session);
        return stripe.redirectToCheckout({ sessionId: session.id });
      })
      .then(function (result) {
        if (result.error) {
          alert(result.error.message);
        }
      });
  };

  return (
    <>
      <div className="cart-main">
        {logIn && <h3>Please Log In </h3>}
        {loading && <Loading />}
        {!loading && user > 0 && (
          <>
            <AnimatePresence>
              <ul className="cart-details">
                {items.length > 0 &&
                  items.map((item, index) => {
                    return (
                      <CartItem
                        key={item.id}
                        item={item}
                        handleUpdate={handleUpdate}
                        user={user}
                        deleteItem={deleteItem}
                        changeCount={changeCount}
                        index={index}
                      />
                    );
                  })}
              </ul>
            </AnimatePresence>
            <ul className="cart-summary">
              <h3
                style={{
                  textAlign: "center",
                  color: "grey",
                  paddingBottom: "2rem",
                }}
              >
                Check Out Summary
              </h3>
              <h5>
                Deliver To:{" "}
                {address ? (
                  <h4>
                    {address} <br></br>
                    <a
                      href="#"
                      onClick={() => setShowMap(true)}
                      style={{ color: "black" }}
                    >
                      Click to change address
                    </a>
                  </h4>
                ) : (
                  <>
                    <br></br>
                    <a
                      href="#"
                      onClick={() => {
                        setShowMap(true);
                      }}
                    >
                      Click to view on map
                    </a>
                  </>
                )}
              </h5>
              <section style={{ display: "flex" }}>
                <h5>Subtotal </h5>
                <h5 style={{ paddingLeft: "5rem", color: "red" }}>
                  ${totPrice}
                </h5>
              </section>
              <section style={{ display: "flex", alignItems: "center" }}>
                <h5 style={{ width: "6rem" }}> Discount Code </h5>
                <input
                  style={{
                    height: "1.5rem",
                    width: "10rem",
                    marginLeft: "1.5rem",
                  }}
                  value={val}
                  onChange={(e) => {
                    setVal(e.target.value);
                  }}
                ></input>{" "}
              </section>
              <br></br>
              <button
                onClick={checkDiscount}
                className="btn"
                style={{
                  // width: "3rem",
                  // borderRadius: "50%",
                  // height: "3rem",
                  letterSpacing: "1px",
                  fontSize: "12px",
                  // backgroundColor: "black",
                  // marginLeft: "3rem",
                  fontWeight: "bold",
                  marginTop: "1rem",
                  marginLeft: "8rem",
                }}
              >
                Apply
              </button>
              {/* </h5> */}
              {!error && discountApplied && <h6>Discount Applied</h6>}
              {error && <h6>Wrong code please try again</h6>}
              <h6
                style={{
                  color: "red",
                  paddingLeft: "9rem",
                  fontWeight: "bold",
                  fontSize: "15px",
                }}
              >
                TOTAL ${totPrice}
              </h6>
              <button
                onClick={fetchCheckOut}
                className="btn"
                style={{ marginLeft: "8rem" }}
              >
                Pay
              </button>
            </ul>
            {showMap && (
              <aside className="modal-big">
                <Map
                  adjustAddress={adjustAddress}
                  hideMap={hideMap}
                  address={address}
                />
              </aside>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
