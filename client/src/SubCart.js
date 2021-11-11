import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import SubCartItem from "./SubCartItem";
import Loading from "./Loading";
const SubCart = ({ modal, changeQuantity, handleCart, changeCount }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/me")
      .then((resp) => resp.json())
      .then((d) => {
        if (d.id <= 0) {
          setError(true);
          return;
        }
        fetch(`/carts/${d.id}`)
          .then((resp) => resp.json())
          .then((d) => {
            console.log(d);
            setData(d);
            changeCount(d);
            setLoading(false);
          });
      });
  }, [modal]);
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
      {loading && <Loading />}
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
          <Link to="/cart">
            <button className="btn">Check Out</button>
          </Link>
        </li>
      </ul>
      {!loading && (
        <li>
          {data.map((product) => {
            return (
              <SubCartItem
                key={product.id}
                product={product}
                changeCount={changeCount}
              />
            );
          })}
        </li>
      )}
    </nav>
  );
};

export default SubCart;
