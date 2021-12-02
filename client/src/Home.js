import React from "react";
import { motion } from "framer-motion";
import { shopLook } from "./Data";
import { Link } from "react-router-dom";
import Subscribe from "./Subscribe";
import { FaChevronCircleDown } from "react-icons/fa";
import Footer from "./Footer";

const Home = ({ user }) => {
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
            <div className="container-shop" key={look.id}>
              <img className="image" src={look.url} alt="pic" />

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

        <div style={{ height: "100px", width: "100%" }}></div>

        <div className="main-cont">
          <div style={{ maxWidth: "100%" }}>
            <Link to={"/bestsellers"}>
              <motion.img
                src="../greenChair.png"
                whileHover={{ scale: 1.1 }}
                transition={transition}
                style={{ width: "850px", height: "auto", maxWidth: "100%" }}
              />
            </Link>
          </div>
          <div
            style={{
              fontSize: "20px",
              float: "right",
              top: "10%",
              paddingRight: "6rem",
              cursor: "pointer",
              maxWidth: "5%",
            }}
          >
            <Link to={"/bestsellers"} style={{ color: "white" }}>
              <FaChevronCircleDown />
              <h3>
                Our<br></br> Best Sellers Catalogue
              </h3>
            </Link>
          </div>
        </div>
        <Subscribe />
        {/* <section style={{ width: "100%", height: "20px" }}></section> */}
        {/* <div className="line-wide" style={{ marginBottom: "2rem" }}></div> */}
        <Footer user={user} />
      </div>
    </>
  );
};

export default Home;
