import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Loading from "./Loading";
import { motion, AnimatePresence } from "framer-motion";

const Cart = ({ changeCount }) => {
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totPrice, setTotPrice] = useState(0);
  const deleteItem = (key) => {
    let newArr = items.filter((product) => {
      return product.id !== key;
    });
    setItems(newArr);
    changeCount(newArr);
    calcTot(newArr);
  };
  const calcTot = (arr) => {
    let tot = 0;

    arr.forEach((item) => {
      tot += parseInt(item.product.price * item.quantity);
    });
    setTotPrice(tot);
    return tot;
  };
  const handleUpdate = (value, ids) => {
    fetch(`/carts/${user}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: value, product_id: ids }),
    })
      .then((resp) => resp.json())
      .then((d) => {
        calcTot(d);
        changeCount(d);
      });
  };
  useEffect(() => {
    setLoading(true);
    fetch(`/me`)
      .then((resp) => resp.json())
      .then((d) => {
        setUser(d.id);
        fetch(`/carts/${d.id}`)
          .then((resp) => resp.json())
          .then((d) => {
            setItems(d);
            calcTot(d);
            setLoading(false);
          });
      });
  }, []);

  const fetchCheckOut = () => {
    /* global Stripe */

    fetch("/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify({ tot: totPrice * 100, id: items[0].product.id }),
      body: JSON.stringify({ items: items }),
    })
      .then(function (response) {
        console.log(response);
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
        {loading && <Loading />}
        {!loading && (
          <>
            <AnimatePresence>
              <ul className="cart-details">
                {items.map((item, index) => {
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
              <h3>Check Out Summary</h3>
              <h4>Deliver To:</h4>
              <h5>Subtotal</h5>
              <h5>Discount:</h5>
              <h6>Tax</h6>
              <h6>TOTAL ${totPrice}</h6>
              <button onClick={fetchCheckOut}>Pay</button>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
