import React, { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { shopLook } from "./Data";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import MostLoved from "./MostLoved";
import { FaChevronCircleDown } from "react-icons/fa";
// import ProgressiveImage from "react-progressive-image";

const Home = () => {
  const transition = { duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] };

  return (
    <>
      <h1 style={{ color: "grey" }}>Shop The Look</h1>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {shopLook.map((look) => {
          return (
            <div className="container-shop " key={look.id}>
              <img
                onClick={(e) => {
                  console.log(e.clientX, e.clientY);
                }}
                className="image"
                src={look.url}
                alt="pic"
              />

              <div className={`overlay overlayLeft`}>
                <div className="text">
                  <Link to={`/look/${look.id}`}>
                    <button
                      className="btn"
                      style={{
                        color: "white",
                        backgroundColor: "black",
                        height: "4rem",
                      }}
                    >
                      {" "}
                      SHOP THE LOOK
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
        <div className="line-wide"></div>

        <div style={{ height: "200px", width: "100%" }}></div>
        <motion.div
          exit={{ opacity: 0 }}
          transition={transition}
          className="main-cont"
        >
          <div>
            <div
              style={{
                fontSize: "45px",
                float: "right",
                // paddingTop: "1rem",
                paddingRight: "26rem",
                display: "flex",
                color: "white",
                cursor: "pointer",
                width: "50px",
              }}
            >
              <Link to={"/bestsellers"} style={{ color: "white" }}>
                <h3>
                  Our<br></br> Best Sellers Catalogue
                </h3>
                <FaChevronCircleDown
                  style={{ color: "white", paddingLeft: "3rem" }}
                />
              </Link>
            </div>

            <div style={{ width: "850px", height: "500px" }}>
              <div>
                <Link to={"/bestsellers"}>
                  {/* <ProgressiveImage>
                    {() => (
                      <motion.img
                        src="../greenChair.png"
                        whileHover={{ scale: 1.1 }}
                        transition={transition}
                        style={{ width: "850px", height: "500px" }}
                      />
                    )}
                  </ProgressiveImage> */}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
        <Subscribe />
      </div>
    </>
  );
};

export default Home;
