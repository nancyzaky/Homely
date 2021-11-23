import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Card = ({ item, text, colorTwo, code, codeApplied, setCodeApplied }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(x, [100, -100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);
  const [revealCode, setRevealCode] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div className="card-anime" whileHover={{ scale: "1.1" }}>
      <motion.div
        className="card"
        dragDirectionLock
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
        drag
        style={{ x, y, rotateX, rotateY, z: 100 }}
      >
        <div className="upper-cont">
          <div className="card-wrapper">
            <div className="circle" style={{ backgroundImage: colorTwo }}></div>
          </div>
          <div className="furn-wrapr">
            <div className="furn">
              <motion.img
                src={item}
                style={{ x, y, rotateX, rotateY, z: 100000 }}
                dragDirectionLock
                dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
                dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                drag
                style={{ x, y, rotateX, rotateY, z: 1000 }}
              ></motion.img>
            </div>
          </div>
          <h3 className="card-text">{text}</h3>
        </div>
        <div className="lower-cont">
          <button
            className="btn"
            style={{ marginLeft: "6rem", marginTop: "3rem" }}
            onClick={() => {
              if (!codeApplied) {
                setRevealCode(true);
                setCodeApplied(true);
              } else {
                setError(true);
              }
            }}
          >
            Reveal Code
          </button>
        </div>
        {revealCode && (
          <h3 style={{ textAlign: "center" }}>Discount Code: {code}</h3>
        )}
        {error && (
          <h3 style={{ textAlign: "center" }}>Sorry, You revealed one card</h3>
        )}
      </motion.div>
    </motion.div>
  );
};
export default Card;
