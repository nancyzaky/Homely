import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <motion.section initial={{ opacity: 0.5 }}>
        <img
          src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_1280.jpg"
          className="pic"
        />
      </motion.section>
    </div>
  );
};

export default Home;
