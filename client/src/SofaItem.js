import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const SofaItem = ({ sofa }) => {
  const [index, setIndex] = useState(0);

  return (
    <motion.li
      key={sofa.id}
      className="product"
      whileHover={{ scale: 1.01 }}
      transition={{
        type: "spring",
        stifness: 80,
      }}
    >
      <Link to={`/product/${sofa.id}`}>
        <img
          src={sofa.pictures[index].url}
          className="pic-small"
          onMouseEnter={() => {
            setIndex((index) => {
              return Math.floor(Math.random() * (4 - 3 + 1) + 3);
            });
          }}
          onMouseLeave={() => {
            setIndex((index) => {
              return 0;
            });
          }}
        />
        <section style={{ justifyContent: "center", textAlign: "center" }}>
          <h5 style={{ color: "gray", letterSpacing: "2px" }}>{sofa.name}</h5>
          <h5 className="item-desc-header">${sofa.price}</h5>
        </section>
      </Link>
    </motion.li>
  );
};

export default SofaItem;
