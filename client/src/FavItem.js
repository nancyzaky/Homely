import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FcDislike } from "react-icons/fc";
import SubCart from "./SubCart";
import SmallModal from "./SmallModal";

const FavItem = ({ fav, changeFav, changeCount, user, setItems }) => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    let timer = setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [error, success]);
  const deleteFav = () => {
    console.log(fav);
    fetch(`/api/users/${user}/favorites/${fav.id}`, {
      method: "DELETE",
    });
    changeFav(fav.id);
  };
  const addToCart = () => {
    fetch(`/api/carts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_id: user,
        product_id: fav.product.id,
        quantity: 1,
      }),
    })
      .then((resp) => resp.json())
      .then((d) => {
        if (d.error) {
          console.log(d.error);
          setError(d.error);
        } else if (d.length > 0) {
          console.log(d);
          setSuccess(true);
          setItems(d);
        }
      });
  };

  return (
    <>
      <li
        style={{
          minWidth: "400px",
          height: "300px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "2rem",
          paddingBottom: "6rem",
          // zIndex: "10",
        }}
      >
        <motion.span
          style={{
            float: "right",
            fontSize: "25px",
            paddingRight: "1rem",
            paddingTop: "1rem",
          }}
          whileTap={{ scale: 3 }}
          transition={{ duration: 0.5 }}
        >
          <FcDislike onClick={deleteFav} />
        </motion.span>
        <div
          style={{
            height: "auto",
            border: "0.1px solid rgb(243, 237, 237)",
            paddingBottom: "2rem",
          }}
        >
          <img
            src={fav.pictures[0].url}
            alt="pic"
            className="pic-smallest"
            style={{ minWidth: "370px", height: "220px" }}
          />
          <h5>{fav.product.name}</h5>
          <h5>${fav.product.price}</h5>
          {/* <motion.div
            // className="heart "
            style={{ fontSize: "35px" }}
            whileTap={{ scale: 3 }}
            transition={{ duration: 0.5 }}
          >
            <IoMdHeartDislike className="heart-fill" />
          </motion.div> */}
          <button className="btn" onClick={addToCart}>
            Add To Cart
          </button>
          {success && (
            <div className="success-msg">
              {" "}
              {success && <h6>Item added to cart</h6>}
            </div>
          )}
        </div>
        {error.length > 0 && <SmallModal errorMessage={error} />}
      </li>

      {/* <div className="line"></div> */}
    </>
  );
};

export default FavItem;
