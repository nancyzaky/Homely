import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import Loading from "./Loading";
const Cart = ({ changeCount }) => {
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const deleteItem = (key) => {
    let newArr = items.filter((product) => {
      return product.id !== key;
    });
    setItems(newArr);
    changeCount(newArr);
  };
  const handleUpdate = (value, ids) => {
    fetch(`/carts/${user}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: value, product_id: ids }),
    })
      .then((resp) => resp.json())
      .then((d) => changeCount(d));
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
            setLoading(false);
          });
      });
  }, []);

  const fetchCheckOut = () => {
    let tot = 0;
    items.forEach((item) => {
      tot += parseInt(item.product.price * item.quantity);
    });
    console.log(tot, items[0].id);
    /* global Stripe */

    fetch("/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tot: tot * 100, id: items[0].product.id }),
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
            <ul className="cart-details">
              {items.map((item) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    handleUpdate={handleUpdate}
                    user={user}
                    deleteItem={deleteItem}
                    changeCount={changeCount}
                  />
                );
              })}
            </ul>

            <ul className="cart-summary">
              {/* <Pay /> */}
              <h3>Check Out Summary</h3>
              <h4>Deliver To:</h4>
              <h5>Subtotal</h5>
              <h5>Discount:</h5>
              <h6>Tax</h6>
              <h6>TOTAL</h6>
              <button onClick={fetchCheckOut}>Pay</button>
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
