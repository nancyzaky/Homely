import React, { useEffect, useState } from "react";
import SofaItem from "./SofaItem";
import ModalBig from "./ModalBig";

import { useViewportScroll, useTransform, motion } from "framer-motion";
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const MostLoved = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [details, setDetails] = useState(true);
  const greenChair = [{ id: 1, img: "../greenChair.png" }];
  const { scrollYProgress } = useViewportScroll();
  const [bigModal, setBigModal] = useState(false);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    fetch(`/bestsellers`)
      .then((resp) => resp.json())
      .then((d) => setBestSellers(d));
  }, []);

  return (
    <>
      <motion.div initial={{ opacity: 1 }} className="single">
        <motion.div
          initial={{
            y: "-40%",
          }}
          animate={{
            y: 0,
            width: "100%",
            transition: { delay: 0.2, ...transition },
          }}
        >
          <motion.div transition={transition}>
            <motion.img
              src="../greenChair.png"
              animate={{
                transition: { delay: 0.6, ...transition },
                y: -60,
                opacity: opacity,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.section
        style={{
          height: "600px",
          width: "350px",
          letterSpacing: "3px",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
          paddingTop: "8rem",
          color: "grey",
          fontWeight: "bold",
        }}
        animate={{ x: 100, opacity: 1 }}
        initial={{ opacity: 0.1, x: -200 }}
        transition={{
          type: "spring",
          stifness: 180,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "black",
            width: "14rem",
            height: "3rem",
            marginTop: "2rem",
          }}
          onClick={() => {
            setOpacity(0);
            setBigModal(true);
          }}
        >
          See Our Best Sellers
        </button>
        {bigModal && <ModalBig bestSellers={bestSellers} />}
      </motion.section>
    </>
  );
};

export default MostLoved;
