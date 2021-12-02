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
    <div>
      {bestSellers[index] && (
        <motion.div
          className="big-modal"
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, transition: { duration: 1 }, y: 20 }}
        >
          <div
            style={{
              top: "10%",
              justifyContent: "center",
              textAlign: "center",
              minWidth: "375px",
              width: "100%",
            }}
          >
            <Link to={`/product/${bestSellers[index].id}`}>
              <img
                src={bestSellers[index].pictures[0].url}
                style={{
                  paddingTop: "2rem",
                  minWidth: "260px",
                  height: "300px",
                  transition: "900ms",
                  transitionDelay: "1s",
                  padding: "10px",
                }}
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
        </motion.div>
      )}
    </div>
  );
};

export default ModalBig;
