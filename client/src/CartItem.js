import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CartItem = ({ item, handleUpdate, user, deleteItem, index }) => {
  const [num, setNum] = useState(item.quantity);
  // const handleDelete = () => {
  //   fetch(`/carts/${item.id}`, {
  //     method: "DELETE",
  //   });
  //   deleteItem(item.id);
  // };
  return (
    <>
      <motion.ul
        style={{
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "2rem",
        }}
        variants={{
          hidden: {
            opacity: 0,
            y: -100,
          },
          visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
              delay: index * 0.09,
            },
          }),
        }}
        initial="hidden"
        animate="visible"
        custom={index}
      >
        <li
          style={{
            display: "inline-block",
            paddingLeft: "1rem",
            width: "25%",
          }}
        >
          <Link to={`/product/${item.product.id}`}>
            <img
              src={item.pictures[0].url}
              className="pic-smallest"
              style={{ display: "inline-block" }}
              alt="pic"
            />
          </Link>
        </li>

        <li style={{ display: "inline-block", width: "30%" }}>
          {item.product.name}
        </li>
        <li style={{ display: "inline-block", width: "20%" }}>
          <input
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "20%",
              border: "1px solid rgb(243, 237, 237)",
              textAlign: "center",
              justifyContent: "center",
            }}
            min="1"
            type="number"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
              handleUpdate(e.target.value, item.product.id);
            }}
          ></input>
        </li>
        <li style={{ display: "inline-block", width: "10%" }}>
          ${item.product.price * num}
        </li>

        <li style={{ width: "10%", fontSize: "22px", color: "red" }}>
          <BsTrash onClick={() => deleteItem(item.id)} />
        </li>
      </motion.ul>
      <div className="line"></div>
    </>
  );
};

export default CartItem;
