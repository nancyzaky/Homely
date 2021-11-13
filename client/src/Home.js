import React, { useState } from "react";
import { motion, AnimatePresence, useCycle } from "framer-motion";
import { shopLook } from "./Data";
import { Link } from "react-router-dom";
const Home = () => {
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
            <div className="container-shop ">
              <img
                onClick={(e) => {
                  console.log(e.clientX, e.clientY);
                }}
                className="image"
                src={look.url}
                alt="pic"
              />
              {/* <div
        style={{
          position: "absolute",
          left: "380px",
          top: "230px",
          width: "10rem",
          height: "2rem",
          backgroundColor: "red",
        }}
      ></div> */}
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
      </div>
    </>
  );
};

export default Home;
