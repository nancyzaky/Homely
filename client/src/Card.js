import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Model from "./Model";

const Card = ({ item }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(x, [100, -100], [30, -30]);
  const rotateY = useTransform(y, [100, -100], [-30, 30]);

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
            <div className="circle"></div>
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
          <h1 className="card-text">SOFA</h1>
        </div>
        <div className="lower-cont"></div>
      </motion.div>
    </motion.div>
  );
};
export default Card;
