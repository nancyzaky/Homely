import React, { useState, useEffect } from "react";
import { GrFormClose } from "react-icons/gr";
const SubCart = ({ modal, changeQuantity, handleCart }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch("/me")
      .then((resp) => resp.json())
      .then((d) => {
        if (d.id <= 0) {
          setError(true);
          return;
        }
        fetch(`/carts/${d.id}`)
          .then((resp) => resp.json())
          .then((d) => setData(d));
      });
  });
  console.log(data);
  return (
    <nav className={modal ? "sub-cart active-cart" : "sub-cart"}>
      {error && <h3>Please Log in first</h3>}
      <span
        style={{
          float: "right",
          fontSize: "28px",
          paddingTop: "1rem",
          color: "red",
          cursor: "pointer",
        }}
      >
        <GrFormClose onClick={handleCart} />
      </span>
      <ul
        style={{
          textAlign: "center",
          display: "grid",
          height: "130px",
        }}
      >
        <li
          style={{
            display: "inline-block",
            height: "50px",
          }}
        >
          {/* <h2>Your Total ${product.price * quantity}</h2> */}
        </li>
        <li
          style={{
            display: "inline",
            height: "50px",
          }}
        >
          <button className="btn">Check Out</button>
        </li>
      </ul>
      <li>
        {data.map((product) => {
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
                <h5>{product.name}</h5>
                <h5>${product.price}</h5>
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
                  value={0}
                  style={{
                    width: "3.5rem",
                    height: "1.5rem",
                    marginTop: "1rem",
                    textAlign: "center",
                  }}
                  onChange={(e) => {
                    changeQuantity(e.target.value);
                  }}
                ></input>{" "}
              </li>
            </ul>
          );
        })}
      </li>
    </nav>
  );
};

export default SubCart;
