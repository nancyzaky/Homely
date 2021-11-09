import React, { useState, useEffect } from "react";

const Cart = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(`/me`)
      .then((resp) => resp.json())
      .then((d) => {
        fetch(`/carts/${d.id}`)
          .then((resp) => resp.json())
          .then((d) => {
            console.log(d);

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
              <ul
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                }}
              >
                <li style={{ display: "inline-block" }}>
                  <img
                    src={item.pictures[0].url}
                    className="pic-smallest"
                    style={{ display: "inline-block" }}
                  />
                </li>

                <li style={{ display: "inline-block" }}>{item.name}</li>
                <li style={{ display: "inline-block" }}>
                  <input type="number" value={item.quantity}></input>
                </li>
              </ul>
            );
          })}
        </ul>

        <ul className="cart-summary"></ul>
      </div>
    </>
  );
};

export default Cart;
