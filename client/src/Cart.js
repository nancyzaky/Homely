import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
const Cart = () => {
  const [user, setUser] = useState("");
  const [items, setItems] = useState([]);
  const deleteItem = (key) => {
    let newArr = items.filter((product) => {
      return product.id !== key;
    });
    setItems(newArr);
  };
  const handleUpdate = (value, ids) => {
    fetch(`/carts/${user}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: value, product_id: ids }),
    })
      .then((resp) => resp.json())
      .then((d) => console.log(d));
  };
  useEffect(() => {
    fetch(`/me`)
      .then((resp) => resp.json())
      .then((d) => {
        setUser(d.id);
        fetch(`/carts/${d.id}`)
          .then((resp) => resp.json())
          .then((d) => {
            setItems(d);
          });
      });
  }, []);
  return (
    <>
      <div className="cart-main">
        <ul className="cart-details">
          {items.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                handleUpdate={handleUpdate}
                user={user}
                deleteItem={deleteItem}
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
        </ul>
      </div>
    </>
  );
};

export default Cart;
