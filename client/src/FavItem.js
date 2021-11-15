import React from "react";
import { motion } from "framer-motion";
import { FcDislike } from "react-icons/fc";

const FavItem = ({ fav, changeFav }) => {
  const deleteFav = () => {
    fetch(`/me`)
      .then((resp) => resp.json())
      .then((d) => {
        if (d.id > 0) {
          fetch(`/users/${d.id}/favorites/${fav.id}`, {
            method: "DELETE",
          });
          changeFav(fav.id);
        }
      });
  };

  return (
    <>
      <li
        style={{
          width: "400px",
          height: "300px",
          // display: "grid",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          justifyContent: "center",
          textAlign: "center",
          paddingTop: "2rem",
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
          style={{ height: "70%", border: "0.1px solid rgb(243, 237, 237)" }}
        >
          <img
            src={fav.pictures[0].url}
            alt="pic"
            className="pic-smallest"
            style={{ width: "340px", height: "220px" }}
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
          <button className="btn">Add To Cart</button>
        </div>
      </li>

      {/* <div className="line"></div> */}
    </>
  );
};

export default FavItem;
