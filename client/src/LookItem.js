import React from "react";
import { Link } from "react-router-dom";
const LookItem = ({ product, active }) => {
  return (
    <>
      <Link to={`/product/${product.productId}`} key={product.id}>
        <div
          className={active ? "look-item active" : "look-item"}
          key={product.id}
          style={{ top: product.top, left: product.left }}
        >
          <img src={product.image} alt="pic" className="look-pic" />
          <h5 style={{ paddingLeft: "8rem", color: "red" }}>
            ${product.price}
          </h5>
        </div>
        <div
          className={product.point}
          style={{ top: product.arrowTop, left: product.arrowLeft }}
        ></div>
      </Link>
    </>
  );
};

export default LookItem;
