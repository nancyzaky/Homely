import React, { useEffect, useState } from "react";
import SofaItem from "./SofaItem";
import ModalBig from "./ModalBig";

import { useViewportScroll, useTransform, motion } from "framer-motion";
// const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };
const transition = { duration: 1.4, ease: [0.6, 0.01, -0.02, -0.2] };
const MostLoved = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [details, setDetails] = useState(true);
  const [loading, setLoading] = useState(false);
  const greenChair = [{ id: 1, img: "../greenChair.png" }];
  const { scrollYProgress } = useViewportScroll();
  const [bigModal, setBigModal] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const componentDidMount = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    componentDidMount();
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch(`/api/bestsellers`)
      .then((resp) => resp.json())
      .then((d) => {
        setLoading(false);
        setBestSellers(d);
      });
  }, []);

  return (
    <>
      <motion.div initial={{ opacity: 1 }} className="single">
        <motion.div
          initial={{
            y: "-100%",
          }}
          animate={{
            y: 0,
            width: "100%",
            transition: { delay: 0.3, ...transition },
            duration: 4,
          }}
        >
          <motion.div transition={transition}>
            <motion.img
              src="../greenChair.png"
              animate={{
                transition: { delay: 0.3, ...transition },
                y: -50,
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
          stifness: 200,
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est.
        </p>
        <button
          className="btn"
          style={{
            backgroundColor: "black",
            width: "14rem",
            height: "4rem",
            marginTop: "2rem",
            paddingTop: "0.5rem",
            paddingBottom: "1rem",
          }}
          onClick={() => {
            setOpacity(0);
            setBigModal(true);
          }}
        >
          See Our Best Sellers
        </button>
      </motion.section>
      <div style={{ width: "100%" }}>
        {bigModal && !loading && <ModalBig bestSellers={bestSellers} />}
      </div>
    </>
  );
};

export default MostLoved;
