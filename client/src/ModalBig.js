import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

const ModalBig = ({ bestSellers }) => {
  const [index, setIndex] = useState(0);
  const checkIndexNext = (num) => {
    if (num === bestSellers.length) {
      return 0;
    } else {
      return num;
    }
  };
  const checkIndexPrev = (num) => {
    if (num === 0) {
      return bestSellers.length - 1;
    } else {
      return num;
    }
  };
  return (
    <motion.aside
      className="big-modal"
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, transition: { duration: 1 }, y: 20 }}
    >
      <div
        style={{
          top: "20%",
          width: "1200px",
          height: "100px",
          justifyContent: "center",
          textAlign: "center",
        }}
        className="big-modal-bg"
      >
        <Link to={`/product/${bestSellers[index].id}`}>
          <img
            src={bestSellers[index].pictures[0].url}
            className="pic-small"
            style={{ paddingTop: "2rem" }}
          />
        </Link>
        <h4>{bestSellers[index].name}</h4>
        <h5>${bestSellers[index].price}</h5>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "33px",
          }}
        >
          <AiFillLeftCircle
            onClick={() => {
              console.log(index);

              setIndex(checkIndexPrev(index - 1));
            }}
          />
          <AiFillRightCircle
            onClick={() => {
              console.log(index);
              setIndex(checkIndexNext(index + 1));
            }}
          />
        </section>
      </div>
    </motion.aside>
  );
};

export default ModalBig;
