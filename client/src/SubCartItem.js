import React, { useState, useEffect } from "react";

const SubCartItem = ({ product, changeCount }) => {
  const [quantity, setQuantity] = useState(product.quantity);
  const [user, setUser] = useState(0);
  const handleUpdate = (value, ids) => {
    fetch(`/carts/${user}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: value, product_id: ids }),
    })
      .then((resp) => resp.json())
      .then((d) => {
        console.log(d);
        changeCount(d);
      });
  };
  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((d) => setUser(d.id));
  });
  return (
    <ul
      style={{
        display: "flex",
        paddingTop: "1rem",
      }}
    >
      <li
        style={{
          display: "inline",
          height: "20px",
          paddingRight: "2rem",
        }}
      >
        {" "}
        <img
          src={product.pictures[0].url}
          alt="pic"
          style={{ height: "80px", width: "150px" }}
        />
      </li>
      <li
        style={{
          display: "inline",
          width: "15px",
          paddingRight: "5rem",
        }}
      >
        <h5>{product.product.name}</h5>
        <h5>${product.product.price}</h5>
      </li>
      <li
        style={{
          display: "inline",
          width: "15px",
          paddingRight: "5rem",
          paddingTop: "1rem",
        }}
      >
        <label
          style={{
            color: "grey",
            paddingLeft: "0.5rem",
          }}
        >
          Qty:{" "}
        </label>
        <br></br>
        <input
          type="number"
          value={quantity}
          style={{
            width: "3.5rem",
            height: "1.5rem",
            marginTop: "1rem",
            textAlign: "center",
          }}
          onChange={(e) => {
            setQuantity(e.target.value);
            handleUpdate(e.target.value, product.product.id);
          }}
        ></input>{" "}
      </li>
    </ul>
  );
};

export default SubCartItem;