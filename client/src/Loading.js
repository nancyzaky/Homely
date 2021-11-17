import React from "react";
import { motion } from "framer-motion";

const Loading = () => {
  const ContainerVariants = {
    initial: {
      transition: {
        staggerChildren: 0.2,
      },
    },
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const DotVariants = {
    initial: {
      y: "0%",
    },
    animate: {
      y: "100%",
    },
  };
  const DotTransition = {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeInOut",
  };
  return (
    <div className="loading">
      <motion.div
        className="cont-load"
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          className="span-load"
          variants={DotVariants}
          transition={DotTransition}
        ></motion.span>
        <motion.span
          className="span-load"
          variants={DotVariants}
          transition={DotTransition}
        ></motion.span>
        <motion.span
          className="span-load"
          variants={DotVariants}
          transition={DotTransition}
        ></motion.span>
      </motion.div>
    </div>
  );
};

export default Loading;
